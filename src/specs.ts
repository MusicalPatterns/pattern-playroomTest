import { PatternSpecPropertyType } from '@musical-patterns/pattern'
import { from } from '@musical-patterns/utilities'
import {
    PLAYROOM_TEST_MAX_PATTERN_PITCH_SCALAR,
    PLAYROOM_TEST_MIN_PATTERN_PITCH_SCALAR,
    PLAYROOM_TEST_PATTERN_DURATION_SCALAR,
    PLAYROOM_TEST_PATTERN_PITCH_SCALAR,
} from './constants'
import { DiscretePropertyOneOptions, DiscretePropertyTwoOptions, PlayroomTestPatternSpec } from './types'

const spec: PlayroomTestPatternSpec = {
    discretePropertyOne: {
        initial: DiscretePropertyOneOptions.OPTION_TWO,
        patternSpecPropertyRange: Object.values(DiscretePropertyOneOptions),
        patternSpecPropertyType: PatternSpecPropertyType.DISCRETE,
    },
    discretePropertyTwo: {
        initial: DiscretePropertyTwoOptions.OPTION_THE_FIRST,
        patternSpecPropertyRange: Object.values(DiscretePropertyTwoOptions),
        patternSpecPropertyType: PatternSpecPropertyType.DISCRETE,
    },
    patternDurationScalar: {
        initial: from.Scalar(PLAYROOM_TEST_PATTERN_DURATION_SCALAR),
        patternSpecPropertyRange: {
            max: from.Scalar(PLAYROOM_TEST_MAX_PATTERN_PITCH_SCALAR),
            min: from.Scalar(PLAYROOM_TEST_MIN_PATTERN_PITCH_SCALAR),
        },
        patternSpecPropertyType: PatternSpecPropertyType.CONTINUOUS,
    },
    patternPitchScalar: {
        initial: from.Scalar(PLAYROOM_TEST_PATTERN_PITCH_SCALAR),
        patternSpecPropertyType: PatternSpecPropertyType.CONTINUOUS,
    },
}

const otherSpec: PlayroomTestPatternSpec = {
    discretePropertyOne: {
        ...spec.discretePropertyOne,
        initial: DiscretePropertyOneOptions.OPTION_ONE,
    },
    discretePropertyTwo: {
        ...spec.discretePropertyTwo,
        initial: DiscretePropertyTwoOptions.OPTION_THE_SECOND,
    },
    patternDurationScalar: {
        ...spec.patternDurationScalar,
        initial: from.Scalar(PLAYROOM_TEST_PATTERN_DURATION_SCALAR) + 1,
    },
    patternPitchScalar: {
        ...spec.patternPitchScalar,
        initial: from.Scalar(PLAYROOM_TEST_PATTERN_PITCH_SCALAR) + 1,
    },
}

export {
    spec,
    otherSpec,
}
