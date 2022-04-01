import React from 'react';
import {useState, useEffect} from 'react';

const ProductList = (props) => {
    const [prod, setProd] = useState({});                       //this state variable stores product
    const [initRender, setInitRender] = useState(true);         //this state variable is used for controlling call of use render during initial render

    const productList = [
        {id: 1, name: 'Samsung Galaxy Note 10', category: 'Mobiles', country: 'Canada', price: 11500, currencyCode: 'CAD', productImage: require('./assets/img/product1.jpg')},
        {id: 5, name: 'SkullCandy BT Inkd Plus', category: 'Bluetooth Headset', country: 'UK', price: 800, currencyCode: 'USD', productImage: require('./assets/img/product2.jpg')},
        {id: 13, name: 'Anker Soundbuds Rise', category: 'Bluetooth Headset', country: 'Canada', price: 600, currencyCode: 'CAD', productImage: require('./assets/img/product3.jpg')},
        {id: 8, name: 'JBL Flip 3 Bluetooth speaker', category: 'Speakers', country: 'India', price: 1400, currencyCode: 'INR', productImage: require('./assets/img/product4.jpg')},
        {id: 10, name: 'Conekt Volt Power Bank', category: 'Power Bank', country: 'China', price: 650, currencyCode: 'CNY', productImage: require('./assets/img/product5.jpg',)},
        {id: 18, name: 'Apple Watch Series', category: 'Watch', country: 'China', price: 640, currencyCode: 'CNY', productImage: require('./assets/img/product6.jpg')},
        {id: 20, name: 'IBall Slide Spirit X2', category: 'Tablets', country: 'India', price: 9000, currencyCode: 'INR', productImage: require('./assets/img/product7.jpg')},
        {id: 22, name: 'Skullcandy Set 2.0 ', category: 'Headset', country: 'China', price: 900, currencyCode: 'CNY', productImage: require('./assets/img/product8.jpg')},
    ];

    useEffect(()=>{
        if(initRender)
        {   
            //here we prevent the call of props.productHandler during initial render
            setInitRender(false);
        }
        else{
            props.productHandler(prod);
        }
    }, [prod])

    const onClickProductHandler = (event) => {
        let clickOnListTag = new DOMParser().parseFromString(event.target.innerHTML, 'text/xml').firstChild.getAttribute('src');
        let prodImageLink = event.target.getAttribute('src');
        let prodName = event.target.innerHTML;

        for(let i=0; i<productList.length; i++){
            if(productList[i].productImage === prodImageLink || productList[i].name === prodName || productList[i].productImage === clickOnListTag){
                setProd(productList[i]);
            }
        }
    }

    let count = -1;

    return (
        <div>
            <ul className='products' style={{marginRight: '200px'}}>
            {
                productList.map((product)=>{
                    count++;
                    return (<li key={product.id} style={{backgroundColor: 'grey'}} onClick={onClickProductHandler} id={`product${count}`}>
                        <div style={{display: 'grid', gridTemplateColumns: '35% 65%', marginBottom: '10px'}}>
                            <img style={{border:'5px solid black', width: '100px', height: '100px'}} id={`image${count}`} src={product.productImage}/>
                            <p style={{marginTop: '37px'}}>{product.name}</p>
                        </div>
                    </li>)
                })
            }
            </ul>
        </div>
    );
}

export default ProductList;