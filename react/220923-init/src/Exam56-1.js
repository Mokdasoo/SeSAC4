import React, {Component} from "react";

class Exam56_1 extends Component{

    state = {
        cnt : 0
    }

    render(){
        return(
            <div>
                {this.state.cnt}
                <button onClick={()=>{
                    this.setState({cnt: this.state.cnt + 2});
                    }}>+2</button>
                <button onClick={()=>{
                    this.setState({cnt: this.state.cnt - 1});
                    }}>-1</button>
            </div>
        );
    }
}
export default Exam56_1;