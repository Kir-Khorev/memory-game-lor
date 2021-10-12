import React , {useEffect} from "react";
import './style.scss';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import WithGameServiceHOC from '../hoc';
import { useDispatch, useSelector } from 'react-redux';


const GameOverPopup = (props) => {
    const state = useSelector((state) => state.accountReducers);
    console.log(state);
    const dispatch = useDispatch();
    const { cardsRequested, cardsLoaded } = bindActionCreators(actionCreators, dispatch);
    console.log(state.lastElem);
    
    useEffect(() => {
        console.log('Render');
    }, [state.state])

    const startNewGame = () => {
        cardsRequested();
        const { GameService } = props;
        GameService.getCardsItems()
            .then(res => cardsLoaded(res))
            .catch(err => console.error(err))
    }
    
    const {text, img} = state.lastElem;

    return (
        <div className='wrapper'>
            <h1>Game Over!</h1>
            <div className='charItem'>
                <img src={img} alt={text}/> 
                <span>{text} was already. Remember this character and</span>
            </div>
            <button onClick={startNewGame}>Try again!</button>
        </div>
    )
}

export default WithGameServiceHOC()(GameOverPopup);