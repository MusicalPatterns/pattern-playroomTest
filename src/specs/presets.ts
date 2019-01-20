import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestSpec } from '../types'

const presetOne: PlayroomTestSpec = {
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_ONE,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
    toggledProperty: false,
}

const presetTwo: PlayroomTestSpec = {
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_TWO,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
    toggledProperty: true,
}

export {
    presetOne,
    presetTwo,
}
