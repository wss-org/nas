"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var async_1 = __importDefault(require("async"));
var rimraf_1 = __importDefault(require("rimraf"));
var md5_file_1 = __importDefault(require("md5-file"));
var core_1 = require("@serverless-devs/core");
var client_1 = require("../client");
var generatePath_1 = require("./generatePath");
var constant = __importStar(require("../../constant"));
var utils = __importStar(require("./utils"));
var Cp = /** @class */ (function () {
    function Cp(regionId, credentials) {
        this.fcClient = client_1.fcClient(regionId, credentials);
    }
    Cp.prototype.cp = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var srcPath, targetPath, mountDir, nasDirYmlInput, command;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        srcPath = options.srcPath, targetPath = options.targetPath, mountDir = options.mountDir, nasDirYmlInput = options.nasDirYmlInput, command = options.command;
                        if (!srcPath || !targetPath) {
                            this.logger.error('Input path empty error, please input again!');
                            return [2 /*return*/];
                        }
                        if (!this.isCpFromLocalToNas(srcPath, targetPath, command)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cpFromLocalToNas(options)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!this.isCpFromNasToLocal(srcPath, targetPath, command)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.cpFromNasToLocal(srcPath, targetPath, options.serviceName, options.functionName, mountDir, nasDirYmlInput)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4: throw new Error('Format of path not support');
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Cp.prototype.cpFromNasToLocal = function (nasPath, localDir, serviceName, functionName, mountDir, nasDirYmlInput) {
        return __awaiter(this, void 0, void 0, function () {
            var nasHttpTriggerPath, resolveNasPath, res, tmpNasZipPath, cmd, localZipDirname, localZipPath, rs, buf;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nasHttpTriggerPath = generatePath_1.getHttpTriggerPath(serviceName, functionName);
                        resolveNasPath = utils.parseNasUri(nasPath, mountDir, nasDirYmlInput);
                        return [4 /*yield*/, fs_extra_1.default.mkdirs(localDir)];
                    case 1:
                        _a.sent();
                        this.logger.debug("Check nas path " + resolveNasPath + " is exsit.");
                        return [4 /*yield*/, this.fcClient.get(generatePath_1.pathExsit(nasHttpTriggerPath), {
                                targetPath: resolveNasPath,
                            })];
                    case 2:
                        res = _a.sent();
                        if (!res.data) {
                            throw new Error(resolveNasPath + " is not exsit.");
                        }
                        this.logger.debug('Path is exsit.');
                        this.logger.log("zipping " + resolveNasPath);
                        tmpNasZipPath = path_1.default.posix.join(path_1.default.dirname(resolveNasPath), '.fun-nas-generated.zip');
                        cmd = "cd " + path_1.default.dirname(resolveNasPath) + " && zip -r " + tmpNasZipPath + " " + path_1.default.basename(resolveNasPath);
                        return [4 /*yield*/, this.fcClient.post(generatePath_1.commandsPath(nasHttpTriggerPath), { cmd: cmd })];
                    case 3:
                        _a.sent();
                        this.logger.log('\'✔\' zip done', 'green');
                        this.logger.log('downloading...');
                        localZipDirname = path_1.default.join(process.cwd(), '.s', 'nas');
                        return [4 /*yield*/, fs_extra_1.default.mkdirs(localZipDirname)];
                    case 4:
                        _a.sent();
                        localZipPath = path_1.default.join(localZipDirname, '.fun-nas-generated.zip');
                        return [4 /*yield*/, this.fcClient.post(generatePath_1.downloadPath(nasHttpTriggerPath), { tmpNasZipPath: tmpNasZipPath }, {}, {}, { rawBuf: true })];
                    case 5:
                        rs = _a.sent();
                        this.logger.log('\'✔\' download done', 'green');
                        buf = rs.data;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var ws = fs_extra_1.default.createWriteStream(localZipPath);
                                ws.write(buf);
                                ws.end();
                                ws.on('finish', function () {
                                    resolve('');
                                });
                                ws.on('error', function (error) {
                                    _this.logger.error(localZipPath + " write error : " + error);
                                    reject(error);
                                });
                            })];
                    case 6:
                        _a.sent();
                        this.logger.log('unzipping file');
                        return [4 /*yield*/, core_1.unzip(localZipPath, path_1.default.resolve(localDir)).then(function () {
                                core_1.Logger.log("'✔' unzip done!", 'green');
                            })];
                    case 7:
                        _a.sent();
                        this.logger.debug("fs remove " + localZipPath);
                        // clean
                        return [4 /*yield*/, fs_extra_1.default.remove(localZipPath)];
                    case 8:
                        // clean
                        _a.sent();
                        // await fs.remove(localZipDirname);
                        this.logger.debug("send clean request " + nasHttpTriggerPath + " " + tmpNasZipPath);
                        return [4 /*yield*/, this.sendCleanRequest(nasHttpTriggerPath, tmpNasZipPath)];
                    case 9:
                        _a.sent();
                        this.logger.log("'✔' download completed!", 'green');
                        return [2 /*return*/];
                }
            });
        });
    };
    Cp.prototype.cpFromLocalToNas = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var srcPath, targetPath, recursive, noClobber, serviceName, functionName, noTargetDirectory, mountDir, nasDirYmlInput, excludes, nasPath, resolvedSrc, _a, srcPathIsDir, srcPathIsFile, nasId, nasHttpTriggerPath, stats, dstStats, actualDstPath, permTip;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        srcPath = options.srcPath, targetPath = options.targetPath, recursive = options.recursive, noClobber = options.noClobber, serviceName = options.serviceName, functionName = options.functionName, noTargetDirectory = options.noTargetDirectory, mountDir = options.mountDir, nasDirYmlInput = options.nasDirYmlInput, excludes = options.excludes;
                        nasPath = utils.parseNasUri(targetPath, mountDir, nasDirYmlInput);
                        this.logger.debug("Paerse nas url is: " + nasPath);
                        resolvedSrc = utils.resolveLocalPath(path_1.default.resolve(srcPath));
                        return [4 /*yield*/, fs_extra_1.default.pathExists(resolvedSrc)];
                    case 1:
                        if (!(_b.sent())) {
                            throw new Error(resolvedSrc + " not exist");
                        }
                        return [4 /*yield*/, utils.isDirOrFile(resolvedSrc)];
                    case 2:
                        _a = _b.sent(), srcPathIsDir = _a.isDir, srcPathIsFile = _a.isFile;
                        if (srcPathIsDir && !recursive) {
                            throw new Error('Can not copy folder without option -r/--recursive');
                        }
                        return [4 /*yield*/, this.getNasConfig(serviceName)];
                    case 3:
                        nasId = _b.sent();
                        nasHttpTriggerPath = generatePath_1.getHttpTriggerPath(serviceName, functionName);
                        this.logger.debug("checking dst path " + targetPath + "...");
                        return [4 /*yield*/, this.statsRequest(nasPath, nasHttpTriggerPath)];
                    case 4:
                        stats = (_b.sent()).data;
                        dstStats = {
                            dstPath: targetPath,
                            resolvedDst: nasPath,
                            dstPathEndWithSlash: this.endWithSlash(nasPath),
                            dstPathExists: stats.exists,
                            parentDirOfDstPathExists: stats.parentDirExists,
                            dstPathIsDir: stats.isDir,
                            dstPathIsFile: stats.isFile,
                        };
                        this.logger.debug("dstStats value is: " + JSON.stringify(dstStats));
                        return [4 /*yield*/, this.checkCpDstPath(nasHttpTriggerPath, resolvedSrc, dstStats, recursive, noClobber, noTargetDirectory)];
                    case 5:
                        actualDstPath = _b.sent();
                        permTip = utils.checkWritePerm(stats, nasId, nasPath);
                        if (permTip) {
                            this.logger.error("Warning: " + permTip);
                        }
                        if (!srcPathIsDir) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.uploadFolder(resolvedSrc, actualDstPath, nasHttpTriggerPath, srcPath, noClobber, excludes)];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 7:
                        if (!srcPathIsFile) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.uploadFile(resolvedSrc, actualDstPath, nasHttpTriggerPath)];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 9: throw new Error(srcPath + " has the same file stat and folder stat");
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    Cp.prototype.uploadFolder = function (resolvedSrc, actualDstPath, nasHttpTriggerPath, srcPath, noClobber, excludes) {
        if (excludes === void 0) { excludes = []; }
        return __awaiter(this, void 0, void 0, function () {
            var outputFileName, outputFilePath, tmpCheck, nasFile, fileHash, srcPathFiles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        outputFileName = path_1.default.basename(path_1.default.resolve(srcPath)) + ".zip";
                        outputFilePath = path_1.default.join(process.cwd(), '.s', 'zip');
                        excludes.push(path_1.default.relative(process.cwd(), outputFilePath));
                        excludes.push(path_1.default.relative(process.cwd(), path_1.default.join(process.cwd(), '.s', 'logs')));
                        return [4 /*yield*/, core_1.zip({
                                codeUri: resolvedSrc,
                                outputFileName: outputFileName,
                                outputFilePath: outputFilePath,
                                exclude: excludes,
                            })];
                    case 1:
                        _a.sent();
                        this.logger.debug("Checking NAS tmp dir " + actualDstPath);
                        return [4 /*yield*/, this.fcClient.get(nasHttpTriggerPath + "tmp/check", {
                                remoteNasTmpDir: actualDstPath,
                            })];
                    case 2:
                        tmpCheck = _a.sent();
                        this.logger.debug("Tmp check response is: " + JSON.stringify(tmpCheck));
                        this.logger.debug('Check done');
                        nasFile = path_1.default.posix.join(actualDstPath, outputFileName);
                        fileHash = path_1.default.posix.join(outputFilePath, outputFileName);
                        return [4 /*yield*/, this.uploadFile(fileHash, nasFile, nasHttpTriggerPath)];
                    case 3:
                        _a.sent();
                        this.logger.info('unzipping file');
                        return [4 /*yield*/, utils.readDirRecursive(srcPath, excludes)];
                    case 4:
                        srcPathFiles = _a.sent();
                        return [4 /*yield*/, this.unzipNasFileParallel(nasHttpTriggerPath, actualDstPath, nasFile, utils.chunk(srcPathFiles, 248), noClobber)];
                    case 5:
                        _a.sent();
                        this.logger.debug('cleaning');
                        return [4 /*yield*/, this.sendCleanRequest(nasHttpTriggerPath, nasFile)];
                    case 6:
                        _a.sent();
                        this.logger.debug("'✔' clean done");
                        rimraf_1.default.sync(fileHash);
                        this.logger.debug("'✔'  upload completed!");
                        return [2 /*return*/];
                }
            });
        });
    };
    Cp.prototype.uploadFile = function (resolvedSrc, actualDstPath, nasHttpTriggerPath, fileHash) {
        return __awaiter(this, void 0, void 0, function () {
            var stat, urlPath, cmd, fileOffSetCutByChunkSize, filePermission, vm, data, checkRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_extra_1.default.lstat(resolvedSrc)];
                    case 1:
                        stat = _a.sent();
                        urlPath = generatePath_1.commandsPath(nasHttpTriggerPath);
                        cmd = "dd if=/dev/zero of=" + actualDstPath + " count=0 bs=1 seek=" + stat.size;
                        this.logger.debug("Upload url is " + urlPath + ", cmd is '" + cmd + "'");
                        fileOffSetCutByChunkSize = utils.splitRangeBySize(0, stat.size, (parseInt(process.env.NAS_CHUNK_SIZE) || 5) * 1024 * 1024);
                        if (!!fileHash) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getFileHash(resolvedSrc)];
                    case 2:
                        fileHash = _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.getFilePermission(resolvedSrc)];
                    case 4:
                        filePermission = _a.sent();
                        vm = core_1.spinner("Start uploading file: " + actualDstPath);
                        return [4 /*yield*/, this.fcClient.post(urlPath, { cmd: cmd })];
                    case 5:
                        data = (_a.sent()).data;
                        console.log();
                        this.logger.debug(data);
                        if (data.error) {
                            vm.fail();
                            throw new Error(data.error);
                        }
                        vm.succeed("File uploaded successfully: " + actualDstPath);
                        return [4 /*yield*/, this.uploadFileByChunk(nasHttpTriggerPath, actualDstPath, resolvedSrc, fileOffSetCutByChunkSize)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.changeNasFilePermission(nasHttpTriggerPath, actualDstPath, filePermission)];
                    case 7:
                        _a.sent();
                        this.logger.debug("checking uploaded file " + actualDstPath + " hash");
                        return [4 /*yield*/, this.checkFileHash(nasHttpTriggerPath, actualDstPath, fileHash)];
                    case 8:
                        checkRes = _a.sent();
                        this.logger.debug(checkRes.data);
                        this.logger.debug("'✔' hash unchanged");
                        return [2 /*return*/];
                }
            });
        });
    };
    Cp.prototype.sendCleanRequest = function (nasHttpTriggerPath, nasZipFile) {
        return __awaiter(this, void 0, void 0, function () {
            var urlPath, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlPath = generatePath_1.cleanPath(nasHttpTriggerPath);
                        query = { nasZipFile: nasZipFile };
                        return [4 /*yield*/, this.fcClient.get(urlPath, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Cp.prototype.checkFileHash = function (nasHttpTriggerPath, nasFile, fileHash) {
        return __awaiter(this, void 0, void 0, function () {
            var urlPath, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlPath = generatePath_1.fileCheck(nasHttpTriggerPath);
                        query = { nasFile: nasFile, fileHash: fileHash };
                        return [4 /*yield*/, this.fcClient.get(urlPath, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Cp.prototype.changeNasFilePermission = function (nasHttpTriggerPath, filePath, filePermission) {
        return __awaiter(this, void 0, void 0, function () {
            var cmd, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cmd = "chmod " + filePermission + " " + filePath;
                        p = generatePath_1.commandsPath(nasHttpTriggerPath);
                        return [4 /*yield*/, this.fcClient.post(p, { cmd: cmd })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Cp.prototype.readFileChunk = function (filePath, start, size) {
        return __awaiter(this, void 0, void 0, function () {
            var fd, chunkBuf, bytesRead;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_extra_1.default.open(filePath, 'r')];
                    case 1:
                        fd = _a.sent();
                        chunkBuf = Buffer.alloc(size);
                        return [4 /*yield*/, fs_extra_1.default.read(fd, chunkBuf, 0, size, start)];
                    case 2:
                        bytesRead = (_a.sent()).bytesRead;
                        if (bytesRead !== size) {
                            throw new Error('ReadChunkFile function bytesRead not equal read size');
                        }
                        return [4 /*yield*/, fs_extra_1.default.close(fd)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, chunkBuf];
                }
            });
        });
    };
    Cp.prototype.getFilePermission = function (filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var stat, permission;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_extra_1.default.lstat(filePath)];
                    case 1:
                        stat = _a.sent();
                        permission = "0" + (stat.mode & parseInt('777', 8)).toString(8);
                        return [2 /*return*/, permission];
                }
            });
        });
    };
    Cp.prototype.checkCpDstPath = function (nasHttpTriggerPath, srcPath, dstStats, recursive, noClobber, noTargetDirectory) {
        return __awaiter(this, void 0, void 0, function () {
            var resolvedDst, dstPath, dstPathExists, parentDirOfDstPathExists, dstPathIsDir, dstPathIsFile, dstPathEndWithSlash, errorInf, newDstPath, statsRes, stats, newDstStats;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resolvedDst = dstStats.resolvedDst, dstPath = dstStats.dstPath, dstPathExists = dstStats.dstPathExists, parentDirOfDstPathExists = dstStats.parentDirOfDstPathExists, dstPathIsDir = dstStats.dstPathIsDir, dstPathIsFile = dstStats.dstPathIsFile, dstPathEndWithSlash = dstStats.dstPathEndWithSlash;
                        if (!(!recursive && dstPathExists)) return [3 /*break*/, 4];
                        if (dstPathIsFile && !dstPathEndWithSlash) {
                            if (!noClobber) {
                                return [2 /*return*/, resolvedDst];
                            }
                            errorInf = dstPath + " already exists.";
                        }
                        if (dstPathIsFile && dstPathEndWithSlash) {
                            errorInf = dstPath + " : Not a directory";
                        }
                        if (!(dstPathIsDir && utils.isNasProtocol(dstPath))) return [3 /*break*/, 3];
                        newDstPath = path_1.default.posix.join(resolvedDst, path_1.default.basename(srcPath));
                        return [4 /*yield*/, this.statsRequest(newDstPath, nasHttpTriggerPath)];
                    case 1:
                        statsRes = _a.sent();
                        stats = statsRes.data;
                        newDstStats = {
                            dstPath: dstPath + "/" + path_1.default.basename(srcPath),
                            resolvedDst: newDstPath,
                            dstPathEndWithSlash: false,
                            dstPathExists: stats.exists,
                            parentDirOfDstPathExists: stats.parentDirExists,
                            dstPathIsDir: stats.isDir,
                            dstPathIsFile: stats.isFile,
                        };
                        return [4 /*yield*/, this.checkCpDstPath(nasHttpTriggerPath, srcPath, newDstStats, recursive, noClobber, noTargetDirectory)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        if (dstPathIsDir && !utils.isNasProtocol(dstPath)) {
                            this.logger.debug("dstPathIsDir && !isNasProtocol(dstPath) is: " + (dstPathIsDir && !utils.isNasProtocol(dstPath)));
                            return [2 /*return*/, path_1.default.join(resolvedDst, path_1.default.basename(srcPath))];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (!recursive && !dstPathExists) {
                            if (dstPathEndWithSlash) {
                                errorInf = "nas cp: cannot create regular file " + dstPath + ": Not a directory";
                            }
                            else if (parentDirOfDstPathExists) {
                                return [2 /*return*/, resolvedDst];
                            }
                            else {
                                errorInf = "nas cp: cannot create regular file " + dstPath + ": No such file or directory";
                            }
                        }
                        else if (recursive && dstPathExists) {
                            if (dstPathIsDir && utils.isNasProtocol(dstPath)) {
                                if (noTargetDirectory) {
                                    return [2 /*return*/, resolvedDst];
                                }
                                this.logger.debug("dstPathIsDir && utils.isNasProtocol(dstPath) is: " + (dstPathIsDir && utils.isNasProtocol(dstPath)));
                                return [2 /*return*/, path_1.default.posix.join(resolvedDst, path_1.default.basename(srcPath))];
                            }
                            if (dstPathIsDir && !utils.isNasProtocol(dstPath)) {
                                this.logger.debug("dstPathIsDir && !utils.isNasProtocol(dstPath) is: " + (dstPathIsDir && !utils.isNasProtocol(dstPath)));
                                return [2 /*return*/, path_1.default.join(resolvedDst, path_1.default.basename(srcPath))];
                            }
                            if (dstPathIsFile && dstPathEndWithSlash) {
                                errorInf = "nas cp: failed to access " + dstPath + ": Not a directory";
                            }
                            if (dstPathIsFile && !dstPathEndWithSlash) {
                                errorInf = "nas cp: cannot overwrite non-directory " + dstPath + " with directory " + srcPath;
                            }
                        }
                        else if (recursive && !dstPathExists) {
                            if (parentDirOfDstPathExists) {
                                return [2 /*return*/, resolvedDst];
                            }
                            errorInf = "nas cp: cannot create directory " + dstPath + ": No such file or directory";
                        }
                        _a.label = 5;
                    case 5: throw new Error(errorInf);
                }
            });
        });
    };
    Cp.prototype.statsRequest = function (dstPath, httpTriggerPath) {
        return __awaiter(this, void 0, void 0, function () {
            var urlPath, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlPath = generatePath_1.statsPath(httpTriggerPath);
                        query = { dstPath: dstPath };
                        return [4 /*yield*/, this.fcClient.get(urlPath, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Cp.prototype.getNasConfig = function (serviceName) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, userId, groupId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fcClient.getService(serviceName)];
                    case 1:
                        res = _b.sent();
                        this.logger.debug("getService response is: " + JSON.stringify(res));
                        _a = res.data.nasConfig, userId = _a.userId, groupId = _a.groupId;
                        return [2 /*return*/, {
                                UserId: userId,
                                GroupId: groupId,
                            }];
                }
            });
        });
    };
    Cp.prototype.getFileHash = function (filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var isFile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils.isDirOrFile(filePath)];
                    case 1:
                        isFile = (_a.sent()).isFile;
                        if (!isFile) return [3 /*break*/, 3];
                        return [4 /*yield*/, md5_file_1.default(filePath)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: throw new Error("get file hash error, target is not a file, target path is: " + isFile);
                }
            });
        });
    };
    Cp.prototype.uploadFileByChunk = function (nasHttpTriggerPath, nasZipFile, zipFilePath, fileOffSet) {
        var _this = this;
        return new Promise(function (resolve) {
            var vm = core_1.spinner('uploading');
            var uploadQueue = async_1.default.queue(function (offSet, callback) { return __awaiter(_this, void 0, void 0, function () {
                var urlPath, fileStart, fileSize, body, query, res, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            urlPath = generatePath_1.fileChunkUpload(nasHttpTriggerPath);
                            fileStart = offSet.start;
                            fileSize = offSet.size;
                            return [4 /*yield*/, this.readFileChunk(zipFilePath, fileStart, fileSize)];
                        case 1:
                            body = _a.sent();
                            query = {
                                nasFile: nasZipFile,
                                fileStart: fileStart.toString(),
                            };
                            return [4 /*yield*/, this.fcClient.post(urlPath, body, {}, query)];
                        case 2:
                            res = _a.sent();
                            this.logger.debug("Call " + urlPath + " query is: " + JSON.stringify(query) + ", response is: " + JSON.stringify(res));
                            if (res.data.error) {
                                throw new Error(res.data.error);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            this.logger.error("upload error : " + error_1.message);
                            this.logger.debug(error_1.stack);
                            vm.fail();
                            return [2 /*return*/];
                        case 4:
                            callback();
                            return [2 /*return*/];
                    }
                });
            }); }, 5);
            uploadQueue.drain(function () {
                vm.succeed('upload done');
                resolve('');
            });
            uploadQueue.push(fileOffSet);
        });
    };
    Cp.prototype.unzipNasFileParallel = function (nasHttpTriggerPath, dstDir, nasZipFile, filesArrQueue, noClobber) {
        var _this = this;
        return new Promise(function (resolve) {
            var unzipQueue = async_1.default.queue(function (unzipFiles, next) { return __awaiter(_this, void 0, void 0, function () {
                var cmd, _i, unzipFiles_1, unzipFile, res, error_2, retryUnzipFiles;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            cmd = void 0;
                            if (noClobber) {
                                cmd = "unzip -q -n " + nasZipFile + " -d " + dstDir;
                            }
                            else {
                                cmd = "unzip -q -o " + nasZipFile + " -d " + dstDir;
                            }
                            for (_i = 0, unzipFiles_1 = unzipFiles; _i < unzipFiles_1.length; _i++) {
                                unzipFile = unzipFiles_1[_i];
                                cmd += " '" + unzipFile + "'";
                            }
                            // cmd = cmd + ` '${unzipFile}'`;
                            this.logger.debug("Send unzip request cmd is: " + cmd + ".");
                            return [4 /*yield*/, this.fcClient.post(nasHttpTriggerPath + "commands", { cmd: cmd })];
                        case 1:
                            res = _a.sent();
                            this.logger.debug(res);
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            // zip 中存在特殊文件名，例如 $data.js
                            if (error_2.message && error_2.message.includes('filename not matched')) {
                                this.logger.error(error_2);
                                return [2 /*return*/];
                            }
                            if (error_2.message && error_2.message.toLowerCase().includes('permission denied')) {
                                // TODO : 权限问题更加详细的提示
                                this.logger.error(error_2);
                                return [2 /*return*/];
                            }
                            this.logger.debug((error_2.code || '') + " " + error_2.message.toLowerCase());
                            // 当解压文件数大于 1 ，默认为解压文件数过多导致 unzip 指令超出指令长度限制导致的解压失败
                            // 会将解压文件列表折半拆分后进行重试
                            if (unzipFiles.length > 1) {
                                this.logger.log('Retry unziping...');
                                retryUnzipFiles = [];
                                retryUnzipFiles.push(unzipFiles.slice(0, unzipFiles.length / 2));
                                retryUnzipFiles.push(unzipFiles.slice(unzipFiles.length / 2, unzipFiles.length));
                                unzipQueue.unshift(retryUnzipFiles);
                            }
                            else {
                                // 解压文件数小于 1 个时，认为不是解压文件数过多造成的问题
                                // 因此提示用户重新 sync
                                this.logger.error(error_2);
                                this.logger.error('Unzip error! Please re-sync.');
                                return [2 /*return*/];
                            }
                            return [3 /*break*/, 3];
                        case 3:
                            next();
                            return [2 /*return*/];
                    }
                });
            }); }, 5);
            unzipQueue.drain(function () {
                core_1.Logger.info(constant.CONTEXT, 'unzip done');
                resolve('');
            });
            unzipQueue.push(filesArrQueue);
        });
    };
    Cp.prototype.endWithSlash = function (inputPath) {
        if (!inputPath) {
            throw new Error('Local path could not be Empty');
        }
        return inputPath.charAt(inputPath.length - 1) === '/';
    };
    Cp.prototype.isCpFromLocalToNas = function (srcPath, targetPath, command) {
        return command === 'upload' || (!utils.isNasProtocol(srcPath) && utils.isNasProtocol(targetPath));
    };
    Cp.prototype.isCpFromNasToLocal = function (srcPath, targetPath, command) {
        return command === 'download' || (utils.isNasProtocol(srcPath) && !utils.isNasProtocol(targetPath));
    };
    __decorate([
        core_1.HLogger(constant.CONTEXT),
        __metadata("design:type", Object)
    ], Cp.prototype, "logger", void 0);
    return Cp;
}());
exports.default = Cp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvY29tbW9uL2NwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF3QjtBQUN4QixzREFBMEI7QUFDMUIsZ0RBQTBCO0FBQzFCLGtEQUE0QjtBQUM1QixzREFBK0I7QUFDL0IsOENBQXNGO0FBQ3RGLG9DQUFxQztBQUVyQywrQ0FTd0I7QUFDeEIsdURBQTJDO0FBQzNDLDZDQUFpQztBQStCakM7SUFJRSxZQUFZLFFBQWdCLEVBQUUsV0FBeUI7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBUSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUssZUFBRSxHQUFSLFVBQVMsT0FBWTs7Ozs7O3dCQUNYLE9BQU8sR0FBb0QsT0FBTyxRQUEzRCxFQUFFLFVBQVUsR0FBd0MsT0FBTyxXQUEvQyxFQUFFLFFBQVEsR0FBOEIsT0FBTyxTQUFyQyxFQUFFLGNBQWMsR0FBYyxPQUFPLGVBQXJCLEVBQUUsT0FBTyxHQUFLLE9BQU8sUUFBWixDQUFhO3dCQUMzRSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFOzRCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDOzRCQUNqRSxzQkFBTzt5QkFDUjs2QkFFRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBckQsd0JBQXFEO3dCQUN2RCxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUFwQyxTQUFvQyxDQUFDOzs7NkJBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFyRCx3QkFBcUQ7d0JBQzlELHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FDekIsT0FBTyxFQUNQLFVBQVUsRUFDVixPQUFPLENBQUMsV0FBVyxFQUNuQixPQUFPLENBQUMsWUFBWSxFQUNwQixRQUFRLEVBQ1IsY0FBYyxDQUNmLEVBQUE7O3dCQVBELFNBT0MsQ0FBQzs7NEJBRUYsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOzs7OztLQUVqRDtJQUVLLDZCQUFnQixHQUF0QixVQUNFLE9BQWUsRUFDZixRQUFnQixFQUNoQixXQUFtQixFQUNuQixZQUFvQixFQUNwQixRQUFnQixFQUNoQixjQUFzQjs7Ozs7Ozt3QkFFaEIsa0JBQWtCLEdBQUcsaUNBQWtCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO3dCQUNuRSxjQUFjLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO3dCQUU1RSxxQkFBTSxrQkFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQXpCLFNBQXlCLENBQUM7d0JBRTFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFrQixjQUFjLGVBQVksQ0FBQyxDQUFDO3dCQUNwRCxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyx3QkFBUyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7Z0NBQ2pFLFVBQVUsRUFBRSxjQUFjOzZCQUMzQixDQUFDLEVBQUE7O3dCQUZJLEdBQUcsR0FBRyxTQUVWO3dCQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFOzRCQUNiLE1BQU0sSUFBSSxLQUFLLENBQUksY0FBYyxtQkFBZ0IsQ0FBQyxDQUFDO3lCQUNwRDt3QkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUVwQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFXLGNBQWdCLENBQUMsQ0FBQzt3QkFDdkMsYUFBYSxHQUFHLGNBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsd0JBQXdCLENBQUMsQ0FBQzt3QkFFeEYsR0FBRyxHQUFHLFFBQU0sY0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsbUJBQWMsYUFBYSxTQUFJLGNBQUksQ0FBQyxRQUFRLENBQ3hGLGNBQWMsQ0FDYixDQUFDO3dCQUNKLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsRUFBQTs7d0JBQW5FLFNBQW1FLENBQUM7d0JBQ3BFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUUzQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUM1QixlQUFlLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUM5RCxxQkFBTSxrQkFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBQTs7d0JBQWhDLFNBQWdDLENBQUM7d0JBQzNCLFlBQVksR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO3dCQUUvRCxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDakMsMkJBQVksQ0FBQyxrQkFBa0IsQ0FBQyxFQUNoQyxFQUFFLGFBQWEsZUFBQSxFQUFFLEVBQ2pCLEVBQUUsRUFDRixFQUFFLEVBQ0YsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQ2pCLEVBQUE7O3dCQU5LLEVBQUUsR0FBRyxTQU1WO3dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUUxQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDcEIscUJBQU0sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQ0FDaEMsSUFBTSxFQUFFLEdBQUcsa0JBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQ0FDOUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDZCxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7Z0NBQ1QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7b0NBQ2QsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dDQUNkLENBQUMsQ0FBQyxDQUFDO2dDQUNILEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSztvQ0FDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUksWUFBWSx1QkFBa0IsS0FBTyxDQUFDLENBQUM7b0NBQzVELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQ0FDaEIsQ0FBQyxDQUFDLENBQUM7NEJBQ0wsQ0FBQyxDQUFDLEVBQUE7O3dCQVhGLFNBV0UsQ0FBQzt3QkFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUNsQyxxQkFBTSxZQUFLLENBQUMsWUFBWSxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0NBQ3JELGFBQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7NEJBQ3pDLENBQUMsQ0FBQyxFQUFBOzt3QkFGRixTQUVFLENBQUM7d0JBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBYSxZQUFjLENBQUMsQ0FBQzt3QkFDL0MsUUFBUTt3QkFDUixxQkFBTSxrQkFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBQTs7d0JBRDdCLFFBQVE7d0JBQ1IsU0FBNkIsQ0FBQzt3QkFDOUIsb0NBQW9DO3dCQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBc0Isa0JBQWtCLFNBQUksYUFBZSxDQUFDLENBQUM7d0JBQy9FLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsRUFBQTs7d0JBQTlELFNBQThELENBQUM7d0JBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLE9BQU8sQ0FBQyxDQUFDOzs7OztLQUNyRDtJQUVLLDZCQUFnQixHQUF0QixVQUF1QixPQUFZOzs7Ozs7d0JBRS9CLE9BQU8sR0FVTCxPQUFPLFFBVkYsRUFDUCxVQUFVLEdBU1IsT0FBTyxXQVRDLEVBQ1YsU0FBUyxHQVFQLE9BQU8sVUFSQSxFQUNULFNBQVMsR0FPUCxPQUFPLFVBUEEsRUFDVCxXQUFXLEdBTVQsT0FBTyxZQU5FLEVBQ1gsWUFBWSxHQUtWLE9BQU8sYUFMRyxFQUNaLGlCQUFpQixHQUlmLE9BQU8sa0JBSlEsRUFDakIsUUFBUSxHQUdOLE9BQU8sU0FIRCxFQUNSLGNBQWMsR0FFWixPQUFPLGVBRkssRUFDZCxRQUFRLEdBQ04sT0FBTyxTQURELENBQ0U7d0JBQ04sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQzt3QkFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsd0JBQXNCLE9BQVMsQ0FBQyxDQUFDO3dCQUU3QyxXQUFXLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDNUQscUJBQU0sa0JBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUE7O3dCQUF0QyxJQUFJLENBQUMsQ0FBQyxTQUFnQyxDQUFDLEVBQUU7NEJBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQUksV0FBVyxlQUFZLENBQUMsQ0FBQzt5QkFDN0M7d0JBRXNELHFCQUFNLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUE7O3dCQUFyRixLQUFpRCxTQUFvQyxFQUE1RSxZQUFZLFdBQUEsRUFBVSxhQUFhLFlBQUE7d0JBQ2xELElBQUksWUFBWSxJQUFJLENBQUMsU0FBUyxFQUFFOzRCQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7eUJBQ3RFO3dCQUVhLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUE7O3dCQUE1QyxLQUFLLEdBQUcsU0FBb0M7d0JBQzVDLGtCQUFrQixHQUFHLGlDQUFrQixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQzt3QkFFekUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsdUJBQXFCLFVBQVUsUUFBSyxDQUFDLENBQUM7d0JBQ2hDLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLEVBQUE7O3dCQUE5RCxLQUFLLEdBQUssQ0FBQSxTQUFvRCxDQUFBLEtBQXpEO3dCQUViLFFBQVEsR0FBRzs0QkFDZixPQUFPLEVBQUUsVUFBVTs0QkFDbkIsV0FBVyxFQUFFLE9BQU87NEJBQ3BCLG1CQUFtQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDOzRCQUMvQyxhQUFhLEVBQUUsS0FBSyxDQUFDLE1BQU07NEJBQzNCLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxlQUFlOzRCQUMvQyxZQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUs7NEJBQ3pCLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTTt5QkFDNUIsQ0FBQzt3QkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBc0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUcsQ0FBQyxDQUFDO3dCQUU5QyxxQkFBTSxJQUFJLENBQUMsY0FBYyxDQUM3QyxrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLFFBQVEsRUFDUixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixDQUNsQixFQUFBOzt3QkFQSyxhQUFhLEdBQUcsU0FPckI7d0JBRUssT0FBTyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDNUQsSUFBSSxPQUFPLEVBQUU7NEJBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBWSxPQUFTLENBQUMsQ0FBQzt5QkFDMUM7NkJBRUcsWUFBWSxFQUFaLHdCQUFZO3dCQUNkLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQ3JCLFdBQVcsRUFDWCxhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLE9BQU8sRUFDUCxTQUFTLEVBQ1QsUUFBUSxDQUNULEVBQUE7O3dCQVBELFNBT0MsQ0FBQzs7OzZCQUNPLGFBQWEsRUFBYix3QkFBYTt3QkFDdEIscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixDQUFDLEVBQUE7O3dCQUFyRSxTQUFxRSxDQUFDOzs0QkFFdEUsTUFBTSxJQUFJLEtBQUssQ0FBSSxPQUFPLDRDQUF5QyxDQUFDLENBQUM7Ozs7O0tBRXhFO0lBRUsseUJBQVksR0FBbEIsVUFDRSxXQUFtQixFQUNuQixhQUFxQixFQUNyQixrQkFBMEIsRUFDMUIsT0FBZSxFQUNmLFNBQWtCLEVBQ2xCLFFBQXVCO1FBQXZCLHlCQUFBLEVBQUEsYUFBdUI7Ozs7Ozt3QkFFakIsY0FBYyxHQUFNLGNBQUksQ0FBQyxRQUFRLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFNLENBQUM7d0JBQy9ELGNBQWMsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBRTdELFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFDNUQsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUVwRixxQkFBTSxVQUFHLENBQUM7Z0NBQ1IsT0FBTyxFQUFFLFdBQVc7Z0NBQ3BCLGNBQWMsZ0JBQUE7Z0NBQ2QsY0FBYyxnQkFBQTtnQ0FDZCxPQUFPLEVBQUUsUUFBUTs2QkFDbEIsQ0FBQyxFQUFBOzt3QkFMRixTQUtFLENBQUM7d0JBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsMEJBQXdCLGFBQWUsQ0FBQyxDQUFDO3dCQUUxQyxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBSSxrQkFBa0IsY0FBWSxFQUFFO2dDQUMxRSxlQUFlLEVBQUUsYUFBYTs2QkFDL0IsQ0FBQyxFQUFBOzt3QkFGSSxRQUFRLEdBQUcsU0FFZjt3QkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyw0QkFBMEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUcsQ0FBQyxDQUFDO3dCQUN4RSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFFMUIsT0FBTyxHQUFHLGNBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQzt3QkFDekQsUUFBUSxHQUFHLGNBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQzt3QkFDakUscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixDQUFDLEVBQUE7O3dCQUE1RCxTQUE0RCxDQUFDO3dCQUU3RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUNkLHFCQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUE7O3dCQUE5RCxZQUFZLEdBQUcsU0FBK0M7d0JBRXBFLHFCQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FDN0Isa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixPQUFPLEVBQ1AsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLEVBQzlCLFNBQVMsQ0FDVixFQUFBOzt3QkFORCxTQU1DLENBQUM7d0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzlCLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsRUFBQTs7d0JBQXhELFNBQXdELENBQUM7d0JBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBRXBDLGdCQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOzs7OztLQUM3QztJQUVLLHVCQUFVLEdBQWhCLFVBQ0UsV0FBbUIsRUFDbkIsYUFBcUIsRUFDckIsa0JBQTBCLEVBQzFCLFFBQWlCOzs7Ozs0QkFFSixxQkFBTSxrQkFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBQTs7d0JBQWxDLElBQUksR0FBRyxTQUEyQjt3QkFFbEMsT0FBTyxHQUFHLDJCQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt3QkFDM0MsR0FBRyxHQUFHLHdCQUFzQixhQUFhLDJCQUFzQixJQUFJLENBQUMsSUFBTSxDQUFDO3dCQUNqRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBaUIsT0FBTyxrQkFBYSxHQUFHLE1BQUcsQ0FBQyxDQUFDO3dCQUV6RCx3QkFBd0IsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQ3JELENBQUMsRUFDRCxJQUFJLENBQUMsSUFBSSxFQUNULENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FDMUQsQ0FBQzs2QkFDRSxDQUFDLFFBQVEsRUFBVCx3QkFBUzt3QkFDQSxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBOUMsUUFBUSxHQUFHLFNBQW1DLENBQUM7OzRCQUUxQixxQkFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEVBQUE7O3dCQUExRCxjQUFjLEdBQUcsU0FBeUM7d0JBRTFELEVBQUUsR0FBRyxjQUFPLENBQUMsMkJBQXlCLGFBQWUsQ0FBQyxDQUFDO3dCQUM1QyxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLEVBQUE7O3dCQUFuRCxJQUFJLEdBQUssQ0FBQSxTQUEwQyxDQUFBLEtBQS9DO3dCQUNaLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOzRCQUNkLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDVixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDN0I7d0JBQ0QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxpQ0FBK0IsYUFBZSxDQUFDLENBQUM7d0JBRTNELHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FDMUIsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixXQUFXLEVBQ1gsd0JBQXdCLENBQ3pCLEVBQUE7O3dCQUxELFNBS0MsQ0FBQzt3QkFFRixxQkFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQyxFQUFBOzt3QkFBckYsU0FBcUYsQ0FBQzt3QkFFdEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsNEJBQTBCLGFBQWEsVUFBTyxDQUFDLENBQUM7d0JBQ2pELHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxFQUFBOzt3QkFBaEYsUUFBUSxHQUFHLFNBQXFFO3dCQUN0RixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRWpDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Ozs7O0tBQ3pDO0lBRUssNkJBQWdCLEdBQXRCLFVBQXVCLGtCQUFrQixFQUFFLFVBQVU7Ozs7Ozt3QkFDN0MsT0FBTyxHQUFHLHdCQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt3QkFDeEMsS0FBSyxHQUFHLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQzt3QkFDdEIscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFBOzRCQUE5QyxzQkFBTyxTQUF1QyxFQUFDOzs7O0tBQ2hEO0lBRUssMEJBQWEsR0FBbkIsVUFBb0Isa0JBQTBCLEVBQUUsT0FBZSxFQUFFLFFBQWdCOzs7Ozs7d0JBQ3pFLE9BQU8sR0FBRyx3QkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7d0JBQ3hDLEtBQUssR0FBRyxFQUFFLE9BQU8sU0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7d0JBQzdCLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBQTs0QkFBOUMsc0JBQU8sU0FBdUMsRUFBQzs7OztLQUNoRDtJQUVLLG9DQUF1QixHQUE3QixVQUNFLGtCQUEwQixFQUMxQixRQUFnQixFQUNoQixjQUFzQjs7Ozs7O3dCQUVoQixHQUFHLEdBQUcsV0FBUyxjQUFjLFNBQUksUUFBVSxDQUFDO3dCQUM1QyxDQUFDLEdBQUcsMkJBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3dCQUNwQyxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLEVBQUE7NEJBQTNDLHNCQUFPLFNBQW9DLEVBQUM7Ozs7S0FDN0M7SUFFSywwQkFBYSxHQUFuQixVQUFvQixRQUFnQixFQUFFLEtBQWEsRUFBRSxJQUFZOzs7Ozs0QkFDcEQscUJBQU0sa0JBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFBOzt3QkFBakMsRUFBRSxHQUFHLFNBQTRCO3dCQUNqQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDZCxxQkFBTSxrQkFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUE7O3dCQUF6RCxTQUFTLEdBQUssQ0FBQSxTQUEyQyxDQUFBLFVBQWhEO3dCQUNqQixJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7NEJBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQzt5QkFDekU7d0JBQ0QscUJBQU0sa0JBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUE7O3dCQUFsQixTQUFrQixDQUFDO3dCQUNuQixzQkFBTyxRQUFRLEVBQUM7Ozs7S0FDakI7SUFFSyw4QkFBaUIsR0FBdkIsVUFBd0IsUUFBZ0I7Ozs7OzRCQUN6QixxQkFBTSxrQkFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQS9CLElBQUksR0FBRyxTQUF3Qjt3QkFDL0IsVUFBVSxHQUFHLE1BQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFHLENBQUM7d0JBQ3ZFLHNCQUFPLFVBQVUsRUFBQzs7OztLQUNuQjtJQUVLLDJCQUFjLEdBQXBCLFVBQ0Usa0JBQTBCLEVBQzFCLE9BQWUsRUFDZixRQUFtQixFQUNuQixTQUFrQixFQUNsQixTQUFrQixFQUNsQixpQkFBMEI7Ozs7Ozt3QkFHeEIsV0FBVyxHQU9ULFFBQVEsWUFQQyxFQUNYLE9BQU8sR0FNTCxRQUFRLFFBTkgsRUFDUCxhQUFhLEdBS1gsUUFBUSxjQUxHLEVBQ2Isd0JBQXdCLEdBSXRCLFFBQVEseUJBSmMsRUFDeEIsWUFBWSxHQUdWLFFBQVEsYUFIRSxFQUNaLGFBQWEsR0FFWCxRQUFRLGNBRkcsRUFDYixtQkFBbUIsR0FDakIsUUFBUSxvQkFEUyxDQUNSOzZCQUlULENBQUEsQ0FBQyxTQUFTLElBQUksYUFBYSxDQUFBLEVBQTNCLHdCQUEyQjt3QkFDN0IsSUFBSSxhQUFhLElBQUksQ0FBQyxtQkFBbUIsRUFBRTs0QkFDekMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQ0FDZCxzQkFBTyxXQUFXLEVBQUM7NkJBQ3BCOzRCQUNELFFBQVEsR0FBTSxPQUFPLHFCQUFrQixDQUFDO3lCQUN6Qzt3QkFFRCxJQUFJLGFBQWEsSUFBSSxtQkFBbUIsRUFBRTs0QkFDeEMsUUFBUSxHQUFNLE9BQU8sdUJBQW9CLENBQUM7eUJBQzNDOzZCQUVHLENBQUEsWUFBWSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUEsRUFBNUMsd0JBQTRDO3dCQUN4QyxVQUFVLEdBQUcsY0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGNBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDdkQscUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsRUFBQTs7d0JBQWxFLFFBQVEsR0FBRyxTQUF1RDt3QkFDbEUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQ3RCLFdBQVcsR0FBRzs0QkFDbEIsT0FBTyxFQUFLLE9BQU8sU0FBSSxjQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBRzs0QkFDL0MsV0FBVyxFQUFFLFVBQVU7NEJBQ3ZCLG1CQUFtQixFQUFFLEtBQUs7NEJBQzFCLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTTs0QkFDM0Isd0JBQXdCLEVBQUUsS0FBSyxDQUFDLGVBQWU7NEJBQy9DLFlBQVksRUFBRSxLQUFLLENBQUMsS0FBSzs0QkFDekIsYUFBYSxFQUFFLEtBQUssQ0FBQyxNQUFNO3lCQUM1QixDQUFDO3dCQUVLLHFCQUFNLElBQUksQ0FBQyxjQUFjLENBQzlCLGtCQUFrQixFQUNsQixPQUFPLEVBQ1AsV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLENBQ2xCLEVBQUE7NEJBUEQsc0JBQU8sU0FPTixFQUFDOzt3QkFHSixJQUFJLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7NEJBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNmLGtEQUNFLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQzdDLENBQ0gsQ0FBQzs0QkFDRixzQkFBTyxjQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxjQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUM7eUJBQ3ZEOzs7d0JBQ0ksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLGFBQWEsRUFBRTs0QkFDdkMsSUFBSSxtQkFBbUIsRUFBRTtnQ0FDdkIsUUFBUSxHQUFHLHdDQUFzQyxPQUFPLHNCQUFtQixDQUFDOzZCQUM3RTtpQ0FBTSxJQUFJLHdCQUF3QixFQUFFO2dDQUNuQyxzQkFBTyxXQUFXLEVBQUM7NkJBQ3BCO2lDQUFNO2dDQUNMLFFBQVEsR0FBRyx3Q0FBc0MsT0FBTyxnQ0FBNkIsQ0FBQzs2QkFDdkY7eUJBQ0Y7NkJBQU0sSUFBSSxTQUFTLElBQUksYUFBYSxFQUFFOzRCQUNyQyxJQUFJLFlBQVksSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dDQUNoRCxJQUFJLGlCQUFpQixFQUFFO29DQUNyQixzQkFBTyxXQUFXLEVBQUM7aUNBQ3BCO2dDQUNELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNmLHVEQUNFLFlBQVksSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUM1QyxDQUNILENBQUM7Z0NBQ0Ysc0JBQU8sY0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGNBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQzs2QkFDN0Q7NEJBQ0QsSUFBSSxZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dDQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FDZix3REFDRSxZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUM3QyxDQUNILENBQUM7Z0NBQ0Ysc0JBQU8sY0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsY0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDOzZCQUN2RDs0QkFDRCxJQUFJLGFBQWEsSUFBSSxtQkFBbUIsRUFBRTtnQ0FDeEMsUUFBUSxHQUFHLDhCQUE0QixPQUFPLHNCQUFtQixDQUFDOzZCQUNuRTs0QkFDRCxJQUFJLGFBQWEsSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dDQUN6QyxRQUFRLEdBQUcsNENBQTBDLE9BQU8sd0JBQW1CLE9BQVMsQ0FBQzs2QkFDMUY7eUJBQ0Y7NkJBQU0sSUFBSSxTQUFTLElBQUksQ0FBQyxhQUFhLEVBQUU7NEJBQ3RDLElBQUksd0JBQXdCLEVBQUU7Z0NBQzVCLHNCQUFPLFdBQVcsRUFBQzs2QkFDcEI7NEJBQ0QsUUFBUSxHQUFHLHFDQUFtQyxPQUFPLGdDQUE2QixDQUFDO3lCQUNwRjs7NEJBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztLQUMzQjtJQUVLLHlCQUFZLEdBQWxCLFVBQW1CLE9BQWUsRUFBRSxlQUF1Qjs7Ozs7O3dCQUNuRCxPQUFPLEdBQUcsd0JBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDckMsS0FBSyxHQUFHLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzt3QkFDbkIscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFBOzRCQUE5QyxzQkFBTyxTQUF1QyxFQUFDOzs7O0tBQ2hEO0lBRUsseUJBQVksR0FBbEIsVUFBbUIsV0FBbUI7Ozs7OzRCQUN4QixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBQTs7d0JBQWpELEdBQUcsR0FBRyxTQUEyQzt3QkFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsNkJBQTJCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQzt3QkFDOUQsS0FBc0IsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQXRDLE1BQU0sWUFBQSxFQUFFLE9BQU8sYUFBQSxDQUF3Qjt3QkFFL0Msc0JBQU87Z0NBQ0wsTUFBTSxFQUFFLE1BQU07Z0NBQ2QsT0FBTyxFQUFFLE9BQU87NkJBQ2pCLEVBQUM7Ozs7S0FDSDtJQUVLLHdCQUFXLEdBQWpCLFVBQWtCLFFBQWdCOzs7Ozs0QkFDYixxQkFBTSxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBNUMsTUFBTSxHQUFLLENBQUEsU0FBaUMsQ0FBQSxPQUF0Qzs2QkFFVixNQUFNLEVBQU4sd0JBQU07d0JBQ0QscUJBQU0sa0JBQU8sQ0FBQyxRQUFRLENBQUMsRUFBQTs0QkFBOUIsc0JBQU8sU0FBdUIsRUFBQzs0QkFFakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnRUFBK0QsTUFBUSxDQUFDLENBQUM7Ozs7S0FDMUY7SUFFRCw4QkFBaUIsR0FBakIsVUFDRSxrQkFBMEIsRUFDMUIsVUFBa0IsRUFDbEIsV0FBbUIsRUFDbkIsVUFBaUI7UUFKbkIsaUJBNENDO1FBdENDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3pCLElBQU0sRUFBRSxHQUFHLGNBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoQyxJQUFNLFdBQVcsR0FBRyxlQUFLLENBQUMsS0FBSyxDQUFDLFVBQU8sTUFBTSxFQUFFLFFBQVE7Ozs7Ozs0QkFFN0MsT0FBTyxHQUFHLDhCQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs0QkFDOUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7NEJBQ3pCLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUNoQixxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUE7OzRCQUFqRSxJQUFJLEdBQUcsU0FBMEQ7NEJBQ2pFLEtBQUssR0FBRztnQ0FDWixPQUFPLEVBQUUsVUFBVTtnQ0FDbkIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUU7NkJBQ2hDLENBQUM7NEJBRVUscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUE7OzRCQUF4RCxHQUFHLEdBQUcsU0FBa0Q7NEJBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNmLFVBQVEsT0FBTyxtQkFBYyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyx1QkFBa0IsSUFBSSxDQUFDLFNBQVMsQ0FDaEYsR0FBRyxDQUNGLENBQ0osQ0FBQzs0QkFDRixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dDQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7NkJBQ2pDOzs7OzRCQUVELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFrQixPQUFLLENBQUMsT0FBUyxDQUFDLENBQUM7NEJBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDL0IsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUNWLHNCQUFPOzs0QkFHVCxRQUFRLEVBQUUsQ0FBQzs7OztpQkFDWixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ04sV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7WUFFSCxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFvQixHQUFwQixVQUNFLGtCQUEwQixFQUMxQixNQUFjLEVBQ2QsVUFBa0IsRUFDbEIsYUFBb0IsRUFDcEIsU0FBa0I7UUFMcEIsaUJBOERDO1FBdkRDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3pCLElBQU0sVUFBVSxHQUFHLGVBQUssQ0FBQyxLQUFLLENBQUMsVUFBTyxVQUFVLEVBQUUsSUFBSTs7Ozs7OzRCQUU5QyxHQUFHLFNBQUEsQ0FBQzs0QkFDUixJQUFJLFNBQVMsRUFBRTtnQ0FDYixHQUFHLEdBQUcsaUJBQWUsVUFBVSxZQUFPLE1BQVEsQ0FBQzs2QkFDaEQ7aUNBQU07Z0NBQ0wsR0FBRyxHQUFHLGlCQUFlLFVBQVUsWUFBTyxNQUFRLENBQUM7NkJBQ2hEOzRCQUNELFdBQWtDLEVBQVYseUJBQVUsRUFBVix3QkFBVSxFQUFWLElBQVUsRUFBRTtnQ0FBekIsU0FBUztnQ0FDbEIsR0FBRyxJQUFJLE9BQUssU0FBUyxNQUFHLENBQUM7NkJBQzFCOzRCQUNELGlDQUFpQzs0QkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0NBQThCLEdBQUcsTUFBRyxDQUFDLENBQUM7NEJBQzVDLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFJLGtCQUFrQixhQUFXLEVBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLEVBQUE7OzRCQUF6RSxHQUFHLEdBQUcsU0FBbUU7NEJBQy9FLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OzRCQUV2QiwyQkFBMkI7NEJBQzNCLElBQUksT0FBSyxDQUFDLE9BQU8sSUFBSSxPQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO2dDQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFLLENBQUMsQ0FBQztnQ0FDekIsc0JBQU87NkJBQ1I7NEJBQ0QsSUFBSSxPQUFLLENBQUMsT0FBTyxJQUFJLE9BQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Z0NBQzlFLHFCQUFxQjtnQ0FDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBSyxDQUFDLENBQUM7Z0NBQ3pCLHNCQUFPOzZCQUNSOzRCQUVELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUcsT0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLFVBQUksT0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUksQ0FBQyxDQUFDOzRCQUV4RSxtREFBbUQ7NEJBQ25ELG9CQUFvQjs0QkFDcEIsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQ0FDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQ0FDL0IsZUFBZSxHQUFHLEVBQUUsQ0FBQztnQ0FDM0IsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2pFLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQ0FDakYsVUFBVSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzs2QkFDckM7aUNBQU07Z0NBQ0wsZ0NBQWdDO2dDQUNoQyxnQkFBZ0I7Z0NBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQUssQ0FBQyxDQUFDO2dDQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2dDQUNsRCxzQkFBTzs2QkFDUjs7OzRCQUVILElBQUksRUFBRSxDQUFDOzs7O2lCQUNSLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFTixVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUNmLGFBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7WUFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlCQUFZLEdBQVosVUFBYSxTQUFpQjtRQUM1QixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQ3hELENBQUM7SUFFRCwrQkFBa0IsR0FBbEIsVUFBbUIsT0FBZSxFQUFFLFVBQWtCLEVBQUUsT0FBZTtRQUNyRSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFFRCwrQkFBa0IsR0FBbEIsVUFBbUIsT0FBZSxFQUFFLFVBQWtCLEVBQUUsT0FBZTtRQUNyRSxPQUFPLE9BQU8sS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUExakIwQjtRQUExQixjQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs7c0NBQWlCO0lBMmpCN0MsU0FBQztDQUFBLEFBN2pCRCxJQTZqQkM7a0JBN2pCb0IsRUFBRSJ9