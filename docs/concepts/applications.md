# What are applications?

*Applications* are the primary way to run software in Violet. They are responsible for
executing code and providing functionality to the users.

- [What are applications?](#what-are-applications)
  - [How applications work?](#how-applications-work)
  - [Installation Methods](#installation-methods)
    - [From the store](#from-the-store)
    - [Sideloading](#sideloading)
    - [Volatile applications](#volatile-applications)
  - [Commands](#commands)
  - [System Applications](#system-applications)
  - [Services](#services)

## How applications work?

An application consists of executable files and associated resources. In Violet, binary
programs are not directly supported, so applications serve as the intermediary layer to
run code. When an application is launched, it is loaded into memory and its code is
executed by the system.

## Installation Methods

Applications in Violet are installed through application packages. There are several installation methods available:

### From the store

Applications can be downloaded and installed from the official Violet store. The store
provides a centralized platform for users to discover and install applications. For
closed-source applications, the store offers precompiled programs. For open-source
applications, the store supports both precompiled programs and source code compilation.

### Sideloading

Sideloading refers to the installation of an application directly from its package without going through the official store. Violet offers different sideloading modes:

- **Disable mode:** Sideloading is completely blocked, and applications can only be installed from the store. Volatile applications can still be run.

- **Safe mode:** Sideloading is allowed, but the system performs security checks. It verifies if the application's AID (Application ID) matches an application available in the store. It also compares the signature of the application with the signature of the store application. If the AID or the signatures do not match, the application is considered malicious and will not be installed. Note that this mode requires an internet connection to check against the store.

- **Insecure mode:** Sideloading is allowed without any security checks. This mode is considered less secure, as it allows for potential spoofing or installation of untrusted applications.

Violetians can switch between sideloading modes in the Settings, depending on their
desired level of security and control over application installation.

**Note:** By default, sideloading is disabled in Violet for security reasons. Users can
enable sideloading in the system settings, but it is recommended to exercise caution and
only install applications from trusted sources.

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

## System Applications

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

## Services

Applications can create *services* by specifying them in their manifests.
The services will run at startup with the application's permissions.

There is exactly one process for each service per active user.
