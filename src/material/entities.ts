import { Entity, MaterializeEntities } from '@musical-patterns/material'
import { StandardSpec } from '@musical-patterns/spec'
import { apply, from, ONE_HALF, Scalar, to } from '@musical-patterns/utilities'
import { PlayroomTestSpecs } from '../spec'
import { PLAYROOM_TEST_SCALAR } from './constants'

const materializeEntities: MaterializeEntities =
    (specs: PlayroomTestSpecs): Entity[] => {
        const durationScalar: Scalar = from.Ms(apply.Scalar(
            specs[ StandardSpec.BASE_DURATION ] || to.Ms(to.Scalar(1)),
            PLAYROOM_TEST_SCALAR,
        ))

        const pitchScalar: Scalar = from.Hz(apply.Scalar(
            specs[ StandardSpec.BASE_FREQUENCY ] || to.Hz(to.Scalar(1)),
            ONE_HALF,
        ))

        return [ {
            sections: [ {
                notes: [ {
                    duration: { scalar: durationScalar },
                    pitch: { scalar: pitchScalar },
                } ],
            } ],
        } ]
    }

const materializeFiniteEntities: MaterializeEntities =
    (specs: PlayroomTestSpecs): Entity[] => {
        const durationScalar: Scalar = from.Ms(apply.Scalar(
            specs[ StandardSpec.BASE_DURATION ] || to.Ms(to.Scalar(1)),
            PLAYROOM_TEST_SCALAR,
        ))

        const pitchScalar: Scalar = from.Hz(apply.Scalar(
            specs[ StandardSpec.BASE_FREQUENCY ] || to.Hz(to.Scalar(1)),
            ONE_HALF,
        ))

        return [ {
            sections: [ {
                notes: [ {
                    duration: { scalar: durationScalar },
                    pitch: { scalar: pitchScalar },
                } ],
                repetitions: to.Cardinal(1),
            } ],
        } ]
    }

const materializeRepetendEntities: MaterializeEntities =
    (specs: PlayroomTestSpecs): Entity[] => {
        const durationScalar: Scalar = from.Ms(apply.Scalar(
            specs[ StandardSpec.BASE_DURATION ] || to.Ms(to.Scalar(1)),
            PLAYROOM_TEST_SCALAR,
        ))

        const pitchScalar: Scalar = from.Hz(apply.Scalar(
            specs[ StandardSpec.BASE_FREQUENCY ] || to.Hz(to.Scalar(1)),
            ONE_HALF,
        ))

        return [ {
            sections: [
                {
                    notes: [ {
                        duration: { scalar: durationScalar },
                        pitch: { scalar: pitchScalar },
                    } ],
                    repetitions: to.Cardinal(1),
                },
                {
                    notes: [ {
                        duration: { scalar: durationScalar },
                        pitch: { scalar: pitchScalar },
                    } ],
                },
            ],
        } ]
    }

export {
    materializeEntities,
    materializeFiniteEntities,
    materializeRepetendEntities,
}
