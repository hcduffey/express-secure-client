import { useEffect } from "react";

const GitHubAccountListDropDown = (props) => {

    const {gitHubAccountList, updateGitHubAccountList} = props;
    const {updateSelectedGitHubAccount} = props;
    const {updateNotificationMessage} = props;
    /**
     * Fetches all of the GitHubAccounts from the database to update/sync local state.
     *
     */
    const getGitHubAccountList = async () => {
        
        try {
            let response = await fetch("https://express-secure-api.herokuapp.com/githubaccounts/");
            let result = await response.json();
            updateGitHubAccountList(result);
        }
        catch(err) {
            updateNotificationMessage(err.message);
            return null;
        }

    }

    // if gitHubAccountList is empty grab all of the currently stored GitHubAccounts
    useEffect(() => {
        if( gitHubAccountList === null ) {
            getGitHubAccountList();
        }
    });

    // returns options for the select input based on the values of GitHubAccountsList state
    const getSelectOptions = () => {
        return(
            gitHubAccountList.map((account) => {
                return <option key={account.id} id={account.id} value={account.owner}>{account.owner}</option>
            })   
        );
    }

    const selectChanged = (e) => {
        const id = e.target.childNodes[e.target.selectedIndex].id

        if(id !== "0") {
            const currentGitHubAccount = gitHubAccountList.find(element => element.id === parseInt(id));
            updateSelectedGitHubAccount(currentGitHubAccount);
        }   
    }

    return (
        gitHubAccountList ?
        <div className="select">
            <select onChange={selectChanged} itemID="gitHubAccountSelect" defaultValue="0">
                <option disabled value="0"> -- existing account -- </option>
                { getSelectOptions() }
            </select>
        </div>
        :
        <span>Loading...</span>
    );
}

export default GitHubAccountListDropDown;