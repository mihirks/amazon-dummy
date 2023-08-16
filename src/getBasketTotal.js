const getBasketTotal = (basket_data) => {

    var totalPrice=0;
    if (basket_data?.length >0) {
      for (let index = 0; index < basket_data.length; index++) {
        const itemPrice = basket_data[index]?.price;
        totalPrice += itemPrice;
      }
    } else {
      totalPrice=0;
    }
  return totalPrice
  }

export default getBasketTotal