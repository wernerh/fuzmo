# Phone-down time is the first long screen-off stretch, not the longest

Phone-down time is when the first screen-off stretch of at least 60 minutes in the night window began, not when the longest one began as `docs/strategy.md` proposed. With "longest", one wake-up in the small hours moves the phone-down time past it: a user on time at 23:00 who scrolls for 5 minutes at 03:00 would get a 245-minute overrun and a Cooked night, which breaks "users can check the numbers against memory". Android keeps raw usage events for only a few days and Fuzmo stores only nightly summaries, so past nights cannot be rescored if this rule changes.

## Considered Options

- Longest screen-off stretch (rejected: a single wake-up can move phone-down time hours later)
- First screen-off stretch of any length (rejected: putting the phone down for 10 minutes before picking it up again would count as going to bed)
