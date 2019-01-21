import { BuildEntitiesFunction, Entity } from '@musical-patterns/compiler'
import { StandardSpecProperties } from '@musical-patterns/pattern'
import { apply, from, HALF, to } from '@musical-patterns/utilities'
import { PlayroomTestSpec } from '../types'
import { PLAYROOM_TEST_SCALAR } from './constants'

const buildEntities: BuildEntitiesFunction =
    (spec: PlayroomTestSpec): Entity[] => [
        {
            noteSpecs: [ {
                durationSpec: {
                    scalar: apply.Scalar(
                        to.Scalar(from.Millisecond(spec[ StandardSpecProperties.BASE_DURATION ] || to.Millisecond(1))),
                        PLAYROOM_TEST_SCALAR,
                    ),
                },
                pitchSpec: {
                    scalar: apply.Scalar(
                        to.Scalar(from.Frequency(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Frequency(1))),
                        HALF,
                    ),
                },
            } ],
        },
    ]

export {
    buildEntities,
}
