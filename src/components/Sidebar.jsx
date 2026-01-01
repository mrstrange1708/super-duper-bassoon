import React from 'react';
import { Home, BarChart2, FileText, Layout, Link2, MessageSquare, Settings, Compass } from 'lucide-react';
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
          <div className="sidebar-icon active">
            <Compass size={24} />
          </div>
          <div className="sidebar-icon pink">
            <BarChart2 size={24} />
          </div>
          <div className="sidebar-icon">
            <FileText size={24} />
          </div>
          <div className="sidebar-icon">
            <Layout size={24} />
          </div>
          <div className="sidebar-icon">
            <Link2 size={24} />
          </div>
        </div>

        <div className="bottom-icons">
          <div className="sidebar-icon">
            <MessageSquare size={24} />
            <span className="notif-dot"></span>
          </div>
          <div className="sidebar-icon">
            <Settings size={24} />
          </div>
        </div>
      </div>

      {/* Wide Sidebar */}
      <div className="sidebar-wide">
        <div className="sidebar-header">
          <button className="codename-select">
            Codename.com
            <span className="chevron-down">▾</span>
          </button>
        </div>

        <div className="sidebar-section">
          <ul>
            <li><span className="icon">☆</span> Starred</li>
            <li><span className="icon">↺</span> Recent</li>
            <li>Sales list</li>
            <li>Goals</li>
            <li className="active">Dashboard <span className="plus">+</span></li>
          </ul>
        </div>

        <div className="sidebar-section">
          <div className="section-title">
            <span>Codename</span>
          </div>
          <ul className="nested-list">
            <li>
               <div className="item-with-arrow">
                 <span>Shared with me</span>
                 <span className="arrow-down">⌄</span>
               </div>
               <ul>
                 <li>Cargo2go</li>
                 <li className="with-badge">Cloudz3r <span className="badge badge-pink">2</span></li>
                 <li>Idioma</li>
                 <li>Syllables</li>
                 <li>x-0b</li>
               </ul>
            </li>
          </ul>
        </div>

        <div className="sidebar-section">
          <div className="section-title">
            <span>Reports</span>
            <span className="plus">+</span>
          </div>
          <ul>
            <li className="collapsed">Share with me <span className="arrow-down">⌄</span></li>
            <li className="with-subitems">
               My reports
               <ul>
                 <li>Emails received</li>
                 <li>Deal duration</li>
                 <li className="active-item">New report</li>
                 <li className="with-badge">Analytics <span className="badge badge-pink">7</span></li>
               </ul>
            </li>
          </ul>
        </div>
        
        <div className="sidebar-footer">
          <span className="folder-icon">📁</span> Manage folders
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
