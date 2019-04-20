import { ComputeValidations, StandardSpec, Validations } from '@musical-patterns/spec'
import { as, Hz, isEven, Ms, notAs, Scalar } from '@musical-patterns/utilities'
import { PlayroomTestSpecs } from './types'

const computeValidations: ComputeValidations<PlayroomTestSpecs> =
    (specs: PlayroomTestSpecs): Validations<PlayroomTestSpecs> => {
        const pitch: Scalar<Hz> = specs[ StandardSpec.BASE_FREQUENCY ] || as.Scalar<Hz>(1)
        const duration: Scalar<Ms> = specs[ StandardSpec.BASE_DURATION ] || as.Scalar<Ms>(1)

        const arrayedSpec: number[] = specs.arrayedSpec

        if (notAs.Scalar<Hz>(pitch) < notAs.Scalar<Ms>(duration)) {
            return {
                [ StandardSpec.BASE_FREQUENCY ]: 'pitch must be more than duration, obvs',
                [ StandardSpec.BASE_DURATION ]: 'duration must be less than pitch, obvs',
            }
        }

        if (isEven(arrayedSpec.length)) {
            return {
                arrayedSpec: arrayedSpec.map(() => 'arrays can only be odd in length, duoy'),
            }
        }

        return undefined
    }

export {
    computeValidations,
}
