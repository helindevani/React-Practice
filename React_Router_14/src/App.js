import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductList from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetail";


// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>} />
//     <Route path="/products" element={<ProductList/>} />
//   </Route>
// )

//const router=createBrowserRouter(routerDefinitions);

const router =createBrowserRouter([
  {
    path : '/',
    element : <RootLayout />,
    errorElement : <ErrorPage/>,
    children : [
      {index:true, element : <HomePage/>},
      {path : 'products' , element : <ProductList/>},
      {path : 'products/:productId' , element : <ProductDetails/>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
