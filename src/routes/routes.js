"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const CreareUserController_1 = require("../controllers/CreareUserController");
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
exports.router = router;
router.post("/getdata", new CreareUserController_1.CreateUserController().create);
