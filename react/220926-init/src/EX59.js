import React, {useState} from "react";
import './EX59.css';

function EX59(){
    const [list, setList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [inputName, setInputName] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [inputSearch, setInputSearch] = useState('');
    const [nextId, setNextId] = useState(1);

    const titleList = list.map(list => <tr key={list.id}><td>{list.id}</td><td>{list.title}</td><td>{list.name}</td></tr>);
    const searchOutputList = searchList.map(searchList => <tr key={searchList.id}><td>{searchList.id}</td><td>{searchList.title}</td><td>{searchList.name}</td></tr>);
    const changeName = (e) => setInputName(e.target.value);
    const changeTitle = (e) => setInputTitle(e.target.value);
    const changeSearch = (e) => setInputSearch(e.target.value);
    const apply = () => {
        const nextList = list.concat({
            id: nextId,
            name: inputName,
            title: inputTitle
        });
        setNextId(nextId + 1);
        setList(nextList);
        setInputName('');
        setInputTitle('');
    }
    const search = () => {
        document.querySelector('.textSearch').innerText = '검색 결과';
        let table = document.getElementById('searchTable');
        table.classList.remove('noneSearch');
        let flag = document.getElementById('name-list').value === '작성자' ? true : false;
        console.log(inputSearch);
        const nextList = list.filter((list) => {
            return (flag ? list.name : list.title).includes(inputSearch);
        });
        setSearchList(nextList);
    }
    const searchAll = () => setSearchList(list);
    return(
        <div>
            <h1>실습59, 60</h1>
            <div className="inputWrap">
                <span>작성자 : <input type='text' placeholder='작성자' onChange={changeName} value={inputName}></input></span>
                <span>제목 : <input type='text' onChange={changeTitle} value={inputTitle}></input></span>
                <button onClick={apply}>작성</button>
            </div>
            <div className="inputSearch">
                <select name="name-list" id="name-list">
                    <option value="작성자">작성자</option>
                    <option value="제목">제목</option>
                </select>
                <input type='text' onChange={changeSearch} value={inputSearch}></input> 
                <button onClick={search}>검색</button>
                <button onClick={searchAll}>전체</button>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th style={{width: '200px'}}>번호</th>
                            <th style={{width: '200px'}}>제목</th>
                            <th style={{width: '250px'}}>작성자</th>
                        </tr>
                        {titleList}
                    </tbody>
                </table>

                <div className="textSearch">
                    검색 결과가 없습니다.
                </div>
                <table className="search-list noneSearch" id="searchTable">
                    <tbody>
                        <tr>
                            <th style={{width: '200px'}}>번호</th>
                            <th style={{width: '200px'}}>제목</th>
                            <th style={{width: '250px'}}>작성자</th>
                        </tr>
                        {searchOutputList}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default EX59;