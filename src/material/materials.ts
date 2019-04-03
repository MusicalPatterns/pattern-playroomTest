import { Material, Scale } from '@musical-patterns/compiler'
import { materializeEntities, materializeFiniteEntities, materializeRepetendEntities } from './entities'

const material: Material = {
    materializeEntities,
    materializeScales: (): Scale[] => [],
}

const finiteMaterial: Material = {
    materializeEntities: materializeFiniteEntities,
    materializeScales: (): Scale[] => [],
}

const repetendMaterial: Material = {
    materializeEntities: materializeRepetendEntities,
    materializeScales: (): Scale[] => [],
}

export {
    material,
    finiteMaterial,
    repetendMaterial,
}
