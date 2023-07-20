const addToDb = (id) => {
    let shoppingCart = getStoredCart();
    const quantity = shoppingCart[id];
    if (!quantity) {
      shoppingCart[id] = 1;
    } else {
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
  };
  
  const removeFromDb = (id) => {
    const shoppingCart = getStoredCart();
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
  };
  
  const getStoredCart = () => {
    let shoppingCart = {};
  
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
  };
  
  const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
  };
  
  export { addToDb, removeFromDb, getStoredCart, deleteShoppingCart };
  