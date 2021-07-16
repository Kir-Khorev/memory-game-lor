import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CardList from './components/CardsList/cards-list';

function App(props) {
  return (
    <div className="App" >
      <Header currentScore={props.currentScore} bestScore={props.bestScore} />
      <CardList  />
      <Footer />
    </div>
  );
}

export default App;