import React from "react";
import styles from "./Products.module.css";
import PortalMenTypes from "../MenHome/PortalMenTypes/PortalMenTypes";
import Product from "./Product/Product";
import { Container, Row, Col } from 'react-bootstrap';
import PortalWomenTypes from "../WomenHome/PortalWomenTypes/PortalWomenTypes";
import FilterContainer from "../Filter/FilterContainer";
import { NavLink } from "react-router-dom";


const Products = (props) => {
  const onResetSize = () => {
    props.resetSize()
  }
  let state = props.products;
  let productElements = !props.isReady ? 'Загрузка...'
    : state.map((product) => (
      <Col className={styles.col} xs="12" sm="6" md="6" lg="4" xl="3" key={product.productId}>
        <div onPointerLeave={onResetSize} className={styles.productContainer}>
          <Product
            product={product}
            setCurrentProduct={props.setCurrentProduct}
            role={props.role} />
        </div>
      </Col>
    ));
  return (
    <section className={styles.productSection}>
      {(props.isReady && state[0].categoryType === "men-home") &&
        <PortalMenTypes />
      }
      {(props.isReady && state[0].categoryType === "women-home") &&
        <PortalWomenTypes />
      }
      <Container className={styles.container}>
        {props.role === "ROLE_ADMIN" &&
          <div className={styles.containerAddProduct}>
            <NavLink to="/productCreate">Добавить товар</NavLink>
          </div>
        }
        <FilterContainer />
        <Row>
          {productElements}
        </Row>
      </Container>
    </section>
  );
}

export default Products;
