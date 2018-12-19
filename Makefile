pull:
	../../node_modules/@musical-patterns/cli/bin/pull.sh

.PHONY: test
test:
	pushd ../..; JASMINE_CONFIG_PATH="src/playroomTest/test/jasmine.js" PATTERN_NAME="PLAYROOM_TEST" make test; popd

.PHONY: lint
lint:
	pushd ../..; DIR="src/playroomTest" make lint; popd
