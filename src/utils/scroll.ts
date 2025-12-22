/**
 * Smoothly scrolls to a section with a given ID
 * @param sectionId - The ID of the section to scroll to
 * @param offset - The offset from the top in pixels (default: 96 for navbar height)
 */
export function scrollToSection(sectionId: string, offset: number = 96): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
