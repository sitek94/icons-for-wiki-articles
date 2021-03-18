import * as React from 'react';
import IconButton from './components/IconButton';

import icons from './icons';
import { findKeyword, getRandomCoords } from './utils';

const warsawCoords = {
  lat: 52.247744131869645,
  lng: 21.015043804607192,
};

function App() {
  const [coords, setCoords] = React.useState(warsawCoords);
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
          ggscoord: coords.lat + '|' + coords.lng,
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
    <>
      <h1>Icons For Wiki Articles</h1>

      <button onClick={() => setCoords(getRandomCoords(warsawCoords))}>
        Get random coordinates in Warsaw
      </button>

      {pages.map(({ id, label, keyword }) => (
        <div key={id} style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>{icons[keyword]}</IconButton>
          <h2>{label}</h2>
        </div>
      ))}

      <pre>{JSON.stringify(pages, null, 2)}</pre>
    </>
  );
}

export default App;
