# Technical

This document provides an overview of Violet.

- [Technical](#technical)
  - [Program executions](#program-executions)
  - [Permissions](#permissions)
  - [Hardware access](#hardware-access)
  - [Hardware drivers](#hardware-drivers)
    - [Hardware access performances](#hardware-access-performances)
  - [Filesystem access](#filesystem-access)
  - [User interface](#user-interface)

## Program executions

Violet does not allow to run standalone binaries.
Every running code is either:
- Part of the system, as the kernel itself or as a system service
- Part of an [application](/docs/concepts/users.md)

## Permissions

The system has all possible privileges over the system itself.
Applications, on the other hand, have almost no privileges by default.

These privileges can be provided through *permissions* designed
to control which application can do what.

## Hardware access

Accessing the hardware happens in a two-layered way:

- First, the kernel *detects* the hardware and *enumerates* it
- Then this hardware will be available through the *hardware service*

## Hardware drivers

Unlike most other operating systems,hardware drivers are
simple applications with no special integration in the kernel.

An application's manifest can mark itself as a driver using the *hardware service*.

The appropriate driver for each hardware is selected by using *certain criteria*.

### Hardware access performances

Hardware accesses are provided via *syscall* and *signals* using CPU interrupts.

The access process usually works like this:

- A userspace process notifies a *system service*
- The system service contacts the corresponding hardware service
- The hardware service contacts the relevant driver
- The hardware driver performs the requested operation through the *hardware service*
- Next, the result of the operation is transmitted to the hardware service, then to the system service, and finally to the userspace process

## Filesystem access

This process is generally faster than other hardware operations
thanks to *direct storage access*.

A typical operation involves a communication with the *filesystem service*,
which *directly communicates* with the storage files.

For filesystems that are not natively supported, a *filesystem interface*
is available to contact the *storage driver service*. Although this process
has more latency, it is only referenced in edge cases and still remains
within an acceptable performance range.

## User interface

The entire user interface is managed by desktop environments,
which are the services provided by the applications.