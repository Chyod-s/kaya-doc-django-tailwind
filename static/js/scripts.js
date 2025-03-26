document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const teste = document.getElementById('btn-teste');
  const login = document.getElementById('btn-login');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.remove('bg-[#232323]');
      header.classList.add('bg-[#232323]/70', 'backdrop-blur-lg');

      teste.classList.remove('bg-custom-green');
      teste.classList.remove('hover:bg-custom-back');
      teste.classList.add('bg-custom-green-70', 'backdrop-blur-lg');
      teste.classList.add('hover:bg-custom-back-70', 'backdrop-blur-lg');

      login.classList.remove('bg-custom-back');
      login.classList.remove('hover:bg-custom-green');
      login.classList.add('bg-custom-back-70', 'backdrop-blur-lg');
      login.classList.add('hover:bg-custom-green-70', 'backdrop-blur-lg');
    }
  });
});
