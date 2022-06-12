import './Main.css'
import { Routes, Route } from "react-router"
import Home from '../Home/Home'
import Admin from '../Admin/Admin'
import GitHubAccountModal from '../../components/GitHubAccount/GitHubAccountModal/GitHubAccountModal'
import Notification from '../../components/Notification/Notification'
import { useState } from 'react'

const Main = (props) => {
    const {gitHubAccount, updateGitHubAccount} = props
    const {gitHubAccountModalActive, updateGitHubAccountModalActive} = props
    const [branchList, updateBranchList ] = useState([]);
    const [scanList, updateScanList] = useState([]);
    const [notificationMessage, updateNotificationMessage] = useState(null);
    const [gitHubAccountList, updateGitHubAccountList] = useState(null);

    return(
        <main>
            <GitHubAccountModal updateNotificationMessage={ updateNotificationMessage } gitHubAccountList={ gitHubAccountList } updateGitHubAccountList={ updateGitHubAccountList } updateScanList={ updateScanList } updateBranchList={ updateBranchList } gitHubAccount={ gitHubAccount } updateGitHubAccount={ updateGitHubAccount } gitHubAccountModalActive={ gitHubAccountModalActive } updateGitHubAccountModalActive={ updateGitHubAccountModalActive }/>
            <Notification notificationMessage={ notificationMessage } updateNotificationMessage={ updateNotificationMessage } />
            <Routes>
                <Route index element={<Home updateNotificationMessage={updateNotificationMessage} gitHubAccount={ gitHubAccount } branchList={ branchList } updateBranchList={ updateBranchList } scanList={ scanList } updateScanList={ updateScanList } />} />
                <Route path='/admin' element={<Admin updateNotificationMessage={ updateNotificationMessage } updateGitHubAccountList={ updateGitHubAccountList } updateScanList={ updateScanList } updateBranchList={ updateBranchList } gitHubAccount={ gitHubAccount } updateGitHubAccount={ updateGitHubAccount } />} />
            </Routes>
        </main>
    )
}

export default Main