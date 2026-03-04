import type { DashboardData } from '../types/dashboard';

const API_BASE_URL = 'http://localhost:5000';

export const dashboardApi = {
  async getDashboard(): Promise<DashboardData> {
    const response = await fetch(`${API_BASE_URL}/dashboard`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch dashboard: ${response.statusText}`);
    }
    
    return response.json();
  }
};