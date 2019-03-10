import { Entity, MaterializeEntities } from '@musical-patterns/compiler'
import { StandardProperty } from '@musical-patterns/pattern'
import { apply, from, ONE_HALF, Scalar, to } from '@musical-patterns/utilities'
import { PlayroomTestSpec } from '../spec'
import { PLAYROOM_TEST_SCALAR } from './constants'

const materializeEntities: MaterializeEntities =
    (spec: PlayroomTestSpec): Entity[] => {
        const durationScalar: Scalar = from.Ms(apply.Scalar(
            spec[ StandardProperty.BASE_DURATION ] || to.Ms(to.Scalar(1)),
            PLAYROOM_TEST_SCALAR,
        ))

        const pitchScalar: Scalar = from.Hz(apply.Scalar(
            spec[ StandardProperty.BASE_FREQUENCY ] || to.Hz(to.Scalar(1)),
            ONE_HALF,
        ))

        return [
            {
                notes: [ {
                    duration: {
                        scalar: durationScalar,
                    },
                    pitch: {
                        scalar: pitchScalar,
                    },
                } ],
            },
        ]
    }

export {
    materializeEntities,
}
