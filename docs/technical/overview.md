# Overview

This document presents a global overview of LapisOS. It is
only a simplified representation of the system, but allows
to better understand its architecture and organization.

The referenced documents are mostly technical overviews themselves, which
is why links to their associated specification document are also provided
(marked as `(specs)`)

- [Program executions](#program-executions)
- [Permissions](#permissions)
- [Hardware access](#hardware-access)
- [Hardware drivers](#hardware-drivers)
- [Hardware access performances](#hardware-access-performances)
- [Filesystem access](#filesystem-access)
- [User interface](#user-interface)
- [Users management](#users-management)

## Program executions

LapisOS doesn't allow to run standalone binaries. Every running code
is either:

- Part of the system, as the [kernel (specs, WIP)]() itself or as a
[system service (WIP)]() ([specs (WIP)]()).
- Part of an [application](../concepts/applications.md) ([specs (WIP)]()).

System services are immutable and run for the entire system's lifespan,
while applications can be opened and closed at anytime, and can also run
as multiple instances in parallel.

## Permissions

While the system has every right of the system itself, applications are
restricted and can do almost nothing by default.

Capabilities can be granted through [permissions (WIP)]() ([specs (WIP)]()),
which are designed to allow precise control on what an application can do or
not, while requiring as few user interactions as possible.

## Hardware access

Hardware access is performed through two layers:

- First, the kernel [detects and enumerates (specs, WIP)]() hardware devices
- Then, hardware is accessed through the [hardware service (specs, WIP)]()

## Hardware drivers

Unlike most operating systems, hardware drivers are simple applications with
no specific integration in the kernel.

Any application register itself as a [driver (specs, WIP)]() using the
[hardware service (specs, WIP)]().

The relevant driver for each hardware device is selected using
[various criterias (specs)]().

## Hardware access performances

Hardware access is performed through [syscalls (specs, WIP)]() and
[signals (specs, WIP)](), which use CPU interruptions.

The access process is often:

- A userland process notifies a [system service (WIP)]()
- The system service contacts the [hardware service (specs, WIP)]
- The hardware service contacts the [relevant (specs, WIP)]() [driver (specs, WIP)]()
- The driver performs the requested task by communicating with the hardware through the hardware service
- The action's result is then transmitted to the hardware service, which then transmits it to the system service, which in turns transmits it to the userland process

## Filesystem access

Accessing and managing filesystems and their contents is faster than common hardware
operations thanks to [direct storage access (WIP)]().

The typical process involves communication with the [filesystem service (WIP)]()
which [communicates directly (WIP)]() with storage files.

For filesystems that [aren't natively supported (WIP)](), a [filesystem interface (WIP)]()
is involved to communicate with the [storage driver service (WIP)](), which then communicates
with the [hardware service (WIP)](). This involves a higher latency, but is only limited to
edge cases and remains in an acceptable range of performances.

## User interface

The user interface is entirely managed by [desktop environment (WIP)](), which can be
any [application](../concepts/applications.md) exposing the [relevant service (specs, WIP)]().

## Users management

Each person using a computer can have its own [user account](../concepts/users.md).