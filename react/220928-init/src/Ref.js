import React, {Component} from "react";
class Ref extends Component{
    
    event1(){
        let input = document.getElementById('input1');
        console.log(input.value);
    }
    event2 = () => {
        console.log( this.input2.value);
    }
    input3 = React.createRef();
    event3 = () => {
        console.log(this.input3.current.value);
    }


    render(){
        return(
            <div>
                <div>
                    <input type='text' id="input1"/>
                    <button onClick={this.event1}>버튼1</button>
                </div>
                <div>
                    <input type='text' ref={(ref) => {this.input2 = ref}}/>
                    <button onClick={this.event2}>버튼2</button>
                </div>
                <div>
                    <input type='text' ref={this.input3} />
                    <button onClick={this.event3}>버튼3</button>
                </div>
            </div>
            
            

        )
    }
        
    
}
export default Ref;