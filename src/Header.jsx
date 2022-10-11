import './App.css'

const Header = ({selectedTeam, teamMemberCount}) =>{

    return (
        <div className="container" id='header'>
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8" style={{
                color: 'gold',
                opacity: '70%'}}>
                    <h1>Team Member Allocation</h1>
                    <h3>{selectedTeam} has {teamMemberCount} members</h3>
                </div>
            </div>
        </div>
    )
}
export default Header