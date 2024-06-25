import { db } from "../utils/db.server";

export const acceptFriendRequest = async (requestId: number) => {
    const request = await db.friendRequest.findUnique({
        where: { id: requestId },
        include: { from: true, to: true }
    });

    if (!request) return{
        result: "error",
        message: "Pedido de amizade não existe"
    };

    if (request.status !== "pending") return {
        result: "error",
        message: "Pedido de amizade não está em aberto, ou o id fornecido estava errado"
    };

    // Atualiza o status do pedido para "aceito"
    await db.friendRequest.update({
        where: { id: requestId },
        data: { status: "accepted" }
    });

    // Add the users to each other's friends list
    await db.user.update({
        where: { id: request.fromId },
        data: {
            friends: {
                connect: { id: request.toId }
            }
        }
    });

    await db.user.update({
        where: { id: request.toId },
        data: {
            friends: {
                connect: { id: request.fromId }
            }
        }
    });

    return { 
        result: "success",
        message: "Friendship accepted and created successfully"
     };
};

export const rejectFriendRequest = async (requestId: number) => {
    const request = await db.friendRequest.findUnique({
        where: { id: requestId }
    });

    if (!request) return{
        result: "error",
        message: "Pedido de amizade não existe"
    };

    if (request.status !== "pending") return {
        result: "error",
        message: "Pedido de amizade não está em aberto, ou o id fornecido estava errado"
    };

    // Update the request status to "rejected"
    await db.friendRequest.update({
        where: { id: requestId },
        data: { status: "rejected" }
    });

    return { 
        result: "success",
        message: "Friendship request rejected successfully" 
    };
};