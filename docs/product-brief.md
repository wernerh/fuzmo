# Fuzmo product brief

This is the current source of truth for what we are building. It condenses `docs/strategy.md`; where the two disagree, this brief wins, and the grill sessions update it.

## The bet

Half of adults scroll in bed instead of sleeping, and they defend that late-night "me time". Blockers get bypassed and shame backfires. Fuzmo is a small purple creature who sides with the user: he gets drowsy at their chosen **bedtime target**, falls asleep when the phone goes down, and in the morning tells them, affectionately, how the night went. Only the **overrun** past their own target costs him sleep.

- **Who:** Android users aged 25–40, primary persona "the Night Scroller" (works full-time, often a parent, scrolls in bed). Declared 18+ on Google Play.
- **Platform:** Android only. Kotlin, Jetpack Compose, a pure-Kotlin `engine` module.
- **Not:** an app blocker, an all-day screen-time score, a sleep-stage tracker, a game for children.

## The nightly loop (MVP)

1. **Onboarding:** hatch Fuzmo, set bedtime target and wake time, grant Usage Access (with a fallback "gn button" mode if refused), battery-optimisation step for Samsung and Xiaomi.
2. **Wind-down:** one notification 30 minutes before the bedtime target, in Fuzmo's voice.
3. **Tuck-in:** the user puts Fuzmo to bed in the app (optional, earns a bonus).
4. **The night:** phone-down time and wake-ups are read from Android screen on/off and unlock events.
5. **Morning recap:** Fuzmo's state, phone-down time against target, wake-ups, one roast line, the streak. Recovery is mentioned first.
6. **Share:** recap, goodnight and weekly cards through the system share sheet.

## The night model

`Rest = 100 − min(60, 0.5·O) − min(30, 10·W) − min(10, S/6)`

- `O`: minutes of overrun past the bedtime target (0 if earlier)
- `W`: wake-ups (unlocks with 2+ minutes of use after phone-down; shorter unlocks are peeks and cost nothing)
- `S`: minutes of short-video or social apps after the target

Bands: 85–100 Sharp, 70–84 Fine, 50–69 Foggy, 30–49 Cooked, under 30 Fully Rotted. Three Fully Rotted nights in a row make Fuzmo a Zombie; one night at 70+ brings him back. A 14-night streak at or before target unlocks the Legendary Sleeper form. Streaks have 2 free freezes a week. Fuzmo never gets sick and never dies.

## MVP scope

In: onboarding, night engine, wind-down, tuck-in, morning recap, streak, Sleepy/Zombie/Legendary forms plus four moods (static or Lottie art from `design/fuzmo/`), ~150 conditional lines, four card types, home-screen widget, Fuzmo Plus via Google Play Billing (RevenueCat), privacy-safe analytics.

Later: couples pet (one Fuzmo, two phones, needs a backend), Rive animation, extra archetypes, room decoration.

Never: app blocking, all-day scores, daytime quests, AccessibilityService, Health Connect, ads, paying to skip progress.

## Money

Free nightly loop forever. Fuzmo Plus: $3.99/month, $29.99/year or $49.99 lifetime (extra forms and skins, 90-night history, sticker pack, couples pet later). Trial-end reminders and one-tap cancel.

## Validation gates

1. **Concierge test (2 weeks, no code):** 30 Night Scrollers in a WhatsApp group. Pass: 50% still active on days 10–14, 15% pay a Founding Sleeper deposit, 20% share unprompted, phone-down 30 min earlier by week 2.
2. **Open beta:** kill if D7 < 8%, D30 < 4% or download-to-paid < 0.4% in UK/US. Targets: Usage Access granted by 60% of onboarded users, D1 30%, D7 15%, D30 8%.

## Open questions for the grill

- Should the factory build UI before the concierge test passes, or only the `engine`?
- Exact phone-down rule: how long must the screen stay off to count, and how are alarms handled?
- Weekend and shift-work targets in v1, or later?
- Static PNG/SVG states vs Lottie for v1?
- Which analytics tool, and what exactly is logged?
