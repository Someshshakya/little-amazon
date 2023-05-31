import React from "react";
import classes from './ProductDetails.module.css'
import ProductData from './ProductData';

const ProductDetails = function () {
    return (
        <div className={classes.ProductData}>
              <h2 className={classes.ProductTitle}>{ProductData.title}</h2>
              <p className={classes.ProductDescription}>{ProductData.description}</p>
              <h3 className={classes.Sectionheading}>Select Color</h3>
              <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src='https://imgur.com/PTgQlim.png' alt='Red Strap'></img>
              <img className={classes.ProductImage} src='https://imgur.com/PTgQlim.png' alt='Red Strap'></img>
              <img className={classes.ProductImage} src='https://imgur.com/PTgQlim.png' alt='Red Strap'></img>
              <img className={classes.ProductImage} src='https://imgur.com/PTgQlim.png' alt='Red Strap'></img>
              <h3 className={classes.Sectionheading}>Features</h3>
              <div>
                <button className={[classes.FeaturesItem,classes.SelectedFeatureItem].join(' ')}>Time</button>
                <button className={classes.FeaturesItem}>Heart Rate</button> 
              </div>
              <button className={classes.PrimaryButton}>Buy Now</button>
           </div>
    )
}
export default ProductDetails;