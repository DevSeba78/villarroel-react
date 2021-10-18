import Carousel from "react-bootstrap/Carousel";
import '../NavBar/carrousel.css'

const CarrouselImg = () => {
    
    return (
        <>
        <Carousel fade>
        <Carousel.Item>
        <img
        className="d-block w-100 carrousel"
        src="https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8NDE2MDExfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block w-100 carrousel"
        src="https://images.unsplash.com/photo-1618222499121-d6528f6d9d77?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8NDE2MDExfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        alt="Second slide"
        />
        
        {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block w-100 carrousel"
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDE2MDExfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        alt="Third slide"
        />
        
        {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>
        </>
        )
    
}
export default CarrouselImg;