import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  // manages the state of the currently used GitHub account
  const [gitHubAccount, updateGitHubAccount] = useState(null);
  const [gitHubAccountModalActive, updateGitHubAccountModalActive] = useState(false)

  return (
    <div className="App">
      <NavBar gitHubAccount={ gitHubAccount } updateGitHubAccount={ updateGitHubAccount } gitHubAccountModalActive={ gitHubAccountModalActive } updateGitHubAccountModalActive={ updateGitHubAccountModalActive }/>
    </div>
  );
}

export default App;
