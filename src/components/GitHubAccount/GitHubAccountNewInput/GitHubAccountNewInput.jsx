
const GitHubAccountNewInput = (props) => {
    const {updateImportGitHubAccount} = props;

    const inputChanged = (e) => {
        updateImportGitHubAccount(e.target.value);
    }

    return(
        <input onChange={inputChanged} className="input" type="text" placeholder="import new account..." />
    );
}

export default GitHubAccountNewInput;