# Prompt 05 - Investigate voice interruption / barge-in (ChatGPT Work)

```text
Before making changes, inspect my actual hardware, operating system, available memory, Home Assistant address and existing configuration. Ask me for any details you cannot verify.

I want to interrupt my JARVIS assistant when Piper is speaking by saying "Hey Jarvis", then ask a new question. This must be true voice barge-in, not just a stop button.

Inspect the exact installed version of the community Voice Satellite Card and determine whether it keeps wake-word detection active during TTS. Check microphone capture, browser playback, Assist pipeline states, abort/cancel support, and speaker-to-microphone echo handling.

Don't promise this is supported until demonstrated. First build a reversible manual Stop Speaking control if possible. If a small maintained patch can enable barge-in, backup the original and implement it with explicit resource cleanup, stale-response suppression and echo tests. Do not make unsupported Home Assistant API assumptions.

Test with a real 15-second spoken response, interrupt it using "Hey Jarvis", confirm playback stops, confirm the new request completes, and ensure old audio does not resume. Test repeated interruptions, self-triggering and normal wake-word recovery. Document any limitation and rollback steps.
```
