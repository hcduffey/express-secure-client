import './GitHubAccountModal.css'
import { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { Heading, Button } from 'react-bulma-components';
import GitHubAccountListDropDown from '../GitHubAccountListDropDown/GitHubAccountsListDropDown';

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
    const {gitHubAccount, updateGitHubAccount} = props
    const {gitHubAccountModalActive, updateGitHubAccountModalActive} = props
    
    const [gitHubAccountList, updateGitHubAccountList] = useState(null)

    // MODAL FUNCTIONS
    Modal.setAppElement('#root');

    const afterOpenModal = () => {
    }

    const closeModal = () => {
        updateGitHubAccountModalActive(false)
    }

    return(
        <Modal
                isOpen={gitHubAccountModalActive}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Set GitHub Account Modal"
        >
                <Heading>Select GitHub Account</Heading>
                {gitHubAccount && <h2 className="currentAccount">Current Account: {gitHubAccount.owner}</h2>}
                <div>
                    <GitHubAccountListDropDown gitHubAccountList={gitHubAccountList} updateGitHubAccountList={updateGitHubAccountList} />
                    <Button color="info is-light">Select</Button>
                    <hr />
                    <Button color="info is-light">Import</Button>
                </div>
                
        </Modal>
    );
}

export default GitHubAccountModal;