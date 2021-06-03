"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
function main() {
    var app = express_1.default();
    var port = 8080;
    // endpoint sederhana untuk menampilkan teks
    app.get("/", function (req, res) { return res.send("Express + Typescript + NodeJS = 😍"); });
    // mulai server express
    app.listen(port, function () {
        console.log("[server] server dimulai di http://localhost:" + port + " \u26A1");
    });
}
main();
