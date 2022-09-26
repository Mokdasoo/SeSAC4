import React, {useState} from "react";

function EX58 () {

    const [list, setList] = useState([
        { id: 1, name: '코디', email: 'codi@gmail.com'},
        { id: 2, name: '윤소희', email: 'yoonsohee@gmail.com'}
    ]);
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [nextId, setNextId] = useState(3);

    const emailList = list.map(list => <h3 key={list.id} onDoubleClick={()=>
        removeList(list.id)}>{list.name}: {list.email}</h3>);

    const changeName = (e) => setInputName(e.target.value);
    const changeEmail = (e) => setInputEmail(e.target.value);
    const emailSubmit = () => {
        const nextList = list.concat({
            id: nextId,
            name: inputName,
            email: inputEmail
        });
        setNextId(nextId + 1);
        setList(nextList);
        setInputName('');
        setInputEmail('');
    }
    const pressEnter = (e) => {
        if(e.keyCode === 13) emailSubmit();
    }
    const removeList = id => { 
        const nextLists = list.filter(list => list.id !== id);
        setList(nextLists);
    }

    return(
        <div>
            <h1>실습 58</h1>
            <div>
                <input type='text' placeholder='이름' onChange={changeName} value={inputName}></input>
                <input type='email' placeholder='이메일' onChange={changeEmail} value={inputEmail} onKeyUp={pressEnter}></input>
                <button onClick={emailSubmit}>등록</button>
                {emailList}
            </div>
        </div>
    );
}
export default EX58;