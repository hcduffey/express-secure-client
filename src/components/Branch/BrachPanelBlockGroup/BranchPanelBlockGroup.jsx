import BranchPanelBlock from "../BranchPanelBlock/BranchPanelBlock";

const BranchPanelBlockGroup = (props) => {
    const { updateScanList, branchList } = props;
    const { updateCurrentBranch } = props;

    const printBranches = () => {
        return branchList.map((branch) => {
            return <BranchPanelBlock key={branch.id} updateCurrentBranch={ updateCurrentBranch } branchList={ branchList } branchName={branch.name.split('/').pop()} branchId={branch.id} updateScanList={ updateScanList } />
        });
    }

    return(
        branchList.length > 0 ?
        printBranches()        
        :
        <BranchPanelBlock updateCurrentBranch={ updateCurrentBranch } branchList={ branchList } branchName={"no branches synced"} branchId={0} updateScanList={ updateScanList } />        
    );
}

export default BranchPanelBlockGroup;