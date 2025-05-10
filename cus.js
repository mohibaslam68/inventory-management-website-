
document.getElementById('Dashboard').addEventListener('click', function() {
    // Example 1: Go to a new page
    window.location.href = '/HTML files/dashboard.html';})


    document.getElementById('sales').addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = '/HTML files/sales.html';
    });
  
    document.getElementById('Inventory').addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = '/HTML files/inventory.html';
    });
  
    document.getElementById('contact').addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = '/contact.html';
    });
    document.querySelector('.action-btn').addEventListener('click', function() {
      window.location.href = '/HTML files/custmer card .html';
    });
  