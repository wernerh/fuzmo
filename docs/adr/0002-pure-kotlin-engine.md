# All game rules live in a pure-Kotlin engine module

The night model, Rest bands, streaks, forms and line selection live in an `engine` module with no Android imports; the app module adapts Android signals into nightly summaries the engine consumes. This keeps the rules testable on the JVM in milliseconds and leaves a Kotlin Multiplatform route open, at the cost of a translation layer between Android events and engine inputs.
