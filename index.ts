import { Client, Guild, GuildMember, GuildChannel, Presence, Role, User, Message } from 'discord.js';
import {
    handleGuildMemberUpdateEvent,
    handleGuildUpdateEvent,
    handleMessageUpdateEvent,
    handlePresenceUpdateEvent,
    handleRoleUpdateEvent,
    handleUserUpdateEvent,
    handleVoiceStateUpdateEvent,
    handleChannelUpdateEvent,
} from './handlers';

let eventRegistered = false;

export = async (client: Client) => {

    if (eventRegistered) return;
    eventRegistered = true;

    /* HANDLE CHANNEL EVENTS */
    client.on('channelUpdate', (oldChannel: any, newChannel: any) => {
        handleChannelUpdateEvent(client, oldChannel, newChannel);
    });

    /* HANDLE MEMBER EVENTS */
    client.on('guildMemberUpdate', (oldMember: any, newMember: any) => {
        handleGuildMemberUpdateEvent(client, oldMember, newMember);
    });

    /* HANDLE GUILD EVENTS */
    client.on('guildUpdate', (oldGuild: any, newGuild: any) => {
        handleGuildUpdateEvent(client, oldGuild, newGuild);
    });

    /* HANDLE MESSAGE UPDATE EVENTS */
    client.on('messageUpdate', (oldMessage: any, newMessage: any) => {
        handleMessageUpdateEvent(client, oldMessage, newMessage);
    });

    /* HANDLE PRESENCE UPDATE EVENTS */
    client.on('presenceUpdate', (oldPresence: any, newPresence: any) => {
        handlePresenceUpdateEvent(client, oldPresence, newPresence);
    });

    /* HANDLE ROLE EVENTS */
    client.on('roleUpdate', (oldRole: any, newRole: any) => {
        handleRoleUpdateEvent(client, oldRole, newRole);
    });

    /* HANDLE USER EVENTS */
    client.on('userUpdate', (oldUser: any, newUser: any) => {
        handleUserUpdateEvent(client, oldUser, newUser);
    });

    /* HANDLE VOICE STATE UPDATE */
    client.on('voiceStateUpdate', (oldState: any, newState: any) => {
        handleVoiceStateUpdateEvent(client, oldState, newState);
    });
};