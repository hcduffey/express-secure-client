import { useState, useEffect } from "react"
import GitHubAccountAdminTableRow from "../GitHubAccountAdminTableRow/GitHubAccountAdminTableRow";

const GitHubAccountAdminTable = (props) => {
    const [gitHubAccountAdminList, updateGitHubAccountAdminList] = useState([]);
    const { updateScanList, updateBranchList, gitHubAccount, updateGitHubAccount } = props
    const { updateGitHubAccountList } = props
    const { updateNotificationMessage } = props

    const getGitHubAccounts = async() => {
        try {
            let response = await fetch('https://express-secure-api.herokuapp.com/githubaccounts/')
            if(response.ok) {
                let data = await response.json();
                updateGitHubAccountAdminList(data);
                updateGitHubAccountList(data);
            }
            else {
                updateNotificationMessage('Error: ' + response.err);
            }
        }
        catch(err) {
            updateNotificationMessage("Error: " + err.message)
        }
    }
    
    useEffect(() => {
        if(gitHubAccountAdminList.length === 0) {
            getGitHubAccounts();
        }
    })

    return(
        gitHubAccountAdminList.length > 0 ?
        <table className="table">
            <thead>
                <tr>
                    <th>Owner</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                { 
                    gitHubAccountAdminList.map((account, index) => {
                        return <GitHubAccountAdminTableRow key={index} account={account} updateNotificationMessage={updateNotificationMessage} getGitHubAccounts={getGitHubAccounts} updateScanList={ updateScanList } updateBranchList={ updateBranchList } gitHubAccount={ gitHubAccount } updateGitHubAccount={ updateGitHubAccount } />
                    })
                } 
            </tbody>
        </table>
        :
        <table className="table">
            <thead>
                <tr>
                    <th>Owner</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    )
}

export default GitHubAccountAdminTable;