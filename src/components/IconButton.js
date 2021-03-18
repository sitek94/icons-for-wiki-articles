import * as React from 'react';

export default function IconButton({ children }) {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <button
      onClick={() => setIsClicked(!isClicked)}
      style={{
        border: 'none',
        outline: 'none',
        background: 'none',
        color: isClicked ? 'cornflowerblue' : 'black',
        fontSize: 30,
      }}
    >
      {children}
    </button>
  );
}
