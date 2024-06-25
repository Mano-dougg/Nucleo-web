"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var prisma = new client_1.PrismaClient();
var PORT = 2024;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));
//-- LISTAR USUARIOS
app.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var listaUsuarios;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.usuario.findMany()];
            case 1:
                listaUsuarios = _a.sent();
                if (!listaUsuarios) {
                    return [2 /*return*/, res.status(404).json({
                            message: 'Nenhum usuário encontrado'
                        })];
                }
                res.json(listaUsuarios);
                return [2 /*return*/];
        }
    });
}); });
//-- PESQUISAR POR ID
app.get('/id/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, pesquisaId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, prisma.usuario.findUnique({
                        where: { id: parseInt(id) }
                    })];
            case 1:
                pesquisaId = _a.sent();
                if (!pesquisaId) {
                    return [2 /*return*/, res.status(404).json({
                            message: 'Usuário não encontrado'
                        })];
                }
                ;
                res.json(pesquisaId);
                return [2 /*return*/];
        }
    });
}); });
//-- PESQUISAR POR EMAIL
app.get('/email/:email', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, pesquisaEmail;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = req.params.email;
                return [4 /*yield*/, prisma.usuario.findUnique({
                        where: { email: email }
                    })];
            case 1:
                pesquisaEmail = _a.sent();
                if (!pesquisaEmail) {
                    return [2 /*return*/, res.status(404).json({
                            message: 'Usuário não encontrado'
                        })];
                }
                ;
                res.json(pesquisaEmail);
                return [2 /*return*/];
        }
    });
}); });
//-- PESQUISAR POR NOME
app.get('/nome/:nome', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nome, pesquisaNome;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nome = req.params.nome;
                return [4 /*yield*/, prisma.usuario.findMany({
                        where: { nome: { contains: nome } }
                    })];
            case 1:
                pesquisaNome = _a.sent();
                if (pesquisaNome.length === 0) {
                    return [2 /*return*/, res.status(404).json({
                            message: 'Usuário não encontrado'
                        })];
                }
                ;
                res.json(pesquisaNome);
                return [2 /*return*/];
        }
    });
}); });
//-- CRIAR USUARIO
app.post('/create', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, senha, nome, idade, cidade, estado, idadeInt, criarUsuario;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, senha = _a.senha, nome = _a.nome, idade = _a.idade, cidade = _a.cidade, estado = _a.estado;
                idadeInt = parseInt(idade);
                return [4 /*yield*/, prisma.usuario.create({
                        data: {
                            email: email,
                            senha: senha,
                            nome: nome,
                            idade: idadeInt,
                            cidade: cidade,
                            estado: estado
                        },
                    })];
            case 1:
                criarUsuario = _b.sent();
                res.json(criarUsuario);
                return [2 /*return*/];
        }
    });
}); });
//-- ATUALIZAR USUARIO
app.put('/update/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, email, senha, nome, cidade, estado, atualizarUsuario;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, email = _a.email, senha = _a.senha, nome = _a.nome, cidade = _a.cidade, estado = _a.estado;
                return [4 /*yield*/, prisma.usuario.update({
                        where: { id: parseInt(id) },
                        data: {
                            email: email,
                            senha: senha,
                            nome: nome,
                            cidade: cidade,
                            estado: estado
                        }
                    })];
            case 1:
                atualizarUsuario = _b.sent();
                res.json('Usuario atualizado com sucesso!');
                res.json(atualizarUsuario);
                return [2 /*return*/];
        }
    });
}); });
//-- DELETAR USUARIO
app.delete('/delete/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, excluirUsuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, prisma.usuario.delete({
                        where: {
                            id: parseInt(id),
                        },
                    })];
            case 1:
                excluirUsuario = _a.sent();
                res.json(excluirUsuario);
                return [2 /*return*/];
        }
    });
}); });
app.listen(PORT);
