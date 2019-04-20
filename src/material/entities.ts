import { Entity, MaterializeEntities } from '@musical-patterns/material'
import { StandardSpec } from '@musical-patterns/spec'
import { as, Hz, insteadOf, Ms, Scalar, use } from '@musical-patterns/utilities'
import { PlayroomTestSpecs } from '../spec'
import { PLAYROOM_TEST_BASE_DURATION_SCALAR, PLAYROOM_TEST_BASE_FREQUENCY_SCALAR } from './constants'

const materializeEntities: MaterializeEntities =
    (specs: PlayroomTestSpecs): Entity[] => {
        const durationScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(use.Scalar(
            specs[ StandardSpec.BASE_DURATION ] || as.Scalar<Ms>(1),
            PLAYROOM_TEST_BASE_DURATION_SCALAR,
        ))

        const pitchScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(use.Scalar(
            specs[ StandardSpec.BASE_FREQUENCY ] || as.Scalar<Hz>(1),
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
        const durationScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(use.Scalar(
            specs[ StandardSpec.BASE_DURATION ] || as.Scalar<Ms>(1),
            PLAYROOM_TEST_BASE_DURATION_SCALAR,
        ))

        const pitchScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(use.Scalar(
            specs[ StandardSpec.BASE_FREQUENCY ] || as.Scalar<Hz>(1),
            PLAYROOM_TEST_BASE_FREQUENCY_SCALAR,
        ))

        return [ {
            sections: [ {
                notes: [ {
                    duration: { scalar: durationScalar },
                    pitch: { scalar: pitchScalar },
                } ],
                repetitions: as.Cardinal(1),
            } ],
        } ]
    }

const materializeRepetendEntities: MaterializeEntities =
    (specs: PlayroomTestSpecs): Entity[] => {
        const durationScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(use.Scalar(
            specs[ StandardSpec.BASE_DURATION ] || as.Scalar<Ms>(1),
            PLAYROOM_TEST_BASE_DURATION_SCALAR,
        ))

        const pitchScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(use.Scalar(
            specs[ StandardSpec.BASE_FREQUENCY ] || as.Scalar<Hz>(1),
            PLAYROOM_TEST_BASE_FREQUENCY_SCALAR,
        ))

        return [ {
            sections: [
                {
                    notes: [ {
                        duration: { scalar: durationScalar },
                        pitch: { scalar: pitchScalar },
                    } ],
                    repetitions: as.Cardinal(1),
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
