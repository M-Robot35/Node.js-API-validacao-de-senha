#!bin/bash

module =./node_modules/

if [ -e /$module/ ]; then
	npm install	
	node index.js
	start http://localhost:4000/
	read
fi