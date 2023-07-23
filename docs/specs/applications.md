---
slug: applications
sidebar_position: 2
description: This document describes application-specific structure and behaviour.
---

# Applications

This document describes application-specific structure and behaviour.

## Application package

Application packages are files that have either the
`*.vap` (Violet Application Package) or
`*.vva` (Violet Volatile Application) extension.

### Content

VAP and VVA files are ZStandard archives that contain `manifest.toml`
describing the archive and `hash.md5` file that confirm that the archive
is not corrupted.

### Pre-compiled applications

By default, the system tries to install
[pre-compiled programs](../technical/pre-compiling.md) from
the application's package if possible.

### Embedding libraries

Although it's a better practice to split applications and libraries
into different packages, sometimes it's more easy to embed both in
the same package, especially in two cases:

- When the application is just a thin layer ahead of the library (e.g. CLI tool)
- When the library's API changes rapidly and the application relies on it

For such scenarios, it's possible for an application package to embed one or more libraries, and publish them all at once.

### Values encoding

The application's startup arguments and output value use the following encoding:

|Type code|Type|Description|Representation|
|---|---|---|---|
|`0x00`|`void`|-|nothing|
|`0x01`|`bool`|boolean|1 byte, `0x00` = false, `0x01` = true|
|`0x02`|`int`|64-bit signed integer number|-|
|`0x03`|`float`|64-bit signed floating-point number|-|
|`0x04`|`char`|UTF-8 grapheme cluster|character's length (8 bytes), followed by the UTF-8 grapheme cluster|
|`0x05`|`string`|UTF-8 string|string's length (8 bytes), followed by the UTF-8 encoded string|
|`0x06`|`list`|Typed linear list|Type code of the list's number of items (1 byte), length in bytes (64 bits), encoded items|
|`0x07`|`path`|Filesystem path|Represented as an UTF-8 string|
|`0x08`|`command`|Shell command|Represented as an UTF-8 string|
|`0x09`|`stream`|Pipe RC|RC identifier (8 bytes)|

### Returning and failing

The value must be returned using the `CMDOUT` pipe. The data sent through
this pipe must follow the above [encoding](#values-encoding).

A command may also fail. To incidate so, the process must send the `0xFF`
value through the pipi.

### Volatile applications

[Volatile applications](../concepts/applications.md#volatile-applications)
cannot expose commands globally as they are technically not installed.
They can though be used in shell scripts through *volatile imports*.

## Commands

### Execution Context

Execution context consists of the information given to the
application when the application starts and explains why
the application was started and what it is expected to do.

### Startup Reason

It's one-byte long and made of following bits:

- Bits 0-4
  - `0b0001`: the application was started as part of its post-installation process
  - `0b0010`: the application was started as part of its pre-update process
  - `0b0011`: the application was started as part of its post-update process
  - `0b0100`: the application was started as part of its pre-uninstallation process
  - `0b0101`: the application was started by the system as an application service
  - `0b0110`: the application was started by the desktop environment
  - `0b0111`: the application was started by itself (from another process of the same application)
  - `0b1000`: the application was started by another application
  - `0b1001`: the application was started using one its exposed shell commands
  - `0b1010`: the application was started as a desktop environment
- Bit 5: set if the application was started automatically after a crash
- Bit 6: set if the application's raw output will be read (e.g. through the use of a shell operator)

### Context header

- The startup reason (1 byte)
- Informations (1 byte)
  - Bit 0: set if the application is starting for the very first time since it was installed
  - Bit 1: set if the application is starting for the very first time for this specific user
  - Bit 2: set if the application is starting for the very first time as this specific service
  - Bit 3: set if the application is starting for the first time after an update
  - Bit 4: set if other instances of this application are running
- Special assignment (1 byte)
  - Bit 0: set if the application is starting for the first time after being assigned as the new desktop environment
  - Bit 1: set if the application is starting for the first time after being assigned as the new default file manager
- Service type (1 byte)
  - `0x00`: not run as a service
  - `0x01`: run as the application's main service
  - `0x02`: run as an application's scoped service
  - `0x10`: run as the application's desktop environment service
  - `0x11`: run as the application's file manager service
  - `0x12`: run as the application's file opener service
- The application's ANID (4 bytes)
