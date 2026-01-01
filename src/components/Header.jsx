import React from 'react';
import { FiSearch, FiPlus, FiMenu } from 'react-icons/fi';
import './Header.css';

const Header = ({ onMenuClick }) => {
    return (
        <header className="main-header">
            <div className="header-left">
                {/* Hamburger for Mobile */}
                <button className="mobile-menu-btn" onClick={onMenuClick}>
                    <FiMenu size={22} />
                </button>

                <div className="search-box">
                    <FiSearch size={18} className="search-icon" />
                    <input type="text" placeholder='Try searching "insights"' />
                </div>
            </div>

            <div className="header-right">
                <div className="header-nav-actions">
                    {/* Hamburger Menu Icon (Desktop) */}
                    <div className="nav-btn desktop-only">
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    {/* User Profile Card */}
                    <div className="user-card">
                        <div className="user-avatar-stack">
                            <img src="https://i.pravatar.cc/100?u=me" alt="me" className="primary-avatar" />
                        </div>
                    </div>

                    {/* Global Add Button */}
                    <button className="global-add-btn">
                        <FiPlus size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
