import {
    OptionedPatternSpecPropertyAttributes,
    RangedPatternSpecPropertyAttributes,
    StandardPatternSpec,
    StandardPatternSpecAttributes,
    StandardPatternSpecProperties, ToggledPatternSpecPropertyAttributes,
} from '@musical-patterns/pattern'

enum OptionedPropertyOneOptions {
    OPTION_ONE = 'OPTION_ONE',
    OPTION_TWO = 'OPTION_TWO',
}

enum OptionedPropertyTwoOptions {
    OPTION_THE_FIRST = 'OPTION_THE_FIRST',
    OPTION_THE_SECOND = 'OPTION_THE_SECOND',
}

interface PlayroomTestPatternSpecAttributes extends StandardPatternSpecAttributes {
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: RangedPatternSpecPropertyAttributes,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: RangedPatternSpecPropertyAttributes,
    optionedPropertyOne: OptionedPatternSpecPropertyAttributes,
    optionedPropertyTwo: OptionedPatternSpecPropertyAttributes,
    toggledProperty: ToggledPatternSpecPropertyAttributes,
}

interface PlayroomTestPatternSpec extends StandardPatternSpec {
    optionedPropertyOne: OptionedPropertyOneOptions,
    optionedPropertyTwo: OptionedPropertyTwoOptions,
    toggledProperty: boolean,
}

export {
    PlayroomTestPatternSpec,
    PlayroomTestPatternSpecAttributes,
    OptionedPropertyOneOptions,
    OptionedPropertyTwoOptions,
}
