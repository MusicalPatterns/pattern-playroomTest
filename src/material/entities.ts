import { Entity, MaterializeEntities } from '@musical-patterns/material'
import { StandardSpec } from '@musical-patterns/spec'
import { as, Duration, Hz, insteadOf, Ms, ofNotAs, Pitch, Point, Scalar, use } from '@musical-patterns/utilities'
import { PlayroomTestSpecs } from '../spec'
import { PLAYROOM_TEST_BASIS_DURATION_SCALAR, PLAYROOM_TEST_BASIS_FREQUENCY_SCALAR } from './constants'

const materializeEntitiesUsingCrazyStrategyCircumventingScales: MaterializeEntities =
    (specs: PlayroomTestSpecs): Entity[] => {
        const durationScalar: Scalar<Duration> = as.Scalar(ofNotAs(use.Scalar(
            specs[ StandardSpec.BASIS_DURATION ] || as.Translation<Point<Ms>>(1),
            PLAYROOM_TEST_BASIS_DURATION_SCALAR,
        )))

        const pitchScalar: Scalar<Pitch> = as.Scalar(ofNotAs(use.Scalar(
            specs[ StandardSpec.BASIS_FREQUENCY ] || as.Point<Hz>(1),
            PLAYROOM_TEST_BASIS_FREQUENCY_SCALAR,
        )))

        return [ {
            sections: [ {
                notes: [ {
                    duration: { scalar: durationScalar },
                    pitch: { scalar: pitchScalar },
                } ],
            } ],
        } ]
    }

const materializeFiniteEntitiesUsingCrazyStrategyCircumventingScales: MaterializeEntities =
    (specs: PlayroomTestSpecs): Entity[] => {
        const durationScalar: Scalar<Duration> = as.Scalar(ofNotAs(use.Scalar(
            specs[ StandardSpec.BASIS_DURATION ] || as.Translation<Point<Ms>>(1),
            PLAYROOM_TEST_BASIS_DURATION_SCALAR,
        )))

        const pitchScalar: Scalar<Pitch> = as.Scalar(ofNotAs(use.Scalar(
            specs[ StandardSpec.BASIS_FREQUENCY ] || as.Point<Hz>(1),
            PLAYROOM_TEST_BASIS_FREQUENCY_SCALAR,
        )))

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

const materializeRepetendEntitiesUsingCrazyStrategyCircumventingScales: MaterializeEntities =
    (specs: PlayroomTestSpecs): Entity[] => {
        const durationScalar: Scalar<Duration> = as.Scalar(ofNotAs(use.Scalar(
            specs[ StandardSpec.BASIS_DURATION ] || as.Translation<Point<Ms>>(1),
            PLAYROOM_TEST_BASIS_DURATION_SCALAR,
        )))

        const pitchScalar: Scalar<Pitch> = as.Scalar(ofNotAs(use.Scalar(
            specs[ StandardSpec.BASIS_FREQUENCY ] || as.Point<Hz>(1),
            PLAYROOM_TEST_BASIS_FREQUENCY_SCALAR,
        )))

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
    materializeEntitiesUsingCrazyStrategyCircumventingScales,
    materializeFiniteEntitiesUsingCrazyStrategyCircumventingScales,
    materializeRepetendEntitiesUsingCrazyStrategyCircumventingScales,
}
