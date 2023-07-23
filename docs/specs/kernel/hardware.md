---
slug: hardware
sidebar_position: 1
description: Devices are detected during the boot process and then periodically after startup.
---

# Hardware Interaction

## Hardware detection

Devices are detected during the boot process and then periodically after startup.
This allows to hotplug some additional devices afterwards.

Not every device uses the same connection protocol,
detection varies by connection:

- PCI-Express devices are detected through their Configuration Space
- IDE/SATA devices are detected through the IDE/SATA controller
- USB devices are enumerated through the USB protocol stack

## Connection interface identifier

The connection interface identifier (CII) is a 4-byte number describing what a device is connected to:

- Connection type (1 byte)
  - `0x01`: PCI-Express
  - `0x02`: IDE
  - `0x03`: SATA
  - `0x04`: M.2
  - `0x05`: USB
  - `0x06`: RGB
- Bus number (1 byte)
- Port number (2 bytes)

## Connection-specific device descriptor

All hardware devices output an identifier whose format is
normalized depending on the connection type (PCI-Express, IDE, SATA, ...).
This identifier is called the connection-specific device descriptor (CSDD).

## Kernel device identifier

The kernel device identifier (KDI) is an 8-byte identifier
computed from the [CII](#connection-interface-identifier)
and the [CSDD](#connection-specific-device-descriptor).
It is unique accross all devices.

## Raw device descriptor

RDD is a data structure made of the followings:

- [KDI](#kernel-device-identifier) (8 bytes)
- [CII](#connection-interface-identifier) (4 bytes)
- size of the CSDD (1 byte)
- [CSDD](#connection-specific-device-descriptor) (up to 256 bytes)
