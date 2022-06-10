import RepositoryPanel from "../../components/Respository/RepositoryPanel/RepositoryPanel"
import ScanTable from "../../components/Scan/ScanTable/ScanTable";
import { useState } from "react"
import ScanButton from "../../components/Scan/ScanButton/ScanButton";


const Home = (props) => {

    const { gitHubAccount } = props
    const [repositoryList, updateRepositoryList] = useState([]);
    const { branchList, updateBranchList } = props;
    const [currentBranch, updateCurrentBranch] = useState(null);
    const [scanList, updateScanList] = useState([]);
    const [showProgressBar, updateShowProgressBar] = useState(false);

    // https://codepen.io/ais-one/pen/KKMMPaK for layout 
    return (
        <div className="columns">
            <aside className="column is-4 is-narrow-mobile is-fullheight section">
                <RepositoryPanel updateScanList={ updateScanList } updateCurrentBranch={ updateCurrentBranch } branchList={ branchList } updateBranchList={ updateBranchList } repositoryList={ repositoryList } updateRepositoryList={ updateRepositoryList } gitHubAccount={gitHubAccount} />
            </aside>
            <div className="container column is-8">
                <div className="section">
                    <div className="card">
                        <div className="card-header">
                            <p className="card-header-title is-centered">Scans</p>
                        </div>
                        <div className="card-content">
                            <div className="content"><ScanTable scanList={ scanList }/></div>
                        </div>
                        <div className="card-footer">
                            <p className="card-footer-item"><ScanButton showProgressBar={ showProgressBar } updateShowProgressBar={ updateShowProgressBar } updateScanList={ updateScanList } currentBranch={ currentBranch } scanList={ scanList } /></p>
                        </div>
                    </div>
                </div>
                <div className="section">
                    ChartGoHere
                </div>
            </div>
        </div>
    )
}

export default Home