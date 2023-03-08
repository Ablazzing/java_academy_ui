export const getAssetsPath = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}

export default {
  getAssetsPath
}