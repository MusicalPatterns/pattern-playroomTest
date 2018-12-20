MAKEFLAGS += --no-print-directory --always-make

commit:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/commit.sh

lint:
	@set -e; pushd ../..; make lint DIR="src/playroomTest"; popd

pull:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/pull.sh

push:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/push.sh

ship:
	@set -e; pushd ../..; make ship PATTERN="playroomTest"; popd

test:
	@set -e; pushd ../..; make test JASMINE_CONFIG_PATH="src/playroomTest/test/jasmine.js" PATTERN="playroom"; popd

update:
	@set -e; pushd ../..; make update PATTERN="playroomTest"; popd
