import { useEffect } from "react";

const GitHubAccountListDropDown = (props) => {

    const {gitHubAccountList, updateGitHubAccountList} = props

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
            console.log(err);
            return null;
        }

    }

    useEffect(() => {
        if( gitHubAccountList === null ) {
            getGitHubAccountList();
        }
        else {
            console.log(gitHubAccountList)
        }
    });

    // returns options for the select input based on the values of GitHubAccountsList state
    const getSelectOptions = () => {
        return(
            gitHubAccountList.map((account) => {
                return <option key={account.id} value={account.id}>{account.owner}</option>
            })   
        );
    }

    return (
        gitHubAccountList ?
        <div className="select">
            <select defaultValue="0">
                <option disabled value="0"> -- existing account -- </option>
                { getSelectOptions() }
            </select>
        </div>
        :
        <span>Loading...</span>
    );
}

export default GitHubAccountListDropDown;