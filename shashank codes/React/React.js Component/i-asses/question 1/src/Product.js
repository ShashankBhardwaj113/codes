import React from 'react';

const Product = (props) => {
    const {product} = props;

    return <div>
        <img src={product.productImage} style={{width: '200px', height:'200px'}} alt=''/>
        <h3 className='prod-name'>{product.name}</h3>
        <div className='prod-category'>Category : {product.category}</div>
        <div className=''prod-price>Price : ${product.price}</div>
        <button>Add To Cart</button>
    </div>
}

export default Product;