import { Specs, StandardSpec } from '@musical-patterns/spec'
import { Duration, insteadOf, Tone, Translation, use } from '@musical-patterns/utilities'
import {
    DIFFERENT,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC,
    PLAYROOM_TEST_INITIAL_ARRAYED_SPEC_WITH_INITIAL_ELEMENT_VALUE,
    PLAYROOM_TEST_INITIAL_HZ_PHYSICALIZATION,
    PLAYROOM_TEST_INITIAL_MS_PHYSICALIZATION,
    PLAYROOM_TEST_LONG_DURATION_INITIAL_MS_PHYSICALIZATION,
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

const onlyStandardInitial: Specs = {
    [ StandardSpec.MS_PHYSICALIZATION ]: PLAYROOM_TEST_INITIAL_MS_PHYSICALIZATION,
    [ StandardSpec.HZ_PHYSICALIZATION ]: PLAYROOM_TEST_INITIAL_HZ_PHYSICALIZATION,
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
    [ StandardSpec.MS_PHYSICALIZATION ]:
        use.Translation(PLAYROOM_TEST_INITIAL_MS_PHYSICALIZATION, insteadOf<Translation, Duration>(DIFFERENT)),
    [ StandardSpec.HZ_PHYSICALIZATION ]:
        use.Translation(PLAYROOM_TEST_INITIAL_HZ_PHYSICALIZATION, insteadOf<Translation, Tone>(DIFFERENT)),
}

const longDurationInitial: PlayroomTestSpecs = {
    ...initials,
    [ StandardSpec.MS_PHYSICALIZATION ]: PLAYROOM_TEST_LONG_DURATION_INITIAL_MS_PHYSICALIZATION,
}

export {
    onlyPatternParticularInitial,
    onlyStandardInitial,
    initials,
    differentInitial,
    longDurationInitial,
}
