# No AccessibilityService, QUERY_ALL_PACKAGES, location or Health Connect

Fuzmo reads only Usage Access events. AccessibilityService for non-accessibility purposes is routinely rejected by Google Play review, and `QUERY_ALL_PACKAGES`, location and Health Connect each require extra Play declarations the product does not need. App labels come from a `<queries>` launcher intent instead.
