const RepositoryListDropDown = (props) => {
    const { repositoryList, updateCurrentRepository, updateBranchList } = props;
    const { updateScanList } = props;
    const { updateCurrentBranch } = props;
    const { updateNotificationMessage } = props;

    const getCurrentRepository = async (repo) => {
        try {
            let response = await fetch(`https://express-secure-api.herokuapp.com/repositories/${repo.id}/`, 
            {
                method: "put",
                body: JSON.stringify({url: repo.url})
            });
            if(response.ok) {
                let result = await response.json();
                updateCurrentRepository(result)
                updateBranchList([])
                updateScanList([])
                updateCurrentBranch(null);
            }
            else {
                updateNotificationMessage("Error: " + response.status)
                return null;
            }
            
        }
        catch(err) {
            updateNotificationMessage(err.message);
            return null;
        }
    }

    const selectChanged = (e) => {
        const value = e.target.childNodes[e.target.selectedIndex].value
    
        if(value !== "0") {
            const selectedRepository = repositoryList.find(element => element.id === parseInt(value));
            getCurrentRepository(selectedRepository)
        } else {
            updateCurrentRepository(null)
            updateBranchList([])
            updateScanList([])
            updateCurrentBranch(null)
        }
    }

    const repositoryListOptions = () => {
        return(
            repositoryList.map((element) => {
                return <option key={element.id} value={element.id}>{element.url.split('/').pop()}</option>
            })
        )
    }

    return(
        repositoryList.length !== 0 ?
        <div className="select is-small">
            <select onChange={selectChanged} itemID="repositorySelect" defaultValue="0">
                <option value="0">-- select repository --</option>
                { repositoryListOptions() }
            </select>
        </div>
        :
        <div className="select is-small">
            <select onChange={selectChanged} itemID="repositorySelect" defaultValue="0">
                <option disabled value="0">-- no repositories loaded --</option>
            </select>
        </div>
    )
}

export default RepositoryListDropDown;