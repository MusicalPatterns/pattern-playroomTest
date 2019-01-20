import { BuildEntitiesFunction, Entity } from '@musical-patterns/compiler'
import { StandardSpecProperties } from '@musical-patterns/pattern'
import { apply, HALF } from '@musical-patterns/utilities'
import { PlayroomTestSpec } from '../types'
import { PLAYROOM_TEST_SCALAR } from './constants'

const buildEntities: BuildEntitiesFunction =
    (spec: PlayroomTestSpec): Entity[] => [
        {
            noteSpecs: [ {
                durationSpec: {
                    scalar: apply.Scalar(
                        spec[ StandardSpecProperties.PATTERN_DURATION_SCALAR ],
                        PLAYROOM_TEST_SCALAR,
                    ),
                },
                pitchSpec: {
                    scalar: apply.Scalar(
                        spec[ StandardSpecProperties.PATTERN_PITCH_SCALAR ],
                        HALF,
                    ),
                },
            } ],
        },
    ]

export {
    buildEntities,
}
