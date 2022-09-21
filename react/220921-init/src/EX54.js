import React, {Component} from 'react';
import PropTypes from 'prop-types';

function ClassComponent (props){
    return(
        <div>
            <h1 style={{color: 'red'}}>{props.food}</h1>
            <h2>내가 좋아하는 음식입니다~~~~~~~~!!!!!</h2>
        </div>
        
    )
}

ClassComponent.defaultProps = {
    food: 'kimchi'
}

export default ClassComponent;