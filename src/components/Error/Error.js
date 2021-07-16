import React from 'react';
import error from '../../assets/img/error.jpg'

const Error = () => {
    return (
        <div style={{
            color: 'white',
            fontSize: '20px',
            background: `url(${error}) no-repeat center`,
            textAlign: 'center',
            fontSize: '4rem',
            minHeight: '100%',
            width: '100%',
            height: 'auto',
            position: 'fixed',
            top: '0',
            left: '0',
        }}>
            <div style={{
                padding: '50px',
                fontWeight: 'bold'
            }}>Error!</div>
            <span style={{padding: '50px'}}>Something go wrong. It's a big-big mistake</span>
        </div>
    )
}

export default Error;