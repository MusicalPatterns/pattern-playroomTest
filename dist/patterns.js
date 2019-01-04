"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = require("@musical-patterns/registry");
var constants_1 = require("./constants");
var material = {
    buildEntitiesFunction: function () { return []; },
    buildScalesFunction: function () { return []; },
};
var metadata = {
    description: 'pattern for testing playroom interface',
    formattedName: 'Playroom Test',
    musicalIdeaIllustrated: 'testing 1, 2, 3...',
};
var spec = {
    patternDurationScalar: constants_1.PLAYROOM_TEST_PATTERN_DURATION_SCALAR,
    patternPitchScalar: constants_1.PLAYROOM_TEST_PATTERN_PITCH_SCALAR,
};
exports.spec = spec;
var pattern = {
    material: material,
    metadata: metadata,
    patternId: registry_1.PatternId.PLAYROOM_TEST,
    spec: spec,
};
exports.pattern = pattern;
//# sourceMappingURL=patterns.js.map