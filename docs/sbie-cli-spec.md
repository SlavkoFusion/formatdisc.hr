# SBIE CLI Specification (CI‑Ready)

This document defines the canonical, machine‑safe command contract for the SBIE CLI.
It is intended for CI/CD pipelines, enterprise security teams, and audit trails.

## 1. CLI Philosophy

- Deterministic: same input → same output → same ledger entry.
- Non‑destructive by default: no mutation unless `--yes`.
- Machine‑readable: JSON envelopes for pipelines.
- Human‑readable: text mode for terminals.
- Ledger‑verified: every critical action writes to FORMATDISC.

## 2. Global Flags

| Flag | Description |
|------|-------------|
| `--output json|text` | Controls output format (default: text) |
| `--verbose` | Enables detailed logs (file paths, version matches) |
| `--no-ledger` | Skip FORMATDISC write (enterprise override only) |
| `--project <path>` | Override project root (default: cwd) |

## 3. Exit Codes

| Code | Meaning |
|------|---------|
| `0` | Success, no vulnerabilities detected |
| `1` | Vulnerabilities detected |
| `2` | Upgrade required but not applied |
| `3` | Invalid input (missing files, malformed JSON) |
| `4` | Ledger write failure |
| `5` | Internal error |

## 4. Commands

### `sbie scan`

**Purpose:** Determine if the project is affected by any known vulnerabilities.

Usage:

```
sbie scan --project ./app --output json
```

Flags:
- `--project <path>`
- `--output json|text`
- `--verbose`

JSON Output Envelope:

```json
{
  "status": "affected",
  "cves": ["CVE-2025-55182"],
  "currentVersions": { "next": "14.1.3", "react": "18.2.0" },
  "recommended": { "next": "14.2.4" },
  "ledgerTx": "tx_0x8d3a..."
}
```

Ledger Event: `scan_detected`

---

### `sbie upgrade`

**Purpose:** Apply or preview recommended upgrades.

Usage:

```
sbie upgrade --cve CVE-2025-55182 --dry-run
```

Flags:
- `--cve <id>`
- `--dry-run`
- `--yes`

Behavior:
- Without `--yes`, prints the command and asks for confirmation.
- With `--dry-run`, never mutates.
- With `--yes`, applies immediately.

Ledger Event: `upgrade_run`

---

### `sbie audit`

**Purpose:** Retrieve FORMATDISC ledger entries for the current project.

Usage:

```
sbie audit --format table --limit 20
```

Flags:
- `--format json|table`
- `--limit <n>`

Ledger Event: `ledger_query`

---

### `sbie advisory`

**Purpose:** Generate Slack/email/ticket advisory messages.

Usage:

```
sbie advisory --cve CVE-2025-55182 --output text
```

Ledger Event: `advisory_generated`

---

### `sbie demo`

**Purpose:** Run the built‑in CVE demo.

Usage:

```
sbie demo
```

Ledger Event: `demo_run`
