import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Uberhelp() {
    return (
        <>
            <div className="container mt-5">
                <h1 className='fw-bold mt-5 mb-3'>Use the Uber app to help you travel your way</h1>
                <div className="row">
                    <div className="col-md-4">
                        <Card className='border border-0 p-4' style={{ width: '100%' }}>
                            <Card.Img variant="top" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1692743834/assets/54/f60161-cf6b-4401-a309-8bb196c0014c/original/U_CoastalCalifornia_White_Final-%281%29.jpg" style={{ height: '100%', width: '100%' }} />
                            <Card.Body>
                                <Card.Title className='fw-bold'>Ride Options</Card.Title>
                                <Card.Text style={{textAlign:'justify'}}>
                                There’s more than one way to move with Uber, no matter where you are or where you’re headed next.
                                </Card.Text>
                                <Button className='py-2 px-4 mt-3' style={{ backgroundColor: 'black' }}>Search ride options</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className='border border-0 p-4' style={{ width: '100%' }}>
                            <Card.Img variant="top" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1692743890/assets/f9/ba27c4-665c-4cca-8161-9e3f87f49994/original/Airport-rides.png" style={{ height: '100%', width: '100%' }} />
                            <Card.Body>
                                <Card.Title className='fw-bold'>700+ airports</Card.Title>
                                <Card.Text style={{textAlign:'justify'}}>
                                You can request a ride to and from most major airports. <span style={{textDecoration:'underline'}}>Schedule</span> a ride to the airport for one less thing to worry about
                                </Card.Text>
                                <Button className='py-2 px-4 mt-3' style={{ backgroundColor: 'black' }}>Search airports</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className='border border-0 p-4' style={{ width: '100%' }}>
                            <Card.Img variant="top" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1689609697/assets/b8/c39de0-6e13-485b-ba45-66511170c62a/original/SS_Commuter.jpg" style={{ height: '100%', width: '100%' }} />
                            <Card.Body>
                                <Card.Title className='fw-bold'>10,000+ cities</Card.Title>
                                <Card.Text style={{textAlign:'justify'}}>
                                The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.
                                </Card.Text>
                                <Button className='py-2 px-4 mt-3' style={{ backgroundColor: 'black' }}>Search cities</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Uberhelp