install: #установка зависимостей
	npm ci

brain-games: #запуск игры "Игры разума"
	node bin/brain-games.js

publish: #отладка публикации
	npm publish --dry-run

lint: #запуск линтера
	npx eslint .

brain-even: #запуск игры "Проверка на четность"
	node bin/brain-even.js

brain-calc: #запуск игры "Калькулятор"
	node bin/brain-calc.js

brain-gcd: #запуск игры "НОД"
	node bin/brain-gcd.js
