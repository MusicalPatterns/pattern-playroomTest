import { DiscretePatternSpecProperty, PatternSpec } from '@musical-patterns/pattern'

enum ExampleOptions {
    OPTION_ONE = 'OPTION_ONE',
    OPTION_TWO = 'OPTION_TWO',
}

interface PlayroomTestPatternSpec extends PatternSpec {
    exampleOptions: DiscretePatternSpecProperty,
}

export {
    PlayroomTestPatternSpec,
    ExampleOptions,
}
