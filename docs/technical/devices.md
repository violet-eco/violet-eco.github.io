# Devices

In the Violet system, devices play a crucial role in enabling various functionalities and
interactions. Devices can include hardware components such as cameras, microphones,
storage drives, network adapters, and more. The system manages these devices through the
use of device handler files (DHF) and provides a unified interface for interacting with
them.

- [Devices](#devices)
  - [Connecting a New Device](#connecting-a-new-device)
  - [Interacting With a Device](#interacting-with-a-device)
  - [Device Handler Files Persistance](#device-handler-files-persistance)
  - [Custom Device Handler File Names](#custom-device-handler-file-names)

## Connecting a New Device

When a new device is connected to the computer, a corresponding device handler file (DHF)
is created in the `/dev` directory. The location and organization of DHFs may vary
depending on the type of device. For example, a hard drive may have a DHF path like `/dev/sst/b0b4`.

The filename is random and unique, in the format `[a-z][0-9][a-z][0-9]` (lowercase, digit, then lowercase again, and finally another digit).

## Interacting With a Device

To interact with a device, applications and system services utilize the
[`sys::hw`](../specs/services/hw.md) service. The specific actions that can be
performed depend on the type of device:

Different actions may be happen depending on the device's type:

- **Camera devices:** when an application asks to capture a photo/video, the device will be suggested to take the images from
- **Microphones:** when an application asks to capture sound, the device will be suggested to capture the sound from
- **Sound output devices:** the device will be available for playback
- **Network adapters:** the device will be available to make network requests on
- **Other supported wireless devices:** depends on the type (Bluetooth adapter, ...)
- **Basic/persistent storage devices:** when possible, the device will be automatically mounted in `/mnt` and visible in the files explorer

For uncategorized devices (in `/dev/etc`), a popup is shown to the user, to indicate
the connected device is not recognized.

## Device Handler Files Persistance

When a device is disconnected, the associated device handler file (DHF) is not
immediately removed. Instead, if a process attempts to interact with the DHF, the
[`sys::hw`](../specs/services/hw.md) service indicates that the device is currently not
connected. This allows applications to maintain the device's location and association for
future use.

When the device is connected again, it is associated with the same DHF, ensuring consistency and preserving the device's reference in the system.

## Custom Device Handler File Names

Violet provides the flexibility to assign custom names to device handler files (DHF). When a custom name is given, a new DHF file is created and linked to the original DHF
file. This preserves compatibility with applications that rely on the original DHF while
allowing for customized naming conventions.

Both the original DHF and the custom DHF point to the same underlying device, offering
the same functionality and features. However, it's important to note that custom DHFs can
be deleted, which may impact applications relying on them. Caution should be exercised
when deleting custom DHFs.

To distinguish custom DHFs from automatically generated DHFs, custom DHF names must
always be longer than four characters. This helps prevent confusion and ensures proper
identification of DHFs within the system.
