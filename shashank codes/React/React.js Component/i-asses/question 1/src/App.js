import React, {useEffect, useState} from 'react';
import Product from './Product';
import ProductList from './ProductList';

const App = () => {
    const [flag, setFlag] = useState(false);                     //this state variable will be used to call the Product component
    const [displayProduct, setProduct] = useState();                    //this state variable stores object of clicked variable
    const [initRender, setInitRender] = useState(true);         //this state variable is used for controlling call of use render during initial render

    useEffect(()=>{
        if(initRender){
            setInitRender(false);
        }else{
            setFlag(true);
        }
    }, [displayProduct, flag])

    const productHandler = (prod) => {
        setProduct(prod);
    }
    return (
        <div>
            <h1 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'5px'}}>Product World</h1>
            <td><ProductList productHandler={productHandler}/></td>
            {flag && <td><Product product={displayProduct} /></td>}
        </div>
    );
}

export default App;
