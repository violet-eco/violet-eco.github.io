# Processes

Violet's processes are implemented quite similarly to
Linux's processes, with a few new features. There are
several types of processes:

- **System processes**, which are created by the system
- **Application processes**, which aplications run in
- **Worker processes**, in which applications' workers run

System processes are called *low-level processes*, while
application and worker processes are called *userspace processes*.

- [Processes](#processes)
  - [Child processes](#child-processes)
  - [Threading](#threading)

## Child processes

A process can create *child processes*. The child process will
roughly be a 1:1 copy of the parent process, but with its
own unique PID.

To avoid copying the whole memory, copy-on-write is used. This
means that the pages are identical and don't require any allocation
until they are modified.

Child processes automatically inherit their parent's permissions.

When a process exits, all its child processes are immediately killed.

## Threading

A process can create *threads*, which are still part of the process.
Threads allow to run multiple part of a process concurrently.

All threads share the same address space and memory.

To avoid copying the whole memory, copy-on-write is used. This
means that the pages are identical and don't require any allocation
until they are modified.

The stack is local to each thread.

Thread works as a hierarchy, when a thread exits, all its children
are immediately killed.