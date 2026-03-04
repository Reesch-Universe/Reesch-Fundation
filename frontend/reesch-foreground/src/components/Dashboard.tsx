import { useEffect, useState } from 'react';
import { dashboardApi } from '../services/api';
import type { DashboardData } from '../types/dashboard';

export const Dashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true);
        const dashboardData = await dashboardApi.getDashboard();
        setData(dashboardData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load dashboard');
        console.error('Dashboard fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>REESCH Dashboard</h1>
      <p>Universe Status: {data?.universeStatus}</p>
      
      <h2>Modules:</h2>
      <ul>
        {data?.modules.map((module) => (
          <li key={module.name}>
            {module.name} - {module.status} - {module.route}
          </li>
        ))}
      </ul>
    </div>
  );
};