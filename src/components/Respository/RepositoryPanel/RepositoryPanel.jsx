import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import RepositoryListDropDown from '../RepositoryListDropDown/RepositoryListDropDown';
import BranchPanelBlockGroup from '../../Branch/BrachPanelBlockGroup/BranchPanelBlockGroup';
import BranchSyncButton from '../../Branch/BranchSyncButton/BranchSyncButton';

const RepositoryPanel = (props) => {
    const { gitHubAccount } = props;
    const { repositoryList, updateRepositoryList } = props;
    const { updateScanList } = props;

    const [currentRepository, updateCurrentRepository] = useState(null);
    const { branchList, updateBranchList } = props;
    const { updateCurrentBranch } = props;
    const { updateNotificationMessage } = props;

    const getRepositoryList = async (urls) => {
        
        Promise.all(urls.map(u=>fetch(u))).then(responses =>
            Promise.all(responses.map(res => res.json()))
        ).then(data => {
            updateRepositoryList([...data]);
        }).catch(err => updateNotificationMessage(err.message));

    }

    useEffect(() => {
        // if repo ids are included in the gitHubAccount, and we haven't filled the repoList yet
        if(gitHubAccount && repositoryList.length === 0) {
            let urls = gitHubAccount.repositories.map((repositoryId) => {
                return `https://express-secure-api.herokuapp.com/repositories/${repositoryId}/`
            })
            
            getRepositoryList(urls);
        } else if(gitHubAccount && (repositoryList[0].id !== gitHubAccount.repositories[0])) {
            let urls = gitHubAccount.repositories.map((repositoryId) => {
                return `https://express-secure-api.herokuapp.com/repositories/${repositoryId}/`
            })
            
            getRepositoryList(urls);
        }
    });

    return(
        <nav className="panel">
            <p className="panel-heading">
                Repositories
            </p>
            <div className="panel-block">
                <div className="control has-icons-left">
                    <RepositoryListDropDown updateNotificationMessage={ updateNotificationMessage } updateCurrentBranch={ updateCurrentBranch } repositoryList={ repositoryList } updateCurrentRepository={ updateCurrentRepository } updateBranchList={ updateBranchList } updateScanList={ updateScanList } />
                    <span className="icon is-left">
                        <FontAwesomeIcon icon={faBook} />
                    </span>
                </div>
            </div>
            <BranchPanelBlockGroup updateNotificationMessage={ updateNotificationMessage } updateScanList={ updateScanList } branchList={ branchList } updateCurrentBranch={ updateCurrentBranch } />
            <BranchSyncButton updateNotificationMessage={ updateNotificationMessage } currentRepository={ currentRepository } updateBranchList={ updateBranchList } />
        </nav>
    );
}

export default RepositoryPanel;