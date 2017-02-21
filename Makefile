.PHONY: install start

install:
	npm install
	./node_modules/.bin/webpack

start:
	npm start

clear:
	rm -rf ./node_modules/
	rm -rf ./assets/
