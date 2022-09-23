import React, {useState} from "react";

function StateFunction(){
    const [msg, setMsg] = useState("");
    const [list, setList] = useState([]);
    // this.state {
        //msg: ""
    // }

    function changeMsg(){
        setMsg("메세지");
        // setState({msg: "메세지"});
        setList([1,2,3]);
    }
    return (
        <div>
            <p>{msg} {list}</p>
            StateFunction
            <button onClick={changeMsg}>클릭</button>
        </div>
    );
}
export default StateFunction;