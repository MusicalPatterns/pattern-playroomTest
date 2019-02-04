import { BuildEntitiesFunction, Entity } from '@musical-patterns/compiler'
import { StandardSpecProperties } from '@musical-patterns/pattern'
import { apply, from, ONE_HALF, to } from '@musical-patterns/utilities'
import { PlayroomTestSpec } from '../types'
import { PLAYROOM_TEST_SCALAR } from './constants'

const buildEntities: BuildEntitiesFunction =
    (spec: PlayroomTestSpec): Entity[] => [
        {
            noteSpecs: [ {
                durationSpec: {
                    scalar: apply.Scalar(
                        to.Scalar(
                            from.Milliseconds(spec[ StandardSpecProperties.BASE_DURATION ] || to.Milliseconds(1)),
                        ),
                        PLAYROOM_TEST_SCALAR,
                    ),
                },
                pitchSpec: {
                    scalar: apply.Scalar(
                        to.Scalar(from.Frequency(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Frequency(1))),
                        ONE_HALF,
                    ),
                },
            } ],
        },
    ]

export {
    buildEntities,
}
