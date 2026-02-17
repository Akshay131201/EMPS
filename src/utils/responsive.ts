// Responsive breakpoints
export const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
}

// Media query helpers
export const mediaQueries = {
  mobile: `@media (max-width: ${breakpoints.mobile - 1}px)`,
  tablet: `@media (min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet - 1}px)`,
  desktop: `@media (min-width: ${breakpoints.tablet}px)`,
  mobileAndTablet: `@media (max-width: ${breakpoints.tablet - 1}px)`,
}

// Check if device is mobile
export const isMobile = () => {
  return window.innerWidth < breakpoints.mobile
}

// Check if device is tablet
export const isTablet = () => {
  return window.innerWidth >= breakpoints.mobile && window.innerWidth < breakpoints.tablet
}

// Check if device is desktop
export const isDesktop = () => {
  return window.innerWidth >= breakpoints.tablet
}

// Get responsive value based on screen size
export const getResponsiveValue = <T,>(mobile: T, tablet: T, desktop: T): T => {
  if (isMobile()) return mobile
  if (isTablet()) return tablet
  return desktop
}
