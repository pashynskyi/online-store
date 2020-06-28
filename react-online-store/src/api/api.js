import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000/'
})

const principal = (token) => {
  return { headers: { "Authorization": `Bearer ${token}` } }
}


export const productsAPI = {
  getProducts(categoryType, productType) {
    return instance.get(`collection/${categoryType}/${productType}`)
      .then(response => {
        return response.data;
      });
  }
}

export const authAPI = {
  login(email, password, rememberMe) {
    return instance.post('login', { email, password, rememberMe })
      .then(response => {
        return response.data
      })
  }
}

export const cartAPI = {
  postToCart(productId, productSize, token) {
    return instance.post('cart/add', { productId, productSize, quantity: 1 }, principal(token))
      .then(response => {
        return response.data;
      });
  },
  deleteFromCart(productId, token) {
    return instance.delete(`cart/${productId}`, principal(token))
      .then(response => {
        return response.data;
      });
  },
  getCart(token) {
    return instance.get('cart', principal(token))
      .then(response => {
        return response.data;
      })
  },
  putCurrentQuantity(productId, quantity, token) {
    return instance.put(`cart/${productId}`, { quantity }, principal(token))
      .then(response => {
        return response.data;
      })
  },
  postCheckout(token) {
    return instance.post('cart/checkout', principal(token))
      .then(response => {
        return response.data;
      })
  },
}

export const profileAPI = {
  getProfile(email, token) {
    return instance.get(`profile/${email}`, principal(token))
      .then(response => {
        return response.data;
      });
  },
  editProfile(profileEditData, token) {
    return instance.put('profile', { ...profileEditData }, principal(token))
      .then(response => {
        return response.data;
      })
  },
  getOrders(token) {
    return instance.get('order', principal(token))
      .then(response => {
        console.log(response.data.content)
        return response.data.content;
      });
  }
}

export const registerAPI = {
  register(registerData) {
    let active = true;
    let role = "ROLE_CUSTOMER";
    return instance.post(`register`, { ...registerData, active, role })
      .then(response => {
        return response;
      });
  }
}

export const orderAPI = {
  postQuickOrder(products, quickOrderForm, totalPrice) {
    return instance.post('quickOrder', { products, ...quickOrderForm, totalPrice })
      .then(response => {
        if (response.data.orderStatus) alert("Заказ принят, ожидайте звонка")
        return response;
      });
  }
}

export const adminAPI = {
  postProduct(product, token) {
    let productStatus = 1;
    return instance.post('seller/product/new', { ...product, productStatus }, principal(token))
      .then(response => {
        return response;
      });
  },
  putProduct(product, token) {
    return instance.put(`seller/product/${product.productId}/edit`, { ...product }, principal(token))
      .then(response => {
        return response;
      });
  },
  deleteProduct(productId, token) {
    debugger;
    return instance.delete(`seller/product/${productId}/delete`, principal(token))
      .then(response => {
        return response;
      });
  }
}


