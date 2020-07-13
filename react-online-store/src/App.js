import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MenHome from "./components/MenHome/MenHome";
import WomenHome from "./components/WomenHome/WomenHome";
import KidsHome from "./components/KidsHome/KidsHome";
import ProductsContainer from "./components/Products/ProductsContainer";
import { Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import QuickOrderContainer from "./components/QuickOrder/QuickOrderContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import OrderDetailsContainer from "./components/Profile/Orders/Order/OrderDetailsContainer";
import ProfileEditContainer from "./components/ProfileEdit/ProfileEditContainer";
import ProductEditContainer from "./components/ProductEdit/ProductEditContainer";
import ProductCreateContainer from "./components/ProductCreate/ProductCreateContainer";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Delivery from "./components/Delivery/Delivery";
import Payment from "./components/Payment/Payment";
import NewsDiscounts from "./components/NewsDiscounts/NewsDiscounts";



const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className='app-wrapper-content'>
        <Route exact path='/' render={() => <Home />} />

        <Route exact path='/men-home' render={() => <MenHome />} />
        <Route path='/collection/men-home/t-shirts' component={ProductsContainer} />
        <Route path='/collection/men-home/shirts' component={ProductsContainer} />
        <Route path='/collection/men-home/jeans' component={ProductsContainer} />
        <Route path='/collection/men-home/shorts' component={ProductsContainer} />
        <Route path='/collection/men-home/jackets' component={ProductsContainer} />

        <Route exact path='/women-home' render={() => <WomenHome />} />
        <Route path='/collection/women-home/t-shirts' component={ProductsContainer} />
        <Route path='/collection/women-home/shorts' component={ProductsContainer} />
        <Route path='/collection/women-home/hoodies' component={ProductsContainer} />
        <Route path='/collection/women-home/skirts' component={ProductsContainer} />
        <Route path='/collection/women-home/dresses' component={ProductsContainer} />

        <Route path='/kids-home' render={() => <KidsHome />} />
        <Route path='/login' render={() => <LoginContainer />} />
        <Route path='/register' render={() => <RegisterContainer />} />
        <Route path='/profile' render={() => <ProfileContainer />} />
        <Route path='/cart' render={() => <Cart />} />
        <Route path='/quickOrder' render={() => <QuickOrderContainer />} />
        <Route path='/order' render={() => <OrderDetailsContainer />} />
        <Route path='/profileEdit' render={() => <ProfileEditContainer />} />
        <Route path='/productEdit' component={ProductEditContainer} />
        <Route path='/productCreate' component={ProductCreateContainer} />

        <Route path='/about-us' render={() => <AboutUs />} />
        <Route path='/contact-us' render={() => <ContactUs />} />
        <Route path='/delivery' render={() => <Delivery />} />
        <Route path='/payment' render={() => <Payment />} />
        <Route path='/news-discounts' render={() => <NewsDiscounts />} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
