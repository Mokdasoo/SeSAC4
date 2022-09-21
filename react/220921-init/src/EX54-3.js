import React, {Component} from 'react';
import PropTypes from 'prop-types'

class EX3Component extends Component{
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <button onClick={this.props.valid}>콘솔 메세지</button>
            </div>
        );
    }
    
    static propTypes = {
        text: PropTypes.string
    }
    
}

EX3Component.defaultProps = {
    text: '이건 기본 text props입니다.'
}

export default EX3Component;