---
slug: applications
sidebar_position: 1
description: Applications are the primary way to run software in Violet.
---

# Applications in Violet

*Applications* are the primary way to run software in Violet. They are responsible for
executing code and providing functionality to the users.

## Application Types

Violet supports a variety of application types, each of which has a special function and offers unique features:

1. **Native Applications:** These programs have been specially created and enhanced to work with Violet. They may utilize Violet's special features and have complete access to system resources, resulting in a smooth and effective user experience.
2. **Web Applications:** In a web browser, Violet also supports web-based programs. These programs make use of web technologies and are accessible through widely used web browsers that are already installed on the computer.
3. **Emulated Applications:** Violet offers the possibility to run emulation-based apps for backwards compatibility. Violetians are able to access older apps without jeopardizing system integrity because to the virtualized environment in which these applications operate.

## Installation Methods

Violet applications are installed using application packages. Several installation techniques are available:

### From the store

The [Violet Store](../applications/store.md) is where you may download and install
applications. Users may explore and install programs using Store's unified platform.
The shop sells precompiled programs for closed-source apps. Store enables both
precompiled apps and source code compilation for open-source applications.

### Sideloading

Sideloading refers to the installation of an application directly from its package without going through the official store. Violet offers different sideloading modes:

- **Disable mode:** Sideloading is completely blocked, and applications can only be installed from the store. Volatile applications can still be run.
- **Safe mode:** Sideloading is allowed, but the system performs security checks. It verifies if the application's AID (Application ID) matches an application available in the store. It also compares the signature of the application with the signature of the store application. If the AID or the signatures do not match, the application is considered malicious and will not be installed. Note that this mode requires an internet connection to check against the store.
- **Insecure mode:** Sideloading is allowed without any security checks. This mode is considered less secure, as it allows for potential spoofing or installation of untrusted applications.

Violetians can switch between sideloading modes in the Settings, depending on their
desired level of security and control over application installation.

:::caution
By default, sideloading is disabled in Violet for security reasons. Users can
enable sideloading in the system settings, but it is recommended to exercise caution and
only install applications from trusted sources.
:::

### Volatile applications

*Volatile applications* offer an alternative way to run applications without installing
them to disk permanently. Violet provides different modes for running volatile
applications:

- **Full-volatile:** All data associated with the application is deleted once the application is closed.
- **Session-scoped:** The application's data is kept on disk until the system is shut down.
- **Local-persistent:** The application's data is stored in a data file with the extension `*.vad`` (Volatile Application Data) created in the same folder as the application package.
- **Persistent:** The application's data is stored in a dedicated folder, allowing for persistent storage across multiple sessions.

By default, volatile applications run in local-persistent mode. In this mode, the system
searches for a file with the same name as the application's package file but with the
`*.vad` extension. If the file is found, it serves as the application's storage, and any
data the application wants to store is written to this file.

Persistently running volatile applications are not listed in the application list and can
only be managed through an option in the Settings. While their data is stored on
disk, their executables are not stored separately but reside within the application
package. This allows running the same application multiple times without worrying about
data conflicts. Additionally, it supports shared data storage between users.

Violet Store provides an option to install applications as volatile.

## Commands

Applications in Violet can provide shell commands, allowing users to interact with the
application's functionality from the command line. To prevent conflicts between command
names, application commands are prefixed with the AID (Application ID) using dots instead
of two colons. This approach ensures unique command names for each application and avoids
naming conflicts.

For example, if an application with the AID `developer::app` provides the command
`get_time`, the full command name would be `developer.app.get_time`. However, in shell
prompts (not scripts), if no other application provides a command with the same name, the
short form `get_time` can be used directly.

Commands in Violet work by executing the application within a specific execution context.

## System applications

Some applications are part of the system itself and are known as system applications.
These applications have special privileges and access to system-reserved features. System
applications also have the ability to create system services, which are processes that
run at startup with system permissions.

System applications **CANNOT BE UNINSTALLED** as they are critical to the proper functioning
of the system. Non-system native applications, however, can be uninstalled if desired.

Some native applications are part of the system itself and
are called *system applications*. These applications have some special privileges:

- Access to system-reserved features
- Permission to create *system service*
- They cannot be uninstalled

System applications cannot be removed *by any means* as
they are critical to the correct functioning of the system.
Native applications which are not system applications can be removed, though.

## Application Development

By designing and releasing their apps, developers may contribute to Violet's application
ecosystem:

### Application SDK

Violet provides a robust official Software Development Kit (SDK). It includes a
comprehensive collection of tools, libraries, and documentation to assist developers in
creating powerful and innovative applications that interface smoothly with the operating
system.

### Open Source Community

Violet's application development depends on an open-source ecosystem that encourages
collaboration, sharing and improvement. Developers may contribute to current
applications or build whole new ones to enhance the Violet ecosystem.

## Services

Applications can create *services* by specifying them in their manifests.
The services will run at startup with the application's permissions.

There is exactly one process for each service per active user.
