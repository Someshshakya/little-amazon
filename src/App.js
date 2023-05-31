import classes from './App.module.css'
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import TopBar from './TopBar';

function App() {
  return (
    <div className="App">
        {/* top nav bar */}
         <TopBar/>
      <div className={classes.MainContainer}>
        {/* product preview  section*/}
        <div className={classes.ProductPreview}>
          <ProductPreview />
        </div>
        <div className={classes.ProductData}>
          {/* product details section  */}
          <ProductDetails />
          </div>
       </div>
    </div>
  );
}

export default App;
