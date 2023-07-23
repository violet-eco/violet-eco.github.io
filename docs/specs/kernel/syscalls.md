# System calls

System calls (syscalls) are a type of [KPC](./kpc.md).
They allow a process to ask Sakura to perform
a task.

- [System calls](#system-calls)
  - [Overview](#overview)
  - [List of syscalls](#list-of-syscalls)

## Overview

Syscalls are performed using CPU interruptions to notify Sakura.

System calls always return two numbers: a 8-bit errcode and
8 bytes return value. If the errcode is not null, then an
error occured during the syscall. Certain error codes
indicate certain errors:

- `0x00`: cannot read syscall's code or arguments
- `0x01`: syscall does not exists
- `0x02`: at least one argument is invalid (e.g. providing a pointer to the `0` address)
- `0x03`: unmapped memory pointer
- `0x04`: memory permission error
- `0x10` - `0x1F`: invalid argument(s) provided
- `0x20` - `0x2F`: provided arguments are not valid in the current context (in relation with other arguments)
- `0x30` - `0x3F`: provided arguments are not valid (after resources checking)
- `0x40` - `0x4F`: resource access error
- `0x50` - `0x5F`: hardware errors
- `0x60` - `0x6F`: other types of errors

The codes of system calls are also categorized as follows:

- `0x00` - `0x0F`: signal handling
- `0x10` - `0x1F`: process management
- `0x20` - `0x2F`: pipes
- `0x30` - `0x3F`: memory management
- `0x40` - `0x4F`: process management
- `0x50` - `0x5F`: hardware interaction
- **TODO...**

## List of syscalls

**TODO**
