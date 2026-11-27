function StatsPanel({ totalUsers, requestCount, method }) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span>Total Users</span>
        <h2>{totalUsers}</h2>
      </div>

      <div className="stat-card">
        <span>API Requests</span>
        <h2>{requestCount}</h2>
      </div>

      <div className="stat-card">
        <span>Last Method</span>
        <h2>{method}</h2>
      </div>
    </div>
  );
}

export default StatsPanel;