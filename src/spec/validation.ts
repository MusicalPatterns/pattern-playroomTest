import {
    SpecValidationFunctionFor,
    SpecValidationResultsFor,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { from, Hz, isEven, Ms, Scalar, to } from '@musical-patterns/utilities'
import { PlayroomTestSpec } from '../types'

const validationFunction: SpecValidationFunctionFor<PlayroomTestSpec> =
    (spec: PlayroomTestSpec): SpecValidationResultsFor<PlayroomTestSpec> => {
        const pitch: Scalar<Hz> = spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Scalar(to.Hz(1))
        const duration: Scalar<Ms> = spec[ StandardSpecProperties.BASE_DURATION ] || to.Scalar(to.Ms(1))

        const arrayedProperty: number[] = spec.arrayedProperty

        if (from.Hz(pitch) < from.Ms(duration)) {
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
