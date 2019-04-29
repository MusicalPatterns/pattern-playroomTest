import { Entity, MaterializeEntities } from '@musical-patterns/material'
import { as } from '@musical-patterns/utilities'
import { computeNotes } from './notes'

const materializeEntitiesUsingCrazyStrategyCircumventingScales: MaterializeEntities =
    (): Entity[] => [
        {
            sections: [
                {
                    notes: computeNotes(),
                },
            ],
        },
    ]

const materializeFiniteEntitiesUsingCrazyStrategyCircumventingScales: MaterializeEntities =
    (): Entity[] => [
        {
            sections: [
                {
                    notes: computeNotes(),
                    repetitions: as.Cardinal(1),
                },
            ],
        },
    ]

const materializeRepetendEntitiesUsingCrazyStrategyCircumventingScales: MaterializeEntities =
    (): Entity[] => [
        {
            sections: [
                {
                    notes: computeNotes(),
                    repetitions: as.Cardinal(1),
                },
                {
                    notes: computeNotes(),
                },
            ],
        },
    ]

export {
    materializeEntitiesUsingCrazyStrategyCircumventingScales,
    materializeFiniteEntitiesUsingCrazyStrategyCircumventingScales,
    materializeRepetendEntitiesUsingCrazyStrategyCircumventingScales,
}
