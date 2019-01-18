import {
    PatternSpecValidationFunction,
    PatternSpecValidationResults,
    StandardPatternSpecProperties,
} from '@musical-patterns/pattern'
import { Scalar, to } from '@musical-patterns/utilities'
import { PlayroomTestPatternSpec } from '../types'

const validationFunction: PatternSpecValidationFunction<PlayroomTestPatternSpec> =
    (patternSpec: PlayroomTestPatternSpec): PatternSpecValidationResults<PlayroomTestPatternSpec> => {
        const pitch: Scalar = patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ] || to.Scalar(1)
        const duration: Scalar = patternSpec[ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ] || to.Scalar(1)

        // tslint:disable
        console.log('pitch', pitch)
        console.log('duration', duration)
        console.log('test - if this is true, i should give failure messages', pitch < duration)

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
