import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";

function Header() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <>
      <Nav className=" p-0" style={{background:'black'}} activeKey="1" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            <h4 className="mt-3 ms-5 text-light">Uber</h4>
          </Nav.Link>
        </Nav.Item>

        <div className="d-none d-md-flex align-items-center flex-grow-1">
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              <p className="mt-3 text-light">Ride</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              <p className="mt-3 text-light">Drive</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              <p className="mt-3 text-light">Business</p>
            </Nav.Link>
          </Nav.Item>
          <select className="text-light border border-0" style={{backgroundColor:'black'}} name="About" id="cars">
  <option value="volvo">About</option>
  <option value="saab">About us</option>
  <option value="mercedes">Our offerings</option>
  <option value="audi">How Uber works</option>
</select>
        </div>

        <div className="ms-auto d-flex align-items-center">
          <Nav.Item className="d-none d-md-block">
            <Nav.Link eventKey="2" title="Item">
              <p className="mt-1 text-light">
                <FontAwesomeIcon icon={faGlobe} />
                <span className="ms-2">EN</span>
              </p>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="d-none d-md-block">
            <Nav.Link eventKey="2" title="Item">
              <p className="mt-1 text-light">Help</p>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              <p className="mt-1 text-light">Log in</p>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              <button
                className="px-2 py-1 bg-light"
                style={{ borderRadius: "50px" }}
              >
                Sign up
              </button>
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}

export default Header;
