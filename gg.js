const itemContainers = document.querySelectorAll(".menu-items .item"); 
const cartItemsList = document.querySelector(".cart-items"); 
const cartTotalElement = document.querySelector(".cart-total"); 

function updateCartTotal() {
  let cartTotal = 0.00;
  for (const itemContainer of itemContainers) {
    const itemPriceElement = itemContainer.querySelector(".price");
    if (itemPriceElement) {
      const price = parseFloat(itemPriceElement.textContent);
      cartTotal += price;
    }
  } 

  cartTotalElement.textContent = `Total: ${cartTotal.toFixed(2)}`;
}

itemContainers.forEach(itemContainer => {
  const addToCartButton = itemContainer.querySelector(".add-to-cart");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", function() {
      const itemName = itemContainer.querySelector("h3").textContent;
      const itemPrice = itemContainer.querySelector(".price").textContent;
      cartItemsList.innerHTML += `<li>${itemName} - ${itemPrice}</li>`;
      
      updateCartTotal();
    });
  }
});


const checkoutButton = document.querySelector(".checkout");
checkoutButton.addEventListener("click", function() {
  alert("Thank you for your order!");
});

updateCartTotal();
