import {
    PatternSpecValidationFunctionFor,
    PatternSpecValidationResultsFor,
    StandardPatternSpecProperties,
} from '@musical-patterns/pattern'
import { Scalar, to } from '@musical-patterns/utilities'
import { PlayroomTestPatternSpec } from '../types'

const validationFunction: PatternSpecValidationFunctionFor<PlayroomTestPatternSpec> =
    (patternSpec: PlayroomTestPatternSpec): PatternSpecValidationResultsFor<PlayroomTestPatternSpec> => {
        const pitch: Scalar = patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ] || to.Scalar(1)
        const duration: Scalar = patternSpec[ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ] || to.Scalar(1)

        if (pitch < duration) {
            return {
                [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: 'pitch must be more than duration, obvs',
                [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: 'duration must be less than pitch, obvs',
            }
        }

        return undefined
    }

export {
    validationFunction,
}
