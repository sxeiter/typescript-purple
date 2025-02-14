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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "other";
})(Gender || (Gender = {}));
const api = 'https://dummyjson.com/users';
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield axios_1.default.get(api);
        return res.data;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('ошибка запроса: ', error.message);
        }
        else {
            console.error('ошибка', error);
        }
        return null;
    }
});
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const userResponse = yield fetchUsers();
    if (userResponse) {
        console.log('список пользователей: ', userResponse.users);
    }
    else {
        console.log('ошибка получения пользователей');
    }
});
getUsers();
