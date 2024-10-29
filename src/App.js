import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(menuActive => !menuActive);

  const hideMenu = () => setMenuActive(false);

  return (
    <div className="App" onClick={menuActive ? hideMenu : null}>
      <Navbar menuActive={menuActive} handleClick={toggleMenu}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
