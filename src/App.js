import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import useMetaMask from './hooks/useMetaMask';

function App() {

  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask();

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="secondary" onClick={connect} disabled={shouldDisable}>
          <img src='images/metamask.svg' alt="MetaMask" width="50" height="50" /> Connect to MetaMask
        </Button>
        <div className="mt-2 mb-2">
          Connected Account: {isActive ? account : ''}
        </div>
        <Button variant="danger" onClick={disconnect}>
          Disconnecte MetaMask<img src='images/hand.svg' alt='hand' width='50' height='50' />
        </Button>
      </header>
    </div>
  );
}

export default App;
