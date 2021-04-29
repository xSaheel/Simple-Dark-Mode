import { useEffect, useState } from 'react';
import Switch from "react-switch";
import Header from './Header.js';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [style, setStyle] = useState({
    'backgroundColor': '#dee4e7',
    'color': '#243447'
  })

  useEffect(() => {
    {darkMode ? setStyle({
      'backgroundColor': '#243447',
      'color': '#d1d5da'
    }) : setStyle({
      'backgroundColor': '#dee4e7',
      'color': '#243447'
    })}
  },[darkMode]);

  return (
    <div className="main" style={style}>
      <Header />
      <h1 className="header">{darkMode ? 'Dark' : 'Light'} Mode</h1>
      <Switch className="toggle" 
        onChange={() => setDarkMode(!darkMode)} checked={darkMode} 
        checkedIcon={darkMode} 
        uncheckedIcon={darkMode}
        onColor={'#61DBFB'}
        handleDiameter={50}
        width={90}
        height={35}/>
    </div>
  );
}

export default App;