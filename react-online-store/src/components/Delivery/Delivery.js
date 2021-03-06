import React from 'react';
import styles from './Delivery.module.css';

const Delivery = () => {
  return (
    <div>
      <h2>Доставка</h2>
      <div className={styles.container}>
        <p>Наш интернет-магазин осуществляет доставку по Киеву и регионам Украины:</p>
        <ol>
          <li>Курьерская доставка по Киеву — 100 грн.</li>
          <li>Самовывоз из нашего пункта выдачи или розничного магазина – бесплатно!</li>
          <li>"Новая Почта" доставка по Украине — от 60 грн. в зависимости от адреса доставки.</li>
        </ol>
        <p>Сроки доставки:</p>
        <ol>
          <li>Курьерская доставка по Киеву – на следующий день.</li>
          <li>Самовывоз – на следующий день.</li>
          <li>"Новая Почта" доставка по Украине – от 2 до 5 дней в зависимости от региона.</li>
        </ol>
        <p>
          <strong>Доставка осуществляется бесплатно при сумме заказа более 2000 грн.</strong>
        </p>
      </div>
    </div>
  )
}

export default Delivery;