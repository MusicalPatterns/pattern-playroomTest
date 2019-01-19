import {
    OptionedPatternSpecPropertyAttributes,
    RangedPatternSpecPropertyAttributes,
    StandardPatternSpec,
    StandardPatternSpecAttributes,
    StandardPatternSpecProperties,
} from '@musical-patterns/pattern'

enum OptionedPropertyOneOptions {
    OPTION_ONE = 'Option one',
    OPTION_TWO = 'Option two',
}

enum OptionedPropertyTwoOptions {
    OPTION_THE_FIRST = 'Option the First',
    OPTION_THE_SECOND = 'Option the Second',
}

interface PlayroomTestPatternSpecAttributes extends StandardPatternSpecAttributes {
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: RangedPatternSpecPropertyAttributes,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: RangedPatternSpecPropertyAttributes,
    optionedPropertyOne: OptionedPatternSpecPropertyAttributes,
    optionedPropertyTwo: OptionedPatternSpecPropertyAttributes,
}

interface PlayroomTestPatternSpec extends StandardPatternSpec {
    optionedPropertyOne: OptionedPropertyOneOptions,
    optionedPropertyTwo: OptionedPropertyTwoOptions,
}

export {
    PlayroomTestPatternSpec,
    PlayroomTestPatternSpecAttributes,
    OptionedPropertyOneOptions,
    OptionedPropertyTwoOptions,
}
