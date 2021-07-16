import React, { Component } from 'react';
import CardListItem from '../CardsListItem';
import WithGameServiceHOC from '../hoc';
import { connect } from 'react-redux';
import { cardsRequested, cardsLoaded, currentScoreChangeAC } from '../../reducers';
import Spinner from '../spinner';
import style from './style.scss';

class CardList extends Component {
    componentDidMount() {
        this.props.cardsRequested()
        const { GameService } = this.props;
        GameService.getCardsItems()
            .then(res => this.props.cardsLoaded(res))
            .catch(err => console.log(err))
    }

    render() {
        const { cardItems, loading } = this.props
        console.log(this.props);
        if (loading) {
            console.log('loading');
            return <Spinner />
        }

        let items;

        if (cardItems) {
            items = cardItems.sort(() => Math.random() - 0.5).map(el => {
                return (
                    <CardListItem
                        key={el.id} img={el.img} text={el.text}
                        onClick={() => console.log('Click')}
                        changeCurrentScoreFunc={() => this.props.currentScoreChangeAC(el.id)} />
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

}

const mapStateToProps = (state) => {
    return {
        cardItems: state.cards,
        loading: state.loading,
        currentScore: state.currentScore,
        uniqIdLine: state.uniqIdLine,
    }
}

const mapDispatchToProps = {
    cardsRequested,
    cardsLoaded,
    currentScoreChangeAC,
}

export default WithGameServiceHOC()(connect(mapStateToProps, mapDispatchToProps)(CardList));