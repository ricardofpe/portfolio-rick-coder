export function initFlashlight() {
    const light = document.createElement('div');
    light.className = 'light';
    document.body.appendChild(light);
  
    let isVisible = false;
  
    const updateLightPosition = (e) => {
      light.style.left = `${e.clientX - 50}px`;
      light.style.top = `${e.clientY - 50}px`;
    };
  
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      isVisible = isLargeScreen;
      light.style.display = isLargeScreen ? 'block' : 'none';
    };
  
    const handleScroll = () => {
      if (isVisible) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          light.style.transform = `translateY(${scrollTop}px)`;
        });
      }
    };

    document.addEventListener('mousemove', updateLightPosition);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize();
  }
