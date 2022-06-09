import BranchPanelBlock from "../BranchPanelBlock/BranchPanelBlock";

const BranchPanelBlockGroup = (props) => {
    const { updateScanList, branchList } = props;

    const printBranches = () => {
        return branchList.map((branch) => {
            return <BranchPanelBlock key={branch.id} branchList={ branchList } branchName={branch.name.split('/').pop()} branchId={branch.id} updateScanList={ updateScanList } />
        });
    }

    return(
        branchList.length > 0 ?
        printBranches()        
        :
        <BranchPanelBlock branchList={ branchList } branchName={"no branches synced"} branchId={0} updateScanList={ updateScanList } />        
    );
}

export default BranchPanelBlockGroup;