import React, { useState } from "react";

function Exam56_2 (){

    const [num, setnum] = useState(0);

    function increse(){
        setnum(num+1);
    }
    function decrese(){
        setnum(num-2);
    }
    return(
        <div>
            {num}
            <button onClick={increse}>+1</button>
            <button onClick={decrese}>-2</button>
        </div>
    );
    
}
export default Exam56_2;