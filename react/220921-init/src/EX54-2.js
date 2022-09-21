import React, {Component} from 'react';
import './App.css';

function ClassComponent (props){
    return(
        <div style={{textAlign: 'center', width : '500px', height:'600px', backgroundColor: 'rgb(249, 249, 219)'}}>
            <div>
                <h1 style={{color: 'orange'}}>이번주 베스트셀러</h1>
                <img src='https://images.velog.io/images/munyohan/post/0a37b13b-23c4-4c1f-9fda-c42ad95df46d/image.png' width='200px'></img>
                
            </div>
            <div  className='bookinfo'>
                <h2>{props.title}</h2>
                <h3>저자: {props.author}</h3>
                <h3>판매가: {props.price}</h3>
                <h3>구분: {props.type}</h3>
            </div>
            
        
        </div>
        
    )
}

ClassComponent.defaultProps = {
}

export default ClassComponent;