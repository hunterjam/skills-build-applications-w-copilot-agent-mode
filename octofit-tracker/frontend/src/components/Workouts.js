import React, { useState, useEffect } from 'react';
import API_URL from '../utils/api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/workouts/`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch workouts');
        return response.json();
      })
      .then(data => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-danger">💪 Workouts</h2>
        <button className="btn btn-danger">
          <i className="bi bi-plus"></i> Add Workout
        </button>
      </div>

      <div className="row g-4">
        {workouts.map(workout => (
          <div className="col-md-6" key={workout.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-danger text-white">
                <h5 className="card-title mb-0">{workout.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">{workout.description}</p>
                <span className="badge bg-secondary">
                  Suggested for: {workout.suggested_for}
                </span>
              </div>
              <div className="card-footer bg-transparent">
                <button className="btn btn-sm btn-outline-danger me-1">View</button>
                <button className="btn btn-sm btn-outline-secondary me-1">Edit</button>
                <button className="btn btn-sm btn-outline-dark">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {workouts.length === 0 && (
        <div className="alert alert-danger" role="alert">
          No workouts found.
        </div>
      )}
    </div>
  );
}

export default Workouts;
