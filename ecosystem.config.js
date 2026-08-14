module.exports = {
  apps: [
    {
      name: "19-testui",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3050",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3050
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3050
      }
    }
  ]
};
