import { Material, Scale } from '@musical-patterns/material'
import {
    materializeEntitiesUsingCrazyStrategyCircumventingScales,
    materializeFiniteEntitiesUsingCrazyStrategyCircumventingScales,
    materializeRepetendEntitiesUsingCrazyStrategyCircumventingScales,
} from './entities'

const material: Material = {
    materializeEntities: materializeEntitiesUsingCrazyStrategyCircumventingScales,
    materializeScales: (): Scale[] => [],
}

const finiteMaterial: Material = {
    materializeEntities: materializeFiniteEntitiesUsingCrazyStrategyCircumventingScales,
    materializeScales: (): Scale[] => [],
}

const repetendMaterial: Material = {
    materializeEntities: materializeRepetendEntitiesUsingCrazyStrategyCircumventingScales,
    materializeScales: (): Scale[] => [],
}

export {
    material,
    finiteMaterial,
    repetendMaterial,
}
