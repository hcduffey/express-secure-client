import ScanRow from "../ScanRow/ScanRow";

const ScanTable = (props) => {
    const { scanList } = props;

    const printScanRow = () => {
        return scanList.map((scan) => {
            return <ScanRow key={scan.id} scan={scan} />
        });
    }

    return(
        scanList && scanList.length > 0 ?
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Vulnerabilities</th>
                    <th>Date</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                { printScanRow() }
            </tbody>
        </table>
        :
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Vulnerabilities</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    )
}

export default ScanTable;