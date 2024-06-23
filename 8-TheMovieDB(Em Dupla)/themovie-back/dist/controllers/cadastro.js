"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.default = {
    async user(req, res) {
        try {
            const { username, password } = req.body;
            const user = await prisma.user.create({
                data: {
                    username,
                    password,
                },
            });
            console.log('Usuário cadastrado com sucesso:', user);
            res.status(200).json({ message: 'Usuário cadastrado com sucesso', user });
        }
        catch (error) {
            if (error.code === 'P2002') {
                console.log('Nome de usuário já existe.');
                res.status(400).json({ message: 'Nome de usuário já existe.' });
            }
            else {
                console.error('Erro ao cadastrar usuário:', error);
                res.status(400).json({ message: 'Erro ao cadastrar usuário:' });
            }
        }
    }
};
//# sourceMappingURL=cadastro.js.map