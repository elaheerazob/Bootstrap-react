import React from "react";
import { CardGroup } from "react-bootstrap";
import CardReact from "../CardReact/CardReact";

const CardGropusReact = () => {
    const products = [
        {id : 1,name : 'iphone',price : 150000},
        {id : 2,name : 'xphone',price : 150000},
        {id : 3,name : 'yphone',price : 150000}
    ]
  return (
   <div>
        <CardGroup>
             {
                products.map(product => <CardReact key={product.id} product={product}></CardReact>)
            }
        </CardGroup>
   </div>
  );
};

export default CardGropusReact;
