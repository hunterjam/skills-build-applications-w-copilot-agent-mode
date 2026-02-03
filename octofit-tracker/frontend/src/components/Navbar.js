import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../octofitapp-small.png';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <img src={logo} alt="OctoFit Logo" /> OctoFit Tracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/activities' ? 'active' : ''}`} to="/activities">
                Activities
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/leaderboard' ? 'active' : ''}`} to="/leaderboard">
                Leaderboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/teams' ? 'active' : ''}`} to="/teams">
                Teams
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/users' ? 'active' : ''}`} to="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/workouts' ? 'active' : ''}`} to="/workouts">
                Workouts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
