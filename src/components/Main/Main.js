import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Questions from '../Questions/Questions';
import User from '../User/User';
import './Main.css';

const Main = () => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    const [time, setTime] = useState(0)
    const addToList = (card) =>{
        const newTime = time + parseInt(card.time)
        console.log(time)
        setTime(newTime)
    }
    return (
        <div className='main'>
            <div className='cards-container'>
                <div className="main-title">
                    <h2 className='cyan'><span className='icon'><FontAwesomeIcon icon={faDumbbell} /></span> My Fitness Pal</h2>
                    <h3>Select today's exercise</h3>
                </div>
                <div className="cards">
                    {
                        cards.map( card => <Card 
                            key={card.id} 
                            card={card}
                            addToList={()=>addToList(card)}
                            ></Card> )
                    }
                </div> 
                <Questions></Questions>
            </div>
            <User time={time}></User>
        </div>
    );
};

export default Main;