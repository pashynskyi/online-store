export const helperRequestProducts = (locationPathname, requestProducts, currentPage, pageSize, sortBy) => {
  if (locationPathname === '/collection/men-home/t-shirts') {
    requestProducts('men-home', 't-shirts', currentPage, pageSize, sortBy);
  } else if (locationPathname === '/collection/men-home/shirts') {
    requestProducts('men-home', 'shirts', currentPage, pageSize, sortBy);
  } else if (locationPathname === '/collection/men-home/jeans') {
    requestProducts('men-home', 'jeans', currentPage, pageSize, sortBy);
  } else if (locationPathname === '/collection/men-home/shorts') {
    requestProducts('men-home', 'shorts', currentPage, pageSize, sortBy);
  } else if (locationPathname === '/collection/men-home/jackets') {
    requestProducts('men-home', 'jackets', currentPage, pageSize, sortBy);
  } else if (locationPathname === '/collection/women-home/t-shirts') {
    requestProducts('women-home', 't-shirts', currentPage, pageSize, sortBy);
  } else if (locationPathname === '/collection/women-home/shorts') {
    requestProducts('women-home', 'shorts', currentPage, pageSize, sortBy);
  } else if (locationPathname === '/collection/women-home/hoodies') {
    requestProducts('women-home', 'hoodies', currentPage, pageSize, sortBy);
  } else if (locationPathname === '/collection/women-home/skirts') {
    requestProducts('women-home', 'skirts', currentPage, pageSize, sortBy);
  } else if (locationPathname === '/collection/women-home/dresses') {
    requestProducts('women-home', 'dresses', currentPage, pageSize, sortBy);
  }
}