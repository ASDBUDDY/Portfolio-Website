

const Footer = () => {
  return (
    <>
        <div id= "scrollspyHeading4" className="container-fluid bg-dark" style={{minHeight: '200px'}}>
        <div className="row mx-auto py-5 justify-content-center">
            <div className="col-md-5">
                <h3 className="text-white " style={{justifySelf: 'center'}}>Contact Me</h3>
                <hr
                  className="border border-light border-3 opacity-75"
                  style={{ width: "80px", justifySelf: "center" }}
                ></hr>
            </div>
        <div className="row mx-auto py-5 justify-content-around">
        <div className="col-lg-5">
            <p className="text-white">© 2025 Adiraj Singh</p>
        </div>
        <div className="col-lg-2">
            <a className="navbar-brand m-2" href="https://www.linkedin.com/in/adiraj-singh-6a36a6253/" target="_blank">
            <img src="src\images\LinkedIn.png" alt="Bootstrap" width="50" height="50" /></a>
            <a className="navbar-brand m-2" href="mailto:adirajsingh.buddy@gmail.com" target="_blank">
            <img src="src\images\Mail.png" alt="Bootstrap" width="50" height="50" /></a>
        </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Footer
