import {
    OptionedPatternSpecPropertyAttributes,
    PatternSpec,
    PatternSpecAttributes,
    RangedPatternSpecPropertyAttributes,
    StandardPatternSpecProperties,
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
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: RangedPatternSpecPropertyAttributes,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: RangedPatternSpecPropertyAttributes,
    optionedPropertyOne: OptionedPatternSpecPropertyAttributes,
    optionedPropertyTwo: OptionedPatternSpecPropertyAttributes,
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
