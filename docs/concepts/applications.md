# What are applications?

*Applications* are the way the operating system processes software.

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

An application basically consists of executable files and resources.
Because binary programs are not supported directly, **applications are the only way to run code**.

## Installation Methods

All applications are installed through *application packages*.
There are several installation methods:

- From the store
- Directly from the app's package
- As a volatile application

### From the store

Applications can be downloaded and installed from the official store of LapisOS.

**For closed source applications**, the store only provides precompiled programs.

**For open source applications**, the store provides both precompiled
programs and support for compiling from source.

Users can compile applications from source using the appropriate tools
to compile, or simply use precompiled programs (default) and change
the default option at any time.

### Sideloading

*Sideloading (installing an application directly from its package)* follows
certain rules set by the sideloading mode, called "disable", "secure", "insecure".

- **Disable mode** blocks all sideloading, in this mode it is not possible to install apps via packages, but [volatile apps](#volatile-applications) can still be run.
- **Safe mode** allows sideloading and makes the system check if the application's AID matches an appllication available in the Store. If it matches, it compares the signature of the application with the signature of the Store Application. If the signatures do not match, the application is considered *malicious* and will not be installed. Also note that this mod only works when the computer is connected to the internet, as the system needs to check the Store to see if the application is malicios. If the computer is offline, sideloading will be disabled.
- **Insecure mode** allows sideloading without any checking, which is quite dangerous as it allows spoofing.

Sideloading mode can be changed in Control Center.

### Volatile applications

Applications can also be run as *volatile applications*, which
means they are not installed to disk:

- **Full-volatile:** all data of the application is deleted after the application is closed
- **Session-scoped:** the application's data is kept on disk until the system is shut down
- **Local-persisent:** the application's data is stored in a data file with extension `*.vad` created in the same folder
- **Persistent:** the application's data is stored in a dedicated folder

By default, volatile applications run in *local-persistent* mode.
In this mode, the system first searches for a file in the same
folder with the same name as the application's package file,
but with the extension `*.vad` *(Volatile Application Data)*.
If the file is found, it opens it as the application's storage.
Thus, when the application wants to store data, it is stored in the data file.

Note that `*.vad` *(Volatile Application Data)* files are disguised
VSF (Virtual Storage File) files.

*Persistently running apps* are not listed in the app list and can only be
managed through an option in the Control Center. While its data is stored
on disk, its executables are not stored anywhere, they just stay inside
the package. This allows running the same application multiple times and
not worrying about the data file. It also supports shared data storage between users.

Note that the store has an option for installing applications as volatile.

## Commands

Applications can provide shell commands. Since command names must prefixed
by the AID, multiple commands can be provided without the danger of name conflicts.

For example, if an app with AID `developer.app` provides the command `get_time`, the last available command will be `developer.app.get_time`.

Although this is a rather long name, it avoids conflicts between
the names of the commands. It is quite common for shell scripts to
import commands at the beginning of the script to make it easier
to access applications' commands.

By default, shell prompts (not scripts) will allow use directly
in the short form `get_time` if no other application provides
a command with the same name.

Commands work by running the application through a specific *execution context*.

## System Applications

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