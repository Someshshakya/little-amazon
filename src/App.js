import React,{Component} from 'react';
import classes from './App.module.css'
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './TopBar/TopBar';
import ProductData from './Utils/ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos:0,
    currentSelectedFeature:0
  }
  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos:pos})
  }
  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature:pos})
  }
  render() {
    return (
      <div className="App">
        {/* top nav bar */}
        <TopBar />
        <div className={classes.MainContainer}>
          {/* product preview  section*/}
          <div className={classes.ProductPreview}>
            <ProductPreview
              currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
              showHeartBeatSection={this.state.showHeartBeatSection}
              currentSelectedFeature={this.state.currentSelectedFeature}

            />
          </div>
          <div className={classes.ProductData}>
            {/* product details section  */}
            <ProductDetails
              data={this.state.productData}
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              currentSelectedFeature={this.state.currentSelectedFeature}
              onFeatureItemClick={this.onFeatureItemClick}
               />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
