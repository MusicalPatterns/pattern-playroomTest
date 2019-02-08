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
                    scalar: to.Scalar(from.Ms(apply.Scalar(
                        spec[ StandardSpecProperties.BASE_DURATION ] || to.Ms(1),
                        PLAYROOM_TEST_SCALAR,
                    ))),
                },
                pitchSpec: {
                    scalar: to.Scalar(from.Hz(apply.Scalar(
                        spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Hz(1),
                        ONE_HALF,
                    ))),
                },
            } ],
        },
    ]

export {
    buildEntities,
}
