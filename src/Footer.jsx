const Footer = () =>{

    var today = new Date();

    return (
        <footer className="container">
        <div className="row justify-content-center mt-3 mb-4">
            <div className="col-8" style={{
                color: 'gold',
                opacity: '70%',
                textAlign: 'center',
                paddingBottom: '50px',
                margin: '10px'
            }}>
            <h1>Team Member Allocation App - {today.getFullYear()}</h1>
            This was coded by Christopher Shaw, find the open-source code on
        <a href="https://github.com/FramedGames1/React-Team-Manager" id="link">GitHub<img src='https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Github-512.png' id="Git"></img></a>
            </div>
            </div>
        </footer>
    )
}
export default Footer