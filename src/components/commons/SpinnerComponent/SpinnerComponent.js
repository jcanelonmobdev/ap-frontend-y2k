import React from 'react';
import './styles.css';

const SpinnerComponent = () => {
    return (
        <div data-testid="spinner" className="sura-loader">
            <div></div>
            <div></div>
        </div>
    )
}

export default SpinnerComponent;