---
sidebar_position: 1
description: Nova detects devices throughout the boot process and periodically after starting.
---

# Hardware

## Hardware Detection

Nova detects devices throughout the boot process and periodically after starting.
Hardware detection is essential for initializing hardware components, installing
necessary drivers and allowing the system to communicate with associated drivers.
After the system has begun, this detecting mechanism enables the hotplugging of
new devices.

### Supported Connection Protocols

The device detection techniques differ based on the device's connection protocol.
Connection protocols that are supported include:

1. [PCIe](./pci-e.md): PCIe (Peripheral Component Interconnect Express) is a serial interface used to connect various components like graphic cards, network cards and storage devices.
2. [USB](./usb.md): USB (Universal Serial Bus) is a standard for connecting various devices like keyboards, mice, printers and storage devices. It allows for plug-and-play functionality.
3. **SATA:** SATA (Serial AT Attachment) provides a standard and widely supported connection for storage devices.

## Device Structure

```rust title="Device Structure"
/// Represents information related to the power state and power management of a device.
struct PowerInfo {
    /// Representing the current power state of the device.
    pub power_state: u8,

    /// Indicating whether the device is capable of waking up from a suspended state.
    pub can_wakeup: bool,

    /// Indicating whether the current device is currently in a suspended state.
    pub is_suspended: bool,

    /// A boolean indicating whether the device should trigger a wakeup event.
    pub should_wakeup: bool,
}

/// Represents different types of buses to which a device can be connected.
enum BusType {
    Unknown,
    PCI,
    USB,
    SATA,
}

/// Represents different physical locations where a device's connection point (ports, connectors, etc.)
/// can be found on the device.
enum DevicePhysicalLocationPanel {
    Unknown,
    Top,
    Bottom,
    Left,
    Right,
    Front,
    Back,
}

/// Represents device data related to the physical location of a device's
/// connection point.
struct DevicePhysicalLocation {
    /// Physical location panel.
    pub panel: DevicePhysicalLocationPanel,

    /// Indicating whether the device is on the lid on a laptop system
    pub lid: bool,
}

struct Device {
    /// Name of the device.
    pub name: String,

    /// Represents the parent device to which this device is attached.
    /// If `Some`, it indicates that this device is a child device of the parent;
    /// if `None`, it means the device is a top-level device.
    pub parent: Box<Option<Device>>,

    /// Represents informtion related to the power state and management of the device.
    pub power: PowerInfo,

    /// Represents the type of bus to which the device is connected.
    pub bus: BusType,

    /// Represents data related to the physical location of a device's connection point.
    pub physical_location: DevicePhysicalLocation,
}
```
