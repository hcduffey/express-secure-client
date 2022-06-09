const RepositoryListDropDown = (props) => {
    const { repositoryList, updateCurrentRepository, updateBranchList } = props;


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
            }
            else {
                console.log("Error: " + response.status)
                return null;
            }
            
        }
        catch(err) {
            console.log(err);
            return null;
        }
    }

    const selectChanged = (e) => {
        const value = e.target.childNodes[e.target.selectedIndex].value
    
        if(value !== "0") {
            const selectedRepository = repositoryList.find(element => element.id === parseInt(value));
            getCurrentRepository(selectedRepository)
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
                <option disabled value="0">-- select repository --</option>
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