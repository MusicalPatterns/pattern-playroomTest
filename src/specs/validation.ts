import {
    SpecValidationFunctionFor,
    SpecValidationResultsFor,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { Scalar, to } from '@musical-patterns/utilities'
import { PlayroomTestSpec } from '../types'

const validationFunction: SpecValidationFunctionFor<PlayroomTestSpec> =
    (spec: PlayroomTestSpec): SpecValidationResultsFor<PlayroomTestSpec> => {
        const pitch: Scalar = spec[ StandardSpecProperties.PATTERN_PITCH_SCALAR ] || to.Scalar(1)
        const duration: Scalar = spec[ StandardSpecProperties.PATTERN_DURATION_SCALAR ] || to.Scalar(1)

        if (pitch < duration) {
            return {
                [ StandardSpecProperties.PATTERN_PITCH_SCALAR ]: 'pitch must be more than duration, obvs',
                [ StandardSpecProperties.PATTERN_DURATION_SCALAR ]: 'duration must be less than pitch, obvs',
            }
        }

        return undefined
    }

export {
    validationFunction,
}
