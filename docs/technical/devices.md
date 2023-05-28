# Devices

- [Devices](#devices)
  - [Connecting a new device](#connecting-a-new-device)
  - [Interacting with a device](#interacting-with-a-device)
  - [Device handler files persistance](#device-handler-files-persistance)
  - [Custom DHF name](#custom-dhf-name)

## Connecting a new device

When a new device is connected to the computer, a new
device handler file (DHF) is created in the `/dev` directory.

Depending on the type, they can be put in different folders under the `/dev` folder.

The filename is random and unique, in the format `[a-z][0-9][a-z][0-9]` (lowercase, digit, then lowercase again, and finally another digit).

For example, when a hard drive is connected to the computer,
DHF will be something like `/dev/sst/b0b4`.

## Interacting with a device

DHFs can only be used through the `sys::hw` service.

Different actions may be happen depending on the device's type:
- **Camera devices:** when an application asks to capture a photo/video, the device will be suggested to take the images from
- **Microphones:** when an application asks to capture sound, the device will be suggested to capture the sound from
- **Sound output devices:** the device will be available for playback
- **Network adapters:** the device will be available to make network requests on
- **Other supported wireless devices:** depends on the type (Bluetooth adapter, ...)
- **Basic/persistent storage devices:** when possible, the device will be automatically mounted in `/mnt` and visible in the files explorer

For uncategorized devices (in `/dev/etc`), a popup is shown to the user, to indicate
the connected device is not recognized.

## Device handler files persistance

When a device is disconnected, its DHF is not removed. Instad, if a process tries to
interact with the DHF, the `sys::hw` service will indicate the device is currently not connected.

When the device is connected again, it is associated to the same DHF again. This allows
applications to persist the device's location and use it later on.

## Custom DHF name

It is possible to give custom names to DHFs. In such a case, a new DHF file is created and
linked to the original DHF file while keeping the original DHF file in the folder.
In this way, compatibility with applications that rely on the old DHF is not broken.

Both DHFs show exactly the same device, with no difference. Custom DHF can be
deleted at any time, but this can be quite dangerous as some applications rely on it.

Also, custom DHF names must always be longer than 4 characters, to avoid
confusion with automatically-generated DHFs.