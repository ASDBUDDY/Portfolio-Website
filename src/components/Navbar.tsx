function Navbar() {

    return <>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-opacity-75" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand " href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
                    <div className="navbar-nav min-vw-100 justify-content-evenly">
                        <a className="nav-link active " aria-current="true" href="#scrollspyHeading1">Home</a>
                        <a className="nav-link active " href="#scrollspyHeading2">Portfolio</a>
                        <a className="nav-link active " href="#scrollspyHeading3">About Me</a>
                        <a className="nav-link active " href="#scrollspyHeading4">Contact</a>
                        
                    </div>
                </div>
            </div>
        </nav>
        

    </>
}

export default Navbar;