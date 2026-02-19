# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

```bash
# Activate the virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask dev server
python app.py
```

The app runs at `http://localhost:5000` with debug mode enabled.

## Architecture

This is a browser-based hex editor with a minimal Flask backend.

- **`app.py`**: Flask server with a single route (`/`) that renders `templates/index.html`. No server-side hex processing — the backend is purely a static file server.
- **`static/js/main.js`**: All hex editor logic lives here. On every `input` event, `updateEditor()` strips non-hex characters, reformats input as space-separated byte pairs (16 bytes per line), regenerates hex-offset line numbers (`0x00000000`, `0x00000010`, ...), and updates the ASCII panel showing printable characters (0x20–0x7E) or `.` for non-printable bytes.
- **`static/css/style.css`**: Three-column flex layout: line numbers (left, fixed width) | hex textarea (center, grows) | ASCII output (right, fixed width). All three panels scroll in sync via the `scroll` event on the textarea.
- **`templates/index.html`**: Minimal shell — just the three-panel `.editor-container` div and script/style includes.

### Key behavior in `main.js`
- Input is normalized on every keystroke: non-hex chars are stripped, bytes are space-separated, lines wrap at 16 bytes.
- Cursor position is preserved across reformatting by tracking the length delta.
- The ASCII panel and line numbers are read-only `div`s synced to the textarea's scroll position.
