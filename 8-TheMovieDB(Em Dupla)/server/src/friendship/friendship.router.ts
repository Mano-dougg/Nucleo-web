import express, { Request, Response } from 'express';

import * as friendshipModel from './friendship.model';

export const friendRouter = express.Router();

// PUT: aceitar um pedido de amizade
friendRouter.put("/accept/:id", 
    async (request: Request, response: Response) => {
        const { id } = request.params;
        try{
            const result = friendshipModel.acceptFriendRequest(parseInt(id));

            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(500).json(error);
        };
    }
);

// PUT: aceitar um pedido de amizade
friendRouter.put("/reject/:id", 
    async (request: Request, response: Response) => {
        const { id } = request.params;
        try{
            const result = friendshipModel.rejectFriendRequest(parseInt(id));

            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(500).json(error);
        };
    }
);