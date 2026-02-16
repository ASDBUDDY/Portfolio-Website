const About = () => {
  return (
    <>
      <div id="scrollspyHeading3"
        className="container-fluid text-center bg-dark bg-opacity-25" style={{ minHeight: "400px"}}>
        <div className= "container py-5">
            <div className="card bg-light mx-auto" style={{  maxWidth: "800px", justifySelf: 'center'}}>
              <div className="card-body">
                <h5 className="card-title">About Me</h5>
                <hr
                  className="border border-dark border-3 opacity-75"
                  style={{ width: "50px", justifySelf: "center" }}
                ></hr>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Adiraj Singh
                </h6>
                <p className="card-text">
                  A <strong>Unity</strong> and <strong>C#</strong> Developer
                  with over 3 years of industry experience.
                  <strong>TIGA Post Graduate of the Year</strong> 2025 Accolade
                  and <strong>UK Game Education Award Finalist</strong> 2025.
                  Proficient in Gameplay Programming and Prototyping, Animation
                  Integration and Backend Integrations. Recently earned a 
                  <strong> Distinction</strong> in Masters in Computer Games
                  Development (Programming) at ARU, Cambridge.
                </p>
                <p className="card-text">
                  I have experience working on areas such as
                  Multiplayer (Photon), Game Mechanics, Data structure and
                  architecture, Back-end Data management (Playfab), Animations,
                  Game AI as well as UI Implementation and Designing. I have
                  worked on projects both on Mobile Phones (Android as well as
                  iOS) as well as PC.
                </p>
                <a href="https://drive.google.com/file/d/1xwPcqs3EcadNuLvIGYWYIHVJUrW9B7qW/view?usp=sharing" target="_blank" className="btn btn-primary">
                  Download My CV
                </a>
               
              </div>
            </div>
          </div>
         </div>
    </>
  );
};

export default About;
