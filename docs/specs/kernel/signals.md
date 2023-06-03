# Signals
*Signals* are a type of [KPC](./kpc.md).
They are used by Sakura to send information.

- [Signals](#signals)
  - [Overview](#overview)
  - [List of signals](#list-of-signals)

## Overview
When a process is created, Sakura associates it:
- Signals handler table (SHT)
- Signals queue
- Readiness indicator

Each signal has an 8-bit code to represent it.
Also, a 32 bytes data field is added to give additional
information about the signal.

When Sakura sends a signal to a process, it first checks
if a handler is running. If so, it puts the signal in the queue.

Otherwise, it reads the readiness indicator. If `false`, the signal is queued.

If this is not the case, it checks whether the signal has a handler in the SHT.
If the handler is not present, depending on the particular signals, it may be
ignored or a default behavior may be used.

If the handler is found, Sakura checks whether the memory area pointed as
the address of the handler can be run by the current process.
If not, the signal is converted to the HANDLER_FAULT signal.

Sakura then switches the process to its main thread and makes it jump
to the handler's address, then resumes it.

When the handler returns, if the signal is waiting for a response,
Sakura reads it from a specific register and does what needs to be done.
If it is, the kernel simply makes the process jump back to the address it
was to before the signal was emitted, and switch to the original thread.

## List of signals
**TODO**