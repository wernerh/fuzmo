# Fuzmo product brief

This is the current source of truth for what we are building. It condenses `docs/strategy.md`; where the two disagree, this brief wins, and the grill sessions update it.

## The bet

Half of adults scroll in bed instead of sleeping, and they defend that late-night "me time". Blockers get bypassed and shame backfires. Fuzmo is a small purple creature who sides with the user: he gets drowsy at their chosen **bedtime target**, falls asleep when the phone goes down, and in the morning tells them, affectionately, how the night went. Only the **overrun** past their own target costs him sleep.

- **Who:** Android users aged 25–40, primary persona "the Night Scroller" (works full-time, often a parent, scrolls in bed). Declared 18+ on Google Play.
- **Platform:** Android only. Kotlin, Jetpack Compose, a pure-Kotlin `engine` module.
- **Not:** an app blocker, an all-day screen-time score, a sleep-stage tracker, a game for children.

## The nightly loop (MVP)

1. **Onboarding:** hatch Fuzmo, set a weekday and a weekend bedtime target and wake time (weekend nights are Friday and Saturday), grant Usage Access (with a fallback gn mode if refused), battery-optimisation step for Samsung and Xiaomi.
2. **Wind-down:** one notification 30 minutes before the bedtime target, in Fuzmo's voice.
3. **Tuck-in:** the user puts Fuzmo to bed in the app (optional). It never changes Rest or the streak; it earns the goodnight card and a tucked-in marker on the morning recap.
4. **The night:** phone-down time and wake-ups are read from Android screen on/off and unlock events. In gn mode the user's gn tap sets the phone-down time instead, wake-ups and late scrolling count as zero, and the recap says the night was self-reported.
5. **Morning recap:** Fuzmo's state, phone-down time against target, wake-ups, one roast line, the streak. Recovery is mentioned first.
6. **Share:** recap, goodnight and weekly cards through the system share sheet.

## The night model

- **Night window:** from 3 hours before the bedtime target until the wake time. A night is named after the date of the evening it starts.
- **Phone-down time:** the start of the first screen-off stretch of at least 60 minutes in the night window (see ADR-0006). Peeks and screen-on without an unlock do not break a stretch. No such stretch means an **unrecorded night**: no Rest, and the streak uses a freeze if one is left.
- **Unlocks only:** the screen lighting up without an unlock (alarms, notifications, checking the clock) never counts. Unlocks in the last 30 minutes before the wake time are ignored. On phones with no lock screen, a screen-on with 2+ minutes of any app in the foreground counts as an unlock.
- **Time:** a night uses the time zone in force when its night window starts; all durations are real elapsed minutes, so DST nights are never an hour off.
- **Targets:** the wake time must be 4 to 14 hours after the bedtime target; targets may cross midnight.
- **Late scrolling:** only apps on a fixed list shipped with the app (TikTok, Instagram, YouTube, Facebook, X, Reddit, Snapchat, Threads, Pinterest and a few regional ones) count; no user editing in v1. Package names never leave the device.

`Rest = 100 − min(60, 0.5·O) − min(30, 10·W) − min(10, S/6)`

- `O`: minutes of overrun past the bedtime target (0 if earlier)
- `W`: wake-ups (unlocks with 2+ minutes of use after phone-down; shorter unlocks are peeks and cost nothing)
- `S`: minutes of late scrolling, including during wake-ups

Bands (the five moods): 85–100 Sharp, 70–84 Fine, 50–69 Foggy, 30–49 Cooked, under 30 Fully Rotted. The mood is always shown on top of the current form (Legendary Sleeper can look Foggy). Three Fully Rotted nights in a row make Fuzmo a Zombie; one night at 70+ brings him back. Unrecorded nights neither break nor extend that run. A 14-night streak unlocks the Legendary Sleeper form, which is permanent; Zombie covers it while it lasts.

The streak allows a 10-minute grace after the bedtime target (Rest still counts every minute). Two freezes per Monday-to-Sunday week, used automatically on the first missed or unrecorded nights, not carried over.

Recovery leads the recap when last night's Rest beats the mean of the seven recorded nights before it (at least three needed). Fuzmo never gets sick and never dies.

## MVP scope

In: onboarding, night engine, wind-down, tuck-in, morning recap, streak, Sleepy/Zombie/Legendary forms plus five moods (static art: `design/fuzmo/` SVGs as Android vector drawables; no Lottie), ~150 conditional lines, four card types, home-screen widget, Fuzmo Plus via Google Play Billing (RevenueCat), privacy-safe analytics.

Later: couples pet (one Fuzmo, two phones, needs a backend), Rive animation, per-day targets and shift rotas, extra archetypes, room decoration, rested points.

Design gap: there is no Zombie art in `design/fuzmo/` yet; it is a design task for the owner, not something the factory invents.

Never: app blocking, all-day scores, daytime quests, AccessibilityService, Health Connect, ads, paying to skip progress.

## Analytics

PostHog EU, added only when the app UI is built. Events only: install, onboarding steps, Usage Access granted or refused, tuck-in, recap viewed, share, purchase. Never package names, phone-down times or Rest scores. An analytics off switch in settings. Crash reporting is undecided.

## Build order

Until the owner reports that the concierge test passed (on the grill or spec issue), the factory builds only the walking skeleton and the pure-Kotlin `engine` (night model, Rest bands, streak, freezes, forms), driven by simulator tests of synthetic nights. No app UI or Android permission code before that. Spec 1 is the night engine; roast lines get their own spec later. The engine takes night events and derives every rule itself (ADR-0002).

## Money

Free nightly loop forever. Fuzmo Plus: $3.99/month, $29.99/year or $49.99 lifetime (extra forms and skins, 90-night history, sticker pack, couples pet later). Trial-end reminders and one-tap cancel.

## Validation gates

1. **Concierge test (2 weeks, no code):** 30 Night Scrollers in a WhatsApp group. Pass: 50% still active on days 10–14, 15% pay a Founding Sleeper deposit, 20% share unprompted, phone-down 30 min earlier by week 2.
2. **Open beta:** kill if D7 < 8%, D30 < 4% or download-to-paid < 0.4% in UK/US. Targets: Usage Access granted by 60% of onboarded users, D1 30%, D7 15%, D30 8%.

## Open questions for the grill

Rounds 1 and 2 of the grill (#2) settled the night engine's edges, and round 1 the build order, the phone-down rule, the night window, alarms, the late-scrolling list, weekend targets, gn mode, the tuck-in bonus, moods vs forms, the art format and analytics. Open questions move to the grill issue from here on.
