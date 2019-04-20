import { Entity, MaterializeEntities } from '@musical-patterns/material'
import { StandardSpec } from '@musical-patterns/spec'
import { apply, Hz, insteadOf, Ms, Scalar, to } from '@musical-patterns/utilities'
import { PlayroomTestSpecs } from '../spec'
import { PLAYROOM_TEST_BASE_DURATION_SCALAR, PLAYROOM_TEST_BASE_FREQUENCY_SCALAR } from './constants'

const materializeEntities: MaterializeEntities =
    (specs: PlayroomTestSpecs): Entity[] => {
        const durationScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(apply.Scalar(
            specs[ StandardSpec.BASE_DURATION ] || to.Scalar<Ms>(1),
            PLAYROOM_TEST_BASE_DURATION_SCALAR,
        ))

        const pitchScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(apply.Scalar(
            specs[ StandardSpec.BASE_FREQUENCY ] || to.Scalar<Hz>(1),
            PLAYROOM_TEST_BASE_FREQUENCY_SCALAR,
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
        const durationScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(apply.Scalar(
            specs[ StandardSpec.BASE_DURATION ] || to.Scalar<Ms>(1),
            PLAYROOM_TEST_BASE_DURATION_SCALAR,
        ))

        const pitchScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(apply.Scalar(
            specs[ StandardSpec.BASE_FREQUENCY ] || to.Scalar<Hz>(1),
            PLAYROOM_TEST_BASE_FREQUENCY_SCALAR,
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
        const durationScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(apply.Scalar(
            specs[ StandardSpec.BASE_DURATION ] || to.Scalar<Ms>(1),
            PLAYROOM_TEST_BASE_DURATION_SCALAR,
        ))

        const pitchScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(apply.Scalar(
            specs[ StandardSpec.BASE_FREQUENCY ] || to.Scalar<Hz>(1),
            PLAYROOM_TEST_BASE_FREQUENCY_SCALAR,
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
