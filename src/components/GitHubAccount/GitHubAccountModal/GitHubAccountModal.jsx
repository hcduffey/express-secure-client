import './GitHubAccountModal.css'
import { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { Heading, Button } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import GitHubAccountListDropDown from '../GitHubAccountListDropDown/GitHubAccountsListDropDown';
import GitHubAccountNewInput from '../GitHubAccountNewInput/GitHubAccountNewInput';

// style used to pass to the modal function provided by react-modal
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

const GitHubAccountModal = (props) => {
    const {gitHubAccount, updateGitHubAccount} = props;
    const {gitHubAccountModalActive, updateGitHubAccountModalActive} = props;
    const {updateBranchList} = props;
    const [gitHubAccountList, updateGitHubAccountList] = useState(null);
    const [selectedGitHubAccount, updateSelectedGitHubAccount] = useState(null);
    const [importGitHubAccount, updateImportGitHubAccount] = useState(null);

    // MODAL FUNCTIONS
    Modal.setAppElement('#root');

    const afterOpenModal = () => {
    }

    const closeModal = () => {
        updateGitHubAccountModalActive(false)
    }

    // When one of the buttons is clicked, update the current GitHub account and close modal

    const selectOnClick = () => {
        if(selectedGitHubAccount !== null) {
            updateGitHubAccount(selectedGitHubAccount)
            updateBranchList([]);
            closeModal()
        }
    }

    const createGitHubAccount = async() => {
    
        try {
            let response = await fetch("https://express-secure-api.herokuapp.com/githubaccounts/", 
            {
                method: "POST",
                body: JSON.stringify({owner: importGitHubAccount})
            });
            if(response.ok) {
                let result = await response.json();
                updateGitHubAccount(result);
                updateGitHubAccountList(null);
                updateBranchList([]);
                
                closeModal();
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

    const importOnClick = () => {
        if(importGitHubAccount !== null) {
            createGitHubAccount()
        }
    }

    return(
        <Modal
                isOpen={gitHubAccountModalActive}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Set GitHub Account Modal"
        >
                <div className="header"><button className='button is-text' onClick={closeModal}><FontAwesomeIcon icon={faCircleXmark} /></button></div>
                <Heading>Select GitHub Account</Heading>
                {gitHubAccount && <h2 className="currentAccount">Current Account: {gitHubAccount.owner}</h2>}
                <div>
                    <div className="field has-addons">
                        <div className="control">
                            <GitHubAccountListDropDown gitHubAccountList={gitHubAccountList} updateGitHubAccountList={updateGitHubAccountList} updateSelectedGitHubAccount={updateSelectedGitHubAccount} />
                        </div>
                        <div className="control">
                            <Button onClick={selectOnClick} color="info is-light">Select</Button>
                        </div>
                    </div>
                    <hr />
                    <div className="field has-addons">
                        <div className="control">
                            <GitHubAccountNewInput updateImportGitHubAccount={updateImportGitHubAccount} />
                        </div>
                        <div className="control">
                            <Button onClick={importOnClick} color="info is-light">Import</Button>
                        </div>
                    </div>
                </div>
        </Modal>
    );
}

export default GitHubAccountModal;