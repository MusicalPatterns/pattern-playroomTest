import { Entity, MaterializeEntities } from '@musical-patterns/material'
import { as } from '@musical-patterns/utilities'
import { thunkNotes } from './notes'

const materializeEntitiesUsingCrazyStrategyCircumventingScales: MaterializeEntities =
    (): Entity[] => [
        {
            sections: [
                {
                    notes: thunkNotes(),
                },
            ],
        },
    ]

const materializeFiniteEntitiesUsingCrazyStrategyCircumventingScales: MaterializeEntities =
    (): Entity[] => [
        {
            sections: [
                {
                    notes: thunkNotes(),
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
                    notes: thunkNotes(),
                    repetitions: as.Cardinal(1),
                },
                {
                    notes: thunkNotes(),
                },
            ],
        },
    ]

export {
    materializeEntitiesUsingCrazyStrategyCircumventingScales,
    materializeFiniteEntitiesUsingCrazyStrategyCircumventingScales,
    materializeRepetendEntitiesUsingCrazyStrategyCircumventingScales,
}
