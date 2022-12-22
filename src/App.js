
import './App.css';
import React from 'react'; 
import NaverMapComponent from './components/NaverMapComponent';
import { RenderAfterNavermapsLoaded} from 'react-naver-maps';
import Header from './components/Header.js';
import Tab from './components/Tab/Tab.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div id="App">
      <Header />
      <Tab/>
      <Footer/>
    </div>
  );
}

export default App;

/*
      <RenderAfterNavermapsLoaded
      ncpClientId={'3yna7clpbz'} 
      error={<p>Maps Load Error</p>} 
      loading={<p>Maps Loading...</p>}>
      <NaverMapComponent/>
      </RenderAfterNavermapsLoaded>
*/
