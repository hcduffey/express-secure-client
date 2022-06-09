import './Main.css'
import { Routes, Route } from "react-router"
import Home from '../Home/Home'
import GitHubAccountModal from '../../components/GitHubAccount/GitHubAccountModal/GitHubAccountModal'
import { useState } from 'react'

const Main = (props) => {
    const {gitHubAccount, updateGitHubAccount} = props
    const {gitHubAccountModalActive, updateGitHubAccountModalActive} = props
    const [branchList, updateBranchList ] = useState([]);

    return(
        <main>
            <GitHubAccountModal updateBranchList={ updateBranchList } gitHubAccount={ gitHubAccount } updateGitHubAccount={ updateGitHubAccount } gitHubAccountModalActive={ gitHubAccountModalActive } updateGitHubAccountModalActive={ updateGitHubAccountModalActive }/>
            <Routes>
                <Route index element={<Home gitHubAccount={ gitHubAccount } branchList={ branchList } updateBranchList={ updateBranchList } />} />
            </Routes>
        </main>
    )
}

export default Main