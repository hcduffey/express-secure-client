import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './pages/Main/Main';

function App() {
  // manages the state of the currently used GitHub account
  const [gitHubAccount, updateGitHubAccount] = useState(null);
  // determines whether the modal to set the current GitHub account is visible
  const [gitHubAccountModalActive, updateGitHubAccountModalActive] = useState(false)

  return (
    <div className="App">
      <NavBar gitHubAccount={ gitHubAccount } updateGitHubAccountModalActive={ updateGitHubAccountModalActive }/>
      <Main gitHubAccount={ gitHubAccount } updateGitHubAccount={ updateGitHubAccount } gitHubAccountModalActive={ gitHubAccountModalActive } updateGitHubAccountModalActive={ updateGitHubAccountModalActive }/>
    </div>
  );
}

export default App;
