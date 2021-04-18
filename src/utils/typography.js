import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

const typography = new Typography(kirkhamTheme)
// const typo2 = new Typography({
//     baseFontSize: '18px',
//     baseLineHeight: 1.666,
//     headerFontFamily: ['Avenir Next'],
//     bodyFontFamily: ['Georgia']
// })

export default typography
export const rhythm = typography.rhythm