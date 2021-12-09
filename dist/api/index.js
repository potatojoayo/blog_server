"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config({ path: '/home/ubuntu/server/.env' });
var initDB = function () {
    var MONGO_PASSWORD = process.env.MONGO_PASSWORD;
    var connectOption = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    mongoose_1.default.connect("mongodb+srv://potatojoayo:".concat(MONGO_PASSWORD, "@potatojoayo.frlqf.mongodb.net/Blog?retryWrites=true&w=majority"), connectOption);
};
exports.initDB = initDB;
//# sourceMappingURL=index.js.map