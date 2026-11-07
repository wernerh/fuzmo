# Fuzmo

A virtual pet whose nights mirror the user's: Fuzmo sleeps when the phone goes down and reports on the night each morning.

## Language

### The character

**Fuzmo**:
The purple pet. Always "he"; never "the monster", "the avatar" or "the user's pet".
_Avoid_: monster, avatar, Blorp

**Bulb**:
The glowing tip of Fuzmo's antenna; its brightness and posture show how rested he is.
_Avoid_: brain bulb, meter, light

**Form**:
A lasting variant of Fuzmo earned by a run of nights: Sleepy (default), Zombie, Legendary Sleeper. Legendary Sleeper is permanent once earned; Zombie is temporary and covers any form while it lasts. The night's mood is always shown on top of the form.
_Avoid_: evolution, skin, archetype

**Mood**:
How Fuzmo looks after one night, set by its Rest band; there are five: Sharp, Fine, Foggy, Cooked and Fully Rotted.
_Avoid_: state, status

### The night

**Bedtime target**:
The time the user chooses to put the phone down; use before it is never counted against them.
_Avoid_: bedtime, goal, curfew

**Wake time**:
The time the user's night ends; the morning recap is prepared from then.

**Weekend night**:
A Friday or Saturday night; it uses the user's weekend bedtime target and wake time instead of the weekday pair.

**Night**:
One evening-to-morning period, named after the date of the evening it starts (Tuesday's night runs into Wednesday morning).

**Night window**:
The part of a night Fuzmo looks at: from three hours before the bedtime target until the wake time, in the time zone in force when it starts.

**Night event**:
One thing the phone reported during a night: screen off, screen on, unlock, app opened or closed, or a gn tap.

**Phone-down time**:
When the first screen-off stretch of at least 60 minutes in the night window began; peeks and the screen lighting up without an unlock do not break a stretch.
_Avoid_: sleep time, lights out

**Overrun**:
Minutes between the bedtime target and the phone-down time, when the phone went down late.
_Avoid_: lateness, debt

**Wake-up**:
An unlock after phone-down with two or more minutes of use, outside the last 30 minutes before the wake time.

**Peek**:
An unlock after phone-down with under two minutes of use; it costs nothing.

**Late scrolling**:
Minutes spent in short-video or social apps after the bedtime target within the night window; only apps on Fuzmo's fixed list count.
_Avoid_: doomscrolling, screen time

**Unrecorded night**:
A night with no phone-down time (no 60-minute screen-off stretch, or no gn tap in gn mode); it has no Rest.

**gn mode**:
The fallback when Usage Access is refused: the user taps the gn button to set the phone-down time, and wake-ups and late scrolling count as zero.

**Self-reported night**:
A night scored in gn mode; the morning recap says so.

**Rest**:
Fuzmo's 0–100 score for one night, computed from overrun, wake-ups and late scrolling.
_Avoid_: brainrot score, sleep score, health

### The loop

**Wind-down**:
The single nudge 30 minutes before the bedtime target.

**Tuck-in**:
The user putting Fuzmo to bed in the app; optional, and it never changes Rest or the streak.

**Morning recap**:
The first screen of the day: Fuzmo's mood, phone-down time against target, wake-ups, one line and the streak.
_Avoid_: report, summary

**Streak**:
Consecutive nights with phone-down time no more than 10 minutes after the bedtime target.

**Recovery**:
Last night's Rest beating the mean Rest of the seven recorded nights before it; needs at least three recorded nights. The morning recap leads with it.

**Freeze**:
A spare that keeps the streak alive through a missed or unrecorded night; two per Monday-to-Sunday week, used automatically and not carried over.

**Roast line**:
The one affectionate, teasing sentence Fuzmo says in the morning recap.
_Avoid_: insult, message

### People and money

**Night Scroller**:
The primary persona: an adult who scrolls in bed to reclaim time for themselves.

**Fuzmo Plus**:
The optional paid tier; it never changes how nights are scored.
_Avoid_: premium, pro
