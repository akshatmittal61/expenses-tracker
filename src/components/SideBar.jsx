import React from 'react';
import Button from './Button';
import links from './NavLinks';
import { Link } from 'react-router-dom';
import favicon from '../images/favicon.svg';

const SideBar = () => {
    return (
        <aside className="aside">
            <div className="aside-container">
                <div className="aside-top">
                    <div className="aside-top-head">
                        <Link to='/'>
                            <div className="aside-top-logo">
                                <img src={favicon} alt="Expenses Tracker" className="aside-top-logo__img" />
                            </div>
                            <span className="aside-top-brand">Expenses Tracker</span>
                        </Link>
                    </div>
                    <nav className="aside-nav">
                        <ul className="aside-nav-ul">
                            {
                                links.map((link, index) => (
                                    <li className="aside-nav-li" key={index}>
                                        <Link to={link.route}>
                                            <span className="aside-nav-li__icon">
                                                <span className="material-icons">{link.icon}</span>
                                            </span>
                                            <span className="aside-nav-li__text">{link.text}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
                <div className="aside-bottom">
                    <Link to='/contact'>
                        <Button
                            className="contact-us-btn"
                            variant="outline"
                            size="small"
                            color="blue"
                            text="Contact Us"
                        />
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default SideBar
