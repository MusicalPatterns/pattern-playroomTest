import {
    Attributes,
    OptionedPropertyAttributes,
    RangedPropertyAttributes,
    Spec,
    StandardProperties,
    StringedPropertyAttributes,
    ToggledPropertyAttributes,
} from '@musical-patterns/pattern'

enum OptionedPropertyOneOptions {
    OPTION_ONE = 'OPTION_ONE',
    OPTION_TWO = 'OPTION_TWO',
    OPTION_THREE = 'OPTION_THREE',
}

enum OptionedPropertyTwoOptions {
    OPTION_THE_FIRST = 'OPTION_THE_FIRST',
    OPTION_THE_SECOND = 'OPTION_THE_SECOND',
}

interface PlayroomTestAttributes extends Attributes<PlayroomTestSpec> {
    [ StandardProperties.BASE_DURATION ]: RangedPropertyAttributes,
    [ StandardProperties.BASE_FREQUENCY ]: RangedPropertyAttributes,
    arrayedProperty: RangedPropertyAttributes,
    arrayedPropertyWithInitialFieldValue: RangedPropertyAttributes,
    optionedPropertyOne: OptionedPropertyAttributes,
    optionedPropertyTwo: OptionedPropertyAttributes,
    stringedProperty: StringedPropertyAttributes,
    toggledProperty: ToggledPropertyAttributes,
}

interface PlayroomTestSpec extends Spec {
    arrayedProperty: number[],
    arrayedPropertyWithInitialFieldValue: number[],
    optionedPropertyOne: OptionedPropertyOneOptions,
    optionedPropertyTwo: OptionedPropertyTwoOptions,
    stringedProperty: string,
    toggledProperty: boolean,
}

export {
    PlayroomTestSpec,
    PlayroomTestAttributes,
    OptionedPropertyOneOptions,
    OptionedPropertyTwoOptions,
}
