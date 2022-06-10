import RepositoryPanel from "../../components/Respository/RepositoryPanel/RepositoryPanel"
import ScanTable from "../../components/Scan/ScanTable/ScanTable";
import { useState } from "react"
import { Button } from "react-bulma-components";


const Home = (props) => {

    const { gitHubAccount } = props
    const [repositoryList, updateRepositoryList] = useState([]);
    const {branchList, updateBranchList } = props;
    const [scanList, updateScanList] = useState([]);

    console.log(scanList)
    // https://codepen.io/ais-one/pen/KKMMPaK for layout 
    return (
        <div className="columns">
            <aside className="column is-4 is-narrow-mobile is-fullheight section">
                <RepositoryPanel updateScanList={ updateScanList } branchList={ branchList } updateBranchList={ updateBranchList } repositoryList={ repositoryList } updateRepositoryList={ updateRepositoryList } gitHubAccount={gitHubAccount} />
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
                            <p className="card-footer-item"><Button className="is-small">New Scan</Button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home