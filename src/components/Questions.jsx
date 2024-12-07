import Accordion from 'react-bootstrap/Accordion';

function Questions() {
  return (
    <>
    <div className="container my-5">
        <div className="row">
            <h1 className="fw-bold mb-5">Frequently asked questions</h1>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='fw-bold'>Can I have a lost item delivered to me?</Accordion.Header>
        <Accordion.Body>
        The Uber app helps provide a delivery solution that can save you a trip across town, whether it’s for a last-minute birthday gift or your forgotten keys. Just choose Package in the Uber app.
        <br />
        <button className='btn border border-0' style={{textDecoration:'underline'}}>Get Details</button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='fw-bold'>Can I rent a car using Uber?</Accordion.Header>
        <Accordion.Body>
        Yes. <span style={{textDecoration:'underline'}}>Find out more</span> about how car rentals work.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className='fw-bold'>Can I request a ride that picks up friends in different locations?</Accordion.Header>
        <Accordion.Body>
        Yes. Set up a group ride in the Uber app, invite your friends, and arrive at your destination together.
        <br />
        <button className='btn border border-0' style={{textDecoration:'underline'}}>Learn more</button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className='fw-bold'>Can I request a taxi on Uber?</Accordion.Header>
        <Accordion.Body>
        Uber makes it easy to get a taxi nearby in the cities where Uber Taxi is available. There’s no need to find a cab stand, hail a cab on the street, or even call the local cab company. Instead, you can use the Uber app or website to request a taxi in just a few taps or clicks.
        <br />
        <button className='btn border border-0' style={{textDecoration:'underline'}}>Learn about requesting a taxi</button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header className='fw-bold'>Is there an Uber ride option for 5 people?</Accordion.Header>
        <Accordion.Body>
        Request UberXL for a van or SUV that fits up to 6 people at an affordable price. It’s perfect for a family trip or a ride to the airport.
        <br />
        <button className='btn border border-0' style={{textDecoration:'underline'}}>Get details about UberXL</button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    </div>
    </>
  )
}

export default Questions