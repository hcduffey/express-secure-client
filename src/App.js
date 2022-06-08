import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  // manages the state of the currently used GitHub account
  const [gitHubAccount, updateGitHubAccount] = useState(null);

  return (
    <div className="App">
      <NavBar gitHubAccount={ gitHubAccount } />
    </div>
  );
}

export default App;
