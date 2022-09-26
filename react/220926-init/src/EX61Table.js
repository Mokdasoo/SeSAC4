import React, {Component} from "react";
import './EX59.css';

class EX61Table extends Component{

    render(){
        const {searchList, titleList} = this.props;
        return(
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
                            {searchList.map(searchList => <tr key={searchList.id}><td>{searchList.id}</td><td>{searchList.title}</td><td>{searchList.name}</td></tr>)}
                        </tbody>
                    </table>
                </div>
        );
    }

}
export default EX61Table;