/**
 * Formats text for consistent display
 * @param {string} text - Input text to format
 * @returns {string} Formatted text
 */
export const formatText = (text) => {
  if (!text) return '';
  // Capitalize first letter
  return text.charAt(0).toUpperCase() + text.slice(1);
};
