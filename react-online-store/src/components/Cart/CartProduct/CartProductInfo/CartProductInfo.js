import React from "react";
import styles from "./CartProductInfo.module.css";


const CartProductInfo = (props) => {

  const onRemoveFromCart = () => {
    props.removeFromCart(props.productId)
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.photoContainer}>
        <img src={props.pictureUrl} alt='' />
      </div>
      <div className={styles.infoContainer}>
        <div>{props.productFirm}<span> / {props.productType}</span></div>
        <div>Состав: <span>{props.productMaterial}</span></div>
        <div>Размер: <span>{props.productSize}</span></div>
        <div>Цена: {props.productPrice} грн</div>
      </div>
      <div>
        <span className={styles.removeFromCart} onClick={onRemoveFromCart}>X</span>
        </div>
    </div>
  );
}

export default CartProductInfo;
