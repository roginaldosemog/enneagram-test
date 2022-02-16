import { FaBlogger, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          Ana do Eneagrama
        </a>
        <div className="justify-content-end">
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-2">
              <a className="nav-link active" href="https://aquelemqueana.com">
                <FaBlogger size={24} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="https://instagram.com">
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
