
import './App.scss';
import Header from './Components/Header/Header';
import { Characters } from './Pages/Characters/Characters';
import { Route, Routes } from 'react-router';
import { CharacterInfo } from './Pages/CharacterInfo/CharacterInfo';
import Page_404 from './Components/Page_404/Page_404';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="characters" element={<Characters />} />
            <Route path="characters/characterinfo" element={<CharacterInfo />} />
          <Route path="*" element={<Page_404 />} />
        </Routes>
      

    </div>
  );
}

export default App;
