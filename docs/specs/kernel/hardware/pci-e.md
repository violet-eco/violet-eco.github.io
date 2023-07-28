---
slug: pci-e
sidebar_position: 1
description: Peripheral Component Interconnect Express (PCIe) is a high-speed interface widely used to connect various hardware components, such as graphic cards, network adapters, storage devices and more.
---

# Peripheral Component Interconnect Express

Peripheral Component Interconnect Express (PCIe) is a high-speed interface widely
used to connect various hardware components, such as graphic cards, network adapters,
storage devices and more.

## Detection Procedure

The detection procedure includes the following steps:

1. **Enumeration:** Nova enumerates all available PCIe slots on the motherboard during system initialization to discover possible device connections.
2. **Configuration Space Access:** Nova accesses the Configuration Space of each slot once the slots have been enumerated. The Configuration Space stores important information about PCIe devices, such as vendor and deviceIDs, device class and capabilities.
3. **Device Identification:** Nova parses Configuration Space data to identify connected PCIe devices based on vendor and device IDs. This phase allows the kernel to identify the type of device connected to each slot.
4. **Device Initialization:** Nova begins device initialization procedures after identifying the devices. This procedure involves configuring numerous settings and establishing communication channels with the devices in order to ensure flawless data flow and performance.
5. **Driver Assignment:** Nova assigns the appropriate device driver to each discovered PCIe device after successful initialization. Device drivers are software components that facilitate communication between the kernel and hardware devices, allowing and operating system to fully utilize device capabilities.
