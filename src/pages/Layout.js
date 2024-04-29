import { Outlet, Link } from 'react-router-dom';
import '../index.css'
import logo from "../components/yeiz.png"

const Layout = () => {
    return (
        <>
           <div className="gray-list"></div>
            <div className="navbar navbar-expand-lg bg-white shadow p-3 mb-5">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="menu" className="navbar-collapse collapse">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/order" className="nav-link">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/catalog" className="nav-link">Catalog</Link>
                        </li>
                    </ul>
                    <div className="col-8 text-center">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;  