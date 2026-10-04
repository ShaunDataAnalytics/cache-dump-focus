# Cache Dump (mobile static host)

Public URL (after Vercel): `https://cache-dump-focus.vercel.app/`

GitHub: https://github.com/ShaunDataAnalytics/cache-dump-focus

## iPhone
Safari → open URL → Share → **Add to Home Screen**.

## One-time Vercel (same as dbt-adept-hub)

1. Open https://vercel.com/new
2. **Import Git Repository** → `ShaunDataAnalytics/cache-dump-focus`
3. Framework Preset: **Other** (static site, no build command)
4. Deploy → copy the `*.vercel.app` URL
5. If URL ≠ `cache-dump-focus.vercel.app`, update `PUBLIC_DEPLOY_URL` in vault `cache_dump_pwa.html` and re-export/push

## Re-export from Obsidian vault

```bash
python3 "/Users/besogoodthattheycantignoreyou/Documents/Co-evolve with Obsidian/5-AProject-SSC/AI-workspace/cache-dump-mobile-sync/sync_to_static_host.py" \
  -o ~/Documents/cache-dump-focus-deploy
cd ~/Documents/cache-dump-focus-deploy && git add -A && git commit -m "Sync from vault" && git push
```

## Vault import (optional, no port)

History tab → Export JSON → Mac:

```bash
python3 ".../cache-dump-mobile-sync/import_cache_dump_exports.py" ~/Downloads/cache-dump-export-*.json
```
