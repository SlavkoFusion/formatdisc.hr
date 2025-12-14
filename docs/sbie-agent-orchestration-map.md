# SBIE — Agent Orchestration Map

This document defines the operational doctrine and hard boundaries between LLM intelligence and deterministic code.

## Agent Orchestration Map (Summary)

### LLM Responsibilities (Allowed)
- Bulletin parsing: extract CVEs, version ranges, mitigation notes.
- Summarization: CVE summaries, advisory text.
- Classification: categorize and detect missing data.
- Structured output: must emit schema‑locked JSON using templates.

### LLM Hard Boundaries (Forbidden)
- Must never perform version comparison.
- Must never determine exposure.
- Must never generate upgrade versions.
- Must never write to FORMATDISC.
- Must never execute commands or mutate state.

### Deterministic Code Responsibilities
- Version analysis (semver & exposure evaluation)
- Upgrade planning (patched version, command generation)
- Ledger operations (event creation, signing, verification)
- Project structure analysis and output validation

### Orchestration Flow

```
Raw Bulletin
    ↓ (LLM parses)
Structured Bulletin JSON
    ↓ (code validates)
Exposure Analysis (code)
    ↓
Upgrade Plan (code)
    ↓
Advisory Text (LLM)
    ↓
Ledger Event (code)
```

LLM handles language. Code handles truth. FORMATDISC handles proof.
