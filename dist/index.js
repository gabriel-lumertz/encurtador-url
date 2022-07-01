"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URLcontroller_1 = require("./controller/URLcontroller");
const express_1 = __importDefault(require("express"));
const api = (0, express_1.default)();
api.use(express_1.default.json());
const urlcontroller = new URLcontroller_1.URLcontroller();
api.post('/shorten', urlcontroller.shorten);
api.get('/:hash', urlcontroller.redirect);
api.listen(3000, () => console.log('Express listening'));
//# sourceMappingURL=index.js.map