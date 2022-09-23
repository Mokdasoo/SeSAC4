import React, {Component} from 'react';

class StateClassComponent extends Component{
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         name: "SeSAC",
    //         list: ['s', 'e', 's', 'a', 'c']
    //     }
    // }

    //이렇게 써도 가능
    state = {
                name: "SeSAC",
                count: 0,
                list: ['s', 'e', 's', 'a', 'c']
            }


    render(){
        return(
            <div>
                <div>
                {this.state.name} StateClass {this.state.count}
                </div>
                <button onClick={()=>{ 
                    // this.setState({name: "청년취업사관학교", count: this.state.count + 1});
                    // this.setState({name: "영등포 캠퍼스", count: this.state.count + 1})
                    this.setState(prevState => {
                        return {count: prevState.count + 1 }
                    });
                    this.setState(prevState => {
                        return {count: prevState.count + 1 }
                    });

                
                }}>클릭1</button>
                <button onClick={()=>{ this.setState({list: ['h','o','l','a']})}}>클릭</button>
                <ul>
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li>
                    })}
                </ul>
            </div>
            
        );
    }

}
export default StateClassComponent;

