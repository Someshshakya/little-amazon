import classes from './App.module.css'
import ProductData from './productData';
import productPreview from './productPreview';

function App() {
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() :'0' + new Date().getHours()
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() :'0' + new Date().getMinutes()
  return (
    <div className="App">
      <header className={classes.AppHeader}>
        <nav className={classes.Topbar}>
        <img src={require('./amazonLogo.png')} className={classes.AppLogo} alt="logo" />
        </nav>
      </header>
      <div className={classes.mainContainer}>
            <div className={classes.productPreview}>
            <img src={ProductData.colorOptions[0].imageUrl} alt={ProductData.colorOptions[0].styleName}></img>
            {/* <div className={classes.timeSection}>
            <p>{`${currentHour} : ${currentMinute}`}</p>
            </div> */}
            <div className={classes.heartBeatSection}>
                <i class="fa-solid fa-heart-pulse"></i>
                <p>78</p>
            </div>
            </div>
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
      </div>
    </div>
  );
}

export default App;
