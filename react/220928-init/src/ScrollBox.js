import React, {Component} from "react";

class ScrollBox extends Component{

    scrollDown = () => {
        this.div.scrollTop = this.div.scrollHeight;
    }
    


    render(){
        let div1_Style = {
            overflowY: 'scroll', 
            width: '400px', 
            height: '400px'
        }
        let div2_Style = {
            width: '100%', 
            height: '1000px', 
            backgroundColor: 'pink'
        }


        return(
            <div>
                <h1>실습 58. ref 실습</h1>
                <div ref={(ref) => {this.div = ref}} style={div1_Style}>
                    <div className="div2" style={div2_Style}></div>
                </div>
                <button onClick={this.scrollDown}>버튼</button>
            </div>
        );
    }
}
export default ScrollBox;