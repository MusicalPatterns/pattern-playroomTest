commit:
	../../node_modules/@musical-patterns/cli/bin/commit.sh

.PHONY: lint
lint:
	pushd ../..; make lint DIR="src/playroomTest"; popd

pull:
	../../node_modules/@musical-patterns/cli/bin/pull.sh

push:
	../../node_modules/@musical-patterns/cli/bin/push.sh

.PHONY: test
test:
	pushd ../..; make test JASMINE_CONFIG_PATH="src/playroomTest/test/jasmine.js" PATTERN_NAME="PLAYROOM_TEST"; popd

update:
	pushd ../..; make update PATTERN="PLAYROOM_TEST"; popd
