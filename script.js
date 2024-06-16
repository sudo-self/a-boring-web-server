const toggleGlow = document.getElementById('toggleGlow');
const container = document.getElementById('container');

toggleGlow.addEventListener('change', function() {
    if (this.checked) {
        container.style.boxShadow = '0 0 40px rgba(0, 255, 0, 0.7)';
    } else {
        container.style.boxShadow = '0 0 20px rgba(0,0,0,0.1)';
    }
});
