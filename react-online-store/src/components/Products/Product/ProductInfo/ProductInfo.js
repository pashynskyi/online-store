import React from "react";
import styles from "./ProductInfo.module.css";
import FormSelectSize from "../../../../common/Form/FormSelectSize";


const ProductInfo = (props) => {
  const onAddToCart = () => {
    props.addToCart(props.selectedSize);
  }

  const onRemoveFromCart = () => {
    props.removeFromCart(props.productId)
  }

  let splitProductSizes = props.productSizes.split(', ');
  let newProductSizes = splitProductSizes.map((item, index) => (
    <option key={index} value={item}>{item}</option>
  ));

  return (
    <div className={styles.containerInfo}>
      <div>{props.productPrice} грн</div>
      <div>{props.productFirm} <span>/ {props.productType}</span></div>
      <div>Состав: <span>{props.productMaterial}</span></div>
      <FormSelectSize
        newProductSizes={newProductSizes}
        selectSize={props.selectSize}
        productId={props.productId}
        productPrice={props.productPrice}
        productFirm={props.productFirm}
        productType={props.productType}
        productMaterial={props.productMaterial}
        pictureUrl={props.pictureUrl}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        selectedSize={props.selectedSize} />
      {/* <ProductButton onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} selectedSize={props.selectedSize} /> */}
    </div>
  );
}

export default ProductInfo;