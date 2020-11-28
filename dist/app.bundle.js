/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/gmail.config.ts":
/*!************************************!*\
  !*** ./src/config/gmail.config.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar _a, _b, _c;\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\ndotenv.config();\r\nexports.default = {\r\n    gmailUser: (_a = process.env.GMAIL_USER) !== null && _a !== void 0 ? _a : \"\",\r\n    gmailPassword: (_b = process.env.GMAIL_PASSWORD) !== null && _b !== void 0 ? _b : \"\",\r\n    gmailSender: (_c = process.env.GMAIL_SENDER) !== null && _c !== void 0 ? _c : \"prashantjoshi@collabs.com\"\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/config/gmail.config.ts?");

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.NodeConfig = exports.GmailConfig = exports.TokenConfig = exports.MongoConfig = exports.SessionConfig = void 0;\r\nvar session_config_1 = __webpack_require__(/*! ./session.config */ \"./src/config/session.config.ts\");\r\nObject.defineProperty(exports, \"SessionConfig\", ({ enumerable: true, get: function () { return __importDefault(session_config_1).default; } }));\r\nvar mongo_config_1 = __webpack_require__(/*! ./mongo.config */ \"./src/config/mongo.config.ts\");\r\nObject.defineProperty(exports, \"MongoConfig\", ({ enumerable: true, get: function () { return __importDefault(mongo_config_1).default; } }));\r\nvar token_config_1 = __webpack_require__(/*! ./token.config */ \"./src/config/token.config.ts\");\r\nObject.defineProperty(exports, \"TokenConfig\", ({ enumerable: true, get: function () { return __importDefault(token_config_1).default; } }));\r\nvar gmail_config_1 = __webpack_require__(/*! ./gmail.config */ \"./src/config/gmail.config.ts\");\r\nObject.defineProperty(exports, \"GmailConfig\", ({ enumerable: true, get: function () { return __importDefault(gmail_config_1).default; } }));\r\nvar node_config_1 = __webpack_require__(/*! ./node.config */ \"./src/config/node.config.ts\");\r\nObject.defineProperty(exports, \"NodeConfig\", ({ enumerable: true, get: function () { return __importDefault(node_config_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/config/index.ts?");

/***/ }),

/***/ "./src/config/mongo.config.ts":
/*!************************************!*\
  !*** ./src/config/mongo.config.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar _a, _b, _c;\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\ndotenv.config();\r\nexports.default = {\r\n    mongoUserName: (_a = process.env.MONGO_USER) !== null && _a !== void 0 ? _a : \"\",\r\n    mongoUserPassword: (_b = process.env.MONGO_PASSWORD) !== null && _b !== void 0 ? _b : \"\",\r\n    mongoDatabaseName: (_c = process.env.MONGO_DATABASE) !== null && _c !== void 0 ? _c : \"\"\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/config/mongo.config.ts?");

/***/ }),

/***/ "./src/config/node.config.ts":
/*!***********************************!*\
  !*** ./src/config/node.config.ts ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\ndotenv.config();\r\nexports.default = {\r\n    nodeEnvironment: (_a = \"development\") !== null && _a !== void 0 ? _a : \"development\"\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/config/node.config.ts?");

/***/ }),

/***/ "./src/config/session.config.ts":
/*!**************************************!*\
  !*** ./src/config/session.config.ts ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar _a, _b, _c;\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\ndotenv.config();\r\nexports.default = {\r\n    sessionName: (_a = process.env.SESSION_NAME) !== null && _a !== void 0 ? _a : \"\",\r\n    sessionLifetime: (_b = process.env.SESSION_LIFETIME) !== null && _b !== void 0 ? _b : \"1800000\",\r\n    sessionSecret: (_c = process.env.SESSION_SECRET) !== null && _c !== void 0 ? _c : \"secret\"\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/config/session.config.ts?");

/***/ }),

/***/ "./src/config/token.config.ts":
/*!************************************!*\
  !*** ./src/config/token.config.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar _a, _b;\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\ndotenv.config();\r\nexports.default = {\r\n    tokenSecret: (_a = process.env.TOKEN_SECRET) !== null && _a !== void 0 ? _a : \"pokjnlakjdshq\",\r\n    tokenExpiry: (_b = process.env.TOKEN_EXPIRY) !== null && _b !== void 0 ? _b : (60 * 60 * 12).toString()\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/config/token.config.ts?");

/***/ }),

/***/ "./src/connectDb.ts":
/*!**************************!*\
  !*** ./src/connectDb.ts ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\n//local\r\nconst config_1 = __webpack_require__(/*! ./config */ \"./src/config/index.ts\");\r\nfunction default_1() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        let errorOccurred = false;\r\n        try {\r\n            yield mongoose_1.default.connect(`mongodb+srv://${config_1.MongoConfig.mongoUserName}:${config_1.MongoConfig.mongoUserPassword}@cluster0.vuqtk.mongodb.net/${config_1.MongoConfig.mongoDatabaseName}?retryWrites=true&w=majority`, {\r\n                useUnifiedTopology: true,\r\n                useNewUrlParser: true,\r\n                useFindAndModify: false\r\n            });\r\n        }\r\n        catch (err) {\r\n            errorOccurred = true;\r\n        }\r\n        finally {\r\n            if (errorOccurred)\r\n                console.log(\"[MONGOOSE] error connecting to MongoDB\");\r\n            else\r\n                console.log(\"[SERVER] connected to database\");\r\n        }\r\n    });\r\n}\r\nexports.default = default_1;\r\n\n\n//# sourceURL=webpack://backend/./src/connectDb.ts?");

/***/ }),

/***/ "./src/dataloaders/conversation.ts":
/*!*****************************************!*\
  !*** ./src/dataloaders/conversation.ts ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst dataloader_1 = __importDefault(__webpack_require__(/*! dataloader */ \"dataloader\"));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nfunction batchConversations(ids) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const Conversation = mongoose_1.default.model(\"Conversation\");\r\n        const conversations = yield Conversation.find({ _id: { $in: ids } });\r\n        const groupedConversations = ramda_1.groupBy(conversation => conversation.id, conversations);\r\n        return ramda_1.map(id => groupedConversations[id][0], ids);\r\n    });\r\n}\r\nexports.default = () => new dataloader_1.default(batchConversations);\r\n\n\n//# sourceURL=webpack://backend/./src/dataloaders/conversation.ts?");

/***/ }),

/***/ "./src/dataloaders/index.ts":
/*!**********************************!*\
  !*** ./src/dataloaders/index.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst user_1 = __importDefault(__webpack_require__(/*! ./user */ \"./src/dataloaders/user.ts\"));\r\nconst skill_1 = __importDefault(__webpack_require__(/*! ./skill */ \"./src/dataloaders/skill.ts\"));\r\nconst message_1 = __importDefault(__webpack_require__(/*! ./message */ \"./src/dataloaders/message.ts\"));\r\nconst conversation_1 = __importDefault(__webpack_require__(/*! ./conversation */ \"./src/dataloaders/conversation.ts\"));\r\nexports.default = {\r\n    userLoader: user_1.default(),\r\n    skillLoader: skill_1.default(),\r\n    messageLoader: message_1.default(),\r\n    conversationLoader: conversation_1.default()\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/dataloaders/index.ts?");

/***/ }),

/***/ "./src/dataloaders/message.ts":
/*!************************************!*\
  !*** ./src/dataloaders/message.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst dataloader_1 = __importDefault(__webpack_require__(/*! dataloader */ \"dataloader\"));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nfunction batchMessages(ids) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const Message = mongoose_1.default.model(\"Message\");\r\n        const messages = yield Message.find({ _id: { $in: ids } });\r\n        const groupedMessages = ramda_1.groupBy(message => message.id, messages);\r\n        return ramda_1.map(id => groupedMessages[id][0], ids);\r\n    });\r\n}\r\nexports.default = () => new dataloader_1.default(batchMessages);\r\n\n\n//# sourceURL=webpack://backend/./src/dataloaders/message.ts?");

/***/ }),

/***/ "./src/dataloaders/skill.ts":
/*!**********************************!*\
  !*** ./src/dataloaders/skill.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst dataloader_1 = __importDefault(__webpack_require__(/*! dataloader */ \"dataloader\"));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nfunction batchSkills(ids) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const Skill = mongoose_1.default.model(\"Skill\");\r\n        const skills = yield Skill.find({ _id: { $in: ids } });\r\n        const groupedSkills = ramda_1.groupBy(skill => skill.id, skills);\r\n        return ramda_1.map(id => groupedSkills[id][0], ids);\r\n    });\r\n}\r\nexports.default = () => new dataloader_1.default(batchSkills);\r\n\n\n//# sourceURL=webpack://backend/./src/dataloaders/skill.ts?");

/***/ }),

/***/ "./src/dataloaders/user.ts":
/*!*********************************!*\
  !*** ./src/dataloaders/user.ts ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst dataloader_1 = __importDefault(__webpack_require__(/*! dataloader */ \"dataloader\"));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nfunction batchUsers(ids) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const User = mongoose_1.default.model(\"User\");\r\n        const users = yield User.find({ _id: { $in: ids } });\r\n        const groupedUsers = ramda_1.groupBy(user => user.id, users);\r\n        return ramda_1.map(id => groupedUsers[id][0], ids);\r\n    });\r\n}\r\nexports.default = () => new dataloader_1.default(batchUsers);\r\n\n\n//# sourceURL=webpack://backend/./src/dataloaders/user.ts?");

/***/ }),

/***/ "./src/entities/conversation/index.ts":
/*!********************************************!*\
  !*** ./src/entities/conversation/index.ts ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ConversationResolvers = exports.ConversationTypeDef = void 0;\r\nvar typedef_1 = __webpack_require__(/*! ./typedef */ \"./src/entities/conversation/typedef/index.ts\");\r\nObject.defineProperty(exports, \"ConversationTypeDef\", ({ enumerable: true, get: function () { return __importDefault(typedef_1).default; } }));\r\nvar resolvers_1 = __webpack_require__(/*! ./resolvers */ \"./src/entities/conversation/resolvers/index.ts\");\r\nObject.defineProperty(exports, \"ConversationResolvers\", ({ enumerable: true, get: function () { return __importDefault(resolvers_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/conversation/index.ts?");

/***/ }),

/***/ "./src/entities/conversation/mapper.ts":
/*!*********************************************!*\
  !*** ./src/entities/conversation/mapper.ts ***!
  \*********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mapConversation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mapConversations [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.mapConversations = exports.mapConversation = void 0;\r\nconst mapper_1 = __webpack_require__(/*! ../message/mapper */ \"./src/entities/message/mapper.ts\");\r\nconst mapper_2 = __webpack_require__(/*! ../user/mapper */ \"./src/entities/user/mapper.ts\");\r\nexports.mapConversation = (conversation, context) => ({\r\n    id: conversation.id,\r\n    conversers: mapper_2.mapUserIds(conversation.conversers.map(id => id.toString()), context),\r\n    messages: mapper_1.mapMessageIds(conversation.messages.map(id => id.toString()), context),\r\n    createdAt: conversation.createdAt,\r\n    updatedAt: conversation.updatedAt\r\n});\r\nexports.mapConversations = (conversations, context) => conversations.map(conversation => exports.mapConversation(conversation, context));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/conversation/mapper.ts?");

/***/ }),

/***/ "./src/entities/conversation/model/index.ts":
/*!**************************************************!*\
  !*** ./src/entities/conversation/model/index.ts ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Conversation = void 0;\r\nvar model_1 = __webpack_require__(/*! ./model */ \"./src/entities/conversation/model/model.ts\");\r\nObject.defineProperty(exports, \"Conversation\", ({ enumerable: true, get: function () { return __importDefault(model_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/conversation/model/index.ts?");

/***/ }),

/***/ "./src/entities/conversation/model/model.ts":
/*!**************************************************!*\
  !*** ./src/entities/conversation/model/model.ts ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst Schema = mongoose_1.default.Schema;\r\nconst ConversationSchema = new Schema({\r\n    conversers: [\r\n        {\r\n            type: Schema.Types.ObjectId,\r\n            ref: \"User\"\r\n        }\r\n    ],\r\n    messages: [\r\n        {\r\n            type: Schema.Types.ObjectId,\r\n            ref: \"Message\"\r\n        }\r\n    ]\r\n}, { timestamps: true });\r\nexports.default = mongoose_1.default.model(\"Conversation\", ConversationSchema);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/conversation/model/model.ts?");

/***/ }),

/***/ "./src/entities/conversation/resolvers/index.ts":
/*!******************************************************!*\
  !*** ./src/entities/conversation/resolvers/index.ts ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst query_1 = __importDefault(__webpack_require__(/*! ./query */ \"./src/entities/conversation/resolvers/query.ts\"));\r\n// import MutationResolver from \"./mutation\";\r\n// import SubscriptionResolver from \"./subscription\";\r\nexports.default = Object.assign({}, query_1.default\r\n// ...MutationResolver\r\n// ...SubscriptionResolver\r\n);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/conversation/resolvers/index.ts?");

/***/ }),

/***/ "./src/entities/conversation/resolvers/query.ts":
/*!******************************************************!*\
  !*** ./src/entities/conversation/resolvers/query.ts ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mapper_1 = __webpack_require__(/*! ../mapper */ \"./src/entities/conversation/mapper.ts\");\r\nconst model_1 = __webpack_require__(/*! ../model */ \"./src/entities/conversation/model/index.ts\");\r\nexports.default = {\r\n    Query: {\r\n        conversationsByUser: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () { }),\r\n        conversations: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            return (yield model_1.Conversation.find({})).map(conversation => mapper_1.mapConversation(conversation, context));\r\n        })\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/conversation/resolvers/query.ts?");

/***/ }),

/***/ "./src/entities/conversation/typedef/index.ts":
/*!****************************************************!*\
  !*** ./src/entities/conversation/typedef/index.ts ***!
  \****************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nexports.default = apollo_server_express_1.gql `\r\n\textend type Query {\r\n\t\tconversations: [Conversation!]\r\n\t\tconversationsByUser(converserId: ID!): [Conversation!]\r\n\t}\r\n\r\n\ttype Conversation {\r\n\t\tid: ID!\r\n\t\tconversers: [User!]\r\n\t\tmessages(cursor: ID, limit: Int = 50): [Message!]\r\n\t\tcreatedAt: Date!\r\n\t\tupdatedAt: Date!\r\n\t}\r\n`;\r\n\n\n//# sourceURL=webpack://backend/./src/entities/conversation/typedef/index.ts?");

/***/ }),

/***/ "./src/entities/customDirectives/definitions/auth.ts":
/*!***********************************************************!*\
  !*** ./src/entities/customDirectives/definitions/auth.ts ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst authentication_1 = __webpack_require__(/*! ../../../helpers/functions/authentication */ \"./src/helpers/functions/authentication.ts\");\r\nclass AuthDirective extends apollo_server_express_1.SchemaDirectiveVisitor {\r\n    visitFieldDefinition(field) {\r\n        const { resolve = graphql_1.defaultFieldResolver } = field;\r\n        field.resolve = function (...args) {\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                const [_, __, context] = args;\r\n                authentication_1.ensureSignedIn(context);\r\n                return resolve.apply(this, args);\r\n            });\r\n        };\r\n    }\r\n}\r\nexports.default = AuthDirective;\r\n\n\n//# sourceURL=webpack://backend/./src/entities/customDirectives/definitions/auth.ts?");

/***/ }),

/***/ "./src/entities/customDirectives/definitions/guest.ts":
/*!************************************************************!*\
  !*** ./src/entities/customDirectives/definitions/guest.ts ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst authentication_1 = __webpack_require__(/*! ../../../helpers/functions/authentication */ \"./src/helpers/functions/authentication.ts\");\r\nclass GuestDirective extends apollo_server_express_1.SchemaDirectiveVisitor {\r\n    visitFieldDefinition(field) {\r\n        const { resolve = graphql_1.defaultFieldResolver } = field;\r\n        field.resolve = function (...args) {\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                const [_, __, context] = args;\r\n                authentication_1.ensureSignedOut(context);\r\n                return resolve.apply(this, args);\r\n            });\r\n        };\r\n    }\r\n}\r\nexports.default = GuestDirective;\r\n\n\n//# sourceURL=webpack://backend/./src/entities/customDirectives/definitions/guest.ts?");

/***/ }),

/***/ "./src/entities/customDirectives/definitions/index.ts":
/*!************************************************************!*\
  !*** ./src/entities/customDirectives/definitions/index.ts ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PrivateDirective = exports.GuestDirective = exports.AuthDirective = void 0;\r\nvar auth_1 = __webpack_require__(/*! ./auth */ \"./src/entities/customDirectives/definitions/auth.ts\");\r\nObject.defineProperty(exports, \"AuthDirective\", ({ enumerable: true, get: function () { return __importDefault(auth_1).default; } }));\r\nvar guest_1 = __webpack_require__(/*! ./guest */ \"./src/entities/customDirectives/definitions/guest.ts\");\r\nObject.defineProperty(exports, \"GuestDirective\", ({ enumerable: true, get: function () { return __importDefault(guest_1).default; } }));\r\nvar private_1 = __webpack_require__(/*! ./private */ \"./src/entities/customDirectives/definitions/private.ts\");\r\nObject.defineProperty(exports, \"PrivateDirective\", ({ enumerable: true, get: function () { return __importDefault(private_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/customDirectives/definitions/index.ts?");

/***/ }),

/***/ "./src/entities/customDirectives/definitions/private.ts":
/*!**************************************************************!*\
  !*** ./src/entities/customDirectives/definitions/private.ts ***!
  \**************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nclass PrivateDirective extends apollo_server_express_1.SchemaDirectiveVisitor {\r\n    visitFieldDefinition(field) {\r\n        const { resolve = graphql_1.defaultFieldResolver } = field;\r\n        field.resolve = function (...arg) {\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                const [parent, args, context, info] = arg;\r\n                if (parent.id !== context.req.session.userId ||\r\n                    !(\"userId\" in context.req.session))\r\n                    parent[field.name] = null;\r\n                return resolve.apply(this, [parent, args, context, info]);\r\n            });\r\n        };\r\n    }\r\n}\r\nexports.default = PrivateDirective;\r\n\n\n//# sourceURL=webpack://backend/./src/entities/customDirectives/definitions/private.ts?");

/***/ }),

/***/ "./src/entities/customDirectives/index.ts":
/*!************************************************!*\
  !*** ./src/entities/customDirectives/index.ts ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.DirectivesTypeDef = void 0;\r\nconst definitions_1 = __webpack_require__(/*! ./definitions */ \"./src/entities/customDirectives/definitions/index.ts\");\r\nvar typedef_1 = __webpack_require__(/*! ./typedef */ \"./src/entities/customDirectives/typedef/index.ts\");\r\nObject.defineProperty(exports, \"DirectivesTypeDef\", ({ enumerable: true, get: function () { return __importDefault(typedef_1).default; } }));\r\nexports.default = {\r\n    auth: definitions_1.AuthDirective,\r\n    guest: definitions_1.GuestDirective,\r\n    private: definitions_1.PrivateDirective\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/customDirectives/index.ts?");

/***/ }),

/***/ "./src/entities/customDirectives/typedef/index.ts":
/*!********************************************************!*\
  !*** ./src/entities/customDirectives/typedef/index.ts ***!
  \********************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nexports.default = apollo_server_express_1.gql `\r\n\tdirective @guest on FIELD_DEFINITION\r\n\tdirective @auth on FIELD_DEFINITION\r\n\tdirective @private on FIELD_DEFINITION\r\n`;\r\n\n\n//# sourceURL=webpack://backend/./src/entities/customDirectives/typedef/index.ts?");

/***/ }),

/***/ "./src/entities/customScalars/index.ts":
/*!*********************************************!*\
  !*** ./src/entities/customScalars/index.ts ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.CustomScalarResolvers = exports.CustomScalarTypeDef = void 0;\r\nvar typedef_1 = __webpack_require__(/*! ./typedef */ \"./src/entities/customScalars/typedef/index.ts\");\r\nObject.defineProperty(exports, \"CustomScalarTypeDef\", ({ enumerable: true, get: function () { return __importDefault(typedef_1).default; } }));\r\nvar resolvers_1 = __webpack_require__(/*! ./resolvers */ \"./src/entities/customScalars/resolvers/index.ts\");\r\nObject.defineProperty(exports, \"CustomScalarResolvers\", ({ enumerable: true, get: function () { return __importDefault(resolvers_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/customScalars/index.ts?");

/***/ }),

/***/ "./src/entities/customScalars/resolvers/Date.ts":
/*!******************************************************!*\
  !*** ./src/entities/customScalars/resolvers/Date.ts ***!
  \******************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst language_1 = __webpack_require__(/*! graphql/language */ \"graphql/language\");\r\nexports.default = {\r\n    Date: new graphql_1.GraphQLScalarType({\r\n        name: \"Date\",\r\n        description: \"Date custom scalar type\",\r\n        parseValue(value) {\r\n            return new Date(value); // value from the client\r\n        },\r\n        serialize(value) {\r\n            return value.getTime(); // value sent to the client\r\n        },\r\n        parseLiteral(ast) {\r\n            if (ast.kind === language_1.Kind.INT) {\r\n                return parseInt(ast.value, 10); // ast value is always in string format\r\n            }\r\n            return null;\r\n        }\r\n    })\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/customScalars/resolvers/Date.ts?");

/***/ }),

/***/ "./src/entities/customScalars/resolvers/index.ts":
/*!*******************************************************!*\
  !*** ./src/entities/customScalars/resolvers/index.ts ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Date_1 = __importDefault(__webpack_require__(/*! ./Date */ \"./src/entities/customScalars/resolvers/Date.ts\"));\r\nexports.default = Object.assign({}, Date_1.default);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/customScalars/resolvers/index.ts?");

/***/ }),

/***/ "./src/entities/customScalars/typedef/index.ts":
/*!*****************************************************!*\
  !*** ./src/entities/customScalars/typedef/index.ts ***!
  \*****************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nexports.default = apollo_server_express_1.gql `\r\n\tscalar Date\r\n`;\r\n\n\n//# sourceURL=webpack://backend/./src/entities/customScalars/typedef/index.ts?");

/***/ }),

/***/ "./src/entities/index.ts":
/*!*******************************!*\
  !*** ./src/entities/index.ts ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Resolvers = exports.TypeDefs = void 0;\r\nvar typedef_1 = __webpack_require__(/*! ./typedef */ \"./src/entities/typedef.ts\");\r\nObject.defineProperty(exports, \"TypeDefs\", ({ enumerable: true, get: function () { return __importDefault(typedef_1).default; } }));\r\nvar resolvers_1 = __webpack_require__(/*! ./resolvers */ \"./src/entities/resolvers.ts\");\r\nObject.defineProperty(exports, \"Resolvers\", ({ enumerable: true, get: function () { return __importDefault(resolvers_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/index.ts?");

/***/ }),

/***/ "./src/entities/message/index.ts":
/*!***************************************!*\
  !*** ./src/entities/message/index.ts ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MessageResolvers = exports.MessageTypeDef = void 0;\r\nvar typedef_1 = __webpack_require__(/*! ./typedef */ \"./src/entities/message/typedef/index.ts\");\r\nObject.defineProperty(exports, \"MessageTypeDef\", ({ enumerable: true, get: function () { return __importDefault(typedef_1).default; } }));\r\nvar resolver_1 = __webpack_require__(/*! ./resolver */ \"./src/entities/message/resolver/index.ts\");\r\nObject.defineProperty(exports, \"MessageResolvers\", ({ enumerable: true, get: function () { return __importDefault(resolver_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/message/index.ts?");

/***/ }),

/***/ "./src/entities/message/mapper.ts":
/*!****************************************!*\
  !*** ./src/entities/message/mapper.ts ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.mapMessageIds = exports.mapMessage = void 0;\r\nconst mapper_1 = __webpack_require__(/*! ../user/mapper */ \"./src/entities/user/mapper.ts\");\r\nexports.mapMessage = (message, context) => ({\r\n    id: message.id,\r\n    body: message.body,\r\n    read: message.read,\r\n    createdAt: message.createdAt,\r\n    updatedAt: message.updatedAt,\r\n    sender: mapper_1.mapUserId(message.sender.toString(), context),\r\n    receiver: mapper_1.mapUserId(message.receiver.toString(), context)\r\n});\r\nexports.mapMessageIds = (ids, context) => () => __awaiter(void 0, void 0, void 0, function* () {\r\n    return (yield context.dataloaders.messageLoader.loadMany(ids)).map(message => exports.mapMessage(message, context));\r\n});\r\n\n\n//# sourceURL=webpack://backend/./src/entities/message/mapper.ts?");

/***/ }),

/***/ "./src/entities/message/model/index.ts":
/*!*********************************************!*\
  !*** ./src/entities/message/model/index.ts ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Message = void 0;\r\nvar model_1 = __webpack_require__(/*! ./model */ \"./src/entities/message/model/model.ts\");\r\nObject.defineProperty(exports, \"Message\", ({ enumerable: true, get: function () { return __importDefault(model_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/message/model/index.ts?");

/***/ }),

/***/ "./src/entities/message/model/model.ts":
/*!*********************************************!*\
  !*** ./src/entities/message/model/model.ts ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst Schema = mongoose_1.default.Schema;\r\nconst MessageSchema = new Schema({\r\n    sender: { type: Schema.Types.ObjectId, ref: \"User\" },\r\n    receiver: { type: Schema.Types.ObjectId, ref: \"User\" },\r\n    body: { type: String, required: true },\r\n    read: { type: Boolean, required: true, default: false }\r\n}, { timestamps: true });\r\nexports.default = mongoose_1.default.model(\"Message\", MessageSchema);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/message/model/model.ts?");

/***/ }),

/***/ "./src/entities/message/resolver/index.ts":
/*!************************************************!*\
  !*** ./src/entities/message/resolver/index.ts ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst query_1 = __importDefault(__webpack_require__(/*! ./query */ \"./src/entities/message/resolver/query.ts\"));\r\nconst mutation_1 = __importDefault(__webpack_require__(/*! ./mutation */ \"./src/entities/message/resolver/mutation.ts\"));\r\n// import SubscriptionResolver from \"./subscription\";\r\nexports.default = Object.assign(Object.assign({}, query_1.default), mutation_1.default\r\n// ...SubscriptionResolver\r\n);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/message/resolver/index.ts?");

/***/ }),

/***/ "./src/entities/message/resolver/mutation.ts":
/*!***************************************************!*\
  !*** ./src/entities/message/resolver/mutation.ts ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst model_1 = __webpack_require__(/*! ../../conversation/model */ \"./src/entities/conversation/model/index.ts\");\r\nconst model_2 = __webpack_require__(/*! ../../user/model */ \"./src/entities/user/model/index.ts\");\r\nconst mapper_1 = __webpack_require__(/*! ../mapper */ \"./src/entities/message/mapper.ts\");\r\nconst model_3 = __webpack_require__(/*! ../model */ \"./src/entities/message/model/index.ts\");\r\nexports.default = {\r\n    Mutation: {\r\n        createMessage: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            const message = yield model_3.Message.create({\r\n                sender: args.input.senderId,\r\n                receiver: args.input.receiverId,\r\n                body: args.input.body\r\n            });\r\n            const conversation = yield model_1.Conversation.findOne({\r\n                conversers: { $all: [args.input.senderId, args.input.receiverId] }\r\n            });\r\n            if (!conversation) {\r\n                const conversation = yield model_1.Conversation.create({\r\n                    conversers: [args.input.senderId, args.input.receiverId]\r\n                });\r\n                yield conversation.updateOne({\r\n                    messages: [message.id]\r\n                });\r\n                yield model_2.User.findByIdAndUpdate(args.input.senderId, {\r\n                    $push: { conversations: conversation.id }\r\n                });\r\n                yield model_2.User.findByIdAndUpdate(args.input.receiverId, {\r\n                    $push: { conversations: conversation.id }\r\n                });\r\n                return mapper_1.mapMessage(message, context);\r\n            }\r\n            yield conversation.updateOne({\r\n                $push: {\r\n                    messages: {\r\n                        $each: [message.id],\r\n                        $position: 0\r\n                    }\r\n                }\r\n            });\r\n            return mapper_1.mapMessage(message, context);\r\n        }),\r\n        editMessage: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            const message = yield model_3.Message.findByIdAndUpdate(args.messageId, { body: args.body }, { new: true });\r\n            return mapper_1.mapMessage(message, context);\r\n        }),\r\n        removeMessage: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            const result = yield model_3.Message.findByIdAndDelete(args.messageId);\r\n            if (result)\r\n                return true;\r\n            return false;\r\n        })\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/message/resolver/mutation.ts?");

/***/ }),

/***/ "./src/entities/message/resolver/query.ts":
/*!************************************************!*\
  !*** ./src/entities/message/resolver/query.ts ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mapper_1 = __webpack_require__(/*! ../mapper */ \"./src/entities/message/mapper.ts\");\r\nconst model_1 = __webpack_require__(/*! ../model */ \"./src/entities/message/model/index.ts\");\r\nexports.default = {\r\n    Query: {\r\n        messages: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () { return (yield model_1.Message.find({})).map(message => mapper_1.mapMessage(message, context)); })\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/message/resolver/query.ts?");

/***/ }),

/***/ "./src/entities/message/typedef/index.ts":
/*!***********************************************!*\
  !*** ./src/entities/message/typedef/index.ts ***!
  \***********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nexports.default = apollo_server_express_1.gql `\r\n\tinput StrictMessageInput {\r\n\t\tsenderId: ID!\r\n\t\treceiverId: ID!\r\n\t\tbody: String!\r\n\t}\r\n\r\n\textend type Query {\r\n\t\tmessages: [Message!]\r\n\t}\r\n\r\n\textend type Mutation {\r\n\t\tcreateMessage(input: StrictMessageInput!): Message!\r\n\t\tremoveMessage(messageId: ID!): Boolean!\r\n\t\teditMessage(body: String!, messageId: ID!): Message!\r\n\t}\r\n\r\n\ttype Message {\r\n\t\tid: ID!\r\n\t\tsender: User!\r\n\t\treceiver: User!\r\n\t\tbody: String!\r\n\t\tread: Boolean!\r\n\t\tcreatedAt: Date!\r\n\t\tupdatedAt: Date!\r\n\t}\r\n`;\r\n\n\n//# sourceURL=webpack://backend/./src/entities/message/typedef/index.ts?");

/***/ }),

/***/ "./src/entities/projectRequest/index.ts":
/*!**********************************************!*\
  !*** ./src/entities/projectRequest/index.ts ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ProjectRequestTypeDef = exports.ProjectRequestResolvers = void 0;\r\nvar resolvers_1 = __webpack_require__(/*! ./resolvers */ \"./src/entities/projectRequest/resolvers/index.ts\");\r\nObject.defineProperty(exports, \"ProjectRequestResolvers\", ({ enumerable: true, get: function () { return __importDefault(resolvers_1).default; } }));\r\nvar typedef_1 = __webpack_require__(/*! ./typedef */ \"./src/entities/projectRequest/typedef/index.ts\");\r\nObject.defineProperty(exports, \"ProjectRequestTypeDef\", ({ enumerable: true, get: function () { return __importDefault(typedef_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/projectRequest/index.ts?");

/***/ }),

/***/ "./src/entities/projectRequest/mapper.ts":
/*!***********************************************!*\
  !*** ./src/entities/projectRequest/mapper.ts ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.mapProjectRequest = void 0;\r\nconst model_1 = __webpack_require__(/*! ../project/model */ \"./src/entities/project/model/index.ts\");\r\nconst mapper_1 = __webpack_require__(/*! ../user/mapper */ \"./src/entities/user/mapper.ts\");\r\nexports.mapProjectRequest = (projectRequest, context) => ({\r\n    id: projectRequest.id,\r\n    from: mapper_1.mapUserId(projectRequest.from, context),\r\n    to: () => __awaiter(void 0, void 0, void 0, function* () { return model_1.Project.findById(projectRequest.to); }),\r\n    message: projectRequest.message,\r\n    status: projectRequest.status,\r\n    createdAt: projectRequest.createdAt,\r\n    updatedAt: projectRequest.updatedAt\r\n});\r\n\n\n//# sourceURL=webpack://backend/./src/entities/projectRequest/mapper.ts?");

/***/ }),

/***/ "./src/entities/projectRequest/model/index.ts":
/*!****************************************************!*\
  !*** ./src/entities/projectRequest/model/index.ts ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ProjectRequest = void 0;\r\nvar model_1 = __webpack_require__(/*! ./model */ \"./src/entities/projectRequest/model/model.ts\");\r\nObject.defineProperty(exports, \"ProjectRequest\", ({ enumerable: true, get: function () { return __importDefault(model_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/projectRequest/model/index.ts?");

/***/ }),

/***/ "./src/entities/projectRequest/model/model.ts":
/*!****************************************************!*\
  !*** ./src/entities/projectRequest/model/model.ts ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst Schema = mongoose_1.default.Schema;\r\nconst ProjectRequestSchema = new Schema({\r\n    from: { type: Schema.Types.ObjectId, ref: \"User\" },\r\n    to: { type: Schema.Types.ObjectId, ref: \"Project\" },\r\n    message: String,\r\n    status: {\r\n        type: String,\r\n        enum: [\"PENDING\", \"ACCEPTED\", \"DENIED\"],\r\n        required: true,\r\n        default: \"PENDING\"\r\n    }\r\n}, { timestamps: true });\r\nexports.default = mongoose_1.default.model(\"ProjectRequest\", ProjectRequestSchema);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/projectRequest/model/model.ts?");

/***/ }),

/***/ "./src/entities/projectRequest/model/types.ts":
/*!****************************************************!*\
  !*** ./src/entities/projectRequest/model/types.ts ***!
  \****************************************************/
/*! flagged exports */
/*! export ProjectRequestStatusEnum [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ProjectRequestStatusEnum = void 0;\r\nvar ProjectRequestStatusEnum;\r\n(function (ProjectRequestStatusEnum) {\r\n    ProjectRequestStatusEnum[\"PENDING\"] = \"PENDING\";\r\n    ProjectRequestStatusEnum[\"ACCEPTED\"] = \"ACCEPTED\";\r\n    ProjectRequestStatusEnum[\"DENIED\"] = \"DENIED\";\r\n})(ProjectRequestStatusEnum = exports.ProjectRequestStatusEnum || (exports.ProjectRequestStatusEnum = {}));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/projectRequest/model/types.ts?");

/***/ }),

/***/ "./src/entities/projectRequest/resolvers/index.ts":
/*!********************************************************!*\
  !*** ./src/entities/projectRequest/resolvers/index.ts ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst query_1 = __importDefault(__webpack_require__(/*! ./query */ \"./src/entities/projectRequest/resolvers/query.ts\"));\r\nconst mutation_1 = __importDefault(__webpack_require__(/*! ./mutation */ \"./src/entities/projectRequest/resolvers/mutation.ts\"));\r\n// import SubscriptionResolver from \"./subscription\";\r\nexports.default = Object.assign(Object.assign({}, mutation_1.default), query_1.default);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/projectRequest/resolvers/index.ts?");

/***/ }),

/***/ "./src/entities/projectRequest/resolvers/mutation.ts":
/*!***********************************************************!*\
  !*** ./src/entities/projectRequest/resolvers/mutation.ts ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n//local\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nconst model_1 = __webpack_require__(/*! ../../project/model */ \"./src/entities/project/model/index.ts\");\r\nconst mapper_1 = __webpack_require__(/*! ../mapper */ \"./src/entities/projectRequest/mapper.ts\");\r\nconst model_2 = __webpack_require__(/*! ../model */ \"./src/entities/projectRequest/model/index.ts\");\r\nconst types_1 = __webpack_require__(/*! ../model/types */ \"./src/entities/projectRequest/model/types.ts\");\r\nexports.default = {\r\n    Mutation: {\r\n        toggleRequestProject: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            const oldRequest = yield model_2.ProjectRequest.findOne({\r\n                from: context.req.session.userId,\r\n                to: args.projectId\r\n            });\r\n            if (oldRequest) {\r\n                yield oldRequest.deleteOne((err, raw) => {\r\n                    if (err)\r\n                        throw new apollo_server_express_1.ApolloError(err);\r\n                });\r\n                return false;\r\n            }\r\n            const project = yield model_1.Project.findById(args.projectId);\r\n            if (project.details.creator.toString() ===\r\n                context.req.session.userId.toString())\r\n                throw new apollo_server_express_1.ApolloError(\"You cannot request your own project.\");\r\n            yield model_2.ProjectRequest.create({\r\n                from: context.req.session.userId,\r\n                to: args.projectId,\r\n                status: types_1.ProjectRequestStatusEnum.PENDING,\r\n                message: args.message.length === 0 ? null : args.message\r\n            });\r\n            return true;\r\n        }),\r\n        acceptProjectRequest: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            const projectRequest = yield model_2.ProjectRequest.findById(args.projectRequestId);\r\n            const project = yield model_1.Project.findById(projectRequest.to);\r\n            if (project.details.creator.toString() !==\r\n                context.req.session.userId.toString())\r\n                throw new apollo_server_express_1.AuthenticationError(\"Your are not allowed to accept this request.\");\r\n            if (projectRequest.status === types_1.ProjectRequestStatusEnum.ACCEPTED)\r\n                throw new apollo_server_express_1.ApolloError(\"Request is already accepted.\");\r\n            const result = yield model_2.ProjectRequest.findByIdAndUpdate(projectRequest.id, {\r\n                status: types_1.ProjectRequestStatusEnum.ACCEPTED\r\n            }, { new: true });\r\n            yield project.updateOne({ $push: { \"work.team\": result.from } });\r\n            return mapper_1.mapProjectRequest(result, context);\r\n        })\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/projectRequest/resolvers/mutation.ts?");

/***/ }),

/***/ "./src/entities/projectRequest/resolvers/query.ts":
/*!********************************************************!*\
  !*** ./src/entities/projectRequest/resolvers/query.ts ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mapper_1 = __webpack_require__(/*! ../mapper */ \"./src/entities/projectRequest/mapper.ts\");\r\nconst model_1 = __webpack_require__(/*! ../model */ \"./src/entities/projectRequest/model/index.ts\");\r\nexports.default = {\r\n    Query: {\r\n        projectRequests: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            return (yield model_1.ProjectRequest.find({})).map(projectRequest => mapper_1.mapProjectRequest(projectRequest, context));\r\n        })\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/projectRequest/resolvers/query.ts?");

/***/ }),

/***/ "./src/entities/projectRequest/typedef/index.ts":
/*!******************************************************!*\
  !*** ./src/entities/projectRequest/typedef/index.ts ***!
  \******************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nexports.default = apollo_server_express_1.gql `\r\n\tenum RequestStatusEnum {\r\n\t\tPENDING\r\n\t\tACCEPTED\r\n\t\tDENIED\r\n\t}\r\n\r\n\ttype ProjectRequest {\r\n\t\tid: ID!\r\n\t\tfrom: User!\r\n\t\tto: Project!\r\n\t\tmessage: String\r\n\t\tstatus: RequestStatusEnum!\r\n\t\tcreatedAt: Date!\r\n\t\tupdatedAt: Date!\r\n\t}\r\n\r\n\textend type Query {\r\n\t\tprojectRequests: [ProjectRequest!]\r\n\t}\r\n\r\n\textend type Mutation {\r\n\t\ttoggleRequestProject(message: String!, projectId: ID!): Boolean! @auth\r\n\t\tacceptProjectRequest(projectRequestId: ID!): ProjectRequest! @auth\r\n\t}\r\n`;\r\n\n\n//# sourceURL=webpack://backend/./src/entities/projectRequest/typedef/index.ts?");

/***/ }),

/***/ "./src/entities/project/index.ts":
/*!***************************************!*\
  !*** ./src/entities/project/index.ts ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ProjectTypeDef = exports.ProjectResolvers = void 0;\r\nvar resolvers_1 = __webpack_require__(/*! ./resolvers */ \"./src/entities/project/resolvers/index.ts\");\r\nObject.defineProperty(exports, \"ProjectResolvers\", ({ enumerable: true, get: function () { return __importDefault(resolvers_1).default; } }));\r\nvar typedef_1 = __webpack_require__(/*! ./typedef */ \"./src/entities/project/typedef/index.ts\");\r\nObject.defineProperty(exports, \"ProjectTypeDef\", ({ enumerable: true, get: function () { return __importDefault(typedef_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/project/index.ts?");

/***/ }),

/***/ "./src/entities/project/mapper.ts":
/*!****************************************!*\
  !*** ./src/entities/project/mapper.ts ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.mapProject = void 0;\r\nconst mapper_1 = __webpack_require__(/*! ../projectRequest/mapper */ \"./src/entities/projectRequest/mapper.ts\");\r\nconst model_1 = __webpack_require__(/*! ../projectRequest/model */ \"./src/entities/projectRequest/model/index.ts\");\r\nconst mapper_2 = __webpack_require__(/*! ../skill/mapper */ \"./src/entities/skill/mapper.ts\");\r\nconst mapper_3 = __webpack_require__(/*! ../user/mapper */ \"./src/entities/user/mapper.ts\");\r\nexports.mapProject = (project, context) => ({\r\n    id: project.id,\r\n    details: Object.assign(Object.assign({}, project.details), { skillSet: mapper_2.mapSkillIds(project.details.skillSet, context), creator: mapper_3.mapUserId(project.details.creator, context), stars: mapper_3.mapUserIds(project.details.stars, context), requests: () => __awaiter(void 0, void 0, void 0, function* () {\r\n            return (yield model_1.ProjectRequest.find({ to: project.id })).map(request => mapper_1.mapProjectRequest(request, context));\r\n        }) }),\r\n    isStarred: project.details.stars.includes(context.req.session.userId),\r\n    isRequested: () => __awaiter(void 0, void 0, void 0, function* () {\r\n        return (yield model_1.ProjectRequest.findOne({\r\n            from: context.req.session.userId,\r\n            to: project.id\r\n        })) !== null;\r\n    }),\r\n    state: project.state,\r\n    work: {\r\n        team: mapper_3.mapUserIds(project.work.team, context)\r\n    },\r\n    createdAt: project.createdAt,\r\n    updatedAt: project.updatedAt\r\n});\r\n\n\n//# sourceURL=webpack://backend/./src/entities/project/mapper.ts?");

/***/ }),

/***/ "./src/entities/project/model/index.ts":
/*!*********************************************!*\
  !*** ./src/entities/project/model/index.ts ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Project = void 0;\r\nvar model_1 = __webpack_require__(/*! ./model */ \"./src/entities/project/model/model.ts\");\r\nObject.defineProperty(exports, \"Project\", ({ enumerable: true, get: function () { return __importDefault(model_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/project/model/index.ts?");

/***/ }),

/***/ "./src/entities/project/model/model.ts":
/*!*********************************************!*\
  !*** ./src/entities/project/model/model.ts ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst Schema = mongoose_1.default.Schema;\r\nconst ProjectSchema = new Schema({\r\n    details: {\r\n        title: { type: String, required: true },\r\n        description: { type: String, required: true },\r\n        startingOn: { type: Date, required: true },\r\n        duration: { type: Number, required: true },\r\n        maxTeamMembers: { type: Number, required: true },\r\n        creator: { type: Schema.Types.ObjectId, ref: \"User\" },\r\n        skillSet: [{ type: Schema.Types.ObjectId, ref: \"Skill\" }],\r\n        stars: [{ type: Schema.Types.ObjectId, ref: \"User\" }]\r\n    },\r\n    work: {\r\n        team: [{ type: Schema.Types.ObjectId, ref: \"User\" }]\r\n    },\r\n    state: {\r\n        type: String,\r\n        enum: [\"OPEN\", \"CLOSED\", \"STARTED\", \"ENDED\"],\r\n        default: \"OPEN\"\r\n    }\r\n}, { timestamps: true });\r\nexports.default = mongoose_1.default.model(\"Project\", ProjectSchema);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/project/model/model.ts?");

/***/ }),

/***/ "./src/entities/project/resolvers/index.ts":
/*!*************************************************!*\
  !*** ./src/entities/project/resolvers/index.ts ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst query_1 = __importDefault(__webpack_require__(/*! ./query */ \"./src/entities/project/resolvers/query.ts\"));\r\nconst mutation_1 = __importDefault(__webpack_require__(/*! ./mutation */ \"./src/entities/project/resolvers/mutation.ts\"));\r\n// import SubscriptionResolver from \"./subscription\";\r\nexports.default = Object.assign(Object.assign({}, mutation_1.default), query_1.default);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/project/resolvers/index.ts?");

/***/ }),

/***/ "./src/entities/project/resolvers/mutation.ts":
/*!****************************************************!*\
  !*** ./src/entities/project/resolvers/mutation.ts ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nconst mapper_1 = __webpack_require__(/*! ../mapper */ \"./src/entities/project/mapper.ts\");\r\nconst model_1 = __webpack_require__(/*! ../model */ \"./src/entities/project/model/index.ts\");\r\nexports.default = {\r\n    Mutation: {\r\n        createProject: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            const skillSet = args.input.details.skillSet;\r\n            const input = {\r\n                details: Object.assign(Object.assign({}, args.input.details), { skillSet: skillSet.map(obj => obj.skillId), creator: context.req.session.userId })\r\n            };\r\n            const project = yield model_1.Project.create(input);\r\n            return mapper_1.mapProject(project, context);\r\n        }),\r\n        editProject: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            const project = yield model_1.Project.findById(args.input.projectId);\r\n            if (!project)\r\n                throw new apollo_server_express_1.ApolloError(\"Project not found.\");\r\n            if (project.details.creator.toString() !==\r\n                context.req.session.userId.toString())\r\n                throw new apollo_server_express_1.ApolloError(\"You cannot edit this project.\");\r\n            let skillSet = project.details.skillSet;\r\n            if (\"skillSet\" in args.input.details) {\r\n                const set = args.input.details.skillSet;\r\n                skillSet = set.map(obj => obj.skillId);\r\n            }\r\n            const doc = {\r\n                details: \"details\" in args.input\r\n                    ? Object.assign(Object.assign(Object.assign({}, project.toObject().details), args.input.details), { skillSet }) : project.toObject().details\r\n            };\r\n            yield project.updateOne(doc, (err, raw) => {\r\n                if (err)\r\n                    throw new apollo_server_express_1.ApolloError(err);\r\n            });\r\n            return mapper_1.mapProject(Object.assign(project, doc), context);\r\n        }),\r\n        toggleStarProject: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            const project = yield model_1.Project.findById(args.projectId);\r\n            const isStarred = project.details.stars.includes(context.req.session.userId);\r\n            if (isStarred)\r\n                yield project.updateOne({\r\n                    $pull: { \"details.stars\": context.req.session.userId }\r\n                });\r\n            else\r\n                yield project.updateOne({\r\n                    $push: { \"details.stars\": context.req.session.userId }\r\n                });\r\n            return !isStarred;\r\n        })\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/project/resolvers/mutation.ts?");

/***/ }),

/***/ "./src/entities/project/resolvers/query.ts":
/*!*************************************************!*\
  !*** ./src/entities/project/resolvers/query.ts ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst model_1 = __webpack_require__(/*! ../../user/model */ \"./src/entities/user/model/index.ts\");\r\nconst mapper_1 = __webpack_require__(/*! ../mapper */ \"./src/entities/project/mapper.ts\");\r\nconst model_2 = __webpack_require__(/*! ../model */ \"./src/entities/project/model/index.ts\");\r\nexports.default = {\r\n    Query: {\r\n        projects: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () { return (yield model_2.Project.find({})).map(project => mapper_1.mapProject(project, context)); }),\r\n        projectsByUserInterests: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            const user = yield model_1.User.findById(args.userId);\r\n            const skillIds = user.personalInfo.interests;\r\n            console.log(skillIds);\r\n            return (yield model_2.Project.find({ \"details.skillSet\": { $in: skillIds } })).map(project => mapper_1.mapProject(project, context));\r\n        }),\r\n        projectById: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () { return mapper_1.mapProject(yield model_2.Project.findById(args.projectId), context); })\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/project/resolvers/query.ts?");

/***/ }),

/***/ "./src/entities/project/typedef/index.ts":
/*!***********************************************!*\
  !*** ./src/entities/project/typedef/index.ts ***!
  \***********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nexports.default = apollo_server_express_1.gql `\r\n\tinput StrictProjectDetailsInput {\r\n\t\ttitle: String!\r\n\t\tdescription: String!\r\n\t\tstartingOn: Date!\r\n\t\tmaxTeamMembers: Int!\r\n\t\tduration: Int!\r\n\t\tskillSet: [SkillIdInput!]\r\n\t}\r\n\r\n\tinput StrictProjectInput {\r\n\t\tdetails: StrictProjectDetailsInput!\r\n\t}\r\n\r\n\tinput LooseProjectDetailsInput {\r\n\t\ttitle: String\r\n\t\tdescription: String\r\n\t\tstartingOn: Date\r\n\t\tmaxTeamMembers: Int\r\n\t\tduration: Int\r\n\t\tskillSet: [SkillIdInput!]\r\n\t}\r\n\r\n\tinput LooseProjectInput {\r\n\t\tprojectId: ID!\r\n\t\tdetails: LooseProjectDetailsInput\r\n\t}\r\n\r\n\tenum ProjectStateEnum {\r\n\t\tOPEN\r\n\t\tCLOSED\r\n\t\tSTARTED\r\n\t\tENDED\r\n\t}\r\n\r\n\ttype ProjectDetails {\r\n\t\ttitle: String!\r\n\t\tdescription: String!\r\n\t\tstartingOn: Date!\r\n\t\tmaxTeamMembers: Int!\r\n\t\tduration: Int!\r\n\t\tcreator: User!\r\n\t\tskillSet: [Skill!]\r\n\t\tstars: [User!]\r\n\t\trequests: [ProjectRequest!]\r\n\t}\r\n\r\n\ttype ProjectWork {\r\n\t\tteam: [User!]\r\n\t}\r\n\r\n\ttype Project {\r\n\t\tid: ID!\r\n\t\tdetails: ProjectDetails!\r\n\t\tstate: ProjectStateEnum!\r\n\t\twork: ProjectWork!\r\n\t\tisStarred: Boolean!\r\n\t\tisRequested: Boolean!\r\n\t\tcreatedAt: Date!\r\n\t\tupdatedAt: Date!\r\n\t}\r\n\r\n\textend type Query {\r\n\t\tprojects: [Project!]\r\n\t\tprojectsByUserInterests(userId: ID!): [Project!]\r\n\t\tprojectById(projectId: ID!): Project!\r\n\t}\r\n\r\n\textend type Mutation {\r\n\t\tcreateProject(input: StrictProjectInput!): Project! @auth\r\n\t\teditProject(input: LooseProjectInput!): Project! @auth\r\n\t\ttoggleStarProject(projectId: ID!): Boolean! @auth\r\n\t}\r\n`;\r\n\n\n//# sourceURL=webpack://backend/./src/entities/project/typedef/index.ts?");

/***/ }),

/***/ "./src/entities/resolvers.ts":
/*!***********************************!*\
  !*** ./src/entities/resolvers.ts ***!
  \***********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst user_1 = __webpack_require__(/*! ./user */ \"./src/entities/user/index.ts\");\r\nconst skill_1 = __webpack_require__(/*! ./skill */ \"./src/entities/skill/index.ts\");\r\nconst message_1 = __webpack_require__(/*! ./message */ \"./src/entities/message/index.ts\");\r\nconst project_1 = __webpack_require__(/*! ./project */ \"./src/entities/project/index.ts\");\r\nconst projectRequest_1 = __webpack_require__(/*! ./projectRequest */ \"./src/entities/projectRequest/index.ts\");\r\nconst conversation_1 = __webpack_require__(/*! ./conversation */ \"./src/entities/conversation/index.ts\");\r\nconst customScalars_1 = __webpack_require__(/*! ./customScalars */ \"./src/entities/customScalars/index.ts\");\r\nexports.default = [\r\n    user_1.UserResolvers,\r\n    skill_1.SkillResolvers,\r\n    customScalars_1.CustomScalarResolvers,\r\n    message_1.MessageResolvers,\r\n    project_1.ProjectResolvers,\r\n    projectRequest_1.ProjectRequestResolvers,\r\n    conversation_1.ConversationResolvers\r\n];\r\n\n\n//# sourceURL=webpack://backend/./src/entities/resolvers.ts?");

/***/ }),

/***/ "./src/entities/root/index.ts":
/*!************************************!*\
  !*** ./src/entities/root/index.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.RootTypeDef = void 0;\r\nvar typedef_1 = __webpack_require__(/*! ./typedef */ \"./src/entities/root/typedef/index.ts\");\r\nObject.defineProperty(exports, \"RootTypeDef\", ({ enumerable: true, get: function () { return __importDefault(typedef_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/root/index.ts?");

/***/ }),

/***/ "./src/entities/root/typedef/index.ts":
/*!********************************************!*\
  !*** ./src/entities/root/typedef/index.ts ***!
  \********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nexports.default = apollo_server_express_1.gql `\r\n\ttype Query {\r\n\t\t_: String\r\n\t}\r\n\r\n\ttype Mutation {\r\n\t\t_: String\r\n\t}\r\n\r\n\ttype Subscription {\r\n\t\t_: String\r\n\t}\r\n`;\r\n\n\n//# sourceURL=webpack://backend/./src/entities/root/typedef/index.ts?");

/***/ }),

/***/ "./src/entities/skill/index.ts":
/*!*************************************!*\
  !*** ./src/entities/skill/index.ts ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SkillTypeDef = exports.SkillResolvers = void 0;\r\nvar resolvers_1 = __webpack_require__(/*! ./resolvers */ \"./src/entities/skill/resolvers/index.ts\");\r\nObject.defineProperty(exports, \"SkillResolvers\", ({ enumerable: true, get: function () { return __importDefault(resolvers_1).default; } }));\r\nvar typedef_1 = __webpack_require__(/*! ./typedef */ \"./src/entities/skill/typedef/index.ts\");\r\nObject.defineProperty(exports, \"SkillTypeDef\", ({ enumerable: true, get: function () { return __importDefault(typedef_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/skill/index.ts?");

/***/ }),

/***/ "./src/entities/skill/mapper.ts":
/*!**************************************!*\
  !*** ./src/entities/skill/mapper.ts ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__ */
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.mapSkillIds = exports.mapSkill = void 0;\r\nexports.mapSkill = (skill) => {\r\n    return {\r\n        id: skill.id,\r\n        name: skill.name,\r\n        color: skill.color,\r\n        description: skill.description\r\n    };\r\n};\r\nexports.mapSkillIds = (ids, context) => () => __awaiter(void 0, void 0, void 0, function* () {\r\n    return (yield context.dataloaders.skillLoader.loadMany(ids)).map(skill => exports.mapSkill(skill));\r\n});\r\n\n\n//# sourceURL=webpack://backend/./src/entities/skill/mapper.ts?");

/***/ }),

/***/ "./src/entities/skill/model/index.ts":
/*!*******************************************!*\
  !*** ./src/entities/skill/model/index.ts ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Skill = void 0;\r\nvar model_1 = __webpack_require__(/*! ./model */ \"./src/entities/skill/model/model.ts\");\r\nObject.defineProperty(exports, \"Skill\", ({ enumerable: true, get: function () { return __importDefault(model_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/skill/model/index.ts?");

/***/ }),

/***/ "./src/entities/skill/model/model.ts":
/*!*******************************************!*\
  !*** ./src/entities/skill/model/model.ts ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst Schema = mongoose_1.default.Schema;\r\nconst SkillSchema = new Schema({\r\n    name: {\r\n        type: String,\r\n        required: true\r\n    },\r\n    description: {\r\n        type: String,\r\n        required: true\r\n    },\r\n    color: {\r\n        type: String,\r\n        required: true\r\n    }\r\n});\r\nexports.default = mongoose_1.default.model(\"Skill\", SkillSchema);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/skill/model/model.ts?");

/***/ }),

/***/ "./src/entities/skill/resolvers/index.ts":
/*!***********************************************!*\
  !*** ./src/entities/skill/resolvers/index.ts ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst query_1 = __importDefault(__webpack_require__(/*! ./query */ \"./src/entities/skill/resolvers/query.ts\"));\r\nconst mutation_1 = __importDefault(__webpack_require__(/*! ./mutation */ \"./src/entities/skill/resolvers/mutation.ts\"));\r\nexports.default = Object.assign(Object.assign({}, query_1.default), mutation_1.default);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/skill/resolvers/index.ts?");

/***/ }),

/***/ "./src/entities/skill/resolvers/mutation.ts":
/*!**************************************************!*\
  !*** ./src/entities/skill/resolvers/mutation.ts ***!
  \**************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst model_1 = __webpack_require__(/*! ../model */ \"./src/entities/skill/model/index.ts\");\r\nexports.default = {\r\n    Mutation: {\r\n        createSkill: (parent, args, context, info) => {\r\n            return model_1.Skill.create(args.input);\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/skill/resolvers/mutation.ts?");

/***/ }),

/***/ "./src/entities/skill/resolvers/query.ts":
/*!***********************************************!*\
  !*** ./src/entities/skill/resolvers/query.ts ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mapper_1 = __webpack_require__(/*! ../mapper */ \"./src/entities/skill/mapper.ts\");\r\nconst model_1 = __webpack_require__(/*! ../model */ \"./src/entities/skill/model/index.ts\");\r\nexports.default = {\r\n    Query: {\r\n        skills: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () { return (yield model_1.Skill.find({})).map(skill => mapper_1.mapSkill(skill)); })\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/skill/resolvers/query.ts?");

/***/ }),

/***/ "./src/entities/skill/typedef/index.ts":
/*!*********************************************!*\
  !*** ./src/entities/skill/typedef/index.ts ***!
  \*********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nexports.default = apollo_server_express_1.gql `\r\n\tinput SkillIdInput {\r\n\t\tskillId: ID!\r\n\t}\r\n\r\n\tinput StrictSkillInput {\r\n\t\tname: String!\r\n\t\tdescription: String!\r\n\t\tcolor: String!\r\n\t}\r\n\r\n\tinput LooseSkillInput {\r\n\t\tname: String\r\n\t\tdescription: String\r\n\t\tcolor: String\r\n\t}\r\n\r\n\textend type Query {\r\n\t\tskills: [Skill!]\r\n\t}\r\n\r\n\textend type Mutation {\r\n\t\tcreateSkill(input: StrictSkillInput!): Skill! @auth\r\n\t}\r\n\r\n\ttype Skill {\r\n\t\tid: ID!\r\n\t\tname: String!\r\n\t\tdescription: String!\r\n\t\tcolor: String!\r\n\t}\r\n`;\r\n\n\n//# sourceURL=webpack://backend/./src/entities/skill/typedef/index.ts?");

/***/ }),

/***/ "./src/entities/typedef.ts":
/*!*********************************!*\
  !*** ./src/entities/typedef.ts ***!
  \*********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst root_1 = __webpack_require__(/*! ./root */ \"./src/entities/root/index.ts\");\r\nconst user_1 = __webpack_require__(/*! ./user */ \"./src/entities/user/index.ts\");\r\nconst conversation_1 = __webpack_require__(/*! ./conversation */ \"./src/entities/conversation/index.ts\");\r\nconst message_1 = __webpack_require__(/*! ./message */ \"./src/entities/message/index.ts\");\r\nconst skill_1 = __webpack_require__(/*! ./skill */ \"./src/entities/skill/index.ts\");\r\nconst project_1 = __webpack_require__(/*! ./project */ \"./src/entities/project/index.ts\");\r\nconst projectRequest_1 = __webpack_require__(/*! ./projectRequest */ \"./src/entities/projectRequest/index.ts\");\r\nconst customScalars_1 = __webpack_require__(/*! ./customScalars */ \"./src/entities/customScalars/index.ts\");\r\nconst customDirectives_1 = __webpack_require__(/*! ./customDirectives */ \"./src/entities/customDirectives/index.ts\");\r\nexports.default = [\r\n    customScalars_1.CustomScalarTypeDef,\r\n    customDirectives_1.DirectivesTypeDef,\r\n    root_1.RootTypeDef,\r\n    user_1.UserTypeDef,\r\n    skill_1.SkillTypeDef,\r\n    message_1.MessageTypeDef,\r\n    project_1.ProjectTypeDef,\r\n    projectRequest_1.ProjectRequestTypeDef,\r\n    conversation_1.ConversationTypeDef\r\n];\r\n\n\n//# sourceURL=webpack://backend/./src/entities/typedef.ts?");

/***/ }),

/***/ "./src/entities/user/index.ts":
/*!************************************!*\
  !*** ./src/entities/user/index.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.UserTypeDef = exports.UserResolvers = void 0;\r\nvar resolvers_1 = __webpack_require__(/*! ./resolvers */ \"./src/entities/user/resolvers/index.ts\");\r\nObject.defineProperty(exports, \"UserResolvers\", ({ enumerable: true, get: function () { return __importDefault(resolvers_1).default; } }));\r\nvar typedef_1 = __webpack_require__(/*! ./typedef */ \"./src/entities/user/typedef/index.ts\");\r\nObject.defineProperty(exports, \"UserTypeDef\", ({ enumerable: true, get: function () { return __importDefault(typedef_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/user/index.ts?");

/***/ }),

/***/ "./src/entities/user/mapper.ts":
/*!*************************************!*\
  !*** ./src/entities/user/mapper.ts ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.mapUserIds = exports.mapUserId = exports.mapUser = void 0;\r\nconst mapper_1 = __webpack_require__(/*! ../skill/mapper */ \"./src/entities/skill/mapper.ts\");\r\nexports.mapUser = (user, context) => {\r\n    return {\r\n        id: user.id,\r\n        accountInfo: Object.assign({}, user.accountInfo),\r\n        personalInfo: Object.assign(Object.assign({}, user.personalInfo), { interests: mapper_1.mapSkillIds(user.personalInfo.interests, context) }),\r\n        statusInfo: user.statusInfo\r\n    };\r\n};\r\nexports.mapUserId = (id, context) => () => __awaiter(void 0, void 0, void 0, function* () { return exports.mapUser(yield context.dataloaders.userLoader.load(id), context); });\r\nexports.mapUserIds = (ids, context) => () => __awaiter(void 0, void 0, void 0, function* () {\r\n    return (yield context.dataloaders.userLoader.loadMany(ids)).map(user => exports.mapUser(user, context));\r\n});\r\n\n\n//# sourceURL=webpack://backend/./src/entities/user/mapper.ts?");

/***/ }),

/***/ "./src/entities/user/model/index.ts":
/*!******************************************!*\
  !*** ./src/entities/user/model/index.ts ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.User = void 0;\r\nvar model_1 = __webpack_require__(/*! ./model */ \"./src/entities/user/model/model.ts\");\r\nObject.defineProperty(exports, \"User\", ({ enumerable: true, get: function () { return __importDefault(model_1).default; } }));\r\n\n\n//# sourceURL=webpack://backend/./src/entities/user/model/index.ts?");

/***/ }),

/***/ "./src/entities/user/model/model.ts":
/*!******************************************!*\
  !*** ./src/entities/user/model/model.ts ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst bcrypt_1 = __webpack_require__(/*! bcrypt */ \"bcrypt\");\r\nconst Schema = mongoose_1.default.Schema;\r\nconst UserSchema = new Schema({\r\n    accountInfo: {\r\n        email: { type: String, required: true },\r\n        password: { type: String, required: true },\r\n        name: { type: String, required: true },\r\n        handler: { type: String, required: true },\r\n        verifiedEmail: { type: Boolean, default: false }\r\n    },\r\n    personalInfo: {\r\n        bio: { type: String, default: null },\r\n        birthDate: { type: Date, default: null },\r\n        interests: [{ type: Schema.Types.ObjectId, ref: \"Skill\" }]\r\n    },\r\n    statusInfo: {\r\n        isOnline: { type: Boolean, required: true, default: false },\r\n        lastActive: { type: Date, default: null }\r\n    },\r\n    conversations: [{ type: Schema.Types.ObjectId, ref: \"Conversation\" }]\r\n}, { timestamps: true, versionKey: \"schemaVersion\" });\r\n// hooks\r\nUserSchema.pre(\"save\", function () {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        if (this.isModified(\"accountInfo.password\")) {\r\n            this.accountInfo.password = yield bcrypt_1.hash(this.accountInfo.password, 12);\r\n        }\r\n    });\r\n});\r\n// instance methods\r\nUserSchema.methods.comparePassword = function (password) {\r\n    return bcrypt_1.compare(password, this.accountInfo.password);\r\n};\r\n// validators\r\nUserSchema.path(\"accountInfo.handler\").validate(function (value) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const User = mongoose_1.default.model(\"User\");\r\n        return (yield User.findOne({ \"accountInfo.handler\": value })) === null;\r\n    });\r\n}, \"Handler `{VALUE}` already exist\");\r\nUserSchema.path(\"accountInfo.email\").validate(function (value) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const User = mongoose_1.default.model(\"User\");\r\n        return (yield User.findOne({ \"accountInfo.email\": value })) === null;\r\n    });\r\n}, \"Email `{VALUE}` already registered.\");\r\nexports.default = mongoose_1.default.model(\"User\", UserSchema);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/user/model/model.ts?");

/***/ }),

/***/ "./src/entities/user/resolvers/index.ts":
/*!**********************************************!*\
  !*** ./src/entities/user/resolvers/index.ts ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst query_1 = __importDefault(__webpack_require__(/*! ./query */ \"./src/entities/user/resolvers/query.ts\"));\r\nconst mutation_1 = __importDefault(__webpack_require__(/*! ./mutation */ \"./src/entities/user/resolvers/mutation.ts\"));\r\nconst subscription_1 = __importDefault(__webpack_require__(/*! ./subscription */ \"./src/entities/user/resolvers/subscription.ts\"));\r\nexports.default = Object.assign(Object.assign(Object.assign({}, query_1.default), mutation_1.default), subscription_1.default);\r\n\n\n//# sourceURL=webpack://backend/./src/entities/user/resolvers/index.ts?");

/***/ }),

/***/ "./src/entities/user/resolvers/mutation.ts":
/*!*************************************************!*\
  !*** ./src/entities/user/resolvers/mutation.ts ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\r\n// local\r\nconst model_1 = __webpack_require__(/*! ../model */ \"./src/entities/user/model/index.ts\");\r\nconst authentication_1 = __webpack_require__(/*! ../../../helpers/functions/authentication */ \"./src/helpers/functions/authentication.ts\");\r\nconst mapper_1 = __webpack_require__(/*! ../mapper */ \"./src/entities/user/mapper.ts\");\r\nconst sendVerificationEmail_1 = __webpack_require__(/*! ../../../helpers/functions/sendVerificationEmail */ \"./src/helpers/functions/sendVerificationEmail.ts\");\r\nconst config_1 = __webpack_require__(/*! ../../../config */ \"./src/config/index.ts\");\r\nexports.default = {\r\n    Mutation: {\r\n        createUser: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            const user = yield model_1.User.create(args.input);\r\n            const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.accountInfo.email }, config_1.TokenConfig.tokenSecret, { expiresIn: parseInt(config_1.TokenConfig.tokenExpiry) });\r\n            sendVerificationEmail_1.sendVerificationEmail(user, token);\r\n            return mapper_1.mapUser(user, context);\r\n        }),\r\n        editUser: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            const user = yield model_1.User.findById(args.input.userId);\r\n            if (!user)\r\n                throw new apollo_server_express_1.ApolloError(\"User not found.\");\r\n            delete args.input[\"userId\"];\r\n            const doc = {\r\n                accountInfo: \"accountInfo\" in args.input\r\n                    ? Object.assign(Object.assign({}, user.toObject().accountInfo), args.input.accountInfo) : user.toObject().accountInfo,\r\n                personalInfo: \"personalInfo\" in args.input\r\n                    ? Object.assign(Object.assign({}, args.input.personalInfo), { interests: \"interests\" in args.input.personalInfo\r\n                            ? args.input.personalInfo\r\n                                .interests.map(interest => interest.skillId)\r\n                            : user.personalInfo.interests }) : user.toObject().personalInfo\r\n            };\r\n            yield user.updateOne(doc, (err, raw) => {\r\n                if (err)\r\n                    throw new apollo_server_express_1.ApolloError(err);\r\n            });\r\n            return mapper_1.mapUser(Object.assign(user, doc), context);\r\n        }),\r\n        signIn: (parent, { email, password }, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            return mapper_1.mapUser(yield authentication_1.attemptSignIn(email, password, context), context);\r\n        }),\r\n        signOut: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {\r\n            yield model_1.User.findByIdAndUpdate(context.req.session.userId, {\r\n                \"statusInfo.lastActive\": new Date().getTime()\r\n            });\r\n            return authentication_1.attemptSignOut(context);\r\n        })\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/user/resolvers/mutation.ts?");

/***/ }),

/***/ "./src/entities/user/resolvers/query.ts":
/*!**********************************************!*\
  !*** ./src/entities/user/resolvers/query.ts ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n//local\r\nconst model_1 = __webpack_require__(/*! ../model */ \"./src/entities/user/model/index.ts\");\r\nconst mapper_1 = __webpack_require__(/*! ../mapper */ \"./src/entities/user/mapper.ts\");\r\nexports.default = {\r\n    Query: {\r\n        users: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () { return (yield model_1.User.find({})).map(userDoc => mapper_1.mapUser(userDoc, context)); }),\r\n        me: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () { return mapper_1.mapUser(yield model_1.User.findById(context.req.session.userId), context); }),\r\n        user: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () { return mapper_1.mapUser(yield model_1.User.findById(args.userId), context); })\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/user/resolvers/query.ts?");

/***/ }),

/***/ "./src/entities/user/resolvers/subscription.ts":
/*!*****************************************************!*\
  !*** ./src/entities/user/resolvers/subscription.ts ***!
  \*****************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.default = {\r\n    Subscription: {}\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/entities/user/resolvers/subscription.ts?");

/***/ }),

/***/ "./src/entities/user/typedef/index.ts":
/*!********************************************!*\
  !*** ./src/entities/user/typedef/index.ts ***!
  \********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nexports.default = apollo_server_express_1.gql `\r\n\tinput StrictUserAccountInfoInput {\r\n\t\temail: String!\r\n\t\tpassword: String!\r\n\t\thandler: String!\r\n\t\tname: String!\r\n\t}\r\n\r\n\tinput StrictUserInput {\r\n\t\taccountInfo: StrictUserAccountInfoInput!\r\n\t}\r\n\r\n\tinput LooseUserPersonalInfoInput {\r\n\t\tbio: String\r\n\t\tbirthDate: Date\r\n\t\tinterests: [SkillIdInput!]\r\n\t}\r\n\r\n\tinput LooseUserAccountInfoInput {\r\n\t\temail: String\r\n\t\tpassword: String\r\n\t\thandler: String\r\n\t\tname: String\r\n\t}\r\n\r\n\tinput LooseUserInput {\r\n\t\tuserId: ID!\r\n\t\taccountInfo: LooseUserAccountInfoInput\r\n\t\tpersonalInfo: LooseUserPersonalInfoInput\r\n\t}\r\n\r\n\textend type Query {\r\n\t\tusers: [User!]\r\n\t\tuser(userId: ID!): User!\r\n\t\tme: User! @auth\r\n\t}\r\n\r\n\textend type Mutation {\r\n\t\tcreateUser(input: StrictUserInput!): User! @guest\r\n\t\teditUser(input: LooseUserInput!): User! @auth\r\n\t\tsignIn(email: String!, password: String!): User! @guest\r\n\t\tsignOut: Boolean! @auth\r\n\t}\r\n\r\n\ttype UserAccountInfo {\r\n\t\tname: String!\r\n\t\temail: String\r\n\t\tpassword: String\r\n\t\thandler: String!\r\n\t\tverifiedEmail: Boolean!\r\n\t}\r\n\r\n\ttype UserPersonalInfo {\r\n\t\tbio: String\r\n\t\tbirthDate: Date\r\n\t\tinterests: [Skill!]\r\n\t}\r\n\r\n\ttype UserStatusInfo {\r\n\t\tisOnline: Boolean!\r\n\t\tlastActive: Date\r\n\t}\r\n\r\n\ttype User {\r\n\t\tid: ID!\r\n\t\taccountInfo: UserAccountInfo!\r\n\t\tpersonalInfo: UserPersonalInfo!\r\n\t\tstatusInfo: UserStatusInfo!\r\n\t\tconversations: [Conversation!]\r\n\t}\r\n`;\r\n\n\n//# sourceURL=webpack://backend/./src/entities/user/typedef/index.ts?");

/***/ }),

/***/ "./src/helpers/emailer/index.ts":
/*!**************************************!*\
  !*** ./src/helpers/emailer/index.ts ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst nodemailer_1 = __importDefault(__webpack_require__(/*! nodemailer */ \"nodemailer\"));\r\nconst config_1 = __webpack_require__(/*! ../../config */ \"./src/config/index.ts\");\r\nexports.default = nodemailer_1.default.createTransport({\r\n    service: \"gmail\",\r\n    sender: config_1.GmailConfig.gmailSender,\r\n    auth: {\r\n        user: config_1.GmailConfig.gmailUser,\r\n        pass: config_1.GmailConfig.gmailPassword\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://backend/./src/helpers/emailer/index.ts?");

/***/ }),

/***/ "./src/helpers/functions/authentication.ts":
/*!*************************************************!*\
  !*** ./src/helpers/functions/authentication.ts ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.attemptSignOut = exports.attemptSignIn = exports.ensureSignedOut = exports.ensureSignedIn = void 0;\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\n//local\r\nconst model_1 = __webpack_require__(/*! ../../entities/user/model */ \"./src/entities/user/model/index.ts\");\r\nconst config_1 = __webpack_require__(/*! ../../config */ \"./src/config/index.ts\");\r\nexports.ensureSignedIn = (context) => {\r\n    if (!context.req.session.userId)\r\n        throw new apollo_server_express_1.AuthenticationError(\"You must be signed in.\");\r\n};\r\nexports.ensureSignedOut = (context) => {\r\n    if (context.req.session.userId)\r\n        throw new apollo_server_express_1.AuthenticationError(\"You must be signed out.\");\r\n};\r\nexports.attemptSignIn = (email, password, context) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const user = yield model_1.User.findOne({ \"accountInfo.email\": email });\r\n    if (!user)\r\n        throw new apollo_server_express_1.AuthenticationError(\"Incorrect password or email. Please try again\");\r\n    if (!(yield user.comparePassword(password)))\r\n        throw new apollo_server_express_1.AuthenticationError(\"Incorrect password or email. Please try again.\");\r\n    const result = yield model_1.User.findByIdAndUpdate(user.id, { isOnline: true }, (err, res) => {\r\n        if (err)\r\n            throw new apollo_server_express_1.ApolloError(err);\r\n    });\r\n    context.req.session.userId = user.id;\r\n    return result;\r\n});\r\nexports.attemptSignOut = (context) => {\r\n    return new Promise((resolve, reject) => {\r\n        model_1.User.updateOne({ _id: context.req.session.userId }, { isOnline: false }, (err, res) => {\r\n            if (err)\r\n                reject(err);\r\n        });\r\n        context.req.session.destroy(err => {\r\n            if (err)\r\n                reject(err);\r\n            context.res.clearCookie(config_1.SessionConfig.sessionName);\r\n            resolve(true);\r\n        });\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/helpers/functions/authentication.ts?");

/***/ }),

/***/ "./src/helpers/functions/sendVerificationEmail.ts":
/*!********************************************************!*\
  !*** ./src/helpers/functions/sendVerificationEmail.ts ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.sendVerificationEmail = void 0;\r\nconst emailer_1 = __importDefault(__webpack_require__(/*! ../emailer */ \"./src/helpers/emailer/index.ts\"));\r\nexports.sendVerificationEmail = (user, token) => {\r\n    emailer_1.default.sendMail({\r\n        from: '\"Prashant Joshi (CEO)\" <no-reply@collabs.com>',\r\n        to: `${user.accountInfo.email}`,\r\n        subject: \"Please verify your email address\",\r\n        html: `\r\n\t\t<html>\r\n\t\t<head>\r\n\t\t\t<style>\r\n\t\t\t\t* {\r\n\t\t\t\t\tfont-family: \"Proxima Nova\";\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\tdiv.main {\r\n\t\t\t\t\twidth: fit-content;\r\n\t\t\t\t\tmargin: 2rem auto;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\tp {\r\n\t\t\t\t\tfont-size: 1rem;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\ta {\r\n\t\t\t\t\tmargin: 1rem auto;\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\tpadding: 1rem;\r\n\t\t\t\t\ttext-decoration: none;\r\n\t\t\t\t\tborder-radius: 4pt;\r\n\t\t\t\t\tbackground-color: blue;\r\n\t\t\t\t\tfont-weight: bold;\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\ta:hover {\r\n\t\t\t\t\tbackground-color: darkblue;\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tp.footer {\r\n\t\t\t\t\tfont-size: .8rem;\r\n\t\t\t\t\tcolor: grey;\r\n\t\t\t\t}\r\n\t\t\t</style>\r\n\t\t</head>\r\n\t\t<body>\r\n\t\t\t<div class=\"main\">\r\n\t\t\t<h1>\r\n\t\t\t\tThank you for registering for Collabs.io\r\n\t\t\t</h1>\r\n\t\t\t<hr>\r\n\t\t\t<p>\r\n\t\t\t\tHey,<br>\r\n\t\t\t\tI am the CEO of <b>Collabs.io</b>, and you have a great journey ahead with us.<br>\r\n\t\t\t\tYou can confirm your email by cliking the button below.\r\n\t\t\t</p>\r\n\t\t\t<a href=\"http:localhost:4000/auth/verify-email/${token}\">\r\n\t\t\t\tConfirm your email\r\n\t\t\t</a>\r\n\t\t\t<p class=\"footer\">\r\n\t\t\t\tCollabs.io\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t</body>\r\n\t</html>\t\r\n    `\r\n    });\r\n    return token;\r\n};\r\n\n\n//# sourceURL=webpack://backend/./src/helpers/functions/sendVerificationEmail.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst connectDb_1 = __importDefault(__webpack_require__(/*! ./connectDb */ \"./src/connectDb.ts\"));\r\nconst startServer_1 = __importDefault(__webpack_require__(/*! ./startServer */ \"./src/startServer.ts\"));\r\n(() => __awaiter(void 0, void 0, void 0, function* () {\r\n    yield connectDb_1.default();\r\n    yield startServer_1.default();\r\n}))();\r\n\n\n//# sourceURL=webpack://backend/./src/index.ts?");

/***/ }),

/***/ "./src/routes/auth/index.ts":
/*!**********************************!*\
  !*** ./src/routes/auth/index.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst verifyEmail_1 = __importDefault(__webpack_require__(/*! ./verifyEmail */ \"./src/routes/auth/verifyEmail/index.ts\"));\r\nconst authRoute = express_1.default.Router();\r\nauthRoute.use(\"/verify-email\", verifyEmail_1.default);\r\nexports.default = authRoute;\r\n\n\n//# sourceURL=webpack://backend/./src/routes/auth/index.ts?");

/***/ }),

/***/ "./src/routes/auth/verifyEmail/index.ts":
/*!**********************************************!*\
  !*** ./src/routes/auth/verifyEmail/index.ts ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst verifyEmail_1 = __importDefault(__webpack_require__(/*! ./verifyEmail */ \"./src/routes/auth/verifyEmail/verifyEmail.ts\"));\r\nconst route = express_1.default.Router();\r\nroute.use(\"/:token\", verifyEmail_1.default);\r\nexports.default = route;\r\n\n\n//# sourceURL=webpack://backend/./src/routes/auth/verifyEmail/index.ts?");

/***/ }),

/***/ "./src/routes/auth/verifyEmail/verifyEmail.ts":
/*!****************************************************!*\
  !*** ./src/routes/auth/verifyEmail/verifyEmail.ts ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\r\n//local\r\nconst config_1 = __webpack_require__(/*! ../../../config */ \"./src/config/index.ts\");\r\nconst model_1 = __webpack_require__(/*! ../../../entities/user/model */ \"./src/entities/user/model/index.ts\");\r\nfunction default_1(req, res, next) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const { token } = req.params;\r\n        try {\r\n            const payload = (yield jsonwebtoken_1.default.verify(token, config_1.TokenConfig.tokenSecret));\r\n            yield model_1.User.findByIdAndUpdate(payload.userId, {\r\n                \"accountInfo.verifiedEmail\": true\r\n            });\r\n            res.send(`<h1>Your email ${payload.email} is verified</h1>`);\r\n            next();\r\n        }\r\n        catch (err) {\r\n            res.send(\"<h1>Token is expired</h1>\");\r\n            next();\r\n        }\r\n    });\r\n}\r\nexports.default = default_1;\r\n\n\n//# sourceURL=webpack://backend/./src/routes/auth/verifyEmail/verifyEmail.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst auth_1 = __importDefault(__webpack_require__(/*! ./auth */ \"./src/routes/auth/index.ts\"));\r\nconst routes = express_1.default.Router();\r\nroutes.use(\"/auth\", auth_1.default);\r\nroutes.get(\"/\", (req, res, next) => {\r\n    res.status(200).json({ message: \"Connected!\" });\r\n    next();\r\n});\r\nexports.default = routes;\r\n\n\n//# sourceURL=webpack://backend/./src/routes/index.ts?");

/***/ }),

/***/ "./src/session.ts":
/*!************************!*\
  !*** ./src/session.ts ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst connect_mongo_1 = __importDefault(__webpack_require__(/*! connect-mongo */ \"connect-mongo\"));\r\nconst express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"express-session\"));\r\nconst config_1 = __webpack_require__(/*! ./config */ \"./src/config/index.ts\");\r\nconst config_2 = __webpack_require__(/*! ./config */ \"./src/config/index.ts\");\r\nconst MongoStore = connect_mongo_1.default(express_session_1.default);\r\nconst connection = mongoose_1.default.createConnection(`mongodb+srv://${config_2.MongoConfig.mongoUserName}:${config_2.MongoConfig.mongoUserPassword}@cluster0.vuqtk.mongodb.net/${config_2.MongoConfig.mongoDatabaseName}?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true });\r\nconnection.on(\"error\", function (err) {\r\n    console.log(\"[MONGOSTORE] Error connecting to MongoStore\");\r\n});\r\nconst store = new MongoStore({\r\n    mongooseConnection: connection,\r\n    collection: \"sessions\"\r\n});\r\nstore.on(\"error\", function (error) {\r\n    console.log(\"[SERVER]  Error connecting to the mongodb store\");\r\n});\r\nconst mySession = express_session_1.default({\r\n    store,\r\n    name: config_1.SessionConfig.sessionName,\r\n    secret: config_1.SessionConfig.sessionSecret,\r\n    rolling: true,\r\n    resave: true,\r\n    saveUninitialized: false,\r\n    cookie: {\r\n        maxAge: parseInt(config_1.SessionConfig.sessionLifetime)\r\n    }\r\n});\r\nexports.default = mySession;\r\n\n\n//# sourceURL=webpack://backend/./src/session.ts?");

/***/ }),

/***/ "./src/startServer.ts":
/*!****************************!*\
  !*** ./src/startServer.ts ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\n//local\r\nconst entities_1 = __webpack_require__(/*! ./entities */ \"./src/entities/index.ts\");\r\nconst customDirectives_1 = __importDefault(__webpack_require__(/*! ./entities/customDirectives */ \"./src/entities/customDirectives/index.ts\"));\r\nconst session_1 = __importDefault(__webpack_require__(/*! ./session */ \"./src/session.ts\"));\r\nconst dataloaders_1 = __importDefault(__webpack_require__(/*! ./dataloaders */ \"./src/dataloaders/index.ts\"));\r\nconst routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/routes/index.ts\"));\r\nconst config_1 = __webpack_require__(/*! ./config */ \"./src/config/index.ts\");\r\nfunction default_1() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const app = express_1.default();\r\n        app.disable(\"x-powered-by\");\r\n        app.use(\"/\", routes_1.default);\r\n        app.use(session_1.default);\r\n        const server = new apollo_server_express_1.ApolloServer({\r\n            typeDefs: entities_1.TypeDefs,\r\n            resolvers: entities_1.Resolvers,\r\n            schemaDirectives: customDirectives_1.default,\r\n            playground: config_1.NodeConfig.nodeEnvironment === \"production\"\r\n                ? false\r\n                : {\r\n                    settings: {\r\n                        \"request.credentials\": \"include\"\r\n                    }\r\n                },\r\n            context: ({ req, res }) => __awaiter(this, void 0, void 0, function* () {\r\n                return {\r\n                    req,\r\n                    res,\r\n                    dataloaders: dataloaders_1.default\r\n                };\r\n            })\r\n        });\r\n        const origin =  false\r\n            ? 0\r\n            : \"http://localhost:8080\";\r\n        server.applyMiddleware({\r\n            app,\r\n            cors: {\r\n                credentials: true,\r\n                origin\r\n            }\r\n        });\r\n        app.listen({ port: process.env.PORT || 4000 }, () => {\r\n            console.log(`[SERVER] ready at http://localhost:4000${server.graphqlPath}`);\r\n        });\r\n    });\r\n}\r\nexports.default = default_1;\r\n\n\n//# sourceURL=webpack://backend/./src/startServer.ts?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"apollo-server-express\");;\n\n//# sourceURL=webpack://backend/external_%22apollo-server-express%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"bcrypt\");;\n\n//# sourceURL=webpack://backend/external_%22bcrypt%22?");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"connect-mongo\");;\n\n//# sourceURL=webpack://backend/external_%22connect-mongo%22?");

/***/ }),

/***/ "dataloader":
/*!*****************************!*\
  !*** external "dataloader" ***!
  \*****************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"dataloader\");;\n\n//# sourceURL=webpack://backend/external_%22dataloader%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"dotenv\");;\n\n//# sourceURL=webpack://backend/external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://backend/external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"express-session\");;\n\n//# sourceURL=webpack://backend/external_%22express-session%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"graphql\");;\n\n//# sourceURL=webpack://backend/external_%22graphql%22?");

/***/ }),

/***/ "graphql/language":
/*!***********************************!*\
  !*** external "graphql/language" ***!
  \***********************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"graphql/language\");;\n\n//# sourceURL=webpack://backend/external_%22graphql/language%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"jsonwebtoken\");;\n\n//# sourceURL=webpack://backend/external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"mongoose\");;\n\n//# sourceURL=webpack://backend/external_%22mongoose%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"nodemailer\");;\n\n//# sourceURL=webpack://backend/external_%22nodemailer%22?");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"ramda\");;\n\n//# sourceURL=webpack://backend/external_%22ramda%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;