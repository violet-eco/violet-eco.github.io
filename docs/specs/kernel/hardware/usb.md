---
slug: usb
sidebar_position: 2
description: USB is a widely-used interface that allows for the connection of various peripheral devices, including keyboards, mice, external storage devices, printers and more.
---

# Universal Serial Bus

USB is a widely-used interface that allows for the connection of various peripheral devices, including keyboards, mice, external storage devices, printers and more.

## Detection Procedure

The detection procedure includes the following steps:

1. **Enumeration:** Nova enumerates all available USB ports on the system on boot to discover connected devices. Enumeration involves scanning the USB bus for devices attached to each port and getting data about them. Nova uses this data to determine the kind and capabilities of the connected USB devices.
2. **Device Identification:** Nova analyzes the device descriptors supplied by each connected USB device after enumeration. Device descriptors provide critical information such as vendor and product ID, device class and USB standards supported. Nova recognizes the type of USB device attached to each port by evaluating these descriptors.
3. **Driver Assignment:** When a USB device is identified, Nova assigns the appropriate device driver to simplify communication between the kernel and the USB device. Device drivers operate as middleware, allowing the operating system to successfully connect with and control USB devices.
