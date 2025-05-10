document.getElementById('sales').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/HTML files/sales.html'; // or wherever you want to go
  });

  document.getElementById('inventory').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/HTML files/inventory.html';
  });

  document.getElementById('customer').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/HTML files/customer.html';
  });

  document.getElementById('contact').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/contact.html';
  });

  document.getElementById('newSaleBtn').addEventListener('click', function() {
    // Example 1: Go to a new page
    window.location.href = '/HTML files/newsale.html';})

    document.getElementById('Dashboard').addEventListener('click', function() {
      // Example 1: Go to a new page
      window.location.href = '/HTML files/dashboard.html';})

      function toggleAmountVisibility(imgElement) {
        const container = imgElement.closest('.main-dashboard-card-details');
        const amount = container.querySelector('.main-dashboard-card-amount');
        
        if (amount.style.display === 'none') {
          amount.style.display = 'block';
        } else {
          amount.style.display = 'none';
        }
      }
      