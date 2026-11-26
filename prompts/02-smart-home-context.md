# Prompt 02 - Map my home safely (ChatGPT Work)

Use this in a new ChatGPT Work task with appropriate access to **your own** Home Assistant instance.

```text
Before making changes, inspect my actual hardware, operating system, available memory, Home Assistant address and existing configuration. Ask me for any details you cannot verify.

Inspect my Home Assistant setup BEFORE making changes. I want natural requests such as "what's the temperature in the house?", "what's the heating set to?", and "set the heating to 21 degrees" to resolve to the correct devices.

First, make a read-only inventory of climate entities, current indoor temperature sensors, areas, aliases, and Assist exposure settings. Show their real names and supported capabilities. Do not guess a thermostat or invent entity IDs.

Propose exactly one default "heating" controller and one default "house temperature" reading. If ambiguous, ask me to choose. Only after I approve, apply safe entity aliases and exposure settings. Never expose locks/security devices as a side effect.

Preserve all automations, climate schedules, entity IDs, and dashboards. Do not adjust actual heating without my explicit approval. Test a temperature QUERY first; then, with approval, test setting and restoring a known safe temperature. Show before/after state and give rollback instructions.
```
