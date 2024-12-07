import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faGlobe, faLocationDot, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




function Footer() {
  return (
    <>
      <div className="container-fluid  text-light" style={{background:'black',padding:'60px' }}>
        <h4 className="mt-3 ms-lg-5 ms-0 text-light" style={{marginTop:'80px'}}>Uber</h4>
        <h6 className="ms-lg-5 ms-0  my-5">Visit Help Center</h6>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h6 className="fw-bold mb-3">Company</h6>
              <p className="mt-lg-0 mt-3">About us</p>

              <p>Our offerings</p>

              <p>Newsroom</p>

              <p> Investors</p>

              <p>Blog</p>

              <p className="mb-lg-0 mb-5">Careers</p>
            </div>
            <div className="col-md-3">
              <h6  className="fw-bold mb-3">Products</h6>
              <p>Ride</p>
              <p> Drive</p>

              <p>Deliver</p>

              <p>Eat</p>

              <p>Uber for Business</p>

              <p> Uber Freight</p>

              <p className="mb-lg-0 mb-5">Gift cards</p>
            </div>
            <div className="col-md-3">
              <h6  className="fw-bold mb-3">Global citizenship</h6>
              <p className="mt-lg-0 mt-3">Safety</p>

             <p> Diversity and Inclusion</p>

              <p className="mb-lg-0 mb-5">Sustainability</p>
            </div>
            <div className="col-md-3">
              <h6  className="fw-bold mb-3">Travel</h6>
              <p className="mt-lg-0 mt-3">Reserve</p>

              <p className="mb-lg-0 mb-5">Cities</p>
            </div>
          </div>
        </div>
        <div className="container d-md-flex md-justify-content-between my-5">
          <div>
          <FontAwesomeIcon className="me-5  ms-lg-0 ms-0 fs-5" icon={faFacebook} />
          <FontAwesomeIcon className="me-5 ms-lg-0 ms- 4fs-5" icon={faX} />
          <FontAwesomeIcon className="me-5 ms-lg-0 ms-4 fs-5" icon={faYoutube} />
          <FontAwesomeIcon className="me-5 ms-lg-0 ms-4 fs-5" icon={faLinkedin} />
          <FontAwesomeIcon className="me-5 ms-lg-0 ms-4 fs-5" icon={faInstagram} />
          </div>
          <div className="d-md-flex mt-lg-0 mt-5">
            <p className="me-3"><FontAwesomeIcon icon={faGlobe} />
             <span className="ms-2">English</span></p>
             <p><FontAwesomeIcon icon={faLocationDot} /><span className="ms-2">Kochi</span></p>
          </div>
          </div>
          <div className="container">
            <button><img src="https://en.logodownload.org/wp-content/uploads/2019/06/get-it-on-google-play-badge.png" style={{height:'40px'}} alt="" /></button>
            <button className="ms-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" style={{height:'40px'}} alt="" /></button>
          </div>
          <div className="container d-md-flex justify-content-between">
            <div>
              <p className="mt-5 fst-normal">© 2024 Uber Technologies Inc.</p>
            </div>
            <div className="mt-lg-0 mt-5">
              <button className="btn text-light">Privacy</button>
              <button className="btn text-light ms-3">Accessibility</button>
              <button  className="btn text-light ms-3">Terms</button>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Footer