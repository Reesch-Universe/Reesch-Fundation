import type { FastifyRequest, FastifyReply } from 'fastify';

export class GameController {
    async getGames(request: FastifyRequest, reply: FastifyReply) {
        const games = [
            { id: 1, name: 'Snake', status: 'active' },
        ]
    };
}
