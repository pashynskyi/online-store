import React from "react";
import { connect } from 'react-redux';
import ProductCreate from './ProductCreate';
import { editCurrentProduct } from './../../redux/reducers/productsReducer';
import * as axios from 'axios';


class ProductCreateContainer extends React.Component {

  onSubmit = (productCreateData) => {
      console.log(productCreateData)
    // this.props.editCurrentProduct(productCreateData, this.props.token)
  }

  componentDidMount() {
  }

  render() {
    return <ProductCreate onSubmit={this.onSubmit} productCreate={this.props.productCreate} />
  }
}

let mapStateToProps = (state) => {
  return {
    productCreate: state.form.productCreate,
    isAuth: state.loginPage.isAuth,
    token: state.loginPage.currentUser.token
  }
}

export default connect(mapStateToProps, { editCurrentProduct })(ProductCreateContainer);