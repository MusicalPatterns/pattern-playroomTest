import { ComputeValidations, StandardSpec, Validations } from '@musical-patterns/spec'
import { as, Duration, Hz, isEven, Ms,  Pitch } from '@musical-patterns/utilities'
import { PlayroomTestSpecs } from './types'

const computeValidations: ComputeValidations<PlayroomTestSpecs> =
    (specs: PlayroomTestSpecs): Validations<PlayroomTestSpecs> => {
        const pitch: Pitch = specs[ StandardSpec.BASIS_FREQUENCY ] || as.Point<Hz>(1)
        const duration: Duration = specs[ StandardSpec.BASIS_DURATION ] || as.Delta<Ms>(1)

        const arrayedSpec: number[] = specs.arrayedSpec

        if (as.number(pitch) < as.number(duration)) {
            return {
                [ StandardSpec.BASIS_FREQUENCY ]: 'pitch must be more than duration, obvs',
                [ StandardSpec.BASIS_DURATION ]: 'duration must be less than pitch, obvs',
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
