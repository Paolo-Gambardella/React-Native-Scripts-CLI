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
        while (_) try {
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
exports.run = exports.alias = exports.description = void 0;
var component = require("./component");
var navigator = require("./navigator");
var screen = require("./screen");
var query = require("./query");
var mutation = require("./mutation");
var generators = {
    Component: component,
    Navigator: navigator,
    Screen: screen,
    Query: query,
    Mutation: mutation,
};
exports.description = 'List of generators';
exports.alias = ['g'];
exports.run = function (toolbox) { return __awaiter(void 0, void 0, void 0, function () {
    var prompt, generator;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                prompt = toolbox.prompt;
                return [4 /*yield*/, prompt.ask({
                        type: 'select',
                        name: 'generator',
                        choices: Object.keys(generators),
                        message: 'Which generator do you want 🤭',
                    })];
            case 1:
                generator = (_a.sent()).generator;
                generators[generator].run(toolbox);
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvZ2VuZXJhdGUvZ2VuZXJhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQXdDO0FBQ3hDLHVDQUF3QztBQUN4QyxpQ0FBa0M7QUFDbEMsK0JBQWdDO0FBQ2hDLHFDQUFzQztBQUl0QyxJQUFNLFVBQVUsR0FPWjtJQUNGLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLE1BQU0sRUFBRSxNQUFNO0lBQ2QsS0FBSyxFQUFFLEtBQUs7SUFDWixRQUFRLEVBQUUsUUFBUTtDQUNuQixDQUFBO0FBRVksUUFBQSxXQUFXLEdBQUcsb0JBQW9CLENBQUE7QUFFbEMsUUFBQSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUViLFFBQUEsR0FBRyxHQUFHLFVBQU8sT0FBdUI7Ozs7O2dCQUN2QyxNQUFNLEdBQUssT0FBTyxPQUFaLENBQVk7Z0JBRUoscUJBQU0sTUFBTSxDQUFDLEdBQUcsQ0FBd0I7d0JBQzVELElBQUksRUFBRSxRQUFRO3dCQUNkLElBQUksRUFBRSxXQUFXO3dCQUNqQixPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBQ2hDLE9BQU8sRUFBRSxnQ0FBZ0M7cUJBQzFDLENBQUMsRUFBQTs7Z0JBTE0sU0FBUyxHQUFLLENBQUEsU0FLcEIsQ0FBQSxVQUxlO2dCQU9qQixVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBOzs7O0tBQ25DLENBQUEifQ==