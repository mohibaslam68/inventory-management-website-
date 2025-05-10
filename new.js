
  // Store cart items
  const cart = [];

  // Get elements
  const addToCartButton = document.querySelector('.btn');
  const productInput = document.querySelectorAll('.add-new-sale-form input')[3]; // 4th input (Product)

  const cartDiv = document.querySelector('.cart');

  function updateCart() {
    let total = 0;
    let cartHTML = '<h3>🛒 Cart:</h3>';

    cart.forEach(item => {
      const itemTotal = item.quantity * item.price;
      total += itemTotal;
      cartHTML += `<p>${item.quantity}x ${item.name} – $${itemTotal}</p>`;
    });

    cartHTML += `<p><strong>TOTAL: $${total}</strong></p>`;
    cartDiv.innerHTML = cartHTML;
  }

  addToCartButton.addEventListener('click', () => {
    const productName = productInput.value.trim();
    const price = 10; // Fixed price for demo

    if (productName === '') return;

    // Check if product already in cart
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: productName, quantity: 1, price });
    }

    updateCart();
    productInput.value = '';
  });

