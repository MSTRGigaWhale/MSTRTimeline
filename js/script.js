// Add hover interaction
document.querySelectorAll('.event').forEach(event => {
    event.addEventListener('mouseover', function () {
      const info = this.getAttribute('data-info');
      alert(info); // Replace this with a hover box or modal later
    });
  });
  