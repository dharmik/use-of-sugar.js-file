$.index.open();

var sugar = require("sugar");


Ti.API.info('Index of c :) '+['a','b','c'].indexOf('c'));

Ti.API.info('This remove name which contain o :) ' + ['rocteady','and','bop'].findAll(/o/));

Ti.API.info('Average value :)' + [1,65,2,79,34].average());

Ti.API.info('Seperate value :) ' + 'offon'.chars());

Ti.API.info('Formating value :) ' + (4235000).format());

Ti.API.info('Second to Minute :) ' + Date.create('3200 seconds ago').relative());

Ti.API.info('Current Date and it return true or false :) ' + Date.create().is('the 7th of June'));

Ti.API.info('Pad :) ' + (40).pad(5));

Ti.API.info('5 year before value :) ' + (5).yearsBefore('2001'));