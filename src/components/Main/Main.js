import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
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
        <div>
            <div className='cards-container'>
                <h2>My Fitness Pal</h2>
                <h3>Select today's exercise</h3>
                <div className="cards">
                    {
                        cards.map( card => <Card 
                            key={card.id} 
                            card={card}
                            addToList={()=>addToList(card)}
                            times={time}
                            >
                            </Card> )
                    }
                </div>
                
            </div>
            <User></User>
        </div>
    );
};

export default Main;