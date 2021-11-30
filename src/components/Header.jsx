import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Theme from './theme';

const Header = () => {
    const [time, setTime] = useState(Date().substring(16, 24));
    const [day, setDay] = useState(`${Date().substring(0, 3)}, ${Date().substring(4, 7)} ${Date().substring(8, 10)}`);
    setInterval(() => {
        setTime(Date().substring(16, 24))
    }, 1000);
    setInterval(() => {
        setTime(`${Date().substring(0, 3)}, ${Date().substring(4, 7)} ${Date().substring(8, 10)}`)
    }, 86400000);
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    <div className="header-left__home">
                        <Link to='/'>
                            <span className="material-icons">home</span>
                        </Link>
                    </div>
                    <div className="header-left__theme">
                        <Theme />
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-right-calendar">
                        <span className="header-right-calendar__time">
                            {time}
                        </span>
                        <span className="header-right-calendar__day">
                            {day}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
