import React from "react";
import classes from './ProductDetails.module.css'
import ProductData from './productData';

const ProductDetails = function () {
    return (
        <div className={classes.productData}>
              <h2 className={classes.productTitle}>{ProductData.title}</h2>
              <p className={classes.productDescription}>{ProductData.description}</p>
              <h3 className={classes.sectionheading}>Select Color</h3>
              <img className={[classes.productImage,classes.selectedProductImage].join(' ')} src='https://imgur.com/PTgQlim.png' alt='Red Strap'></img>
              <img className={classes.productImage} src='https://imgur.com/PTgQlim.png' alt='Red Strap'></img>
              <img className={classes.productImage} src='https://imgur.com/PTgQlim.png' alt='Red Strap'></img>
              <img className={classes.productImage} src='https://imgur.com/PTgQlim.png' alt='Red Strap'></img>
              <h3 className={classes.sectionheading}>Features</h3>
              <div>
                <button className={[classes.featuresItem,classes.selectedFeatureItem].join(' ')}>Time</button>
                <button className={classes.featuresItem}>Heart Rate</button> 
              </div>
              <button className={classes.primaryButton}>Buy Now</button>
           </div>
    )
}
export default ProductDetails;