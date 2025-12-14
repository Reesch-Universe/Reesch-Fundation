import type { FastifyInstance } from "fastify";
import { GameController } from "../../../adapters/controllers/Game/GameController.js";

export async function gameRoutes(fastify: FastifyInstance) {
    const gameController = new GameController();
    
    fastify.get('/games', (request, reply) => gameController.getGames(request, reply));
}
