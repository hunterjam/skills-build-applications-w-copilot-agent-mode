import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Welcome to OctoFit Tracker</h1>
        <p className="lead text-muted">Track your fitness activities and compete with your team!</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title text-primary">🏃 Activities</h5>
              <p className="card-text">Log and track your daily fitness activities.</p>
              <Link to="/activities" className="btn btn-primary">View Activities</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title text-success">🏆 Leaderboard</h5>
              <p className="card-text">See how your team ranks against others.</p>
              <Link to="/leaderboard" className="btn btn-success">View Leaderboard</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title text-info">👥 Teams</h5>
              <p className="card-text">Manage and view team information.</p>
              <Link to="/teams" className="btn btn-info">View Teams</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title text-warning">👤 Users</h5>
              <p className="card-text">View all registered users and their profiles.</p>
              <Link to="/users" className="btn btn-warning">View Users</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title text-danger">💪 Workouts</h5>
              <p className="card-text">Explore suggested workout routines.</p>
              <Link to="/workouts" className="btn btn-danger">View Workouts</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
