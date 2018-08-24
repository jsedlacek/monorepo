build:
	$(MAKE) -C packages/server
	$(MAKE) -C packages/client

run: build
	node packages/server/build/index.js

.PHONY: build run
