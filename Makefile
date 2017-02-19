.PHONY: install

install:
	npm install
	./node_modules/.bin/webpack ./index.js ./bundle.js

start:
	npm start
