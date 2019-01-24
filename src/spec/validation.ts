import {
    SpecValidationFunctionFor,
    SpecValidationResultsFor,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { Frequency, from, isEven, Millisecond, to } from '@musical-patterns/utilities'
import { PlayroomTestSpec } from '../types'

const validationFunction: SpecValidationFunctionFor<PlayroomTestSpec> =
    (spec: PlayroomTestSpec): SpecValidationResultsFor<PlayroomTestSpec> => {
        const pitch: Frequency = spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Frequency(1)
        const duration: Millisecond = spec[ StandardSpecProperties.BASE_DURATION ] || to.Millisecond(1)

        const arrayOfRangedProperty: number[] = spec.arrayOfRangedProperty

        if (from.Frequency(pitch) < from.Millisecond(duration)) {
            return {
                [ StandardSpecProperties.BASE_FREQUENCY ]: 'pitch must be more than duration, obvs',
                [ StandardSpecProperties.BASE_DURATION ]: 'duration must be less than pitch, obvs',
            }
        }

        if (isEven(arrayOfRangedProperty.length)) {
            return {
                arrayOfRangedProperty: 'arrays can only be odd in length, duoy',
            }
        }

        return undefined
    }

export {
    validationFunction,
}
