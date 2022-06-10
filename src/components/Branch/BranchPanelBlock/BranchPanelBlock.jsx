import './BranchPanelBlock.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const BranchPanelBlock = (props) => {
    const { branchName, branchId, branchList } = props
    const { updateCurrentBranch } = props
    const { updateScanList } = props

    const getScans = async (urls) => {
        Promise.all(urls.map(u=>fetch(u))).then(responses =>
            Promise.all(responses.map(res => res.json()))
        ).then(data => {
            updateScanList([...data]);
        }).catch(err => console.log(err));
    }

    const handleClick = () => {
        //grab the scans and update table
        const selectedBranch = branchList.find((branch) => branch.id === branchId);
        updateCurrentBranch(selectedBranch);
        getScans(selectedBranch.scans)
    }

    return(
        <div onClick={ handleClick } className="panel-block branch">
            <span className="panel-icon">
                <FontAwesomeIcon icon={faCodeBranch} />
            </span>
            { branchName }
        </div>
    )
}

export default BranchPanelBlock