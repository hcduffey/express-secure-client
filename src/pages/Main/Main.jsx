import './Main.css'
import { Routes, Route } from "react-router"
import Home from '../Home/Home'
import GitHubAccountModal from '../../components/GitHubAccountModal/GitHubAccountModal'

const Main = (props) => {
    const {gitHubAccount, updateGitHubAccount} = props
    const {gitHubAccountModalActive, updateGitHubAccountModalActive} = props

    return(
        <main>
            <GitHubAccountModal gitHubAccount={ gitHubAccount } updateGitHubAccount={ updateGitHubAccount } gitHubAccountModalActive={ gitHubAccountModalActive } updateGitHubAccountModalActive={ updateGitHubAccountModalActive }/>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </main>
    )
}

export default Main