#!/usr/bin/env bash
# Regenerates static/Guido-Luz-Percu-Resume.pdf from static/resume-pdf.html,
# which renders static/resume.json. Run it after editing resume.json.
#
# Requires python3 and Chromium (set CHROME to use another binary).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STATIC="$ROOT/static"
OUT="$STATIC/Guido-Luz-Percu-Resume.pdf"
CHROME="${CHROME:-$(command -v chromium || command -v chromium-browser || command -v google-chrome)}"
PORT="${PORT:-8765}"

python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$STATIC" >/dev/null 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID"' EXIT
sleep 1

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=10000 \
    --print-to-pdf="$OUT" \
    "http://127.0.0.1:$PORT/resume-pdf.html" 2>/dev/null

echo "Wrote $OUT ($(pdfinfo "$OUT" 2>/dev/null | awk '/^Pages:/ {print $2}') pages)"
