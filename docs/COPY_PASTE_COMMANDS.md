# Mac Terminal commands (copy and adapt)

**Back up Home Assistant, dashboards and important files first. The creator is not responsible for damage or data loss; proceed at your own risk. AI-generated installation instructions can vary.**

**Examples, not a one-click install.** Check current upstream documentation and replace placeholders with your actual values. Run these commands on the Mac, not in the Home Assistant Terminal. Do not paste a literal `YOUR_MAC_LAN_IP` into a command.

## Confirm the Mac and Ollama

```bash
uname -m
sw_vers
ollama --version
ollama list
```

## Ollama model and API

```bash
ollama pull qwen3:4b-instruct
ollama run qwen3:4b-instruct "Say hello briefly."
curl http://127.0.0.1:11434/api/tags
ollama ps
```

To make the **macOS Ollama app** listen on the trusted LAN, then fully quit and reopen the Ollama app:

```bash
launchctl setenv OLLAMA_HOST "0.0.0.0:11434"
```

Test from another trusted machine at `http://YOUR_MAC_LAN_IP:11434/api/tags`. Do **not** forward port 11434 to the public internet. Verify service startup after a reboot separately.

## MLX Whisper (speech-to-text)

Install `uv` if needed: https://docs.astral.sh/uv/getting-started/installation/

```bash
uv --version
uvx --python 3.12 wyoming-mlx-whisper \
  --uri tcp://0.0.0.0:10300 \
  --model mlx-community/whisper-small-mlx \
  --language en
```

Keep this Terminal session running while testing. Add a Home Assistant **Wyoming Protocol** integration to `YOUR_MAC_LAN_IP`, port `10300`.

## Piper (text-to-speech)

```bash
mkdir -p "$HOME/ha-voice/piper"
uvx --python 3.12 --from wyoming-piper wyoming-piper \
  --voice en_GB-alan-medium \
  --uri tcp://0.0.0.0:10200 \
  --data-dir "$HOME/ha-voice/piper" \
  --download-dir "$HOME/ha-voice/piper"
```

Keep this Terminal session running while testing. Add a **separate Wyoming Protocol** integration to `YOUR_MAC_LAN_IP`, port `10200`. In Home Assistant, choose **British English → Alan (medium)**. This is the voice used in the video; you can choose a different available voice for your setup.

## Diagnostic checks

```bash
pgrep -fl 'wyoming.*whisper|wyoming.*piper'
lsof -nP -iTCP:10300 -sTCP:LISTEN
lsof -nP -iTCP:10200 -sTCP:LISTEN
```

## Optional browser wake-word card

Follow the third-party project's actual installation guide: https://github.com/emme99/voice-satellite-card . Register its Lovelace JavaScript resource and then use the example in `examples/voice-satellite-card.example.yaml`.

Remember: a browser typically needs HTTPS or localhost to access the microphone. The dashboard tab must remain active and the Mac awake. Do not disable browser security globally.

## Optional web search

Home Assistant's **Model Context Protocol Client** requires a compatible network-accessible MCP server and the tool set must be explicitly enabled for the Ollama conversation agent. There is no safe universal installation command: inspect and approve the specific MCP server, permissions, ports, and privacy implications first.
