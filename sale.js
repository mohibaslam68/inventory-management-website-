document.getElementById('newSaleBtn').addEventListener('click', function() {
    // Example 1: Go to a new page
    window.location.href = '/HTML files/newsale.html';})

    document.getElementById('Dashboard').addEventListener('click', function() {
      // Example 1: Go to a new page
      window.location.href = '/HTML files/dashboard.html';})


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
      