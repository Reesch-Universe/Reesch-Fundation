export class GetDashboardUseCase {
    async execute() {
        return {
            universeStatus : 'active',
            modules: [
                { name: 'Games', route: '/dashboard/games', status: 'online'},
                { name: 'Tokens', route: '/dashboard/tokens', status: 'online'},
                { name: 'Bots', route: '/dashboard/bots', status: 'online'},
                { name: 'Economy', route: '/dashboard/economy', status: 'online'}
            ],
            timestamp: new Date()
        };
    }
}