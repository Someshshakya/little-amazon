import React from "react";
import classes from './productPreview.module.css'
import ProductData from './productData';


const productPreview = () => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() :'0' + new Date().getHours()
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() :'0' + new Date().getMinutes()

    return (
        <div className={classes.productPreview}>
          <p>OKk working fine</p>
      </div>
    )
}

export default productPreview;