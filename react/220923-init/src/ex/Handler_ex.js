import React, {Component} from "react";

class HandlerEx extends Component{
    state = {
        str : "Hello World!",
        str2 : ""
    }
    clickBT = () => {
        
        this.setState({
            str : this.state.str === "Hello World!" ? "Goodbye World!" : "Hello World!"
        })
    }
    clickBT2 = (e) => {
        this.setState({
            str2 : e.value
        });
        e.value = "";
    }

    render(){
        return(
            <div>
                <h1>{this.state.str}</h1>
                <button onClick={this.clickBT}>클릭</button>
                <h1>{this.state.str2}</h1>
                <input type='text' name="input" id="input" />
                <button onClick={()=>{
                    this.clickBT2(document.getElementById('input'))
                    }}>클릭</button>
            </div>
        );
    }
}

export default HandlerEx;