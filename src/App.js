import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CardList from './components/CardsList/cards-list';
import { useSelector, } from 'react-redux';

function App(props) {
  const curScore = useSelector((state) => state.accountReducers.currentScore);
  const maxiScore = useSelector((state) => state.accountReducers.maxScore);

  return (
    <div className="App" >
      <Header maxiScore={maxiScore} curScore={curScore} />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;