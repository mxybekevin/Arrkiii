/** @format
 *
 * Arrkiii By Ozuma xd
 * © 2022 Arrkiii Development
 *
 */

const config = require("./src/config");
const { ClusterManager } = require("discord-hybrid-sharding");

// Bot configuration
const client = {
  file: "./index.js", // Path to your bot's main file
  token: config.token, // Token from your config
  shards: "auto", // Let the library decide shard count
  perCluster: 1, // How many shards per cluster
};

// Create and configure the cluster manager
const manager = new ClusterManager(client.file, {
  restarts: {
    max: 5, // Max restart attempts
    interval: 1000, // Interval between restarts (ms)
  },
  respawn: true, // Automatically respawn dead clusters
  mode: "worker", // Recommended mode
  token: client.token, // Bot token
  totalShards: client.shards || "auto", // Total shards
  shardsPerCluster: parseInt(client.perCluster) || 2, // Fixed property name
});

// Event: cluster created
manager.on("clusterCreate", (cluster) => {
  console.log(`✅ Launched cluster ${cluster.id}`);
});

// Event: debug info
manager.on("debug", (info) => {
  console.log(`[DEBUG] ${info}`);
});

// Spawn clusters
manager.spawn({ timeout: -1 });
