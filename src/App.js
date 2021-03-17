import * as React from 'react';

function App() {
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
          ggscoord: [52.247744131869645, 21.015043804607192].join('|'),
          ggsradius: 2000,
        }),
    )
      .then(res => res.json())
      .then(json => {
        setPages(Object.values(json.query.pages));
      })
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <h1>Icons For Wiki Articles</h1>
      <pre>{JSON.stringify(pages, null, 2)}</pre>
    </div>
  );
}

export default App;
