'use strict'

/**
 * Pads a string on left & right sides
 * evenly if possible
 *
 * @param {string}  str   - The string to be padded.
 * @param {int}     width - The total length of the padded string.
 * @param {string}  ch    - The character to use when padding.
 * @param {boolean} left  - If true asymmetric padding will occur on the left.
 */
module.exports = function bpad (str, width, ch, left) {
  // Default ch value, str & ch should be strings
  if (!ch && ch !== 0) ch = ' '
  else ch = ch.toString()
  str = str.toString()
  
  // Get pad length for each side
  // and check for a remainder
  const len = width - str.length
  const side = len / 2
  const rem = len % 2 > 0

  // Pad each side of the string
  const pad = ch.repeat(side)
  const padStr = `${pad}${str}${pad}`

  // If no remainder, return the padded string
  return rem
    // Otherwise, add the remainder on the left or right side
    ? left
      ? `${ch}${padStr}`
      : `${padStr}${ch}`
    : padStr
}
