module.exports = {
  apps: [
    {
      name: 'knownvisitors-app',
      script: 'npm',
      args: 'start',
      cwd: '/home/master/applications/knownvisitors.com/public_html',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        DEPLOYMENT_TYPE: 'cloudways'
      },
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      error_file: '/home/master/applications/knownvisitors.com/public_html/logs/err.log',
      out_file: '/home/master/applications/knownvisitors.com/public_html/logs/out.log',
      log_file: '/home/master/applications/knownvisitors.com/public_html/logs/combined.log',
      time: true
    }
  ]
}; 