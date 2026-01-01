import React from 'react';
import { FiPlus, FiTrendingUp, FiStar, FiMoreHorizontal, FiDownload, FiShare2, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <main className="dashboard-container">
            {/* Top Actions Row */}
            <div className="top-actions-row">
                <div className="avatar-section">
                    <button className="add-avatar-btn"><FiPlus size={16} /></button>
                    <div className="avatar-chip">
                        <img src="https://i.pravatar.cc/100?u=armin" alt="Armin" />
                        <span>Armin A.</span>
                    </div>
                    <div className="avatar-chip">
                        <img src="https://i.pravatar.cc/100?u=eren" alt="Eren" />
                        <span>Eren Y.</span>
                    </div>
                    <div className="avatar-chip">
                        <img src="https://i.pravatar.cc/100?u=mikasa" alt="Mikasa" />
                        <span>Mikasa A.</span>
                    </div>
                    <div className="logo-badge">C</div>
                </div>

                <div className="utility-actions">
                    <button className="icon-action"><FiMoreHorizontal size={18} /></button>
                    <button className="icon-action"><FiDownload size={18} /></button>
                    <button className="icon-action"><FiShare2 size={18} /></button>
                </div>
            </div>

            {/* Title Row */}
            <div className="dashboard-title-row">
                <h1 className="main-title">New report</h1>
                <div className="timeframe-control">
                    <div className="switch-group">
                        <div className="switch-bg active">
                            <div className="switch-knob"></div>
                        </div>
                        <span className="switch-label">Timeframe</span>
                    </div>
                    <button className="timeframe-picker">
                        Sep 1 - Nov 30, 2023 <FiChevronDown size={14} />
                    </button>
                </div>
            </div>

            {/* Stats Row - Horizontal Layout */}
            <div className="stats-row">
                {/* Revenue Block */}
                <div className="revenue-block">
                    <span className="block-label">Revenue</span>
                    <div className="revenue-amount">
                        <span className="dollar">$</span>528,976.<span className="cents">82</span>
                        <span className="badge green">↑ 7.9%</span>
                        <span className="badge pink">$27,335.09</span>
                    </div>
                    <p className="vs-text">vs prev. $501,641.73 Jun 1 - Aug 31, 2023 <FiChevronDown size={12} /></p>
                </div>

                {/* Stats Cards Row */}
                <div className="stats-cards-row">
                    <div className="stat-card">
                        <span className="card-title">Top sales</span>
                        <div className="card-value">72</div>
                        <div className="user-tag">
                            <img src="https://i.pravatar.cc/100?u=mikasa" alt="M" />
                            <span>Mikasa</span>
                        </div>
                        <span className="card-arrow">›</span>
                    </div>

                    <div className="stat-card dark">
                        <div className="card-header">
                            <span className="card-title">Best deal</span>
                            <FiStar size={14} className="star" />
                        </div>
                        <div className="card-value">$42,300</div>
                        <span className="card-sub">Rolf Inc.</span>
                        <span className="card-arrow">›</span>
                    </div>

                    <div className="stat-card mini">
                        <span className="card-title">Deals</span>
                        <div className="card-value">256</div>
                        <span className="change down">↓ 5</span>
                    </div>

                    <div className="stat-card mini highlight">
                        <span className="card-title">Value</span>
                        <div className="card-value">528k</div>
                        <span className="change up">↑ 7.9%</span>
                    </div>

                    <div className="stat-card mini">
                        <span className="card-title">Win rate</span>
                        <div className="card-value">44%</div>
                        <span className="change up">↑ 1.2%</span>
                    </div>
                </div>
            </div>

            {/* Platform Strip */}
            <div className="platform-strip">
                <div className="platform-pill">
                    <img src="https://i.pravatar.cc/100?u=armin" alt="A" className="p-avatar" />
                    <span className="p-value">$209,633</span>
                    <span className="p-perc">39.63%</span>
                </div>
                <div className="platform-pill">
                    <div className="p-logo blue">B</div>
                    <span className="p-value">$156,841</span>
                    <span className="p-perc">29.65%</span>
                </div>
                <div className="platform-pill">
                    <div className="p-logo insta">📸</div>
                    <span className="p-value">$117,115</span>
                    <span className="p-perc">22.14%</span>
                </div>
                <div className="platform-pill">
                    <div className="p-logo dark">C</div>
                    <span className="p-value">$45,386</span>
                    <span className="p-perc">8.58%</span>
                </div>
                <button className="details-btn">Details</button>
            </div>

            {/* Bottom Grid */}
            <div className="dashboard-bottom-grid">
                {/* Left Column */}
                <div className="bottom-left-col">
                    {/* Filters Card */}
                    <div className="card filters-card">
                        <div className="card-top-row">
                            <span className="icon-text">≡</span>
                            <FiChevronDown size={12} />
                            <span className="filters-label">Filters</span>
                            <span className="filter-icon">☰</span>
                        </div>
                        <div className="platform-list">
                            <div className="platform-row">
                                <div className="p-icon dribbble"></div>
                                <span className="p-name">Dribbble</span>
                                <span className="p-val">$227,459</span>
                                <span className="p-pct">43%</span>
                            </div>
                            <div className="platform-row">
                                <div className="p-icon instagram"></div>
                                <span className="p-name">Instagram</span>
                                <span className="p-val">$142,823</span>
                                <span className="p-pct">27%</span>
                            </div>
                            <div className="platform-row">
                                <div className="p-icon behance"></div>
                                <span className="p-name">Behance</span>
                                <span className="p-val">$89,935</span>
                                <span className="p-pct">11%</span>
                            </div>
                            <div className="platform-row">
                                <div className="p-icon google"></div>
                                <span className="p-name">Google</span>
                                <span className="p-val">$37,028</span>
                                <span className="p-pct">7%</span>
                            </div>
                        </div>
                    </div>

                    {/* Deals Amount Card */}
                    <div className="card deals-card">
                        <div className="card-top-row">
                            <span className="icon-text">‖</span>
                            <FiChevronDown size={12} />
                            <span className="filters-label">Filters</span>
                            <span className="filter-icon">☰</span>
                        </div>
                        <div className="icon-bar-visual">
                            <div className="icon-bar"><div className="bar-icon behance">Bē</div></div>
                            <div className="icon-bar tall"><div className="bar-icon google">G</div></div>
                            <div className="icon-bar"><div className="bar-icon mail">✉</div></div>
                            <div className="icon-bar short"><div className="bar-icon instagram">📷</div></div>
                        </div>
                        <div className="deals-label-row">
                            <span className="deals-title">Deals amount</span>
                            <span className="by-ref">by referrer category <FiChevronDown size={10} /></span>
                        </div>
                    </div>

                    {/* Platform Value Card */}
                    <div className="card platform-value-card">
                        <div className="pv-header">
                            <span className="pv-icon">🎨</span>
                            <span className="pv-title">Platform value</span>
                        </div>
                        <div className="pv-select">
                            Dribbble <FiChevronDown size={12} />
                        </div>
                        <div className="toggle-row">
                            <button className="toggle-btn active">Revenue</button>
                            <button className="toggle-btn">Leads</button>
                            <button className="toggle-btn">W/L</button>
                        </div>
                        <div className="bar-chart-container">
                            <div className="side-label">Average monthly</div>
                            <div className="chart-area">
                                <div className="highlight-box">
                                    <div className="hb-label">Revenue</div>
                                    <div className="hb-val">$18,552</div>
                                    <div className="hb-bar"></div>
                                    <div className="hb-sub">Leads<br />373 97/276</div>
                                    <div className="hb-sub">Win/lose<br />16% 51/318</div>
                                </div>
                                <div className="month-bars">
                                    <div className="month-col">
                                        <span className="bar-val">$6,901</span>
                                        <div className="bars">
                                            <div className="bar h50"></div>
                                            <div className="bar h35"></div>
                                        </div>
                                        <div className="avatars-row">
                                            <img src="https://i.pravatar.cc/20?u=1" alt="" />
                                            <img src="https://i.pravatar.cc/20?u=2" alt="" />
                                        </div>
                                        <span className="month-lbl">Sep</span>
                                    </div>
                                    <div className="month-col">
                                        <span className="bar-val highlight">$11,035</span>
                                        <div className="bars">
                                            <div className="bar h70"></div>
                                            <div className="bar h50"></div>
                                        </div>
                                        <div className="avatars-row">
                                            <img src="https://i.pravatar.cc/20?u=3" alt="" />
                                            <img src="https://i.pravatar.cc/20?u=4" alt="" />
                                        </div>
                                        <span className="month-lbl">Oct</span>
                                    </div>
                                    <div className="month-col">
                                        <span className="bar-val red">$9,288</span>
                                        <div className="bars">
                                            <div className="bar h60 red-bar"></div>
                                            <div className="bar h40"></div>
                                        </div>
                                        <div className="avatars-row">
                                            <img src="https://i.pravatar.cc/20?u=5" alt="" />
                                            <img src="https://i.pravatar.cc/20?u=6" alt="" />
                                        </div>
                                        <span className="month-lbl">Nov</span>
                                    </div>
                                </div>
                                <div className="y-axis">
                                    <span>$14,500</span>
                                    <span>$11,000</span>
                                    <span>$7,800</span>
                                    <span>$4,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="bottom-right-col">
                    {/* Sales Table */}
                    <div className="card sales-table-card">
                        <div className="table-header">
                            <span>Sales</span>
                            <span>Revenue</span>
                            <span>Leads</span>
                            <span>KPI</span>
                            <span>W/L</span>
                        </div>
                        <div className="table-row">
                            <div className="user-cell">
                                <img src="https://i.pravatar.cc/100?u=armin" alt="A" />
                                <span>Armin A.</span>
                            </div>
                            <span className="val-cell">$209,633</span>
                            <div className="leads-cell">
                                <span className="badge-dark">41</span>
                                <span>118</span>
                            </div>
                            <span>0.84</span>
                            <div className="wl-cell">
                                <span>31%</span>
                                <span className="badge-dark">12</span>
                                <span>29</span>
                            </div>
                        </div>
                        <div className="table-row active">
                            <div className="user-cell">
                                <img src="https://i.pravatar.cc/100?u=mikasa" alt="M" />
                                <span>Mikasa A.</span>
                            </div>
                            <span className="val-cell">$156,841</span>
                            <div className="leads-cell">
                                <span className="badge-dark">54</span>
                                <span>103</span>
                            </div>
                            <span>0.89</span>
                            <div className="wl-cell">
                                <span>39%</span>
                                <span className="badge-dark">21</span>
                                <span>33</span>
                            </div>
                            <button className="expand-btn">⌃</button>
                        </div>
                        <div className="tags-row">
                            <span className="tag">Top sales 💪</span>
                            <span className="tag">Sales streak 🔥</span>
                            <span className="tag">Top review 👍</span>
                        </div>
                    </div>

                    {/* Work with Platforms */}
                    <div className="card platforms-work-card">
                        <div className="pw-header">
                            <h4>Work with platforms</h4>
                            <div className="pw-badges">
                                <span className="pw-badge pink">↑ 3</span>
                                <span className="pw-badge pink-text">$156,841</span>
                            </div>
                        </div>
                        <div className="pw-icons-row">
                            <div className="pw-chip active">
                                <div className="pw-icon dribbble"></div>
                                <span>Dribbble</span>
                            </div>
                            <div className="pw-chip">
                                <div className="pw-icon instagram"></div>
                                <span>Instagram</span>
                            </div>
                            <div className="pw-chip">
                                <div className="pw-icon google"></div>
                                <span>Google</span>
                                <span className="sub">14.1% $22,114</span>
                            </div>
                            <div className="pw-chip">
                                <div className="pw-icon other"></div>
                                <span>Other</span>
                                <span className="sub">7.1% $11,135</span>
                            </div>
                        </div>
                        <div className="pw-stats">
                            <span className="big-pct">45.3%</span>
                            <span className="green-val">$71,048</span>
                        </div>
                        <div className="pw-right-stats">
                            <div className="stat-block">
                                <div className="stat-icon instagram"></div>
                                <span>28.1% $44,072</span>
                            </div>
                            <div className="stat-block">
                                <div className="stat-icon google"></div>
                                <span>● 5.4% $8,469</span>
                            </div>
                        </div>
                        <div className="sales-dynamic-row">
                            <span>Sales dynamic</span>
                            <span className="arrow">↗</span>
                        </div>
                        <div className="line-chart">
                            <svg viewBox="0 0 400 60" preserveAspectRatio="none">
                                <path d="M0,40 Q50,30 100,35 T200,25 T300,45 T400,30" fill="none" stroke="#ff4b60" strokeWidth="2" />
                                <path d="M0,50 Q50,45 100,48 T200,40 T300,50 T400,42" fill="none" stroke="#4ade80" strokeWidth="1.5" />
                                <path d="M0,55 Q50,52 100,54 T200,48 T300,55 T400,50" fill="none" stroke="#60a5fa" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <div className="week-labels">
                            <span>W 1</span>
                            <span>W 3</span>
                            <span>W 5</span>
                            <span>W 7</span>
                            <span>W 9</span>
                            <span>W 11</span>
                        </div>
                    </div>

                    {/* Eren Entry */}
                    <div className="card single-entry">
                        <div className="user-cell">
                            <img src="https://i.pravatar.cc/100?u=eren" alt="E" />
                            <span>Eren Y.</span>
                        </div>
                        <span className="val-cell">$117,115</span>
                        <div className="leads-cell">
                            <span className="badge-dark">22</span>
                            <span>84</span>
                        </div>
                        <span>0.79</span>
                        <div className="wl-cell">
                            <span>32%</span>
                            <span className="badge-green">7</span>
                            <span>15</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
