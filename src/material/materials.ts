import { Material, Scale } from '@musical-patterns/compiler'
import { materializeEntities } from './entities'

const material: Material = {
    materializeEntities,
    materializeScales: (): Scale[] => [],
}

export {
    material,
}
