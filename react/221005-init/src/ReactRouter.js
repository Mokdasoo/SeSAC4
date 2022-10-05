import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Main from './Main';
import Product from './Product';
import Student from './Student';
import Sesac from './Sesac';
import Codingon from './Codingon';
import SearchParams from './SearchParams';
const ReactRouter = () => {

    return (
        <div>
            <BrowserRouter>
                <p><Link to='/'>메인페이지</Link></p>
                <Routes>
                    <Route path='/' element={ <Main/> }></Route>
                    <Route path='/product/:id' element={ <Product/> }></Route>
                    <Route path='/student' element={ <Student/> }></Route>
                    <Route path='/student/sesac' element={ <Sesac/> }></Route>
                    <Route path='/student/codingon' element={ <Codingon/> }></Route>
                    <Route path='/student/new' element={ <SearchParams/> }></Route>
                </Routes>
                
            </BrowserRouter>
        </div>
    );
}

export default ReactRouter;