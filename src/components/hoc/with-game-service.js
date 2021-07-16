import React from 'react';
import GameServiceContext from '../game-service-context'

const WithGameServiceHOC = () => (Wrapped) => {
    return (props) => {
        return (
            <GameServiceContext.Consumer >
                {
                    (GameService) => {
                        return <Wrapped {...props} GameService={GameService} />
                    }
                }
            </GameServiceContext.Consumer>
        )
    }
}

export default WithGameServiceHOC;