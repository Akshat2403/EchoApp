import React from 'react';
import './Loader.css';
import Loader from 'react-js-loader';
const Spinner = () => {
    return (
        <>
            <div className={'item'}>
                <Loader type="spinner-circle" bgColor={'white'} size={100} />
            </div>
        </>
    );
};
export default Spinner;
