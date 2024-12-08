import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Card from 'react-bootstrap/Card';
import Uberhelp from './components/Uberhelp';
import Solutions from './components/Solutions';
import Questions from './components/Questions';
import Appdownload from './components/Appdownload';



function App() {

  return (
    <>
    <Header/>
    <div className="container mt-2">
  <div className="d-none d-lg-flex align-items-center justify-content-between">
    <div>
      <h3 className="fw-bold">Ride</h3>
    </div>
    <div>
      <button className="btn  me-2">Request a ride</button>
      <button className="btn  me-2">Reserve a ride</button>
      <button className="btn  me-2">See prices</button>
      <button className="btn ">Explore ride options</button>
    </div>
  </div>

  <div className="d-lg-none">
    <select className="form-select fw-bold border border-0"  style={{width:'90px'}}>
      <option value="ride">Ride</option>
      <option value="request">Request a ride</option>
      <option value="reserve">Reserve a ride</option>
      <option value="prices">See prices</option>
      <option value="explore">Explore ride options</option>
    </select>
  </div>
</div>


    <div className="container mt-5">
     <div className="row">
     <div className="col-md-6 d-flex justify-content-center align-items-center">
       <div>
       <h1 className='' style={{fontSize:'50px', fontWeight:'900',color:'black'}}>Request a ride for <br className='d-md-block' /> now or later</h1>
        <p>Add your trip details, hop in, and go.</p>
      
          <input type="text" placeholder='Enter Location' style={{background:'rgb(229, 228, 226)'}}  className='form-control' />
          <input type="text" placeholder='Enter Destination'  style={{background:'rgb(229, 228, 226)'}} className='form-control mt-3' />
          <div className='mt-4'>
            <button className='btn text-light px-4 py-2' style={{background:'black'}}>See prices</button>
            <button className='btn text-dark ms-4 px-4 py-2' style={{background:'rgb(229, 228, 226)'}}>Schedule for later</button>
          </div>
       </div>
       
      </div>
      <div className="col-md-6">
        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png" alt="" className='w-100 p-5 d-none d-lg-block' />
      </div>
     </div>
    </div>

    <div className="container mt-5">
  <h2 className="mt-2 fs-2 fw-bold">Suggestions</h2>
  
  <div className="row mt-4">
    <div className="col-lg-4 col-md-6 mb-4">
      <Card className="p-3" style={{ background: 'rgb(229, 228, 226)' }}>
        <h5 className="mb-0 fw-bold ms-2 mt-3">Ride</h5>
        <Card.Body>
          <div className="row">
            <div className="col-8 d-flex justify-content-center align-items-center">
              <p className="mb-0">Go anywhere with Uber. Request a ride, hop in, and go.</p>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <img 
                src="https://mobile-content.uber.com/launch-experience/ride.png" 
                alt="Ride" 
                className="img-fluid" 
                style={{ height: '120px' }} 
              />
            </div>
          </div>
          <button 
            className="btn text-dark bg-light mt-3 " 
            style={{ borderRadius: '50px' }}>
            Details
          </button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-4 col-md-6 mb-4">
      <Card className="p-3" style={{ background: 'rgb(229, 228, 226)' }}>
        <h5 className="mb-0 fw-bold ms-2 mt-3">Reserve</h5>
        <Card.Body>
          <div className="row">
            <div className="col-8 d-flex justify-content-center align-items-center">
              <p className="mb-0">Reserve your ride in advance so you can relax on the day of your trip.</p>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <img 
                src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png" 
                alt="Reserve" 
                className="img-fluid" 
                style={{ height: '120px' }} 
              />
            </div>
          </div>
          <button 
            className="btn text-dark bg-light mt-3 " 
            style={{ borderRadius: '50px' }}>
            Details
          </button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-4 col-md-12 mb-4">
    </div>
  </div>
</div>


<div className="container mt-5">
  <div className="row align-items-center mt-5">
    <div className="col-lg-6 text-center text-lg-start">
      <img
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_311,w_552/v1683576635/assets/f7/7aa380-a378-47bf-8b88-aaba1587efdd/original/landing-stops-group-rides.png"
        className="img-fluid p-2"
        alt="Group Rides"
      />
    </div>
    <div className="col-lg-6 mt-4 mt-lg-0">
      <h1 className="fs-1 fw-bold mb-4">Ride with friends seamlessly</h1>
      <p className="mb-4">
        Riding with friends just got easier: set up a group ride in the 
        Uber app, invite your friends, and arrive at your destination. 
        Friends who ride together save together.
      </p>
      <button className="btn btn-light text-decoration-underline">Learn More</button>
    </div>
  </div>
</div>

    <Uberhelp/>
    <Solutions/>
    <Questions/>
    <Appdownload/>

    <Footer/>
    </>
     
  )
}

export default App
