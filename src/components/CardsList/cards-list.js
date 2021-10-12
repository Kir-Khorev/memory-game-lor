import React, { useEffect, } from 'react';
import CardListItem from '../CardsListItem';
import WithGameServiceHOC from '../hoc';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import Spinner from '../spinner';
import './style.scss';
import GameOverPopup from '../GameOverPopup/';

const CardList = (props) => {
    console.log(props);
    const state = useSelector((state) => state.accountReducers);

    const arr = state.uniqIdLine;
    // const lastElem = arr.length ? arr[arr.length - 1] : {};
    console.log(arr);
    // console.log(lastElem);

    const dispatch = useDispatch();
    const { cardsRequested, cardsLoaded, currentScoreChangeAC } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        cardsRequested();
        const { GameService } = props;
        GameService.getCardsItems()
            .then(res => cardsLoaded(res))
            .catch(err => console.error(err))
    }, [state.state])

    const { loading , endGame } = state;

    const cardItems = state.cards;

    if (loading) {
        return <Spinner />
    }

    if (endGame) {

        return <GameOverPopup arr={arr} state={state}/>
    }

    let items;

    if (cardItems) {
        items = cardItems.sort(() => Math.random() - 0.5).map(el => {
            return (
                <CardListItem
                    key={el.id} img={el.img} text={el.text}
                    changeCurrentScoreFunc={() => currentScoreChangeAC(el.id)} />
            )
        })
    }

    return (
        <section>
            <div className='cardList'>
                <div>{items}</div>
            </div >
        </section >
    )
}

export default WithGameServiceHOC()(CardList);