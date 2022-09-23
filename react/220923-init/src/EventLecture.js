import React, {Component} from "react";

function EventLecture() {

    function clickEvent(e){
        console.log(e);
    }
    function aClick(e){
        e.preventDefault(); // window의 기본 동작 방지
        console.log("aClick");
        console.log(e);
    }

    return (
        <div>
            <a href="#" onClick={aClick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    );
}

export default EventLecture;