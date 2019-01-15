import { DiscretePatternSpecProperty, StandardPatternSpec } from '@musical-patterns/pattern'

enum ExampleOptions {
    OPTION_ONE = 'OPTION_ONE',
    OPTION_TWO = 'OPTION_TWO',
}

interface PlayroomTestPatternSpec extends StandardPatternSpec {
    exampleOptions: DiscretePatternSpecProperty,
}

export {
    PlayroomTestPatternSpec,
    ExampleOptions,
}
