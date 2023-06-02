# Kernel
Violet's kernel is called *Sakura*. 
This is a micro-kernel that tries to be as simple
and understandable as possible by delegating all tasks
such as file system, permission management to services.

**NOTE: This document is in its very early stages. Major changes
might be made to related documents.**

## Documents
- [Kernel-process communication](./kpc.md) - how the processes communicate with kernel
- [System calls](./syscalls.md) - how to communicate with kernel through CPU interruptions