import React, { useState } from "react";
 
const Event = () => {
    const [ form, setForm] = useState({
        username: "",
        message: ""
    });
    const [username, message] = form;
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    }
    const onClick = () => {
        alert(username + ": " + message);
        setForm({
            username: "",
            message: ""
        })
    };
    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onClick();
        }
    };
 
    return (
        <div>
            <h1>리액트의 이벤트!!</h1>
 
            <input
                type="text"
                name="username"
                placeholder="사용자 이름"
                value={username}
                onChange={onChange}
            />
 
            <input
                type="text"
                name="message"
                placeholder="이곳에 입력해보세요."
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
 
            <button onClick={onClick}>클릭</button>
        </div>
    );
}