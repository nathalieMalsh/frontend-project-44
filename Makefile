install: #установка зависимостей
	npm ci

brain-games: #запуск игры
	node bin/brain-games.js

publish: #отладка публикации
	npm publish --dry-run

lint: #запуск линтера
	npx eslint .
