
  const inicioSection = document.querySelector('html');
  const spotlight = document.createElement('div');
  spotlight.classList.add('spotlight');
  inicioSection.appendChild(spotlight);

  inicioSection.addEventListener('mousemove', (e) => {
    const rect = inicioSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlight.style.left = `${x}px`;
    spotlight.style.top = `${y}px`;
    spotlight.style.opacity = 1;
  });

  inicioSection.addEventListener('mouseleave', () => {
    spotlight.style.opacity = 0;
  });

  // Garantir que o preloader seja exibido por 3 segundos
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.classList.add('loaded');
      document.getElementById('content').style.display = 'block';
    }, 3000); // 3 segundos de carregamento
  });