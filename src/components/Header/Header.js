import React from 'react';
import bg from './img/header-bg.jpg';
import logo from '../../assets/img/logo.png'
import { connect } from 'react-redux';

const Header = ({ currentScore, maxScore }) => {

    return (
        <header className='app-header' style={{
            color: 'black',
            fontSize: '20px',
            background: `url(${bg}) no-repeat center`,
            width: 'auto',
            height: '200px'
        }}>
            <img src={logo} className="App-logo" alt="logo" style={{ width: '50px', height: '50px' }} />
            <div>Memory Game</div>
            <div className='app-header__score'>Current Score: {currentScore}</div>
            <div className='app-header__best-score'>Max score: {maxScore}</div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        currentScore: state.currentScore,
        maxScore: state.maxScore
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);