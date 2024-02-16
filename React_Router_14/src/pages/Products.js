import { Link } from "react-router-dom";

function ProductList(){

    const PRODUCTS=[
        {id:'p1' , title : 'Product-1'},
        {id:'p2' , title : 'Product-2'},
        {id:'p3' , title : 'Product-3'},
    ]
    return (
    <>
        <h1> My Products Page</h1>
        <ul>
            {PRODUCTS.map((prod)=>(
                <li key={prod.id}>
                    <Link to={prod.id} relative="path">{prod.title}</Link>
                </li>
            ))}
        </ul>
    </>
    );
}

export default ProductList;