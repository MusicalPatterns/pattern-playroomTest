import { OptionedPropertyOneOptions, OptionedPropertyTwoOptions, PlayroomTestPatternSpec } from '../types'

const presetOne: PlayroomTestPatternSpec = {
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_ONE,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_FIRST,
}

const presetTwo: PlayroomTestPatternSpec = {
    optionedPropertyOne: OptionedPropertyOneOptions.OPTION_TWO,
    optionedPropertyTwo: OptionedPropertyTwoOptions.OPTION_THE_SECOND,
}

export {
    presetOne,
    presetTwo,
}
