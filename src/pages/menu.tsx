import { NavLink } from "react-router-dom";

export default function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Student management</NavLink>
                <div className="collapse  navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/department">departments</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/search">search</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to='/student/add'>add students</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}