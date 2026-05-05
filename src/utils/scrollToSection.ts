// src/utils/scrollToSection.ts
export const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    // Fixed offset values based on actual measurements
    const banner = document.querySelector('.banner-top');
    const bannerHeight = banner && window.getComputedStyle(banner).display !== 'none' ? 48 : 0;
    const navbarHeight = 72; // Increased from 64
    
    const totalOffset = bannerHeight + navbarHeight + 30;
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - totalOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};