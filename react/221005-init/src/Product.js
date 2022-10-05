import { useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams();
    //const id2 = useParams().id;
    
    return (
        <div>
            <h1>{id}번 Product.js</h1>
        </div>
    );
}

export default Product;