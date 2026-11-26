# JARVIS-style local AI voice assistant: viewer quick start

**Important — back up first.** Back up Home Assistant, dashboards and important files. I am not responsible for damage or data loss; proceed at your own risk. AI-generated prompts and actions can vary in accuracy and outcome. Review all changes before accepting them.

**This is a starter kit, not a one-click Home Assistant configuration.** It is intentionally missing entity IDs, credentials, thermostat automations, and network addresses. Every Home Assistant environment is different.

## What you need

- A computer capable of running your chosen local AI services; the video used an M1 Pro MacBook Pro with 16 GB, but your system may differ.
- A working Home Assistant instance, ideally backed up before changes.
- Ollama on the Mac, with a small tool-capable model.
- Speech recognition and speech generation connected through Wyoming, or comparable providers.
- A compatible microphone/speaker and an Assist pipeline.
- **Voice used in the video:** Piper Alan Medium, British English (`en_GB-alan-medium`). You may select another voice if preferred.

## Stage-by-stage route

1. **Check existing Home Assistant installation**. Make a backup; identify the local HA and Mac IPs.
2. **Install Ollama** natively on macOS and verify `curl http://127.0.0.1:11434/api/tags` works.
3. **Connect Home Assistant to Ollama**. Add a conversation agent; use Device control, not unrestricted admin tools.
4. **Set up Wyoming speech services**. MLX Whisper uses port 10300, Piper uses port 10200 in the example build. Check running processes and connect both services in Devices & services.
5. **Create an Assist pipeline**. Choose MLX Whisper -> Ollama -> Piper; test text before voice.
6. **Expose only approved entities**. Configure names, areas and aliases; test one harmless light.
7. **Optional Mac wake word**. Install and test the third-party browser card; read its instructions and security caveats. A dashboard card is not the same as a guaranteed always-on native voice satellite.
8. **Optional refinements**. Personality, dashboard, live web search via Home Assistant MCP Client, and experimental barge-in.

## Main prompts used in the video (adapted for public use)

1. **[Build the JARVIS command centre](prompts/07-full-dashboard-build.txt)** — full design and Voice Satellite Card instructions.
2. **[Upgrade smart-home context and add internet search](prompts/08-full-home-context-web-search.txt)** — full home mapping and MCP search instructions.

Unlike the creator-specific originals, these ask the AI to identify **your** hardware, Home Assistant instance, entities and services before changing anything.

## Other optional prompts

- `prompts/01-personality.md`: JARVIS persona.
- `prompts/02-smart-home-context.md`: read-only device inventory, safe thermostat mapping.
- `prompts/03-dashboard.md`: safe visual dashboard improvements.
- `prompts/04-internet-search.md`: MCP and search provider investigation.
- `prompts/05-voice-interruption.md`: experimental barge-in investigation.
- `prompts/06-original-setup-review.md`: audit without reinstalling.

## Important boundaries

- Never copy someone else's thermostat IDs or network addresses.
- Do not paste private tokens, credentials, backups or Home Assistant `.storage` files into public repositories.
- Never expose Ollama, Wyoming or MCP service ports directly to the public internet.
- Web search is an online operation even when the language model itself runs locally.
- A community card, wake word and full barge-in are not identical to supported first-party Home Assistant voice hardware.

## Helpful documentation

- https://www.home-assistant.io/integrations/ollama/
- https://www.home-assistant.io/integrations/wyoming/
- https://github.com/basnijholt/wyoming-mlx-whisper
- https://github.com/OHF-Voice/wyoming-piper
- https://www.home-assistant.io/voice_control/aliases/
- https://www.home-assistant.io/voice_control/voice_remote_expose_devices/
- https://github.com/emme99/voice-satellite-card
- https://www.home-assistant.io/integrations/mcp/
