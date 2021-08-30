import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CardList from './components/CardsList/cards-list';
import { useSelector, } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from './state/index';

function App(props) {
  const curScore = useSelector((state) => state.accountReducers.currentScore);
  const maxiScore = useSelector((state) => state.accountReducers.maxScore);

  // const dispatch = useDispatch();
  // const AC = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App" >
      <Header maxiScore={maxiScore} curScore={curScore} />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;