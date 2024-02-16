import { Link, useNavigate } from 'react-router-dom';

function HomePage(){

    const navigator=useNavigate();

    function navigatorHandler(){
        navigator('/products');
    }

    return (
        <>
            <h1> My Home Page</h1>
            <p>
                Go to <Link to="/products">The List Of Products</Link>
            </p>
            <p>
                <button onClick={navigatorHandler}>Navigate</button>
            </p>

        </>
    );
}

export default HomePage;