import { StandardProperties, ValidationFunction, ValidationResults } from '@musical-patterns/pattern'
import { from, Hz, isEven, Ms, Scalar, to } from '@musical-patterns/utilities'
import { PlayroomTestSpec } from './types'

const validationFunction: ValidationFunction<PlayroomTestSpec> =
    (spec: PlayroomTestSpec): ValidationResults<PlayroomTestSpec> => {
        const pitch: Scalar<Hz> = spec[ StandardProperties.BASE_FREQUENCY ] || to.Scalar(to.Hz(1))
        const duration: Scalar<Ms> = spec[ StandardProperties.BASE_DURATION ] || to.Scalar(to.Ms(1))

        const arrayedProperty: number[] = spec.arrayedProperty

        if (from.Hz(pitch) < from.Ms(duration)) {
            return {
                [ StandardProperties.BASE_FREQUENCY ]: 'pitch must be more than duration, obvs',
                [ StandardProperties.BASE_DURATION ]: 'duration must be less than pitch, obvs',
            }
        }

        if (isEven(arrayedProperty.length)) {
            return {
                arrayedProperty: arrayedProperty.map(() => 'arrays can only be odd in length, duoy'),
            }
        }

        return undefined
    }

export {
    validationFunction,
}
