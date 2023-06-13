const dotenv = require("dotenv");
dotenv.config()

module.exports = {
    server: {
        domain: "localhost",
        https: false,
        httpPort: 8080,
    },

    Discord: {
        // —— Things that are required for the whole project to work.
        prefix: "-", // —— Deprecated lol.
        token: process.env.token, // —— Your bot's token.
        botId: "1118195344187084810", // —— The bot's ID.
        guildId: "1117848054201077982", // —— The server ID on where the commands will be deployed.
        verifiedRole: "1117853518661959692", // —— Role that will be added to the user when they verify their account.

        // —— For users that want to have a role removed upon verification, if you want this, set remove-role to true, and set your remove role ID.
        removeRole: false,
        removeRoleId: "",

        // —— Set the bot's presence, for statusType see: https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType
        statusType: 3, // 1 (STREAMING), 2 (LISTENING), 3 (WATCHING), 5 (COMPETING). Default is 0 (PLAYING). 
        statusMsg: "Project Future",

        // —— By default, rules are set to disabled, this means rules will be hidden. If you want to use the rules function, change disabled to your rules. Please ensure you use \n for each line break and do not use any symbols that could interfear with JSON.
        rulesEnabled: false,
        rules: "SOON \n SOON"
    },

    reCAPTCHA: {
        secretKey: "6LfLgpQmAAAAAE9RxBORn6X-aZ6ZZdzX6YjgR7u0",
        publicKey: "6LfLgpQmAAAAAKyJg0QPCRsljOZniCXQVL4VdlEo"
    }
}
