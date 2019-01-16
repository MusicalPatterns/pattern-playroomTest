import { ContinuousPatternSpecProperty, DiscretePatternSpecProperty, PatternSpec } from '@musical-patterns/pattern'

enum DiscretePropertyOneOptions {
    OPTION_ONE = 'OPTION_ONE',
    OPTION_TWO = 'OPTION_TWO',
}

enum DiscretePropertyTwoOptions {
    OPTION_THE_FIRST = 'OPTION_THE_FIRST',
    OPTION_THE_SECOND = 'OPTION_THE_SECOND',
}

interface PlayroomTestPatternSpec extends PatternSpec {
    discretePropertyOne: DiscretePatternSpecProperty,
    discretePropertyTwo: DiscretePatternSpecProperty,
    patternDurationScalar: ContinuousPatternSpecProperty,
    patternPitchScalar: ContinuousPatternSpecProperty,
}

export {
    PlayroomTestPatternSpec,
    DiscretePropertyOneOptions,
    DiscretePropertyTwoOptions,
}
