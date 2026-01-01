import React from 'react';
import { FiStar, FiClock, FiPlus, FiSettings, FiLink } from 'react-icons/fi';
import { IoShareSocialOutline, IoChatboxEllipsesOutline, IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebars-container">
      {/* Narrow Sidebar */}
      <div className="sidebar-narrow">
        <div className="logo-container">
          <div className="logo-circle">
            <span className="logo-text">C</span>
          </div>
        </div>

        <div className="icons-container">
          <div className="sidebar-icon-wrapper">
            <IoShareSocialOutline size={22} />
          </div>
          <div className="sidebar-icon-wrapper active-tg">
            <span className="tg-logo">tg</span>
          </div>
          <div className="sidebar-icon-wrapper">
            <FiSettings size={20} />
          </div>
          <div className="sidebar-icon-wrapper">
            <FiLink size={20} />
          </div>
          <div className="sidebar-icon-wrapper">
            <div className="pill-icons">
              <span className="pill"></span>
              <span className="pill"></span>
            </div>
          </div>
        </div>

        <div className="bottom-icons">
          <div className="sidebar-icon-wrapper has-notif">
            <IoChatboxEllipsesOutline size={20} />
            <span className="notif-ring"></span>
          </div>
          <div className="sidebar-icon-wrapper">
            <FiSettings size={20} />
          </div>
        </div>
      </div>

      {/* Wide Sidebar */}
      <div className="sidebar-wide">
        <div className="sidebar-header">
          <button className="codename-select">
            Codename.com
            <IoChevronDownOutline className="chevron" />
          </button>
        </div>

        <div className="sidebar-content">
          {/* Top Nav Group */}
          <nav className="nav-group">
            <ul>
              <li><FiStar size={14} className="nav-icon" /> Starred</li>
              <li><FiClock size={14} className="nav-icon" /> Recent</li>
              <li>Sales list</li>
              <li>Goals</li>
              <li className="nav-item-with-action">
                <span>Dashboard</span>
                <FiPlus size={14} className="action-plus" />
              </li>
            </ul>
          </nav>

          {/* Codename Section */}
          <div className="tree-section">
            <h4 className="tree-header">Codename</h4>
            <ul className="tree-list">
              <li className="tree-parent">
                <div className="tree-row">
                  <span>Shared with me</span>
                  <IoChevronUpOutline size={12} className="tree-chevron" />
                </div>
                <ul className="tree-children">
                  <li className="tree-child">Cargo2go</li>
                  <li className="tree-child with-badge">
                    <span>Cloudz3r</span>
                    <span className="badge-red">2</span>
                  </li>
                  <li className="tree-child">Idioma</li>
                  <li className="tree-child">Syllables</li>
                  <li className="tree-child">x-0b</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Reports Section */}
          <div className="tree-section">
            <div className="tree-header-row">
              <h4 className="tree-header">Reports</h4>
              <FiPlus size={14} className="action-plus" />
            </div>
            <ul className="tree-list">
              <li className="tree-parent">
                <div className="tree-row">
                  <span>Share with me</span>
                  <IoChevronUpOutline size={12} className="tree-chevron" />
                </div>
                <ul className="tree-children">
                  <li className="tree-child">Deals by user</li>
                  <li className="tree-child">Deal duration</li>
                </ul>
              </li>
              <li className="tree-parent">
                <div className="tree-row">
                  <span>My reports</span>
                  <IoChevronUpOutline size={12} className="tree-chevron" />
                </div>
                <ul className="tree-children">
                  <li className="tree-child">Emails received</li>
                  <li className="tree-child">Deal duration</li>
                  <li className="tree-child active-report">New report</li>
                  <li className="tree-child with-badge">
                    <span>Analytics</span>
                    <span className="badge-red">7</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar-footer">
          <FiLink size={14} className="footer-icon" /> Manage folders
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
