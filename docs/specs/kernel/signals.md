---
slug: signals
sidebar_position: 4
description: Signals are a type of KPC. They are used by Nova to send information.
---

# Signals

*Signals* are a type of [KPC](./kpc.md).
They are used by Nova to send information.

## Signal Components

When a process is created, Nova associates several components with it to facilitate
signal handling:

- Signal Handler Table (SHT): The SHT is a data structure that stores the handlers for differnet signals.
- Signals Queue: The signals queue serves as a buffer to hold signals sent to a process.
- Readiness Indicator: The readiness indicator is a flag that indicates whether a process is ready to handle signals.

## Signal Handling Process

When Nova provides a signal to a process, it follows a well-defined procedure to
appropriately handle the signal:

1. **Check for Active Handler:** Nova first checks if the process has an active handler running. If a handler is running, the signal is placed in the signals queue.
2. **Check Readiness Indicator:** Nova checks the readiness indicator if the process's handler is not currently running. If the indicator is not set, the signal is queued until the process is ready.
3. **Handler Lookup:** Nova searches up the SHT to find the relevant signal handler. If the handler cannot be found, Nova may opt to ignore the signal or perform a default action, depending on the kind of signal.
4. **Memory Area Validation:** Nova checks if the memory region indicated by the handler's address may be executed by the current process. If not, the signal is changed to the `HANDLER_FAULT` signal, which indicates a signal handling error.
5. **Process Switch and Execution:** Nova shifts the process to its main thread and intructs it to jump to the location of the signal's handler, so initiating the signal handling process. The handler's execution continues until it is finished.
6. **Response Handling:** If the signal is waiting for a response when the handler returns, Nova retrieves the response from a predefined register and takes necessary action according on the response. If no response is expected, Nova just makes the process to return to the address it was at prior to the signal's delivery, thereby continuing the original execution thread.

## List of Signals

**TODO**
