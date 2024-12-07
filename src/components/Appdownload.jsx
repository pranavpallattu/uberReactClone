import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function Appdownload() {
  return (
   <>
<div
  className="container-fluid p-4"
  style={{ backgroundColor: "rgb(241, 240, 232)" }}
>
  <h1 className="fw-bold mt-5 ms-lg-5 text-center text-lg-start">
    Do more in the app
  </h1>
  <div className="row justify-content-center my-5">
    <div className="col-lg-2 d-none d-lg-block"></div>

    <div className="col-md-6 col-lg-4 bg-light p-4 d-flex align-items-center shadow-sm">
      <img
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_188,w_188/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png"
        alt="Download the Uber App QR code"
        style={{ width: "130px", height: "120px" }}
      />
      <div className="ms-3">
        <h4 className="fw-bold">Download the Uber App</h4>
        <p className="text-muted mb-0">Scan to download</p>
      </div>
      <FontAwesomeIcon
        className="ms-auto"
        icon={faArrowRight}
        style={{ fontSize: "1.5rem", cursor: "pointer" }}
      />
    </div>

    <div className="d-none d-lg-block" style={{ width: "10px" }}></div>

    <div className="col-md-6 mt-lg-0 mt-4 col-lg-4 bg-light p-4 d-flex align-items-center shadow-sm">
      <img
        src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_188,w_188/v1690810558/assets/e2/4f1914-1e23-4896-ad77-22e88c37c2f9/original/Rider-App-Icon_iOS.svg"
        alt="Sign up to ride icon"
        style={{ width: "130px", height: "120px" }}
      />
      <div className="ms-3">
        <h4 className="fw-bold">Sign up to ride</h4>
      </div>
      <FontAwesomeIcon
        className="ms-auto"
        icon={faArrowRight}
        style={{ fontSize: "1.5rem", cursor: "pointer" }}
      />
    </div>

    <div className="col-lg-2 d-none d-lg-block"></div>
  </div>
</div>


    <div className="container p-3 mt-5">
        <div className="row">
            <div className="col-md-6">
               <div className="d-flex justify-content-center align-items-center justify-content-between">
               <h1 className="fw-bold mb-3">Sign up to ride</h1>
               <FontAwesomeIcon className="ms-5 fs-1" icon={faArrowRight} />
               </div>
               <hr />
               <p className="my-5">Certain requirements and features vary by country, region, and city.</p>
            </div>
            <div className="col-md-6"></div>
        </div>
    </div>
   </>
  )
}

export default Appdownload