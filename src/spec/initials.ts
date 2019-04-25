import { StandardSpec, StandardSpecs } from '@musical-patterns/spec'
import { Cardinal, Duration, Hz, insteadOf, Ms, Pitch, Scalar, Translation, use } from '@musical-patterns/utilities'
import {
    DIFFERENT,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE,
    PLAYROOM_TEST_INITIAL_BASIS_DURATION,
    PLAYROOM_TEST_INITIAL_BASIS_FREQUENCY,
    PLAYROOM_TEST_LONG_DURATION_INITIAL_BASIS_DURATION,
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
    [ StandardSpec.BASIS_DURATION ]: PLAYROOM_TEST_INITIAL_BASIS_DURATION,
    [ StandardSpec.BASIS_FREQUENCY ]: PLAYROOM_TEST_INITIAL_BASIS_FREQUENCY,
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
    [ StandardSpec.BASIS_DURATION ]:
        use.Translation(PLAYROOM_TEST_INITIAL_BASIS_DURATION, insteadOf<Translation, Duration>(DIFFERENT)),
    [ StandardSpec.BASIS_FREQUENCY ]:
        use.Translation(PLAYROOM_TEST_INITIAL_BASIS_FREQUENCY, insteadOf<Translation, Pitch>(DIFFERENT)),
}

const longDurationInitial: PlayroomTestSpecs = {
    ...initials,
    [ StandardSpec.BASIS_DURATION ]: PLAYROOM_TEST_LONG_DURATION_INITIAL_BASIS_DURATION,
}

export {
    onlyPatternParticularInitial,
    onlyStandardInitial,
    initials,
    differentInitial,
    longDurationInitial,
}
