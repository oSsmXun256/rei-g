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
var _this = this;
var _a = require('discord.js'), Client = _a.Client, GatewayIntentBits = _a.GatewayIntentBits, Partials = _a.Partials, PermissionsBitField = _a.PermissionsBitField;
var client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent],
    restTimeOffset: 50,
    partials: [Partials.Channel]
});
var _b = require('discord.js'), ApplicationCommandType = _b.ApplicationCommandType, ApplicationCommandOptionType = _b.ApplicationCommandOptionType;
var _c = require('discord.js'), ActionRowBuilder = _c.ActionRowBuilder, MessageActionRow = _c.MessageActionRow, ButtonBuilder = _c.ButtonBuilder, ButtonStyle = _c.ButtonStyle, InteractionType = _c.InteractionType, ActivityType = _c.ActivityType;
client.on('ready', function () {
    console.log("".concat(client.user.tag, "is online!"));
    client.user.setPresence({ activities: [{ name: "test | Ver.0.0.1.G | ping:".concat(client.ws.ping), type: ActivityType.PLAYING }],
        status: 'online' });
});
client.on('ready', function () {
    setInterval(function () {
        client.user.setPresence({ activities: [{ name: "test | Ver.0.0.1.G | ping:".concat(client.ws.ping), type: ActivityType.PLAYING }],
            status: 'online' });
    }, 2500);
});
client.on("messageCreate", function (message) { return __awaiter(_this, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (message.author.bot)
                    return [2 /*return*/];
                data = [{
                        name: "testcmd",
                        description: "testcmd",
                        options: [{
                                type: ApplicationCommandOptionType.STRING,
                                name: "aaa",
                                description: "a",
                                required: true
                            }]
                    },
                ];
                return [4 /*yield*/, client.application.commands.set(data, "".concat(message.guildId))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
/////////////testcmd////////////
client.on("interactionCreate", function (interaction) { return __awaiter(_this, void 0, void 0, function () {
    var intstring;
    return __generator(this, function (_a) {
        if (!interaction.type === InteractionType.ApplicationCommand)
            return [2 /*return*/];
        if (interaction.commandName === 'testcmd') {
            intstring = interaction.options.getString('aaa');
            interaction.reply({ embeds: [{
                        footer: {
                            icon_url: client.user.avatarURL({ format: 'jpg', size: 512 }),
                            text: "Create by : oSsmXun256"
                        },
                        author: {
                            name: "tests",
                            icon_url: client.user.avatarURL({ format: 'jpg', size: 512 })
                        },
                        description: "".concat(intstring),
                        color: 4303284,
                        timestamp: new Date()
                    }],
                ephemeral: true });
        }
        return [2 /*return*/];
    });
}); });
////////ログイン///////
client.login(process.env.TOKEN);
