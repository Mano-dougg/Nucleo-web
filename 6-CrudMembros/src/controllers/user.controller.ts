import { PrismaClient } from "@prisma/client";
import { Prisma } from '@prisma/client'; 

const userClient = new PrismaClient().user;


// showUsers
export const showAllUsers = async (req, res) => {
    try{
        
        const showUsers = await userClient.findMany({

        });
        res.status(201).json({data: showUsers});
    } catch (e){
        console.log(e);
    }
}



// createUser
export const createUser = async (req, res) => {
    try{
        const userData = req.body
        const user = await userClient.create({
            data: userData
        });
        res.status(201).json({data: user});
    } catch (e){
        console.log(e);
    }
}

// getUserById

export const getUserById = async (req, res) => {
    try{
        
        const userID = req.params.id
        const user = await userClient.findUnique({
            where: {
                id: userID
            }
        });
        res.status(200).json({data: user});
    } catch (e){
        console.log(e);
    }
}

// getUserByEmail

export const getUserByEmail = async (req, res) => {
    try {
        const userEmail = req.params.email;
        const user = await userClient.findUnique({
            where: {
                email: userEmail 
            } as Prisma.UserWhereUniqueInput 
        });
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json({ data: user });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Ocorreu um erro ao buscar o usuário' });
    }
}

// getUserByName


export const getUserByName = async (req, res) => {
    try {
        const userName = req.params.name; 
        const user = await userClient.findUnique({
            where: {
                name: userName
            } as Prisma.UserWhereUniqueInput 
        });
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json({ data: user });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Ocorreu um erro ao buscar o usuário' });
    }
}

// updateUserByID

export const updateUser = async (req, res) => {
    try{
        const userID = req.params.id
        const userData = req.body
        const user = await userClient.update({
            where: {
                id: userID
            },
            data: userData
        });
        res.status(200).json({data: user});
    } catch (e){
        console.log(e);
    }
}

//  deleteUserById

export const deleteUserById = async(req, res) => {
    try{
        const userID = req.params.id
        const user = await userClient.delete({
            where: {
                id: userID
        }, });

        res.status(200).json({data: {}})
    } catch (e){
        console.log(e)
    }
}