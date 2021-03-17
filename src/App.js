import * as React from 'react';

const ICONS = {
  default: '❓',
  museum: '🖼️',
  bridge: '🌉',
  cathedral: '⛪',
  church: '⛪',
  street: '🛣️',
  village: '🌻',
  residence: '🏠',
  castle: '🏰',
  park: '🌳',
  synagogue: '🕍',
  power: '⚡',
  cemetery: '⚰️',
  metro: '🚇',
  university: '🎓',
  architectural: '🏛️',
  railway: '🚂',
};

const WARSAW_COORDS = [52.247744131869645, 21.015043804607192];

function App() {
  const [coords, setCoords] = React.useState(WARSAW_COORDS);
  const [pages, setPages] = React.useState([]);

  React.useEffect(() => {
    fetch(
      'https://en.wikipedia.org/w/api.php?' +
        new URLSearchParams({
          origin: '*',
          action: 'query',
          format: 'json',
          prop: 'pageterms',
          generator: 'geosearch',

          // Arbitrary coordinates in Warsaw
          ggscoord: coords.join('|'),
          ggsradius: 2000,
        }),
    )
      .then(res => res.json())
      .then(json => {
        const fetchedPages = Object.values(json.query?.pages || []);

        // Extract only needed data
        const parsedPages = fetchedPages.map(page => ({
          id: page.pageid.toString(),
          label: page.terms.label[0],
          description: page.terms.description?.[0],
        }));

        // Try to find matching keyword for each page
        parsedPages.forEach(page => {
          const { label, description } = page;
          let keyword;
          // If there is description the keyword is most likely to be there
          // so check it first
          if (description) {
            keyword = findKeyword(description);
          }

          // If there is still no keyword. Either because there is no description
          // or because keyword was not found there.
          if (!keyword) {
            keyword = findKeyword(label);
          }

          // Finally, if the keyword was not found both in label and description
          // use default one.
          if (!keyword) {
            keyword = 'default';
          }
          page.keyword = keyword;
        });

        setPages(parsedPages);
      })
      .catch(console.log);
  }, [coords]);

  return (
    <div className="App">
      <h1>Icons For Wiki Articles</h1>
      <button onClick={() => setCoords(getRandomCoords())}>Random</button>
      <ul>
        {pages.map(({ id, label, keyword }) => (
          <li key={id}>
            <h2>
              {ICONS[keyword]} {label}
            </h2>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(pages, null, 2)}</pre>
    </div>
  );
}

const AVAILABLE_KEYWORDS = Object.keys(ICONS);

/**
 * Looks for matching keyword in the given string. If the keyword is found
 * it returns it.
 */
function findKeyword(string) {
  for (let keyword of AVAILABLE_KEYWORDS) {
    const keywordFound = string.toLowerCase().indexOf(keyword) !== -1;

    if (keywordFound) {
      return keyword;
    }
  }
  return null;
}

/**
 * It returns random coordinates close to Warsaw's city centre
 */
function getRandomCoords() {
  return [
    getRandomNumberBetween(52.156111, 52.24903),
    getRandomNumberBetween(21.004021, 21.105173),
  ];
}

function getRandomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default App;
