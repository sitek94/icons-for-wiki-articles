import icons from './icons';

const availableKeywords = Object.keys(icons);

/**
 * Tries to find a keyword in a string that will match one of the available
 * keywords.
 *
 * @param string a string to look for a keyword
 * @param availableKeywords a list of available keywords
 */
export function findKeyword(string) {
  for (let keyword of availableKeywords) {
    const keywordFound = string.toLowerCase().indexOf(keyword) !== -1;

    if (keywordFound) {
      return keyword;
    }
  }
  return null;
}

/**
 * Returns random coordinates around given point, in the given radius
 */
export function getRandomCoords({ lat, lng }, radiusInMeters = 1000) {
  // Approximate degree equivalent for meters
  const radiusInDeg = radiusInMeters / 100000;

  return {
    lat: getRandomNumberBetween(lat - radiusInDeg, lat + radiusInDeg),
    lng: getRandomNumberBetween(lng - radiusInDeg, lng + radiusInDeg),
  };
}

function getRandomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}
