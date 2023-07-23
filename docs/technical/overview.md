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

Violet does not allow standalone binaries to be executed directly. Instead, all code
execution occurs within the context of the system or an application.

- **System Code:** This includes the kernel itself and system services.
- **Applications:** These are user-installed applications that run within the Violet environment.

## Permissions

Violet follows a strict permission model to control the capabilities of applications. By
default, applications have limited privileges and require explicit permissions to perform
certain actions.

Permissions are designed to regulate what actions an application can take within the
system. Applications must request and be granted the necessary permissions to access
resources or perform specific operations.

## Hardware access

Hardware access in Violet occurs through a two-layered approach:

- **Kernel Detection:** The kernel detects and enumerates the connected hardware devices.
- **Hardware Service:** The hardware service acts as an intermediary layer between the system and hardware devices, providing access and management capabilities.

## Hardware drivers

Unlike many other operating systems, hardware drivers in Violet are implemented as simple
applications rather than tightly integrated components of the kernel. Applications can
declare themselves as drivers by utilizing the hardware service.

When an application requests hardware access, the system selects the appropriate driver
based on certain criteria. The hardware service facilitates communication between the
system, hardware services, and drivers to perform the requested operations.

### Hardware access performances

Hardware accesses are performed through syscalls and signals using CPU interrupts. The
process typically follows these steps:

Hardware accesses are provided via *syscall* and *signals* using CPU interrupts.

The access process usually works like this:

1. A userspace process sends a notification to a system service.
2. The system service communicates with the corresponding hardware service.
3. The hardware service contacts the relevant driver associated with the requested hardware.
4. The driver interacts with the hardware through the hardware service.
5. The result of the operation is transmitted back through the hardware service, system service, and ultimately to the userspace process.

## Filesystem access

Filesystem access in Violet is generally fast, thanks to direct storage access. The
filesystem service handles most operations by directly communicating with the storage
files.

For filesystems that are not natively supported, a filesystem interface is available to
communicate with the storage driver service. Although this process introduces some
additional latency, it remains within an acceptable performance range and is only used in
specific edge cases.

## User interface

The user interface in Violet is managed by desktop environments, which are services provided by applications. These desktop environments are responsible for rendering the graphical elements, handling input events, and providing a cohesive user experience.
