module.exports = function reverse (n) {
  return (
    parseFloat(
      Math.abs(n)
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  )              
}
