
  const inicioSection = document.querySelector('section.inicio');
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
  