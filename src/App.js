import classes from './App.module.css'
import ProductData from './productData';
import ProductPreview from './productPreview';
import ProductDetails from './ProductDetails';
import TopBar from './TopBar';

function App() {
  return (
    <div className="App">
        {/* top nav bar */}
         <TopBar/>
      <div className={classes.mainContainer}>
        {/* product preview  section*/}
        <div className={classes.productPreview}>
          <ProductPreview />
        </div>
        <div className={classes.productData}>
          {/* product details section  */}
          <ProductDetails />
          </div>
       </div>
    </div>
  );
}

export default App;
