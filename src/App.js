import * as React from 'react';

function App() {
  React.useEffect(() => {
    const latitude = 52.704738803614504;
    const longitude = 21.093060254318413;

    fetch(
      'https://en.wikipedia.org/w/api.php?' +
        new URLSearchParams({
          origin: '*',
          action: 'query',
          format: 'json',
          prop: 'pageterms',
          generator: 'geosearch',
          ggscoord: `${latitude}|${longitude}`,
          ggsradius: 2000,
        }),
    )
      .then(res => res.json())
      .then(console.log)
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <h1>Icons For Wiki Articles</h1>
    </div>
  );
}

export default App;
