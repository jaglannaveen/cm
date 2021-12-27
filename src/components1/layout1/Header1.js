/*import React from 'react'
import PropTypes from 'prop-types'

 const Header=(props)=> {
     const{branding}=props;
    return (
        <div>
            <h1>{branding}</h1>
        </div>
    );
};
Header.defaultProps={
    branding: 'My App'
};
Header.prototypes={
    branding:PropTypes.string.isRequired
};  
export default Header;*/
import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
 const Header=(props)=> {
     const{branding}=props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py--0">
            <div className="container">
                <a href="\"className="navbar-brand">
                    {branding}
                </a>
            </div>
            <ul className="navbar-nav mr-auto">

            <li className="nav-item">
             <Link to="/" className='nav-link'>
                <i className='fas fa-home'/>
                Home
            </Link>
            <Link to="/Contact/Add" className='nav-link'>
                <i className='fas fa-plus'/>
                ADD CONTACT
            </Link>
            <Link to="/about" className='nav-link'>
                <i className='fas fa-question'/>
                About Page
            </Link>
            </li>
            </ul>
        </nav>  
    );
};
Header.defaultProps={
    branding: 'My App'
};
Header.prototypes={
    branding:PropTypes.string.isRequired
}; 

export default Header;