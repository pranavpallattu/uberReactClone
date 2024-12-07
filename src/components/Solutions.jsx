

function Solutions() {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: 'black' }}>
                <div className="row mt-5 ms-lg-5 ms-2" >
                    <div className="col-md-6 text-light mt-5 ">
                        <h1 className="fw-bold">Looking for business  <span className="d-none d-lg-inline"><br /></span> solutions?</h1>
                        <p className="mt-3">Get information about how companies leverage  Uber  <span className="d-none d-lg-inline"><br /></span> for Business:</p>
                        <ul>
                            <li style={{textDecoration:'underline'}}>Business travel</li>
                            <li style={{textDecoration:'underline'}}>Courtesy rides</li>
                            <li style={{textDecoration:'underline'}}>Meal programs</li>
                            <li style={{textDecoration:'underline'}}>Item delivery</li>
                        </ul>
                       <div className="d-flex mt-4 mb-5"> 
                       <button className="btn text-dark py-2 px-3 fw-medium" style={{backgroundColor:'white'}}>Get Started</button>
                       <p className="mt-2 ms-3" style={{textDecoration:'underline'}}> Check out our solutions</p>
                       </div>
                    </div>
                    <div className="col-md-6  p-lg-5 p-3">
                        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_311,w_552/v1691776332/assets/d6/48f5b6-bb5f-450e-8733-90aefecbd09e/original/U4B_Spot_U4BWebsite.jpg" alt="" className="w-100 h-100 " />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solutions