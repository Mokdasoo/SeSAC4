import React, {Component} from "react";
import './EX59.css';
import EX61Table from "./EX61Table";

class EX61 extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],
            searchList: [],
            inputName: '',
            inputTitle: '',
            inputSearch: '',
            nextId: 1
        }
    }

    
    render(){
        const {list, searchList, inputName, inputTitle, inputSearch, nextId} = this.state;

        const titleList = list.map(list => <tr key={list.id}><td>{list.id}</td><td>{list.title}</td><td>{list.name}</td></tr>);
        const changeName = (e) => this.setState({inputName: e.target.value});
        const changeTitle = (e) => this.setState({inputTitle: e.target.value});
        const changeSearch = (e) => this.setState({inputSearch: e.target.value});
        const apply = () => {
            const nextList = list.concat({
                id: nextId,
                name: inputName,
                title: inputTitle
            });
            console.log(this);
            this.setState({
                nextId : nextId + 1,
                list: nextList,
                inputName: '',
                inputTitle: ''
            });
        }
        const search = () => {
            console.log(this);
            document.querySelector('.textSearch').innerText = '검색 결과';
            let table = document.getElementById('searchTable');
            table.classList.remove('noneSearch');
            let flag = document.getElementById('name-list').value === '작성자' ? true : false;
            console.log(inputSearch);
            const nextList = list.filter((list) => {
                return (flag ? list.name : list.title).includes(inputSearch);
            });
            this.setState({
                searchList: nextList
            });

        }
        const searchAll = () => {
            document.querySelector('.textSearch').innerText = '검색 결과';
            let table = document.getElementById('searchTable');
            table.classList.remove('noneSearch');
            this.setState({
            searchList: list
            });
            console.log(searchList);
        }   
        return(
            <div>
                <h1>실습61</h1>
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
                <EX61Table searchList= {searchList} titleList={titleList}/>
            </div>
        );
    }
    
}
export default EX61;