import React from 'react';
import Card from '../Card/Card';

const CardGroups = () => {
    const products = [
        {id : 1,name : 'iphone',price : 150000},
        {id : 2,name : 'xphone',price : 150000},
        {id : 3,name : 'yphone',price : 150000}
    ]
    return (
        <div>
            <div className="card-group">
            {
                products.map(product => <Card key={product.id} product={product}></Card>)
            }
            </div>
        </div>
    );
};

export default CardGroups;