import React, {Component} from 'react';

class TestComponent extends Component{
    render(){
        let name = '이동근';
        let my_style = {
            backgroundColor : 'blue',
            color : 'orange',
            fontSize : '40px',
            padding : '12'

        }
        return(
            <div style={my_style}>
                {name}
            </div>
        );
    }
}

export default TestComponent;