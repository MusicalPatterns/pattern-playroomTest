import {
    OptionedPatternSpecPropertyAttributes,
    PatternSpec,
    PatternSpecAttributes,
    RangedPatternSpecPropertyAttributes,
} from '@musical-patterns/pattern'

enum OptionedPropertyOneOptions {
    OPTION_ONE = 'OPTION_ONE',
    OPTION_TWO = 'OPTION_TWO',
}

enum OptionedPropertyTwoOptions {
    OPTION_THE_FIRST = 'OPTION_THE_FIRST',
    OPTION_THE_SECOND = 'OPTION_THE_SECOND',
}

interface PlayroomTestPatternSpecAttributes extends PatternSpecAttributes {
    optionedPropertyOne: OptionedPatternSpecPropertyAttributes,
    optionedPropertyTwo: OptionedPatternSpecPropertyAttributes,
    patternDurationScalar: RangedPatternSpecPropertyAttributes,
    patternPitchScalar: RangedPatternSpecPropertyAttributes,
}

interface PlayroomTestPatternSpec extends PatternSpec {
    optionedPropertyOne: OptionedPropertyOneOptions,
    optionedPropertyTwo: OptionedPropertyTwoOptions,
}

export {
    PlayroomTestPatternSpec,
    PlayroomTestPatternSpecAttributes,
    OptionedPropertyOneOptions,
    OptionedPropertyTwoOptions,
}
