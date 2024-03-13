// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import wallpaperImage from './src/assets/wallpaper.jpg';

const styles = {
  root: {
    backgroundImage: `url(${wallpaperImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <div style={styles.root}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);