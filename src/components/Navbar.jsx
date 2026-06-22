import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid navbar-container">
                    <a className="navbar-brand" href="/">
                        <img src="src/assets/logo.png" alt="Logo"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-lg-auto flex-lg-grow-0" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 p-2">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Service</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">About Us</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Contact</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login"> LogIn</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
