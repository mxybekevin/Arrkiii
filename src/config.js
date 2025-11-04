/** @format */

// Helper: safely parse boolean strings
function parseBoolean(value) {
  if (typeof value === "string") value = value.trim().toLowerCase();
  return value === "true" || value === true;
}

module.exports = {
  // ⚠️ Replace this token later!
  token: "MTQzMDczNTY3MzQwMDIzNDAxNQ.GrdNlI.8b0H6U1eUuh-FSV97Zw1wWUok_u9g2xj3_uQ-k",

  clientId: "1430735673400234015",
  prefix: ">",
  ownerID: "1308227696400142417",

  SpotifyID: "YOUR_SPOTIFY_ID",
  SpotifySecret: "YOUR_SPOTIFY_SECRET",

  mongourl:
    "mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority",

  embedColor: "#2f3136",
  logs: "https://discord.com/api/webhooks/your-log-webhook",

  node_source: "ytsearch",
  topgg: "your-topgg-token",

  links: {
    BG: "https://cdn.discordapp.com/attachments/.../background.jpg",
    support: "https://discord.gg/yourserver",
    invite:
      "https://discord.com/oauth2/authorize?client_id=1430735673400234015&permissions=8&scope=bot",
    arrkiii:
      "https://cdn.discordapp.com/attachments/.../Arrkiii.gif",
    power: "Powered By Arrkiii Development 🌙",
    vanity: "discord.gg/yourserver",
    guild: "1325384856477368420",
    topgg: "https://top.gg/bot/1430735673400234015/vote",
  },

  Webhooks: {
    black: "https://discord.com/api/webhooks/your-webhook",
    player_create: "https://discord.com/api/webhooks/your-webhook",
    player_delete: "https://discord.com/api/webhooks/your-webhook",
    guild_join: "https://discord.com/api/webhooks/your-webhook",
    guild_leave: "https://discord.com/api/webhooks/your-webhook",
    cmdrun: "https://discord.com/api/webhooks/your-webhook",
  },

  nodes: [
    {
      url: process.env.NODE_URL || "lava-v4.ajieblogs.eu.org:443",
      name: process.env.NODE_NAME || "Lavalink",
      auth: process.env.NODE_AUTH || "yoursecret",
      secure: parseBoolean(process.env.NODE_SECURE || "true"),
    },
  ],
};
