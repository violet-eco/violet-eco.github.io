---
slug: devices
sidebar_position: 7
description: Devices are critical in providing many operations and interactions in the Violet system.
---

# Devices

Devices are critical in enhancing the operation of Violet. These physical components,
which range from cameras and microphones to storage disks and network adapters, are
required for a variety of tasks and interactions. Violet uses Device Integration Files
(DIFs) to provide a uniform interface for easy device integration in order to properly
manage various devices.

## Connecting a New Device

Violet creates a Device Integration File (DIF) in the `/dev` directory when you connect a
new device to your computer. DIF placement and configuration may differ based on the
device type. A hard drive, for example, may have a DIF path like `/dev/sst/b0b4`. These
filenames are unique and random, with the format `[a-z][0-9][a-z][0-9]`
(lowercase, digit, lowercase again, and then another digit).

## Interacting With a Device

The [`sys::hw`](../specs/services/hw.md) service is used to interact with devices by applications and system services.

For uncategorized devices (in `/dev/etc`), a popup is shown to the user, to indicate
the connected device is not recognized.

## Device Integration file Persistence

When you disconnect a device, the Device Integration File (DIF) linked with it is not
instantly deleted. When a process tries to interact with the DIF; the `sys::hw` service
reports that the device is not currently connected. This enables apps to save the
device's location and association for future usage.

When the device is reconnected, it is linked with the same DIF, guaranteeing consistency
and keeping the device's reference in the system.

## Custom Device Integration File Name

Violet allows Violetians to define Device Integration File (DIF) Names, adding a
customized touch to the device management experience. Violetians may utilize this
functionality to provide DIFs distinctive names, ensuring easy connection with apps.

When a DIF is given a custom name, Violet produces a new DIF file and correlates it with
the original, retaining compatibility with apps that rely on the original DIF. This
approach enables users to get benefits of customizable naming conventions without
sacrificing functionality. The original DIF and the modified DIF both provide the same
capability and features to the underlying device.

Custom DIF names must be more than four characters long to provide clarity and system
consistency. The simple rule identifies custom DIFs from those created automatically,
delivering a consistent experience throughout the operating system.

## Device Management Interface

Violet features a device management interface available through the
[Settings](../applications/settings.md) application to simplify device management and
streamline user interactions. Violetians can easily setup, debug and update drivers,
which gives them instant access to all connected devices.
