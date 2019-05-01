import { ComputeValidations, StandardSpec, Validations } from '@musical-patterns/spec'
import { as, Duration, isEven, musicalAs, Tone } from '@musical-patterns/utilities'
import { PlayroomTestSpecs } from './types'

const computeValidations: ComputeValidations<PlayroomTestSpecs> =
    (specs: PlayroomTestSpecs): Validations<PlayroomTestSpecs> => {
        const tone: Tone = specs[ StandardSpec.HZ_PHYSICALIZATION ] || musicalAs.Tone(1)
        const value: Duration = specs[ StandardSpec.MS_PHYSICALIZATION ] || musicalAs.Duration(1)

        const arrayedSpec: number[] = specs.arrayedSpec

        if (as.number(tone) < as.number(value)) {
            return {
                [ StandardSpec.HZ_PHYSICALIZATION ]: 'pitch must be more than value, obvs',
                [ StandardSpec.MS_PHYSICALIZATION ]: 'value must be less than pitch, obvs',
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
