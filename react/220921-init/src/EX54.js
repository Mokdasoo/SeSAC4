import React, {Component} from 'react';
import PropTypes from 'prop-types';

function EX1Component (props){
    return(
        <div>
            <h1 style={{color: 'red'}}>{props.food}</h1>
            <h2>내가 좋아하는 음식입니다~~~~~~~~!!!!!</h2>
        </div>
        
    )
}

EX1Component.defaultProps = {
    food: 'kimchi'
}

export default EX1Component;