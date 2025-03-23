window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('bg-[#232323]/70', 'backdrop-blur-lg');
      header.classList.remove('bg-[#232323]');
    } else {
      header.classList.add('bg-[#232323]');
      header.classList.remove('bg-[#232323]/70', 'backdrop-blur-lg');
    }
  });
  