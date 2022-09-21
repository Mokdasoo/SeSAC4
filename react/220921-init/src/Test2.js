import React, {Component} from 'react';
import image from './6.jpg';
class Test2Component extends Component{
    render(){
        let style = {
            color: 'orange',
            fontSize: '40px',
            marginTop: '20'
        }
        return(
            <div style={style}>
                <h2>안녕하세요</h2>
                <img width= '300px' src={image}></img>
            </div>
        );
    }
}

export default Test2Component;