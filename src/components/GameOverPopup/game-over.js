import React from "react";
import gameover from '../../assets/img/gameover.gif'

const GameOverPopup = () => {
    return (
        <div style={{
            color: 'white',
            fontSize: '20px',
            background: `url(${gameover}) no-repeat center top`,
            backgroundSize: '100%',
            textAlign: 'center',
            minHeight: '100%',
            width: '100%',
            height: '70vh',
        }}>
            <h1 style={{
                padding: '50px',
                fontWeight: 'bold'
            }}>Game Over!</h1>
            <button>Start new game</button>
        </div>
    )
}

export default GameOverPopup;