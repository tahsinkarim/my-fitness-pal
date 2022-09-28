import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Main.css';

const Main = () => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    let time = 0;
    const addToList = (card) =>{
        time = time + parseInt(card.time)
        console.log(time)
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
                            >
                            </Card> )
                    }
                </div>
                
            </div>
            <div></div>
        </div>
    );
};

export default Main;