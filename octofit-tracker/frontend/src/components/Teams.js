import React, { useState, useEffect } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `https://${window.location.hostname.replace('-3000.', '-8000.')}`;
    // Codespace URL format: https://CODESPACE_NAME-8000.app.github.dev/api/teams/
    fetch(`${apiUrl}/api/teams/`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch teams');
        return response.json();
      })
      .then(data => {
        setTeams(data);
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
        <div className="spinner-border text-info" role="status">
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
        <h2 className="text-info">👥 Teams</h2>
        <button className="btn btn-info">
          <i className="bi bi-plus"></i> Add Team
        </button>
      </div>

      <div className="row g-4">
        {teams.map(team => (
          <div className="col-md-4" key={team.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-info text-white">
                <h5 className="card-title mb-0">{team.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text text-muted">Team ID: {team.id}</p>
              </div>
              <div className="card-footer bg-transparent">
                <button className="btn btn-sm btn-outline-info me-1">View</button>
                <button className="btn btn-sm btn-outline-secondary me-1">Edit</button>
                <button className="btn btn-sm btn-outline-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {teams.length === 0 && (
        <div className="alert alert-info" role="alert">
          No teams found.
        </div>
      )}
    </div>
  );
}

export default Teams;
