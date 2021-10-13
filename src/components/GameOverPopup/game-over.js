import React from "react";
import "./style.scss";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import WithGameServiceHOC from "../hoc";
import { useDispatch, useSelector } from "react-redux";

const GameOverPopup = (props) => {
    const state = useSelector((state) => state.accountReducers);
    const dispatch = useDispatch();
    const { cardsRequested, cardsLoaded } = bindActionCreators(
        actionCreators,
        dispatch
    );

    const startNewGame = () => {
        cardsRequested();
        const { GameService } = props;
        GameService.getCardsItems()
            .then((res) => cardsLoaded(res))
            .catch((err) => console.error(err));
    };

    const { text, img } = state.lastElem;

    return (
        <div className="wrapper">
            <h1>Game Over!</h1>
            <div className="charItem">
                <div className="card gameoverCard">
                    <div className="image gameoverImg">
                        <img src={img} alt={text} width="100%" />
                    </div>
                    <div className="text">
                        <h3>{text} was already. Remember this character and</h3>
                        <button className="rainbow rainbow-2" onClick={startNewGame}>Try again!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithGameServiceHOC()(GameOverPopup);
