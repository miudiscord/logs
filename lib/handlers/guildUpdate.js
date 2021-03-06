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
exports.handleGuildUpdateEvent = void 0;
/**
 * @handler Guild Events
 * @related guildUpdate
 */
function handleGuildUpdateEvent(client, oldGuild, newGuild) {
    return __awaiter(this, void 0, void 0, function () {
        var emitted;
        return __generator(this, function (_a) {
            emitted = false;
            /**
             * @event guildBoostLevelUp
             * @description Emitted when a guild's boost level increases.
             * @param {DJS:Guild} guild The guild whose boost level has increased.
             * @param {number} oldLevel The old boost level.
             * @param {number} newLevel The new boost level.
             * @example
             * client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {
             *   console.log(guild.name+" reaches the boost level: "+newLevel);
             * });
             */
            if (oldGuild.premiumTier < newGuild.premiumTier) {
                client.emit('guildBoostLevelUp', newGuild, oldGuild.premiumTier, newGuild.premiumTier);
                emitted = true;
            }
            /**
             * @event guildBoostLevelDown
             * @description Emitted when a guild's boost level decreases.
             * @param {DJS:Guild} guild The guild whose boost level has decreased.
             * @param {number} oldLevel The old boost level.
             * @param {number} newLevel The new boost level.
             * @example
             * client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {
             *   console.log(guild.name+" returned to the boost level: "+newLevel);
             * });
             */
            if (oldGuild.premiumTier > newGuild.premiumTier) {
                client.emit('guildBoostLevelDown', oldGuild, newGuild);
                emitted = true;
            }
            /**
             * @event guildRegionUpdate
             * @description Emitted when a guild region changes.
             * @param {DJS:Guild} guild The guild whose region has changed.
             * @param {string} oldRegion The old guild region.
             * @param {string} newRegion The new guild region.
             * @example
             * client.on("guildRegionUpdate", (guild, oldRegion, newRegion) => {
             *   console.log(guild.name+" region is now "+newRegion);
             * });
             */
            if (oldGuild.region !== newGuild.region) {
                client.emit('guildRegionUpdate', newGuild, oldGuild.region, newGuild.region);
                emitted = true;
            }
            /**
             * @event guildBannerAdd
             * @description Emitted when a guild banner is added.
             * @param {DJS:Guild} guild The guild whose banner has been added.
             * @param {string} bannerURL The guild banner.
             * @example
             * client.on("guildBannerAdd", (guild, bannerURL) => {
             *   console.log(guild.name+" has a banner now!");
             * });
             */
            if (!oldGuild.banner && newGuild.banner) {
                client.emit('guildBannerAdd', newGuild, newGuild.bannerURL());
                emitted = true;
            }
            /**
             * @event guildAfkChannelAdd
             * @description Emitted when a guild afk channel is added.
             * @param {DJS:Guild} guild The guild whose afk channel has been added.
             * @param {string} afkChannel The afk channel.
             * @example
             * client.on("guildAfkChannelAdd", (guild, afkChannel) => {
             *   console.log(guild.name+" has an AFK channel now!");
             * });
             */
            if (!oldGuild.afkChannel && newGuild.afkChannel) {
                client.emit('guildAfkChannelAdd', newGuild, newGuild.afkChannel);
                emitted = true;
            }
            /**
             * @event guildVanityURLAdd
             * @description Emitted when a guild adds a vanity url.
             * @param {DJS:Guild} guild The guild which added a vanity url.
             * @param {string} vanityURL The vanity url.
             * @example
             * client.on("guildVanityURLAdd", (guild, vanityURL) => {
             *   console.log(guild.name+" has added a vanity url : "+vanityURL);
             * });
             */
            if (!oldGuild.vanityURLCode && newGuild.vanityURLCode) {
                client.emit('guildVanityURLAdd', newGuild, newGuild.vanityURLCode);
                emitted = true;
            }
            /**
             * @event guildVanityURLRemove
             * @description Emitted when a guild removes its vanity URL.
             * @param {DJS:Guild} guild The guild which removed its vanity URL.
             * @param {string} vanityURL The vanity url.
             * @example
             * client.on("guildVanityURLRemove", (guild, vanityURL) => {
             *   console.log(guild.name+" has removed its vanity url : "+vanityURL);
             * });
             */
            if (oldGuild.vanityURLCode && !newGuild.vanityURLCode) {
                client.emit('guildVanityURLRemove', newGuild, oldGuild.vanityURLCode);
                emitted = true;
            }
            /**
             * @event guildVanityURLUpdate
             * @description Emitted when a guild updates its vanity URL.
             * @param {DJS:Guild} guild The guild which updated a vanity URL.
             * @param {string} oldVanityURL The former vanity URL.
             * @param {string} vanityURL The updated vanity URL.
             * @example
             * client.on("guildVanityURLUpdate", (guild, oldVanityURL, newVanityURL) => {
             *   console.log(`${guild.name} has changed its vanity URL from ${oldGuildvanityURL} to ${newGuildvanityURL} !`);
             * });
             */
            if (oldGuild.vanityURLCode !== newGuild.vanityURLCode) {
                client.emit('guildVanityURLUpdate', newGuild, oldGuild.vanityURLCode, newGuild.vanityURLCode);
                emitted = true;
            }
            /**
             * @event guildFeaturesUpdate
             * @description Emitten when a guild feature gets updated.
             * @param {DJS:Guild} oldGuild The guild before its feature(s) were updated.
             * @param {DJS:Guild} newGuild The guild after its feature(s) were updated.
             * @example
             * client.on("guildFeaturesUpdate", (oldGuild, newGuild) => {
             *   console.log(`New features: ${newGuild.features.join(", ")}`);
             * });
             */
            if (oldGuild.features.length !== newGuild.features.length) {
                client.emit('guildFeaturesUpdate', oldGuild, newGuild);
                emitted = true;
            }
            /**
             * @event guildAcronymUpdate
             * @description Emitted when a guild updates its Acronym.
             * @param {DJS:Guild} oldGuild The guild before its Acronym was updated.
             * @param {DJS:Guild} newGuild The guild after its Acronym was updated.
             * @example
             * client.on("guildAcronymUpdate", (oldGuild, newGuild) => {
             *   console.log(oldGuild.name+" updated its Acronym : "+newGuild.nameAcronym);
             * });
             */
            if (oldGuild.nameAcronym !== newGuild.nameAcronym) {
                client.emit('guildAcronymUpdate', oldGuild, newGuild);
                emitted = true;
            }
            /**
             * @event guildOwnerUpdate
             * @description Emitted when a guild updates its owner.
             * @param {DJS:Guild} oldGuild The guild before its owner was updated.
             * @param {DJS:Guild} newGuild The guild after its owner was updated.
             * @example
             * client.on("guildOwnerUpdate", (oldGuild, newGuild) => {
             *   console.log(oldGuild.name+" updated its owner : "+newGuild.owner.id);
             * });
             */
            if (oldGuild.ownerID !== newGuild.ownerID) {
                client.emit('guildOwnerUpdate', oldGuild, newGuild);
                emitted = true;
            }
            /**
             * @event guildPartnerAdd
             * @description Emitted when a guild gets partnered.
             * @param {DJS:Guild} guild The guild who partnered.
             * @example
             * client.on("guildPartnerAdd", (guild) => {
             *   console.log(guild.name+" got partnered!");
             * });
             */
            if (!oldGuild.partnered && newGuild.partnered) {
                client.emit('guildPartnerAdd', newGuild);
                emitted = true;
            }
            /**
             * @event guildPartnerRemove
             * @description Emitted when a guild is no longer partnered.
             * @param {DJS:Guild} guild The guild who removed partnership.
             * @example
             * client.on("guildPartnerRemove", (guild) => {
             *   console.log(guild.name+" is no longer partnered!");
             * });
             */
            if (oldGuild.partnered && !newGuild.partnered) {
                client.emit('guildPartnerRemove', newGuild);
                emitted = true;
            }
            /**
             * @event guildVerificationAdd
             * @description Emitted when a guild gets verified.
             * @param {DJS:Guild} guild The guild who got verified.
             * @example
             * client.on("guildVerificationAdd", (guild) => {
             *   console.log(guild.name+" got verified!");
             * });
             */
            if (!oldGuild.verified && newGuild.verified) {
                client.emit('guildVerificationAdd', newGuild);
                emitted = true;
            }
            /**
             * @event guildVerificationRemove
             * @description Emitted when a guild is no longer verified.
             * @param {DJS:Guild} guild The guild who is no longer verified.
             * @example
             * client.on("guildVerificationRemove", (guild) => {
             *   console.log(guild.name+" is no longer verified!");
             * });
             */
            if (oldGuild.verified && !newGuild.verified) {
                client.emit('guildVerificationRemove', newGuild);
                emitted = true;
            }
            /**
             * @event unhandledGuildUpdate
             * @description Emitted when the guildUpdate event is triggered but discord-logs didn't trigger any custom event.
             * @param {DJS:Guild} oldGuild The guild before the update.
             * @param {DJS:Guild} newGuild The guild after the update.
             * @example
             * client.on("unhandledGuildUpdate", (oldGuild, newGuild) => {
             *   console.log("Guild '"+oldGuild.id+"' was edited but discord-logs couldn't find what was updated...");
             * });
             */
            if (!emitted) {
                client.emit('unhandledGuildUpdate', oldGuild, newGuild);
            }
            return [2 /*return*/];
        });
    });
}
exports.handleGuildUpdateEvent = handleGuildUpdateEvent;
