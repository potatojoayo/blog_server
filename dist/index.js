"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
        this.application = express_1.default();
    }
    return App;
}());
var app = new App().application;
app.get("/", function (_, res) {
    res.send("start");
});
app.listen(3333, function () { return console.log("server started on port 3333"); });
//# sourceMappingURL=index.js.map