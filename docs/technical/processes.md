---
slug: processes
sidebar_position: 8
description: Violet's processes are designed with similarities to Linux processes while introducing some additional features.
---

# Processes

Violet's processes are designed with similarities to Linux processes while introducing
some additional features.

## Process Types

There are different types of processes in Violet:

- **System Processes:** These processes are created by the system itself and are known as low-level processes.
- **Application Processes:** These processes are created by applications and run within the Violet environment.
- **Worker Processes:** Worker processes are created by applications to handle specific tasks or operations.

## Child Processes

In Violet, a process has the ability to create child processes. When a child process is
created, it is essentially a 1:1 copy of the parent process, but with its own unique
process ID (PID). To optimize memory usage, copy-on-write (COW) is employed. This means
that the child process initially shares the same memory pages as the parent process, and
memory allocation only occurs when modifications are made.

Child processes inherit the permissions of their parent process. If the parent process
has certain privileges or permissions, they are passed down to the child process.

When a process exits, all of its child processes are immediately terminated as well.

## Threading

Violet supports multithreading, allowing processes to create multiple threads that can
run concurrently within the same address space. Threads enable parallel execution of
different parts of a process, enhancing performance and responsiveness.

All threads within a process share the same address space and memory, which means they
can access and modify the same data. Similar to processes, copy-on-write is employed to
optimize memory usage. Memory pages are shared among threads until modifications are made.

Each thread has its own stack, which provides a local execution context for
thread-specific operations.

Threads form a hierarchy within a process, where a parent thread can create child
threads. When a thread exits, all of its child threads are immediately terminated.
