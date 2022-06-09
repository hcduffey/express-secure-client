import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bulma-components';

const BranchSyncButton = (props) => {
    const { currentRepository, updateBranchList } = props

    const getBranches = async (urls) => {
        Promise.all(urls.map(u=>fetch(u))).then(responses =>
            Promise.all(responses.map(res => res.json()))
        ).then(data => {
            updateBranchList([...data]);
        }).catch(err => console.log(err));
    }

    const handleClick = () => {
        if(currentRepository) {
            let urls = currentRepository.branches.map((branchId) => {
                return `https://express-secure-api.herokuapp.com/branches/${branchId}/`
            })

            if(urls.length > 0) {
                getBranches(urls);
            }
        }

    }

    return(
        currentRepository ?
        <div className="panel-block">
            <div className="control has-icons-left">
                <Button onClick={handleClick}>
                <span className="icon">
                    <FontAwesomeIcon icon={faSync} />
                </span>
                </Button>
            </div>
        </div>
        :
        <div className="panel-block">
            <div className="control has-icons-left">
                <Button onClick={handleClick} disabled={true}>
                <span className="icon">
                    <FontAwesomeIcon icon={faSync} />
                </span>
                </Button>
            </div>
        </div>
    )
}

export default BranchSyncButton;