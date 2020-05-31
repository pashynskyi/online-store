import React from "react";
import styles from "./CartProduct.module.css";
import CartProductInfo from "./CartProductInfo/CartProductInfo";
import SubtotalPrice from "./SubtotalPrice/SubtotalPrice";


const CartProduct = (props) => {
  let state = props.cartProducts;
  let productElements = state.map((p) => (
    <CartProductInfo
      key={p.productId}
      productId={p.productId}
      pictureUrl={p.pictureUrl}
      productPrice={p.productPrice}
      productFirm={p.productFirm}
      productType={p.productType}
      productMaterial={p.productMaterial}
      productSize={p.productSize}
      removeFromCart={props.removeFromCart}
      addToCart={props.addToCart}
      addQuantity={props.addQuantity}
      subQuantity={props.subQuantity}
    />
  ));

  return (
    <div className={styles.conteiner}>
      <div className={styles.productContainer}>
        {productElements}
      </div>
      <SubtotalPrice
        totalPrice={props.totalPrice}
        totalCount={props.totalCount}
        productId={props.cartProducts}
        productPrice={props.productPrice}
        orderProduct={props.orderProduct}
        confirmedQuantityProducts={props.confirmedQuantityProducts}
      />
    </div>

  );
}

export default CartProduct;