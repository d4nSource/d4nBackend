var Service = require('node-windows').Service;

//create a new service

var svc = new Service({
	name: 'Aurubis Monitoring Serice',
	description: 'Central Monitoring Service',
	script: 'C:\projects\d4nMaterial.server\source\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();