import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestSpec } from '../types'
import { INITIAL_ARRAY_OF_RANGED_PROPERTY } from './constants'

const presetOne: PlayroomTestSpec = {
    arrayOfRangedProperty: INITIAL_ARRAY_OF_RANGED_PROPERTY,
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_ONE,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
    toggledProperty: false,
}

const presetTwo: PlayroomTestSpec = {
    arrayOfRangedProperty: INITIAL_ARRAY_OF_RANGED_PROPERTY,
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_TWO,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
    toggledProperty: true,
}

export {
    presetOne,
    presetTwo,
}
