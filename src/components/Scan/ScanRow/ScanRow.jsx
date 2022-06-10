import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { CSVLink } from 'react-csv';

const ScanRow = (props) => {
    const { scan } = props;
    const csvData = [['Type', 'Category', 'Severity', 'Description', 'File', 'Lines']]

    // https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/
    const prettyDate = new Date(scan.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"2-digit"}) 

    if(scan.vulnerabilities.length > 0) {
        scan.vulnerabilities.forEach((v) => {
            csvData.push([v.type, v.category, v.severity, v.description, v.file, v.match_line])
        });
    }

    return(
        <tr>
            <td>{scan.name}</td>
            <td>{scan.vulnerabilities.length}</td>
            <td>{prettyDate}</td>
            <td><CSVLink filename={scan.name + '-' + scan.date} data={csvData}><FontAwesomeIcon icon={faDownload} /></CSVLink></td>
        </tr>
    )
}

export default ScanRow