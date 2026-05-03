// src/utils/scrollToSection.ts
export const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const offset = 80; // Height of your sticky navbar (adjust as needed)
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};