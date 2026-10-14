export function initFlashlight() {
  const light = document.createElement('div');
  light.className = 'light';
  document.body.appendChild(light);

  let mouseX = 0;
  let mouseY = 0;
  let isRunning = false;
  let isLargeScreen = window.innerWidth >= 1024;

  const updateLightPosition = () => {
    if (isLargeScreen) {
      light.style.left = `${mouseX - 50}px`;
      light.style.top = `${mouseY - 50}px`;
    }
    isRunning = false;
  };

  const handleMouseMove = (e) => {
    if (!isLargeScreen) return;
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(updateLightPosition);
    }
  };

  const handleResize = () => {
    isLargeScreen = window.innerWidth >= 1024;
    light.style.display = isLargeScreen ? 'block' : 'none';

    if (isLargeScreen) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize();
}
