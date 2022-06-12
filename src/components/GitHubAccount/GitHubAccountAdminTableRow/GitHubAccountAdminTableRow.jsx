import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bulma-components';

const GitHubAccountAdminTableRow = (props) => {
    const { account, getGitHubAccounts } = props
    const { updateScanList, updateBranchList, gitHubAccount, updateGitHubAccount } = props
    const {updateNotificationMessage} = props

    const deleteGitHubAccount = async() => {
        try {
            let response = await fetch(`https://express-secure-api.herokuapp.com/githubaccounts/${account.id}/`, {method: 'delete'})
            if(response.ok) {
                if(gitHubAccount.id === account.id) {
                    updateGitHubAccount(null);
                    updateBranchList([]);
                    updateScanList([])
                }
                getGitHubAccounts();
            }
            else {
                updateNotificationMessage('Error: ' + response.statusText);
            }
        }
        catch(err) {
            updateNotificationMessage("Error: " + err.message)
        }
    }

    const handleClick = (e) => {
        deleteGitHubAccount();
    }

    return(
        <tr>
            <td>{account.owner}</td>
            <td><Button onClick={handleClick}><FontAwesomeIcon icon={faTrash} /></Button></td>
        </tr>
    )
}

export default GitHubAccountAdminTableRow;