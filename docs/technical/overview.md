---
slug: overview
sidebar_position: 1
description: This document provides an overview of Violet.
---

# Overview

This document provides an overview of Violet.

## Program executions

Violet takes a methodical approach to program execution. Standalone binaries cannot be
run directly; rather, all code execution takes place within the context of the system or
an application. The kernel system services, and user-installed programs that operate
within the Violet environment are all included.

## Hardware access

Violet's hardware access is enabled via a two-tiered method. A hardware service operates as an intermediate layer between the system and hardware devices, offering access and administration capabilities. The hardware service is used by applications to interface with hardware devices, allowing restricted and secure access to hardware functionality.

## Hardware drivers

Hardware drivers are built as simple apps in Violet, as opposed to tightly integrated
kernel components. Using the hardware service, applications may advertise themselves as
drivers. When an application requests hardware access, the system chooses the best driver
based on a set of criteria. The hardware service facilitates communication between the
system, hardware services, and drivers in order to efficiently conduct the necessary
actions.

### Hardware access performances

Hardware access is accomplished using syscalls and signals via CPU interrupts. The steps are normally as follows:

1. A notification is sent to a system service by a userspace process.
2. The system service exchanges information with the appropriate hardware service.
3. The hardware service contacts the appropriate driver for the desired hardware.
4. The driver communicates with the hardware via the hardware service.
5. The operation's outcome is returned to the userspace process via the hardware service, system service, and so on.

## Permissions

Violet has a stringent permission scheme to limit application capabilities. Applications are granted limited capabilities by default and require explicit permissions to access resources or execute specified activities. Permissions are carefully crafted to limit what activities a program may do within the system while also assuring security and data protection. To access resources or execute specified tasks, applications must seek and get the relevant permissions.

## Filesystem access

For filesystems that are not natively supported, a filesystem interface is available to
communicate with the storage driver service. Although this process introduces some
additional latency, it remains within an acceptable performance range and is only used in
specific edge cases.

## User interface

Violet's user managed is governed via desktop environments, which are
application-provided services. These desktop environments are in charge of producing
graphical components, processing input events, and providing a consistent and consistent
user experience.
