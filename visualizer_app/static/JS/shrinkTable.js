const flowerTable = document.getElementById('flowerTable');
const minimizeTable = document.querySelectorAll('.whiteRose');

minimizeTable.forEach(function(mt) {
  mt.addEventListener('click', function() {
    flowerTable.classList.toggle('shrunk');
  });
})