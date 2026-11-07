# All game rules live in a pure-Kotlin engine module

The night model, Rest bands, streaks, forms and line selection live in an `engine` module with no Android imports; the app module only translates each Android usage event 1:1 into a plain-Kotlin night event, and the engine derives everything else (night window, phone-down time, wake-ups, late scrolling, Rest). This keeps the rules testable on the JVM in milliseconds and leaves a Kotlin Multiplatform route open, at the cost of a translation layer between Android events and engine inputs.
