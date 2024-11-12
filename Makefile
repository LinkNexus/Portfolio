server := "levynkeneng.dev@212.47.70.2"

.PHONY: install deploy

deploy:
	ssh -A $(server) 'cd public_html && git fetch && git pull && make install'

install: vendor/autoload.php
	npm install
	npm run build
	php bin/console cache:clear

vendor/autoload.php: composer.lock composer.json
	composer install --optimize-autoloader
	touch vendor/autoload.php