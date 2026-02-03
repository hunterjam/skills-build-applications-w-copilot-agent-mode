import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
    fetch(`${apiUrl}/api/leaderboard/`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch leaderboard');
        return response.json();
      })
      .then(data => {
        const sorted = data.sort((a, b) => b.points - a.points);
        setLeaderboard(sorted);
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
        <div className="spinner-border text-success" role="status">
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

  const getMedal = (index) => {
    switch (index) {
      case 0: return '🥇';
      case 1: return '🥈';
      case 2: return '🥉';
      default: return `#${index + 1}`;
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-success mb-4">🏆 Leaderboard</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-success">
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Team</th>
                  <th scope="col">Points</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, index) => (
                  <tr key={entry.id} className={index < 3 ? 'table-warning' : ''}>
                    <th scope="row">{getMedal(index)}</th>
                    <td className="fw-bold">{entry.team?.name || 'N/A'}</td>
                    <td>
                      <span className="badge bg-success fs-6">{entry.points}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {leaderboard.length === 0 && (
            <p className="text-center text-muted">No leaderboard data found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
