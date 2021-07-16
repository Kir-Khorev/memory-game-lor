import React from 'react';
import spinner from '../../assets/img/loading.gif'

const Spinner = () => {
    return <img src={spinner} className="spinner" alt='Load...' style={{ width: '100%', margin:'auto' }} />
}

export default Spinner;