import React from 'react';
import cat from './cat.png';
import './App.css';

function App() {
  const [text, setText] = React.useState('COPY');
  const [c, setC] = React.useState('copy');
  const inputEl = React.useRef();

  const handleClick = React.useCallback(() => {
    const copyText = document.getElementById('email');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    setText('COPIED');
    setC('copied');
    copyText.blur();

    setTimeout(() => {
      setText('COPY');
      setC('copy');
    }, 4000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={cat} className="App-logo" alt="cat" />
        <p>
          your cat is the coolest
        </p>
        <p style={{ fontSize: '18px' }}>
          feel free to email us sometime 🙂
          <br />
          <a
            className="App-link"
            href="mailto:hi@yourcatiscool.com?subject=my cat is cool!"
            style={{
              display: 'inline-block',
              paddingTop: '4px',
            }}
          >
            <input
              id="email"
              value="hi@yourcatiscool.com"
              ref={inputEl}
              style={{
                cursor: 'pointer',
                color: '#61dafb',
                textDecoration: 'underline',
                backgroundColor: 'transparent',
                outline: 'none',
                border: '0',
                fontSize: '18px',
              }}
              onFocus={() => inputEl.current.blur()}
            />
          </a>
          {' '}
          <button
            className={c}
            onClick={handleClick}
            style={{
              cursor: 'pointer',
              marginTop: '-2px',
              fontSize: '10px',
              fontWeight: 'bold',
              marginLeft: '4px',
              verticalAlign: 'middle',
              // backgroundColor: 'rgba(41, 186, 165, 0.1)',
              // border: '1px solid #29BAA5',
              borderWidth: '1px',
              borderStyle: 'solid',
              // color: 'rgb(41, 186, 165)',
              borderRadius: '2px',
              width: '64px',
            }}
          >
            {text}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
