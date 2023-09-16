import logo from './biochar.jpeg';
import './App.css';
import Whatisbiochar from "./components/whatisbiochar";
import Howisitmade from './components/howisitmade';
import Energy from './components/energy';
import Whycantiburnit from './components/whycantiburnit';
import Whyisbiochargoodforsoil from './components/whyisbiochargoodforsoil';
import Whatssogreat from './components/whatssogreataboutit';
import Chatgpt from './components/chatgpt';
function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>This is biochar.</code>
        
        </p>
      </header>
      <div className="biochar">
        <div>
          <Whatisbiochar />
        </div>
        <div>
          <Whatssogreat />
        </div>
        <div>
          <Howisitmade />
        </div>
        <div>
          <Energy />
        </div>
        <div>
          <Whycantiburnit />
        </div>{" "}
        <div>
          <Whyisbiochargoodforsoil />
        </div>
        <div>
          <Chatgpt />
        </div>
      </div>
    </div>
  );
}

export default App;
