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

enum PlayroomTestProperty {
    ARRAYED_PROPERTY = 'arrayedProperty',
    ARRAYED_PROPERTY_WITH_INITIAL_FIELD_VALUE = 'arrayedPropertyWithInitialFieldValue',
    OPTIONED_PROPERTY_ONE = 'optionedPropertyOne',
    OPTIONED_PROPERTY_TWO = 'optionedPropertyTwo',
    STRINGED_PROPERTY = 'stringedProperty',
    TOGGLED_PROPERTY = 'toggledProperty',
}

interface PlayroomTestAttributes extends Attributes<PlayroomTestSpec> {
    [ StandardProperties.BASE_DURATION ]: RangedPropertyAttributes,
    [ StandardProperties.BASE_FREQUENCY ]: RangedPropertyAttributes,
    [ PlayroomTestProperty.ARRAYED_PROPERTY ]: RangedPropertyAttributes,
    [ PlayroomTestProperty.ARRAYED_PROPERTY_WITH_INITIAL_FIELD_VALUE ]: RangedPropertyAttributes,
    [ PlayroomTestProperty.OPTIONED_PROPERTY_ONE ]: OptionedPropertyAttributes,
    [ PlayroomTestProperty.OPTIONED_PROPERTY_TWO ]: OptionedPropertyAttributes,
    [ PlayroomTestProperty.STRINGED_PROPERTY ]: StringedPropertyAttributes,
    [ PlayroomTestProperty.TOGGLED_PROPERTY ]: ToggledPropertyAttributes,
}

interface PlayroomTestSpec extends Spec {
    [ PlayroomTestProperty.ARRAYED_PROPERTY ]: number[],
    [ PlayroomTestProperty.ARRAYED_PROPERTY_WITH_INITIAL_FIELD_VALUE ]: number[],
    [ PlayroomTestProperty.OPTIONED_PROPERTY_ONE ]: OptionedPropertyOneOptions,
    [ PlayroomTestProperty.OPTIONED_PROPERTY_TWO ]: OptionedPropertyTwoOptions,
    [ PlayroomTestProperty.STRINGED_PROPERTY ]: string,
    [ PlayroomTestProperty.TOGGLED_PROPERTY ]: boolean,
}

export {
    PlayroomTestSpec,
    PlayroomTestAttributes,
    OptionedPropertyOneOptions,
    OptionedPropertyTwoOptions,
    PlayroomTestProperty,
}
