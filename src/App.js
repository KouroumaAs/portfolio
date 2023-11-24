import './App.scss';
import { Routes,Route, useLocation } from 'react-router';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about/About';
import Resumes from './containers/resume/Resumes';
import Skills from './containers/skills/Skills';
import Portfolio from './containers/portfolio/Portfolio';
import Contacts from './containers/contact/Contacts';
import NavBar from './components/navBar/NavBar';
import particles from './utils/particles';
function App() {
  const location = useLocation();
  const handleInit =  async (main) => {
    await loadFull(main)
  } 
  const renderParticleJsInHomePage = location.pathname === '/';
  return (
    <div className="App">
      {/* particle js */}
      {renderParticleJsInHomePage &&
        <Particles id='particles' options={particles} init={handleInit}/>
       }
      {/* navbar  */}
      <NavBar />
      {/* main page content */}
      <div className='App__main-page-content'>
        <Routes>
            <Route index path='/'  element={<Home />}/>
            <Route path='/about' element={<About />}></Route>
            <Route path='/resume' element={<Resumes />}></Route>
            <Route path='/skills' element={<Skills />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/contact' element={<Contacts />}></Route>
       </Routes>
      </div>
     
    </div>
  );
}

export default App;
