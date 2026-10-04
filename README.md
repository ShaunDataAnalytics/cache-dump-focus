# Cache Dump (mobile static host)

Public URL: `https://cache-dump-focus.vercel.app/`

## iPhone
Safari → open URL → Share → **Add to Home Screen**.

Set **Sync → Vault daemon** to your Mac LAN IP (`http://192.168.x.x:8765`) when on home Wi‑Fi to log into Obsidian.

## Re-export from vault
```bash
python3 "5-AProject-SSC/AI-workspace/cache-dump-mobile-sync/sync_to_static_host.py" \
  -o ~/Documents/cache-dump-focus-deploy
```
