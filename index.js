
const fontSize = 14;
const fontFamily = 'Menlo, "Apple Color Emoji", "DejaVu Sans Mono", Consolas, "Lucida Console", monospace';
const fontWeight = 'normal';
const fontWeightBold = 'bold';
const lineHeight = 1;
const letterSpacing = 0;
const cursorColor = '#E500E5';
const cursorAccentColor = '#FFF';
const cursorShape = 'BLOCK';
const cursorBlink = true;
const foregroundColor = '#676767';
const backgroundColor = '#FFFFFF';
const selectionColor = 'rgba(229, 0, 229, 0.5)';
const borderColor = '#FFF';
const padding = '10px 18px 20px 27px';
const windowSize = [1025, 670];
const colors = {
  black: '#000000',
  red: '#990000',
  green: '#00A600',
  yellow: '#999900',
  blue: '#0000B2',
  magenta: '#B200B2',
  cyan: '#00A6B2',
  white: '#BFBFBF',
  lightBlack: '#666666',
  lightRed: '#E50000',
  lightGreen: '#00D900',
  lightYellow: '#E5E500',
  lightBlue: '#0000FF',
  lightMagenta: '#E500E5',
  lightCyan: '#00E5E5',
  lightWhite: '#E5E5E5'
};
exports.decorateConfig = config => Object.assign({}, config, {
  fontSize,
  fontFamily,
  fontWeight,
  fontWeightBold,
  lineHeight,
  letterSpacing,
  cursorColor,
  cursorAccentColor,
  cursorShape,
  cursorBlink,
  foregroundColor,
  backgroundColor,
  selectionColor,
  borderColor,
  padding,
  windowSize,
  colors
});
