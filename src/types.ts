import {
    OptionedSpecPropertyAttributes,
    RangedSpecPropertyAttributes,
    StandardSpec,
    StandardSpecAttributes,
    StandardSpecProperties, ToggledSpecPropertyAttributes,
} from '@musical-patterns/pattern'

enum OptionedPropertyOneOptions {
    OPTION_ONE = 'OPTION_ONE',
    OPTION_TWO = 'OPTION_TWO',
}

enum OptionedPropertyTwoOptions {
    OPTION_THE_FIRST = 'OPTION_THE_FIRST',
    OPTION_THE_SECOND = 'OPTION_THE_SECOND',
}

interface PlayroomTestSpecAttributes extends StandardSpecAttributes {
    [ StandardSpecProperties.BASE_DURATION ]: RangedSpecPropertyAttributes,
    [ StandardSpecProperties.BASE_FREQUENCY ]: RangedSpecPropertyAttributes,
    optionedPropertyOne: OptionedSpecPropertyAttributes,
    optionedPropertyTwo: OptionedSpecPropertyAttributes,
    toggledProperty: ToggledSpecPropertyAttributes,
}

interface PlayroomTestSpec extends StandardSpec {
    optionedPropertyOne: OptionedPropertyOneOptions,
    optionedPropertyTwo: OptionedPropertyTwoOptions,
    toggledProperty: boolean,
}

export {
    PlayroomTestSpec,
    PlayroomTestSpecAttributes,
    OptionedPropertyOneOptions,
    OptionedPropertyTwoOptions,
}
