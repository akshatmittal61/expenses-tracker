import React from 'react'
import Button from './Button'
import favicon from '../images/favicon.svg'

const SideBar = () => {
    return (
        <aside className="aside">
            <div className="aside-container">
                <div className="aside-top">
                    <div className="aside-top-head">
                        <div className="aside-top-logo">
                            <img src={favicon} alt="Expenses Tracker" className="aside-top-logo__img" />
                        </div>
                        <span className="aside-top-brand">Expenses Tracker</span>
                    </div>
                    <nav className="aside-nav">
                        <ul className="aside-nav-ul">
                            <li className="aside-nav-li">
                                <span className="aside-nav-li__icon">
                                    <span className="material-icons">home</span>
                                </span>
                                <span className="aside-nav-li__text">Home</span>
                            </li>
                            <li className="aside-nav-li">
                                <span className="aside-nav-li__icon">
                                    <span className="material-icons">history</span>
                                </span>
                                <span className="aside-nav-li__text">History</span>
                            </li>
                            <li className="aside-nav-li">
                                <span className="aside-nav-li__icon">
                                    <span className="material-icons">savings</span>
                                </span>
                                <span className="aside-nav-li__text">Savings</span>
                            </li>
                            <li className="aside-nav-li">
                                <span className="aside-nav-li__icon">
                                    <span className="material-icons">payments</span>
                                </span>
                                <span className="aside-nav-li__text">Expenses</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="aside-bottom">
                    <div className="contact-us">
                        <Button className="contact-us-btn" variant="outline" size="small" color="green" text="Contact Us" />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SideBar
