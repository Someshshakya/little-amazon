import React from "react";
import classes from './ProductDetails.module.css'

const ProductDetails = function (props) {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage]
        if (pos === props.currentPreviewImagePos) {
            classArr.push(classes.SelectedProductImage)
        }
        return (
            <img className={classArr.join(' ')} key={pos} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}></img>
         )
    })
    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.FeaturesItem]
        if (pos === props.currentSelectedFeature) {
            classArr.push(classes.SelectedFeatureItem)
        }
        return (
            <button key={pos} className={classArr.join(' ')} onClick={()=> props.onFeatureItemClick(pos)}>{item}</button>

        )
    })
    return (
        <div className={classes.ProductData}>
              <h2 className={classes.ProductTitle}>{props.data.title}</h2>
              <p className={classes.ProductDescription}>{props.data.description}</p>
            <h3 className={classes.Sectionheading}>Select Color</h3>
            {colorOptions}
              <h3 className={classes.Sectionheading}>Features</h3>
              <div>
                {/* <button className={[classes.FeaturesItem,classes.SelectedFeatureItem].join(' ')}>Time</button>
                <button className={classes.FeaturesItem}>Heart Rate</button>  */}
                {featureList}
              </div>
              <button className={classes.PrimaryButton}>Buy Now</button>
           </div>
    )
}
export default ProductDetails;