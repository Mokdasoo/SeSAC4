import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Main from './Main';
import Product from './Product';


const ReactRouter = () => {

    return (
        <div>
            <BrowserRouter>
                <p><Link to='/'>메인페이지</Link></p>
                <Routes>
                    <Route path='/' element={ <Main/> }></Route>
                    <Route path='/product/:id' element={ <Product/> }></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default ReactRouter;