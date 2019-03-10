import { PropertyType, RangedInputType, standardAttributes, StandardProperty } from '@musical-patterns/pattern'
import { optionedConstraints, rangedConstraints, stringedConstraints } from './constraints'
import { PlayroomTestAttributes, PlayroomTestProperty } from './types'

const attributes: PlayroomTestAttributes = {
    ...standardAttributes,
    [ PlayroomTestProperty.ARRAYED_PROPERTY ]: {
        constraint: rangedConstraints[ PlayroomTestProperty.ARRAYED_PROPERTY ],
        formattedName: 'example array of ranged property',
        hideInput: RangedInputType.RANGE,
        isArrayed: true,
        propertyType: PropertyType.RANGED,
    },
    [ PlayroomTestProperty.ARRAYED_PROPERTY_WITH_INITIAL_FIELD_VALUE ]: {
        arrayedNewFieldInitialValue: 6,
        formattedName: 'example array of ranged property, with an initial value for its elements',
        hideInput: RangedInputType.NUMBER,
        isArrayed: true,
        propertyType: PropertyType.RANGED,
    },
    [ PlayroomTestProperty.OPTIONED_PROPERTY_ONE ]: {
        constraint: optionedConstraints[ PlayroomTestProperty.OPTIONED_PROPERTY_ONE ],
        formattedName: 'example optioned property one',
        propertyType: PropertyType.OPTIONED,
    },
    [ PlayroomTestProperty.OPTIONED_PROPERTY_TWO ]: {
        constraint: optionedConstraints[ PlayroomTestProperty.OPTIONED_PROPERTY_TWO ],
        formattedName: 'example optioned property two',
        propertyType: PropertyType.OPTIONED,
    },
    [ PlayroomTestProperty.STRINGED_PROPERTY ]: {
        constraint: stringedConstraints[ PlayroomTestProperty.STRINGED_PROPERTY ],
        formattedName: `example property that's a string`,
        order: 6,
        propertyType: PropertyType.STRINGED,
    },
    [ PlayroomTestProperty.TOGGLED_PROPERTY ]: {
        formattedName: 'example on/off property',
        order: 1,
        propertyType: PropertyType.TOGGLED,
    },
    [ StandardProperty.BASE_DURATION ]: {
        ...standardAttributes[ StandardProperty.BASE_DURATION ],
        constraint: rangedConstraints[ StandardProperty.BASE_DURATION ],
        formattedName: 'example ranged property one',
        order: 2,
    },
    [ StandardProperty.BASE_FREQUENCY ]: {
        ...standardAttributes[ StandardProperty.BASE_DURATION ],
        description: 'I need to describe something to you and it is super cereal you guys',
        formattedName: 'example ranged property two',
        hideInput: RangedInputType.RANGE,
        order: 3,
    },
}

export {
    attributes,
}
