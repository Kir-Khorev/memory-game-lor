import React from 'react';
import './style.css';
import WithGameServiceHOC from '../hoc';

const CardListItem = (props) => {
    return (
        <div className="card">
            <div className="image">
                <img src={props.img} alt={props.text} width="100%" />
            </div>
            <div className="text">
                <button onClick={() => props.changeCurrentScoreFunc()} className="fab">&#43;</button>
                <h3>{props.text}</h3>
            </div>
        </div>
    )
}

export default WithGameServiceHOC()(CardListItem);
