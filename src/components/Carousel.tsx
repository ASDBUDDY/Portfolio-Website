
import Carousel from 'react-bootstrap/Carousel';

const CaptionImage = () => {
   return <>
    <div className="shadow p-3 mb-5 bg-dark bg-opacity-75 rounded">
   <h2>Adiraj Singh</h2>
   <h3> Game Programmer and Developer</h3>
    <p>A Unity and C# Developer with over 3 years of industry experience. TIGA Post Graduate of the Year 2025 Accolade and UK Game Education Award Finalist 2025. Proficient in Gameplay Programming and Prototyping, Animation Integration and Backend Integrations. Recently earned a Distinction in Masters in Computer Games Development (Programming) at ARU, Cambridge.</p>
         </div> 
          </> 
}



function CarouselNew() {
    
    return (
    <Carousel fade id="scrollspyHeading1" className='bg-dark'>
      <Carousel.Item interval={4000}>
        <video src='https://github.com/ASDBUDDY/Portfolio-Website/blob/main/src/video/Hiddenlens.mp4' className="d-block vw-100 vh-100 min-vw-50 min-vh-50" autoPlay muted loop />
        <Carousel.Caption>
          {CaptionImage()}
        </Carousel.Caption>
      </Carousel.Item>
     <Carousel.Item interval={6000}>
        <video src='https://github.com/ASDBUDDY/Portfolio-Website/blob/main/src/video/Farmfiendsvid.mp4' className="d-block vw-100 vh-100 min-vw-50 min-vh-50" autoPlay muted loop />
        <Carousel.Caption>
          {CaptionImage()}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <video src='https://github.com/ASDBUDDY/Portfolio-Website/blob/main/src/video/Faugvid.mp4' className="d-block vw-100 vh-100 min-vw-50 min-vh-50" autoPlay muted loop />
        <Carousel.Caption>
          {CaptionImage()}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

}

export default CarouselNew;