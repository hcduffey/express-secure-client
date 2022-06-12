import { Heading } from "react-bulma-components";
import GitHubAccountAdminTable from "../../components/GitHubAccount/GitHubAccountAdminTable/GitHubAccountAdminTable";

const Admin = (props) => {
    const { updateGitHubAccountList, updateScanList, updateBranchList, gitHubAccount, updateGitHubAccount } = props
    const { updateNotificationMessage } = props

    return(
        <>
        <Heading>Admin Page</Heading>
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                GitHub Accounts
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <GitHubAccountAdminTable updateNotificationMessage={ updateNotificationMessage } updateGitHubAccountList={ updateGitHubAccountList } updateScanList={ updateScanList } updateBranchList={ updateBranchList } gitHubAccount={ gitHubAccount } updateGitHubAccount={ updateGitHubAccount } />
                </div>
            </div>
        </div>
        </>
    )
}

export default Admin;