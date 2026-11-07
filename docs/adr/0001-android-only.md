# Android only, no iOS port planned

Fuzmo ships on Android only. The product depends on reading screen on/off and unlock events, which Android exposes through Usage Access. On iOS, Screen Time data cannot leave Apple's sandboxed report extension, so an iOS version could only work from coarse threshold events and would lose the precise morning recap. iOS is reconsidered only if the Android beta passes its kill gates.
