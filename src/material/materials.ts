import { Material, materializeStandardScales } from '@musical-patterns/material'
import {
    materializeEntitiesUsingCrazyStrategyCircumventingScales,
    materializeFiniteEntitiesUsingCrazyStrategyCircumventingScales,
    materializeRepetendEntitiesUsingCrazyStrategyCircumventingScales,
} from './entities'

const material: Material = {
    materializeEntities: materializeEntitiesUsingCrazyStrategyCircumventingScales,
    materializeScales: materializeStandardScales,
}

const finiteMaterial: Material = {
    materializeEntities: materializeFiniteEntitiesUsingCrazyStrategyCircumventingScales,
    materializeScales: materializeStandardScales,
}

const repetendMaterial: Material = {
    materializeEntities: materializeRepetendEntitiesUsingCrazyStrategyCircumventingScales,
    materializeScales: materializeStandardScales,
}

export {
    material,
    finiteMaterial,
    repetendMaterial,
}
