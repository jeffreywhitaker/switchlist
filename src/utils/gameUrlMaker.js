export const gameUrlMaker = (gameName) => {
  return gameName
    .toLowerCase()
    .replace(/ /g, '_')
    .replace(/:/g, '')
    .replace(/'/g, '')
}
