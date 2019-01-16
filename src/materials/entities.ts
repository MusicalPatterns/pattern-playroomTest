import { BuildEntitiesFunction, Entity } from '@musical-patterns/compiler'
import { PatternSpec, StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { apply, HALF } from '@musical-patterns/utilities'
import { PLAYROOM_TEST_SCALAR } from './constants'

const buildEntities: BuildEntitiesFunction =
    (patternSpec: PatternSpec): Entity[] => [
        {
            noteSpecs: [ {
                durationSpec: {
                    scalar: apply.Scalar(
                        patternSpec[ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ],
                        PLAYROOM_TEST_SCALAR,
                    ),
                },
                pitchSpec: {
                    scalar: apply.Scalar(
                        patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ],
                        HALF,
                    ),
                },
            } ],
        },
    ]

export {
    buildEntities,
}
