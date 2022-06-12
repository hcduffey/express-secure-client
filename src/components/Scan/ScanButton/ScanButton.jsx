import { Button } from "react-bulma-components";

const ScanButton = (props) => {
    const { updateScanList, scanList } = props
    const { currentBranch } = props
    const { showProgressBar, updateShowProgressBar } = props
    const { updateNotificationMessage } = props

    const scanName = () => {
        let branchArray = currentBranch.name.split('/');
        return (branchArray[4] + "-" + branchArray[5] + "-" + (currentBranch.scans.length+1));
    }

    const getUpdatedScan = async(id) => {
        try {
            let response = await fetch(`https://express-secure-api.herokuapp.com/scans/${id}/`);
            if(response.ok) {
                let result = await response.json();
                updateShowProgressBar(false)
                updateScanList([...scanList, result]);
            }
            else {
                updateNotificationMessage("Error: " + response.status)
                updateShowProgressBar(false)
                return null;
            }
            
        }
        catch(err) {
            updateNotificationMessage(err);
            updateShowProgressBar(false)
            return null;
        }
    }

    const createScan = async() => {
        try {
            let response = await fetch(`https://express-secure-api.herokuapp.com/scans/`, 
            {
                method: "post",
                body: JSON.stringify({name: scanName(), branch_id: currentBranch.id})
            });
            if(response.ok) {
                let result = await response.json();
                getUpdatedScan(result.id);    
            }
            else {
                updateShowProgressBar(false)
                updateNotificationMessage(response.statusText);
                return null;
            }
            
        }
        catch(err) {
            updateNotificationMessage(err.message);
            updateShowProgressBar(false)
            return null;
        }
    }

    const handleClick = () => {
        updateShowProgressBar(true);
        createScan();
    }

    if(currentBranch && showProgressBar) {
        return(
            <progress className="progress is-small is-primary" max="100">15%</progress>
        )
    }

    return(
        currentBranch && <Button onClick={ handleClick } className="is-small">New Scan</Button>
    )
}

export default ScanButton;