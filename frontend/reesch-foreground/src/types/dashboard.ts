export interface Module {
  name: string;
  route: string;
  status: 'online' | 'offline' | 'maintenance';
}

export interface DashboardData {
  universeStatus: string;
  modules: Module[];
  timestamp: string;
}