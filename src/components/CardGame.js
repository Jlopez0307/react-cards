import React , { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Card from './Card';

const CardGame = () => {

    const [card, setCard] = useState(null);
    const deckId = useRef()

    useEffect(() => {
        const createDeck = async () => {
            const newDeck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
            deckId.current = newDeck.data;
            console.log(deckId)
        }
        createDeck();
    }, [])

    const drawCard = async () => {
        const newCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId.current.deck_id}/draw/?count=1`);
        setCard(newCard.data)
        console.log(newCard.data);
    }

    const shuffleDeck = async () => {
        const shuffle = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId.current.deck_id}/shuffle/`)
        console.log(shuffle.data)
    }
    
    return (
        <div className="CardGame">
            <h1>Card Game!</h1>
            <button onClick={drawCard}>Draw Card!</button>
            <button onClick={shuffleDeck}>Shuffle!</button>
            {card ? <Card image={card.cards[0].image}/> : <div></div>}
            
            
        </div>
    )
};

export default CardGame;