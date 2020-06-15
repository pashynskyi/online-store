import React from "react";
import styles from "./CheckoutReduxForm.module.css";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Input } from "../../../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100);
const maxLength50 = maxLengthCreator(50);
const maxLength20 = maxLengthCreator(20);

const CheckoutForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Эл. почта:</div>
        <Field
          className={styles.field}
          name="email"
          component={Input}
          type="email"
          validate={[required, maxLength50,]}
          placeholder="Эл. почта" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Имя и фамилия:</div>
        <Field
          className={styles.field}
          name="name"
          component={Input}
          type="text"
          validate={[required, maxLength100,]}
          placeholder="Имя и фамилия" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Мобильный телефон:</div>
        <Field
          className={styles.field}
          name="phone"
          component={Input}
          type="text"
          validate={[required, maxLength20,]}
          placeholder="Мобильный телефон" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Адрес:</div>
        <Field
          className={styles.field}
          name="address"
          component={Input}
          type="text"
          validate={[required, maxLength50,]}
          placeholder='Город, № отделение "Нова пошта"' />
      </div>
      <div>
        <button variant="success">Отправить заказ</button>
      </div>
    </form>
  );
}

export const CheckoutReduxForm = reduxForm({ form: 'order' })(CheckoutForm)