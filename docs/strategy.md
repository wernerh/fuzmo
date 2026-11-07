# Fuzmo — Product Strategy & MVP Blueprint

Nov 7, 2026 · @Werner

## The honest verdict

Build Fuzmo as a bedtime buddy for adult Android users. Prove it with a 2-week WhatsApp concierge test before writing app code. iOS blockers already sell the all-day "avatar rots while you scroll" mechanic. The open slot is a character-led companion for the 10 p.m.–1 a.m. scroll in bed, on Android: it protects the user's "me time" and roasts only the overrun.

What the research says:

- **The all-day mechanic is taken.** [Brainrot: Screen Time Control](https://appgoblin.info/apps/6744338972) (iOS), Unrot, Rewired, Capy and Untap all decay a mascot as you scroll. They are blockers with mascots, sold through hard paywalls.
- **The gap is a pet, on Android, at night.** Android's screen-time leaders are trackers and blockers, and no pet-led screen-time app has real Android traction. Finch shows pets work on Android (16.5M Android installs), and half of US adults scroll in bed instead of sleeping.
- **The first concept art was generic.** Fuzmo replaces it: a smooth purple gumdrop whose antenna bulb is the meter. See the [character sheet](https://claude.ai/artifact/1jP63BmDo9uJK3ch7EVr4n).
- **Android-only is a strength, but Android pays worse.** Android gives precise screen on/off and unlock events. Median download-to-paid is 0.9% on Android against 2.6% on iOS, so the paywall has to reach more users.
- **Grown-ups only.** Declare 18+ on Play, which avoids the Families policy. The listing must say "not designed for children" because the character is cute.

The six decisions that matter most:

1. **One moment, not all day.** Fuzmo is a bedtime companion. No app blocking, no hourly score.
2. **One character, cheap states first.** Static or Lottie Fuzmo states in v1. Rive animation once people come back.
3. **Kotlin + Jetpack Compose,** with all game rules in a pure-Kotlin `engine` module that has no Android imports.
4. **Local-first.** No backend until the couples pet (a shared Fuzmo) needs one.
5. **Test before you build.** First the concierge test, then a beta with benchmark-based kill criteria (see the market-fit rework below).
6. **An hourly agent factory builds it.** The GitHub repo `wernerh/fuzmo` runs Matt Pocock's skills in order: grill with docs, spec, tickets, implement, retro. You approve at fixed gates.

## Market-fit rework: Fuzmo, the bedtime buddy

Narrow Fuzmo to one painful nightly moment, the 10 p.m.–1 a.m. scroll in bed. Test it with a 2-week WhatsApp concierge before writing any app code. The broad all-day pet scored lowest of four options. The bedtime wedge scored highest, has the cleanest Android signal, and roughly halves the build to about 3 part-time weeks. Where this section conflicts with the MVP scope, roadmap or kill criteria further down, this section wins.

### What the research found

- **The pain is real and nightly.** In an Amerisleep survey of 1,000 US adults, half scroll in bed instead of sleeping, and 51% say it makes them feel in control of their time ([source](https://amerisleep.com/blog/revenge-bedtime-procrastination-survey/)). People want a wind-down, not a ban, and they defend the "me time".
- **Blockers get bypassed and shame backfires.** Users pause Opal or uninstall blockers and relapse within a week. Mild, affectionate guilt ("don't upset the bean") works; seeing "9h 43m" makes people feel sick ([source](https://habitdoom.com/blog/screen-time-reward-apps-reddit)).
- **Adults do play habit-pet games.** About 68% of Pokémon Sleep players are aged 25–44 ([Nintendo Life / Sensor Tower](https://www.nintendolife.com/news/2024/09/pokemon-sleep-has-double-the-number-of-monthly-users-in-japan-than-the-us)), and it has earned roughly $235M ([PocketGamer.biz](https://www.pocketgamer.biz/pokmon-sleep-surpasses-230m-in-three-years/)).
- **Android is open, but pays worse.** Android's screen-time leaders are trackers and blockers (StayFree 20.4M installs, Opal 917K), with no pet-led app of note ([AppGoblin](https://appgoblin.info/apps/com.withopal.opal)). But Android download-to-paid is 0.9% against 2.6% on iOS ([RevenueCat](https://www.revenuecat.com/blog/engineering/android-paywall-gap)).
- **The earlier retention targets were too optimistic.** Average Android retention is 24% on D1, 11% on D7 and 6% on D30 ([Adjust](https://www.adjust.com/blog/what-makes-a-good-retention-rate/)). Health & fitness runs 3–8% at D30.
- **Brainrot's success leaned on an audience Fuzmo doesn't have.** One report puts it at about $400K a month, driven by the founder's 200K+ following plus paid ads ([source](https://www.stork.ai/blog/the-400k-app-that-started-with-phone-addiction)). AppGoblin's estimate is far lower, at $10K+, so treat both with caution.

### Four options compared

Scored 1–5 by the devil's-advocate review (5 = best; for build cost, 5 = cheapest).

| Option | Pain | Frequency | Willing to pay | Virality | Android data | Build cost | Differentiation | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Bedtime buddy (recommended)** | 4 | 5 | 3 | 3 | 5 | 4 | 3 | **27** |
| Couples pet (both partners' phones feed one Fuzmo) | 4 | 4 | 3 | 5 | 3 | 2 | 5 | 26 |
| Parents' pet (phone use in front of the kids) | 4 | 4 | 2 | 2 | 4 | 3 | 4 | 23 |
| Current plan (all-day brainrot pet) | 3 | 4 | 2 | 3 | 4 | 2 | 2 | 20 |

The couples pet is the best growth layer to add once the bedtime loop shows people return: every user brings a second user.

### The reworked product

- **One loop.** In the evening Fuzmo gets drowsy at your chosen bedtime. You tuck him in; he falls asleep when your phone does. In the morning he tells you how the night went.
- **Two honest numbers instead of the hourly score.** Phone-down time and night wake-ups (unlocks after bedtime). Both come from Android's screen on/off and unlock events, which users can verify against their own memory.
- **Roast only the overrun.** Scrolling until your own target is protected "me time". Only the minutes past it cost Fuzmo sleep, so the app sides with the user.
- **Sad, never sick, never dead.** Lead every recap with recovery ("he bounced back"). Three states only at first: Sleepy, Zombie (bulb cracked after late nights) and Legendary sleeper.
- **Streak with freezes.** One evolution, earned by the streak. No feed, clean or play, no daytime quests, no seven archetypes in v1.
- **Honest money.** A Founding Sleeper tier, then a cheap annual plan plus a lifetime option, with trial-end reminders and nothing that buys progress.
- **Keep:** the antenna bulb, the overnight recap and the roast cards. They are now the whole product rather than features of it.

### The 2-week test, before any code

1. **Days 1–3:** make about 10 static Fuzmo states. Post 6 concept videos ("my phone pet judges what time I actually fell asleep"). Link them to a one-page site with a waitlist and a Founding Sleeper deposit, around R49 or $3 for 3 months, through a Paystack link.
2. **Days 4–14:** recruit 30 Night Scrollers into a WhatsApp group. Each night they send "gn Fuzmo" when the phone goes down; WhatsApp timestamps it. Each morning they send a Digital Wellbeing screenshot. You reply with a Fuzmo state, one roast line and their streak. Budget about 40 minutes a day, which is the real cost for you.

| Measure | Pass | Kill |
| --- | --- | --- |
| Recruits from the videos | 30 within 4 days | Every video under 1,000 views |
| Still sending "gn" on days 10–14 | 50% or more | Under 40% on day 10 |
| Earlier phone-down, week 2 vs nights 1–3 | 30 min earlier (median), or 40% say they sleep earlier | No change |
| Share a recap without being asked | 20% or more | n/a |
| Pay the Founding Sleeper deposit | 15% of finishers | Zero payers |
| Landing page to waitlist | 5% of visitors and 300 sign-ups | n/a |

If it passes, build the 3-week app and launch an open beta straight away. Google's 12-tester, 14-day testing rule applies only to personal developer accounts, and yours is an organisation account ([Google](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en-GB)).

### Kill criteria for the beta app

| Metric | Target | Kill below | Benchmark |
| --- | --- | --- | --- |
| Usage Access granted after onboarding | 60% | 40% | No public benchmark; explain the reason before the Settings screen |
| D1 retention | 30% | n/a | Android average 24% |
| D7 retention | 15% | 8% | Android average 11% |
| D30 retention | 8% | 4% | Android average 6%; health & fitness 3–8% |
| Weekly sharers | 5% of weekly actives | n/a | Judgement, not a benchmark |
| Download-to-paid by day 35 (UK/US) | 1% | 0.4% | Android median 0.9% |

## Product vision and positioning

Fuzmo is a little purple creature who goes to bed when you do. He gets drowsy at your bedtime and falls asleep when your phone goes down. In the morning he tells you, affectionately, how the night went. The positioning line is **"Put your phone down. Fuzmo's tired."**

- **Category:** casual game / virtual pet, not Productivity or Health. That avoids competing head-on with blockers and avoids Health Connect review.
- **The job:** help adults keep their late-night "me time" without losing the night to it. Fuzmo is on the user's side, not a warden.
- **Emotional promise:** "I can't keep him up again." Mild, affectionate guilt, never shame, and recovery always comes first.
- **Tone:** dry, self-aware roast for 25–40-year-olds. It never moralises and never uses the word "addiction".
- **What it is not:** an app blocker, a sleep tracker that needs a wearable, or a wellbeing dashboard.

The north-star metric is **nights tucked in per weekly active user**: evenings when the user put Fuzmo to bed in the app. Earlier phone-down time is the outcome we report to users, and the proof that the product works.

## Market and comparable apps

The screen-time-mascot niche is crowded with blockers, and the companion-pet niche is dominated by Finch. The open slot sits between them: a game-first pet with screen time as one input, on Android, with social built in.

| App | Platform | What it is | Traction (third-party estimate) | Lesson for us |
| --- | --- | --- | --- | --- |
| [Brainrot: Screen Time Control](https://apps.apple.com/us/app/brainrot-screen-time-control/id6744338972) | iOS | Blocker; a brain avatar decays as you scroll | \~627K installs, 82.5K MAU, $10K+/mo ([AppGoblin](https://appgoblin.info/apps/6744338972)) | The hook converts, but a hard paywall plus a blocker means guilt-driven churn |
| [Unrot](https://mwm.ai/apps/unrot-earn-your-screentime/6746537171) | iOS | Earn screen time with habits; pink brain mascot | 222K+ users (own claim) | "Earn it back" framing works; reviews complain about pricing transparency |
| [Capy](https://appgoblin.info/apps/com.capivara.app) | Android + iOS | Capybara habit pet that unlocks your apps | Small | Closest concept. It is still a blocker, and its pet is a known animal, not IP |
| [Untap](https://appgoblin.info/apps/com.unrotapp.screencontrol) | Android | Blocker using Usage Access + overlay | \~32K installs, 3.4K MAU | Shows the Usage Access route is shippable on Play |
| [Brainrot (AppCoLabs)](https://appgoblin.info/apps/com.appcolabs.brainrot) | Android | Android clone of the brain app | \~1.9K installs | A copied mechanic with a generic mascot goes nowhere |
| [Finch](https://appgoblin.info/apps/1528595748) | Android + iOS | Self-care pet bird | \~42M installs, 4.95★; \~$1M/mo ([Adapty](https://adapty.io/paywall-library/finch/)) | Gentle, no-punishment care plus cosmetics scales enormously |

Gaps worth attacking:

- **Character IP.** Every competitor uses a brain or a stock animal. None of them gets fan art, stickers or memes.
- **Fun without payment.** Brainrot paywalls everything. A genuinely free pet wins word of mouth among adults tired of subscriptions.
- **Social.** Nobody lets you visit a friend's creature or compare how cooked you both are.
- **Android.** The iOS sandbox pushes iOS apps toward estimates. On Android you can produce precise, funny, per-app reactions.

## Target audience and personas

The launch audience is Android-using adults aged 25–40 who know they're on their phone too much and find that funny rather than shameful. Declare the app 18+ on Play.

| Persona | Who | Why they open it | What makes them share | Risk |
| --- | --- | --- | --- | --- |
| The Night Scroller (primary) | 32, works full-time, maybe a parent; scrolls in bed to claw back "me time" | To see last night's damage without a lecture | The morning roast card | Feels judged if the tone slips into nagging |
| The Remote Worker | 29, works from home, on screens all day | Separating work screen time from scrolling | Before-and-after evolution posts | Scores feel unfair if work apps count; needs workday exemptions |
| The Couple / Group Chat | 27–38, trades memes with a partner or a friends' WhatsApp group | Comparing whose monster is more cooked | Side-by-side comparison cards | Needs friends on the app (Phase 3) |
| The Cosy Gamer | 25–35, plays Stardew or Animal Crossing, has tried Finch | Collecting forms, decorating the room | Rare evolutions | Will want more content than you can make |

The Night Scroller is the design target, which has three consequences. The overnight recap and bedtime night mode become the heart of the product. Work apps are exempt by default during the user's working hours. And the roast lines use dry, self-aware humour rather than Gen Z slang: "we were up until 1:40 doing absolutely nothing" lands better with this audience than meme vocabulary. Children and teenagers are out of scope.

## Character design and personality system

The concept board sells a mood, but it doesn't yet show a character you could own. Simplify the monster to a silhouette you can draw in three strokes, and make one body part carry the brainrot state, so the monster itself replaces the stat bars.

### What the concept art gets right and wrong

- **Right:** strong purple identity, the expression range (Sleepy, Drama Queen and Brainrotted read instantly), the bedroom setting, the speech-bubble roast ("11h on your phone… are you serious?").
- **Generic:** fur, horns, fangs and huge eyes is the stock monster kit, close to a hundred existing mascots and to well-known studio monsters. Nothing in it is ownable.
- **Fails at small sizes:** fur becomes a purple smudge at 48 px, and the silhouette is "a blob with spikes". Test it by filling the shape in solid black: you can't tell it from other fuzzy monsters.
- **Breaks the identity:** the Legendary form (bat wings, horns, gold base) is a different creature. Evolutions should change accessories and posture, not the body plan.
- **Too expensive:** rendered 3D fur needs a 3D animator for every new state. You need dozens of states in month one.
- **UI fights the character:** two stat cards, a level bar, a challenge card and four buttons crowd the monster into the middle third of the screen.

### Recommended direction (name: Fuzmo; trademark-check before launch)

- **Body:** a smooth matte gumdrop. No fur. It squashes and stretches, which gives cheap, funny physical comedy.
- **Signature feature:** one long antenna ending in a small bulb, the "brain bulb". Bright and upright means sharp; drooping and flickering means cooked; scribbled into a knot means overstimulated; snapped off is peak brainrot. The bulb is the brainrot meter, so the home screen needs no bar.
- **Face:** two mismatched eyes (one slightly bigger) and a mouth that can open wider than the body for screaming and yawning.
- **Colour:** one owned purple (pick a specific hex and keep it) with a lilac belly. Moods tint the background, never the body.
- **Style:** flat 2D vector with soft shading, animated in [Rive](https://rive.app/docs/runtimes/android/state-machines). It stays crisp at widget size, and one state machine drives every mood.

### States and personalities

v1 ships three night-driven forms plus the everyday moods. The full archetype set waits until people keep coming back.

| Form | Earned when | Look | Tier |
| --- | --- | --- | --- |
| Sleepy (default) | Normal nights | Drowsy eyes, warm bulb | MVP |
| Zombie | Three nights in a row well past target | Cracked dark bulb, spiral eyes; recovers after one good night | MVP |
| Legendary Sleeper | A 14-night streak at or before target | Gold-flecked bulb and its own idle | MVP |
| Gremlin, Drama Queen, Genius, Unhinged | Behaviour patterns over weeks | As on the character sheet | Later |

Everyday moods on the sheet (Sharp, Fine, Foggy, Cooked) map to how far past target last night ran. About 150 written lines, each with conditions (minutes past target, streak, weekday, wake-ups), give the morning recap its variety.

## Gameplay: the nightly loop

The whole game is two touches a day of under a minute each: tuck Fuzmo in at night, and read his recap in the morning. Everything else supports those two moments.

1. **Set up once.** Hatch Fuzmo, pick a bedtime target (say 23:00) and a wake-up time, then grant Usage Access.
2. **Wind-down (30 min before target).** A gentle notification in Fuzmo's voice ("getting sleepy… you?"), and the widget shows his eyes drooping. One a night at most.
3. **Tuck-in.** Open the app and put him to bed: lights off and a short goodnight animation. Tucking in is optional but earns a bonus and a "goodnight" share card.
4. **The night.** Fuzmo sleeps when the screen goes off. Each unlock after bedtime wakes him; scrolling past target keeps him up and dims his bulb.
5. **Morning recap.** The main hook. Fuzmo's state, phone-down time against target, night wake-ups, streak and one roast line. Recovery leads ("he bounced back") whenever there is any.
6. **Share.** The recap card, with an optional exact time, through the share sheet.

### Progression that doesn't punish

- **Streak:** nights at or before target, plus 2 free freezes a week. Missing a night never resets anything to zero in a way the user sees as loss.
- **Rested points** come from tuck-ins, good nights and improvement on your own 7-night average. They unlock room items, lines and the one evolution (baby to grown Fuzmo).
- **No death, no sickness.** After three bad nights he turns Zombie; one good night brings him back.
- **Me time is protected.** Phone use before your bedtime target never counts against you.

Cut from the original plan: feeding, playing, cleaning, daytime quests, levels 1–20, seven archetypes and the hourly brainrot score.

## The night model

Each morning Fuzmo gets one Rest score from 0 to 100, built from two numbers people can check against memory: when the phone went down, and how often it woke up. It's computed once a night on the device, which replaces the hourly all-day brainrot score.

### Signals Android gives you

| Signal | Android source | Permission | Notes |
| --- | --- | --- | --- |
| Screen on/off | `UsageStatsManager.queryEvents`: SCREEN\_INTERACTIVE / SCREEN\_NON\_INTERACTIVE (API 28+) | `PACKAGE_USAGE_STATS` (Usage Access, granted in Settings) | Raw events are [kept only a few days](https://iut-fbleau.fr/docs/android/reference/android/app/usage/UsageStatsManager.html); a morning worker saves a nightly summary |
| Unlocks | KEYGUARD\_HIDDEN events | Same | A wake-up is an unlock with 2+ minutes of use; shorter ones are "peeks" and cost nothing |
| Late scrolling | ACTIVITY\_RESUMED / PAUSED per package after target | Same, plus a `<queries>` launcher intent for labels | Optional: extra cost only for short-video and social apps |
| Bedtime and wake time | Set by the user | None | Supports shift workers and weekend targets |

No AccessibilityService, no Health Connect, no location and no wearable. On iOS this data can't leave Apple's sandbox ([Apple DTS](https://developer.apple.com/forums/thread/817516)), one more reason to stay Android-only.

### The formula

Phone-down time is when the longest screen-off stretch of the night began, ignoring peeks. *O* = minutes past the bedtime target (0 if earlier), *W* = wake-ups, *S* = minutes of short-video or social apps after target.

```latex
R = 100 - \min(60,\ 0.5\,O) - \min(30,\ 10\,W) - \min(10,\ S/6)
```

Bands: 85–100 Sharp, 70–84 Fine, 50–69 Foggy, 30–49 Cooked, under 30 Fully Rotted. Three Fully Rotted nights in a row turn Fuzmo into a Zombie; one night at 70+ brings him back.

### Calibration and guardrails

- **Simulator tests first.** Replay synthetic nights (on time; 40 min late; 2 a.m. scroll; three wake-ups; alarm only) and assert the bands.
- **Explain every number.** The recap always shows the two raw facts behind the score.
- **Recovery leads.** If tonight beat your 7-night average, say that before anything else.
- **Privacy.** Only nightly summaries are stored, all on the device. Package names never leave the phone.

## Viral growth strategy

The morning recap card is the ad: Fuzmo looking wrecked or proud, one roast line about last night, and an optional phone-down time. The second engine, after launch, is the couples pet, where every user brings a partner.

| Mechanic | How it works | Tier |
| --- | --- | --- |
| Morning recap card | 9:16 card: Fuzmo's state, roast line, optional "phone down 00:47", small watermark and Play link | MVP |
| Goodnight card | Fuzmo tucked in with "lights out at 22:52": a humble-brag | MVP |
| Weekly "Sleep Report" | Sunday card: best and worst night, streak, Fuzmo's form | MVP |
| Zombie and Legendary reveals | A one-off card when Fuzmo changes form | MVP |
| Couples pet | One Fuzmo fed by two phones ("you both scrolled until 1 a.m., so he cried") | Later: the first post-launch feature (needs Supabase) |
| Monster link | A URL that renders a friend's Fuzmo on a static page, no install needed | Later |
| WhatsApp sticker pack | Fuzmo's sleepy faces as stickers | Later |
| Public leaderboards by bedtime | n/a | Unnecessary; it rewards the wrong behaviour |

Target at least 5% of weekly actives sharing a card each week, and tag shared links with the Play Install Referrer to see which cards bring installs.

## Monetisation strategy

The nightly loop is free forever. Fuzmo Plus sells extra Fuzmo, not a better night, and honest billing is part of the product. Charge from the concierge test onwards, to learn who pays.

| Offer | What's in it | Price (USD; Play regional pricing) | Tier |
| --- | --- | --- | --- |
| Founding Sleeper | Concierge-test deposit; becomes 3 months of Plus at launch | R49 / about $3 | Concierge test |
| Fuzmo Plus, annual | Extra forms and skins, room items, 90-night history, sticker pack, couples pet when it ships | $29.99/yr | MVP |
| Fuzmo Plus, monthly | Same | $3.99/mo | MVP |
| Fuzmo Plus, lifetime | Same, forever | $49.99 | MVP |
| Ads, paid streak repair, pay-to-skip | n/a | n/a | Unnecessary; breaks trust |

Why these prices:

- The 2025 global median is $12.99 a month and $38.42 a year ([Adapty](https://adapty.io/state-of-in-app-subscriptions-2026)). Cheap plans retain better (36% vs 23% at one year) but earn less per payer ([RevenueCat](https://revenuecat.com/sosa-26-insights/)).
- In Focus Friend, another character app, the lifetime option outsells the subscriptions ([Fast Company](https://www.fastcompany.com/91388304/focus-friend-app-store-hank-green-bria-sullivan)).
- On Android, freemium download-to-paid is about 0.9% at the median ([RevenueCat](https://www.revenuecat.com/blog/engineering/android-paywall-gap)). Show the paywall at natural moments, such as Legendary unlocks and the weekly report, so more users see it.
- Finch's worst reviews are about surprise charges ([Trustpilot](https://au.trustpilot.com/review/finchcare.com)). Send a trial-end reminder and offer one-tap cancellation.

Rough ceiling: 50,000 monthly actives × 3% paying × about $30 a year ≈ $45,000 a year before Play's fee. The upside beyond that is the character as IP (stickers, plush), and only if fans appear.

## MVP feature specification

The MVP is the nightly loop and nothing else: onboarding, wind-down, tuck-in, night tracking, morning recap, streak, three forms, cards, a widget and Fuzmo Plus. It takes about 3 part-time weeks and is built only if the concierge test passes.

| Feature | Scope in v1 | Tier |
| --- | --- | --- |
| Onboarding | Hatch Fuzmo, set bedtime and wake time, Usage Access explainer with a fallback ("gn button" mode), battery-optimisation step for Samsung and Xiaomi | MVP |
| Night engine | Morning worker plus catch-up on open; phone-down time, wake-ups, Rest score, bands, streak and freezes | MVP |
| Wind-down + tuck-in | One notification 30 min before target; tuck-in screen with goodnight animation | MVP |
| Morning recap | Fuzmo's state, two facts, roast line, streak, recovery-first wording | MVP |
| Forms | Sleepy, Zombie, Legendary Sleeper, plus four moods; static or Lottie art | MVP |
| Line library | About 150 conditional lines | MVP |
| Cards | Recap, goodnight, weekly report, form reveal | MVP |
| Widget | Fuzmo's face and bulb, updated at wind-down, bedtime and morning | MVP |
| Fuzmo Plus | Google Play Billing via RevenueCat; annual, monthly, lifetime; trial-end reminder | MVP |
| Analytics | Event-level, no package names; funnel from install to Usage Access to first recap | MVP |
| Couples pet | Shared Fuzmo across two phones | Later (first post-launch feature) |
| Rive animation | Full state machine | Later |
| Extra archetypes, room decoration | Gremlin, Genius and the rest | Later |
| App blocking, all-day score, daytime quests | n/a | Unnecessary |
| Sleep-stage tracking, wearables, Health Connect | n/a | Unnecessary |

Before the build starts:

- [ ] Concierge test passes its thresholds
- [ ] About 10 Fuzmo states drawn (static)
- [ ] Night-model simulator cases agreed
- [ ] Repo `wernerh/fuzmo` running the factory

## Technical architecture and stack

Build a native Kotlin app with Jetpack Compose and Rive, and put every game rule in a pure-Kotlin `engine` module that never imports Android. Tracking is a separate adapter that feeds the engine hourly summaries. v1 is fully local with no server.

_(Architecture diagram: see the [live strategy doc](https://claude.ai/artifact/KHxbn9w9ZBoSBfjXhkD8n6).)_

If the engine never imports Android, an iOS port means writing a new tracking adapter and UI. The rules, the balance and the tests carry over unchanged.

### Kotlin vs cross-platform

| Option | For | Against | Verdict |
| --- | --- | --- | --- |
| Kotlin + Compose (+ KMP engine later) | First-class UsageStats, WorkManager, Glance widgets and the Rive Android runtime; the engine can be shared with iOS through KMP later | iOS UI must be rewritten in SwiftUI | **Recommended** |
| Flutter + Rive | One UI codebase for an eventual iOS port; good Rive runtime; a `usage_stats` plugin exists | Widgets, tracking and workers are still native Kotlin; two languages from day one | Not needed now that iOS is off the roadmap |
| React Native | Large ecosystem | Weakest fit for animation-heavy, native-signal apps | No |
| Unity (C#) | Your C# skills; strong for 3D | Heavy APK, awkward widgets and background workers, overkill for 2D | No |
| .NET MAUI (C#) | Your C# skills | Weak animation, widget and Rive story; small mobile-game community | No |

### Stack

| Concern | v1 choice | Later |
| --- | --- | --- |
| Character animation | Static or Lottie Fuzmo states | Rive state machine driven by bulb, mood and form |
| Local storage | Room (hourly summaries, monster state, inventory) + DataStore (settings) | Encrypted backup export |
| Background work | A morning WorkManager job plus a catch-up on app open | n/a |
| Widget | Jetpack Glance, rendering pre-baked monster poses as images | Animated widget frames |
| Share cards | Compose rendered to a bitmap, shared through the system sheet | Short video through MediaCodec |
| Analytics / crashes | PostHog (EU) or Firebase Analytics + Crashlytics; never send package names | Funnel and cohort dashboards |
| Notifications | Local only, one a day | FCM for friend events |
| Payments | Google Play Billing through RevenueCat | Subscription |
| Auth | None (device-only) | Anonymous account upgraded to Google sign-in via Credential Manager |
| Backend | None | Supabase (Postgres + auth + edge functions) for friends, gifts and monster links; small and cheap |
| AI-assisted build | Engine and tests specced first, then built with your Claude Code / Laneguard workflow | n/a |

Privacy and security baseline: data minimisation (hourly aggregates only), a clear Data safety form ("app activity collected on device, not shared"), no third-party SDK that receives usage data, and an in-app "delete everything" button. Declare Usage Access as core functionality in the store listing and onboarding.

### Delivery: the hourly agent factory

The private repo `wernerh/fuzmo` builds itself in hourly runs. Each run does exactly one step of Matt Pocock's skill chain ([mattpocock/skills](https://github.com/mattpocock/skills), MIT) and stops at your gates. The skills are vendored into `.claude/skills/`, and `setup-matt-pocock-skills` points them at GitHub Issues.

1. **Grill (`grill-with-docs`).** Reads `docs/` and posts a round of questions as a GitHub issue labelled `owner-input`. Later runs fold your answers into `GLOSSARY.md` and ADRs, and repeat until no design branch is open.
2. **Spec (`to-spec`).** Writes `docs/SPEC.md` and opens a PR. Gate: you merge it.
3. **Tickets (`to-tickets`).** Breaks the spec into tracer-bullet GitHub issues with blocking edges, labelled `ready`.
4. **Implement (`implement`, using `tdd` and `code-review`).** Picks the next unblocked ticket, writes tests first and opens a PR that CI must pass. Gate: you merge. Auto-merge for green, low-risk tickets can come later.
5. **Retro (`retro`).** After every 5 merged PRs, or weekly, writes `docs/retros/<date>.md` and opens a PR with process fixes.

The guardrails:

- One step per run, and a quiet exit when it's waiting on you.
- A `PAUSE` file stops everything.
- Agents never merge to `main` and never touch signing keys, Play Console or billing.
- Anything they're unsure about becomes an `owner-input` issue, not a guess.

## Screen-by-screen design

v1 has five screens, and Fuzmo fills most of each one. The [character sheet](https://claude.ai/artifact/1jP63BmDo9uJK3ch7EVr4n) shows the look; its home-screen mock-up becomes the Morning recap below.

| # | Screen | What's on it | Notes |
| --- | --- | --- | --- |
| 1 | Hatch + bedtime | Egg hatches; pick bedtime and wake time on two big dials | Investment before any permission ask |
| 2 | "Let me see when you sleep" | Fuzmo holding a tiny phone; what is and isn't read; button to Usage Access; "gn button" fallback | Then a one-time battery-optimisation step for Samsung and Xiaomi |
| 3 | Evening / tuck-in | Room dims; Fuzmo yawning; one big "Tuck him in" button; time left to target | Goodnight card offered after tuck-in |
| 4 | Morning recap | Fuzmo's state; phone-down time vs target; wake-ups; roast line; streak; share button | Opens automatically on first launch of the day |
| 5 | Fuzmo's room | Fuzmo idle, streak calendar of the last 14 nights, weekly report, Plus | Paywall entry at Legendary unlock and weekly report |
| — | Settings | Targets, weekend targets, wind-down on/off, exemptions, delete data | Plain list |
| — | Widget | Fuzmo's face and bulb at wind-down, bedtime and morning | Must read at 48 px |

Design principles: dark by default, one big action per screen, numbers always in Fuzmo's voice, and no red warnings.

## Development roadmap

Test by hand before you build. The roadmap has five phases with two kill gates: the concierge test, then the open beta. The agent factory starts on day one, grilling the docs and drafting the spec while the concierge test runs.

_(Roadmap diagram: see the [live strategy doc](https://claude.ai/artifact/KHxbn9w9ZBoSBfjXhkD8n6).)_

Phase 0 costs about 40 minutes a day of your time and a small spend on concept videos. It tests the riskiest assumption, that adults will look after Fuzmo every night, before the factory writes a line of app code.

## Launch and user acquisition

You have no audience, so the monster has to become one: run it as a short-video creator account from week 1, and use paid acquisition only to learn, never to grow.

1. **Monster-as-creator (weeks 1–12, \~30 min a day).** Post one short video a day on Instagram Reels, TikTok and Shorts. The 25–40 crowd is heavy on Reels. Formats: "my monster the morning after I scrolled until 1 a.m.", "my monster on a Monday vs a Saturday", evolution reveals, a weekly cooked-o-meter. The Rive file lets you produce these from the same assets.
2. **Waitlist and Play pre-registration.** One landing page with the monster, a hatch animation and an email or pre-register button. It is the Phase 0 gate metric.
3. **Seed adult communities.** r/nosurf, r/digitalminimalism, r/productivity, parenting and remote-work groups, and your own WhatsApp groups. Lead with the funny roast cards, not "I built an app".
4. **Build in public on LinkedIn and Threads.** A Head of Engineering building a brainrot pet with AI coding agents is a story people follow. It also recruits testers in exactly the target age group.
5. **Newsletters and micro-creators.** Digital-wellbeing, productivity and cosy-gaming newsletters and small creators, paid per post or in early access. Measure installs per placement with the Install Referrer.
6. **Staged geography.** Run the closed test with testers in South Africa (your network, cheaper installs), then open to the UK, US, Canada and Australia. Those are Finch's biggest markets.
7. **ASO.** Title "Fuzmo: Brainrot Pet" (or the final name), with keywords such as virtual pet, screen time pet, phone habit tracker and digital detox. The screenshots are the monster's faces, not UI.
8. **Launch moment.** January ("Rot-free January", in the spirit of Dry January), when adults set phone resolutions and are most open to a funny way of keeping them.

The acquisition goal for the closed test is learning, not volume. Which card format gets shared, which video format brings installs, and what install-to-grant rate you get.

## Risks and validation answers

The thing most likely to kill this is week-3 boredom: people share once, the joke wears off, and the pet doesn't hold them on its own. Content cadence and the morning reveal matter more than any feature.

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| Novelty churn after the first share | High | Fatal | Morning reveal, weekly archetype changes, new lines every week, collection log; kill gate at D7 |
| Users refuse Usage Access (it looks scary) | Medium | High | Hatch first, a funny honest explainer, a working no-permission mode, re-ask after investment |
| Character fails to stand out | Medium | Fatal | Phase 0 video test before any code; silhouette test; one owned feature (the bulb) |
| A funded competitor (Brainrot, Finch) adds a pet layer | Medium | High | Move fast on Android and social; character IP is the moat, not mechanics |
| Play policy issues (sensitive permission, unintentional appeal to children) | Medium | High | 18+ declaration with a "not designed for children" listing, no AccessibilityService, no open chat, accurate Data safety form, no `QUERY_ALL_PACKAGES` |
| Shame backfires (users feel judged and uninstall) | Medium | High | Affectionate roasts only, relative scoring, no red warnings, opt-in hours on cards |
| Wellbeing harm in vulnerable users | Low | High | No streak loss, no 2 a.m. notifications, never insults the user's body or self-worth, link to support resources in Settings |
| Inaccurate data (OEM battery killers, missing categories) | Medium | Medium | Catch-up on open, curated category map, user re-tagging, test on Samsung and Xiaomi |
| Your time: a Head of Engineering job plus family | High | High | Contract the Rive animation, keep the scope here, use your AI coding workflow for the engine and tests |
| Trademark / name collision | Medium | Medium | Search EUIPO, USPTO and CIPC before spending on branding |

### Straight answers to the brief's questions

- **Genuinely differentiated?** Not on mechanics. Only on character and game feel, if you execute them, and on Android plus social, which nobody does well.
- **Viral enough?** The roast card format is proven shareable (the brain apps grew on it). Virality here means each card brings a few installs, not explosive growth. Plan for steady creator-led growth.
- **Would adults use it?** Yes. Adults aged 25–40 are Finch's core users and pay more readily. The risk is that "brainrot" humour reads as a Gen Z joke, so the lines need to be written for this audience.
- **Emotional attachment?** Only if the monster has a voice. Writing (the line library) does more for attachment than rendering quality. Finch proves gentle care plus personality is enough.
- **What makes people share?** Self-deprecating comparison and rare moments: "mine evolved into a Zombie", "97% of brain cells gone".
- **What brings them back after 30 days?** The weekly archetype twist, the collection log, friends' monsters (Phase 3) and seasonal events. Without friends, assume D30 under 10%.
- **Biggest technical obstacles?** OEM background restrictions, category mapping, iOS sandboxing for any port, and producing enough animation states cheaply.
- **Strongest monetisation?** Cosmetics and a light subscription in the short term. In the long term, the character as IP (stickers, licensing, merch), which only exists if Phase 0 shows people love it.

## Sources

Third-party traction figures are estimates from app-intelligence sites, not audited numbers.

- [Brainrot: Screen Time Control — App Store](https://apps.apple.com/us/app/brainrot-screen-time-control/id6744338972)
- [Brainrot: Screen Time Control — AppGoblin estimates](https://appgoblin.info/apps/6744338972)
- [Unrot: Earn your screentime](https://mwm.ai/apps/unrot-earn-your-screentime/6746537171)
- [Capy: Earn Back Screen Time — AppGoblin](https://appgoblin.info/apps/com.capivara.app)
- [Untap: Screen Time Control — AppGoblin](https://appgoblin.info/apps/com.unrotapp.screencontrol)
- [Brainrot (AppCoLabs, Android) — AppGoblin](https://appgoblin.info/apps/com.appcolabs.brainrot)
- [Finch: Self-Care Pet — AppGoblin](https://appgoblin.info/apps/1528595748)
- [Finch paywall and revenue estimate — Adapty](https://adapty.io/paywall-library/finch/)
- [UsageStatsManager reference (event retention and truncation)](https://iut-fbleau.fr/docs/android/reference/android/app/usage/UsageStatsManager.html)
- [Publish a Health Connect app on Google Play](https://developer.android.com/health-and-fitness/health-connect/publish)
- [Removing AccessibilityService to pass Play review](https://dev.to/lui61140/why-i-removed-accessibilityservice-from-my-android-app-and-finally-got-into-play-store-4i52)
- [Apple DTS: Screen Time data is sandboxed in DeviceActivityReport](https://developer.apple.com/forums/thread/817516)
- [Google Play: target audience and content settings](https://support.google.com/googleplay/android-developer/answer/9867159?hl=en-GB)
- [Rive Android runtime: state machines](https://rive.app/docs/runtimes/android/state-machines)
- [Revenge bedtime procrastination survey — Amerisleep](https://amerisleep.com/blog/revenge-bedtime-procrastination-survey/)
- [Retention benchmarks by platform — Adjust](https://www.adjust.com/blog/what-makes-a-good-retention-rate/)
- [The Android paywall gap — RevenueCat](https://www.revenuecat.com/blog/engineering/android-paywall-gap)
- [State of Subscription Apps 2026 insights — RevenueCat](https://revenuecat.com/sosa-26-insights/)
- [State of In-App Subscriptions 2026 — Adapty](https://adapty.io/state-of-in-app-subscriptions-2026)
- [Pokémon Sleep player ages — Nintendo Life](https://www.nintendolife.com/news/2024/09/pokemon-sleep-has-double-the-number-of-monthly-users-in-japan-than-the-us)
- [Pokémon Sleep revenue — PocketGamer.biz](https://www.pocketgamer.biz/pokmon-sleep-surpasses-230m-in-three-years/)
- [Focus Friend launch — Fast Company](https://www.fastcompany.com/91388304/focus-friend-app-store-hank-green-bria-sullivan)
- [Screen-time reward apps on Reddit — HabitDoom](https://habitdoom.com/blog/screen-time-reward-apps-reddit)
- [Brainrot's growth story — Stork](https://www.stork.ai/blog/the-400k-app-that-started-with-phone-addiction)
- [Google Play testing requirements for new personal accounts](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en-GB)
- [Matt Pocock's skills](https://github.com/mattpocock/skills)
