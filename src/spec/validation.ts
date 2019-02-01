import {
    SpecValidationFunctionFor,
    SpecValidationResultsFor,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { Frequency, from, isEven, Milliseconds, to } from '@musical-patterns/utilities'
import { PlayroomTestSpec } from '../types'

const validationFunction: SpecValidationFunctionFor<PlayroomTestSpec> =
    (spec: PlayroomTestSpec): SpecValidationResultsFor<PlayroomTestSpec> => {
        const pitch: Frequency = spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Frequency(1)
        const duration: Milliseconds = spec[ StandardSpecProperties.BASE_DURATION ] || to.Milliseconds(1)

        const arrayedProperty: number[] = spec.arrayedProperty

        if (from.Frequency(pitch) < from.Milliseconds(duration)) {
            return {
                [ StandardSpecProperties.BASE_FREQUENCY ]: 'pitch must be more than duration, obvs',
                [ StandardSpecProperties.BASE_DURATION ]: 'duration must be less than pitch, obvs',
            }
        }

        if (isEven(arrayedProperty.length)) {
            return {
                arrayedProperty: 'arrays can only be odd in length, duoy',
            }
        }

        return undefined
    }

export {
    validationFunction,
}
