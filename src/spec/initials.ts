import { StandardSpec, StandardSpecs } from '@musical-patterns/spec'
import { apply } from '@musical-patterns/utilities'
import {
    DIFFERENT,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE,
    PLAYROOM_TEST_INITIAL_BASE_DURATION,
    PLAYROOM_TEST_INITIAL_BASE_FREQUENCY,
    PLAYROOM_TEST_LONG_DURATION_INITIAL_BASE_DURATION,
} from './constants'
import { OptionedSpecOneOption, OptionedSpecTwoOption, PlayroomTestSpec, PlayroomTestSpecs } from './types'

const onlyPatternParticularInitial: PlayroomTestSpecs = {
    [ PlayroomTestSpec.ARRAYED_SPEC ]: PLAYROOM_TEST_INITIAL_ARRAYED_SPEC,
    [ PlayroomTestSpec.ARRAYED_SPEC_WITH_INITIAL_FIELD_VALUE ]:
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE,
    [ PlayroomTestSpec.OPTIONED_SPEC_ONE ]: OptionedSpecOneOption.OPTION_TWO,
    [ PlayroomTestSpec.OPTIONED_SPEC_TWO ]: OptionedSpecTwoOption.OPTION_THE_FIRST,
    [ PlayroomTestSpec.STRINGED_SPEC ]: 'ABC',
    [ PlayroomTestSpec.TOGGLED_SPEC ]: true,
}

const onlyStandardInitial: StandardSpecs = {
    [ StandardSpec.BASE_DURATION ]: PLAYROOM_TEST_INITIAL_BASE_DURATION,
    [ StandardSpec.BASE_FREQUENCY ]: PLAYROOM_TEST_INITIAL_BASE_FREQUENCY,
}

const initials: PlayroomTestSpecs = {
    ...onlyPatternParticularInitial,
    ...onlyStandardInitial,
}

const differentInitial: PlayroomTestSpecs = {
    [ PlayroomTestSpec.ARRAYED_SPEC ]: PLAYROOM_TEST_INITIAL_ARRAYED_SPEC,
    [ PlayroomTestSpec.ARRAYED_SPEC_WITH_INITIAL_FIELD_VALUE ]:
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE,
    [ PlayroomTestSpec.OPTIONED_SPEC_ONE ]: OptionedSpecOneOption.OPTION_ONE,
    [ PlayroomTestSpec.OPTIONED_SPEC_TWO ]: OptionedSpecTwoOption.OPTION_THE_SECOND,
    [ PlayroomTestSpec.STRINGED_SPEC ]: 'ABF',
    [ PlayroomTestSpec.TOGGLED_SPEC ]: false,
    [ StandardSpec.BASE_DURATION ]:
        apply.Translation(PLAYROOM_TEST_INITIAL_BASE_DURATION, DIFFERENT),
    [ StandardSpec.BASE_FREQUENCY ]:
        apply.Translation(PLAYROOM_TEST_INITIAL_BASE_FREQUENCY, DIFFERENT),
}

const longDurationInitial: PlayroomTestSpecs = {
    ...initials,
    [ StandardSpec.BASE_DURATION ]: PLAYROOM_TEST_LONG_DURATION_INITIAL_BASE_DURATION,
}

export {
    onlyPatternParticularInitial,
    onlyStandardInitial,
    initials,
    differentInitial,
    longDurationInitial,
}
