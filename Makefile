all:
	npm run prettier --list-different && \
	npm run build && \
	npm run test
