module.exports = {
  apps: [{
    name: "vue3",
    script: "app.js",
    node_args: "--harmony"
  }],
  deploy: {
    preview: {
      user: "root",
      host: "",
      ref: "origin/master",
      repo: "",
      path: "",
      ssh_options: 'StrictHostKeyChecking=no',
      "post-deploy": "npm run build && pm2 reload ecosystem.config.js --env development"
    }
  }

}