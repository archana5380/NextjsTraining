import React from "react";
import Image from 'next/image';
import Styles from '../styles/Products.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

export const getStaticProps =async ( ) => {
    //..api call
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return {
        props: {productData:data}
    }
  }
const Products=(props) =>{
    const {productData} = props;
    return ( 
        <>
        <div className='container'>
        <div className='row'>
        <center><h2>Products</h2></center>
        {productData.map(item => (
            <div className='col-md-3'>           
            <Card className={Styles.customecards}>
                       <Card.Img variant="top" src={item.image}  className={Styles.img_responsive} />
                       <Card.Body>
                         <Card.Title className={Styles.elipsistitle}>{item.title}</Card.Title>
                         <Card.Text className={Styles.elipsis}>
                         {item.description}
                         </Card.Text>
                         <h6>Rs. {item.price}</h6>
                         <Button variant="primary">Read More</Button>
                       </Card.Body>
            </Card>
            </div>
        ))}
        </div>
        </div>
        </>
     )

}
export default Products