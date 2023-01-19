import zfce from './zfce.jpg';
import zce from './zce.jpg';
import zcpe from './zcpe.jpg';
import sf4 from './sf4.png';
import sf5 from './sf5.png';
import sf6 from './sf6.png';
import "@fontsource/roboto";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-white space-bottom-medium">Krzysztof Kardasz</h1>
        <span>Senior Backend Developer</span>
          <p>
              <a href="https://connect.symfony.com/profile/kardasz">
                  <img alt="Symfony 6 Certified Developer" src={sf6 } />
              </a>

              <a href="https://connect.symfony.com/profile/kardasz">
                  <img alt="Symfony 5 Certified Developer" src={sf5 } />
              </a>

              <a href="https://connect.symfony.com/profile/kardasz">
                  <img alt="Symfony 4 Certified Developer" src={sf4 } />
              </a>

              <a href="https://www.zend-zce.com/en/yellow-pages/ZEND014470">
                  <img alt="Zend Certified PHP Engineer" src={ zcpe } />
              </a>

              <a href="https://www.zend-zce.com/en/yellow-pages/ZEND014470">
                  <img alt="Zend PHP 5 Certified Engineer" src={ zce} />
              </a>

              <a href="https://www.zend-zce.com/en/yellow-pages/ZEND014470">
                  <img alt="Zend Framework 1 Certified Engineer" src={ zfce } />
              </a>
          </p>
      </header>
    </div>
  );
}

export default App;
