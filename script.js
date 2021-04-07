function hamburger() {
    let ul = document.querySelector('.nav-links');
    let logo = document.querySelector('.logo')
    if (ul.style.display === 'none') {
      ul.style.display = 'block';
    } else {
      ul.style.display = 'none';
    }
  
    if(ul.style.display === 'block') {
      logo.style.display = 'none';
    } else {
      logo.style.display = 'flex';
    }
  }