# JARVIS-style local AI Home Assistant guide

Free companion resources for the YouTube build: a local AI assistant using Home Assistant, Ollama, Whisper speech recognition, Piper speech synthesis and an optional browser wake-word card.

**The video build used an Apple M1 Pro MacBook Pro (16 GB RAM), with Piper `en_GB-alan-medium` (Alan Medium, British English).** Your hardware, Home Assistant address, microphone, model and installed services may be different. The viewer prompts inspect your environment before making changes.

## IMPORTANT: BACK UP AND USE AT YOUR OWN RISK

**Back up Home Assistant, its dashboards and all relevant files before following this guide or running any AI prompt.** I am not responsible for damage, configuration changes or data loss. Proceed at your own risk. AI-generated results can vary and may be inaccurate or unsuitable for your Home Assistant installation. Read and approve proposed changes before they happen. Never use my entity IDs, IP addresses or climate settings blindly.

## Start here

- **[Open the website](index.html)** (when published on GitHub Pages)
- **[Read the guide](START_HERE.md)**
- **[Copy Mac setup commands](docs/COPY_PASTE_COMMANDS.md)**
- **[Prompt 1: Build the JARVIS command centre](prompts/07-full-dashboard-build.txt)** — adapted from the creator's original prompt
- **[Prompt 2: Smart-home context + internet search](prompts/08-full-home-context-web-search.txt)** — adapted from the creator's original prompt

These long-form prompts have been **generalised for viewers**: they do not assume an M1 Pro, 16 GB RAM, a specific URL, a particular dashboard, or a particular thermostat. They are not exact, unedited transcripts of the creator's personal configuration.

## Why no ready-to-install dashboard export?

A personal dashboard depends on custom cards, service configuration, room names, real entity IDs and device permissions. Using someone else's YAML without adapting it can break your dashboard or operate the wrong device. The prompts instead tell the assistant to inventory your environment, make a backup, use genuine entities and ask permission for risky changes.

## Publishing

Upload the **contents** of this folder to a **public** GitHub repository, then use Settings → Pages → Deploy from branch → main → /(root). `index.html` is the homepage. Do not upload tokens, passwords, personal Home Assistant backups or `.storage` contents.

This is an independent DIY community resource, not an official Home Assistant installation and not affiliated with Apple, Home Assistant or Marvel.
