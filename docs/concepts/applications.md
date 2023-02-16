# What are applications?

*Applications* are the system's way to handle software.

- [What are applications?](#what-are-applications)
	- [How applications work](#how-applications-work)
	- [Installation methods](#installation-methods)
		- [From the store](#from-the-store)
		- [Sideloading](#sideloading)
		- [Volatile applications](#volatile-applications)
	- [Commands](#commands)
	- [System applications](#system-applications)
	- [Services](#services)

## How applications work

An application is a set of executable files and resources. They are
only way to execute code, as direct binary programs are not supported.

Any user can install applications, which will only be available from its
account. Administrator users can install global applications, which are
available to every user.

## Installation methods

Applications are installed through an *application package*. There
are several installation methods:

- From the store
- Directly from the application's package
- As a volatile application

### From the store

Applications can be downloaded from LapisOS' official applications store.

- For closed-source applications, the store only provides pre-compiled programs
- For open-source applications, the store provides both pre-compiled programs as well
as the source code

For the later, user can choose either to build the program from source, using the
appropriated build tools in order to optimize performances, or to simply use the
pre-built programs (which is the option by default).

### Sideloading

Applications sideloading (installing an application directly from its [package (WIP)]())
follows strict rules determined by the *sideloading mode*, which is either
"disabled", "secure" or "unsecure".

- **Disable mode** prevents all sideloading; it's not possible to install
applications from their package in this mode. [Volatile applications](#volatile-applications)
can still be run, though.
- **Secure mode** allows sideloading but will first make the system check
if the application's [AID (WIP)]() matches an existing application on the Store.
If so, it compares the application's signature to the Store application's
store. If they don't match, the application is considered malicious and
won't be installed. Note that this mode only works while connected to 
internet, as the system needs to check the Store to ensure the application
is not malicious. If the computer is offline, sideloading will be
disabled.
- **Unsecure mode** allows sideloading without any checking, which is
highly dangerous as it allows spoofing.

The sideloading mode can be changed in the [Control Center (WIP)]().

### Volatile applications

Applications can be also be ran as *volatile applications*, which means
they are not installed on the disk. There are three methods:

- *Full-volatile*: the app's datas are removed when the application closes
- *Session-scoped*: the app's datas are stored on disk until the system shuts down
- *Local-persistent*: the app's datas are stored within a data file located in the same folder
- *Persistent*: the app's datas are stored in a dedicated folder, also enabling common data between users

By default, volatile applications are ran in *local-persistent* mode. In this mode,
the system first checks if a file with the same name as application's package but with
the *.vad (Volatile Application's Data)* exists. If so, it opens this file as the application's
storage. Then, when the application wants to store some data, it is stored inside in this data file.

Note that *.vad (Volatile Application's Data)* files are disguised [VSF (WIP)]() files.

Volatile applications running as persistent do not appear in the applications list
and can only be managed through a specific option in the [Control Center (WIP)]().
Their executable files are not stored anywhere and stay in the application's package,
while only their data are stored on the disk. This allows to run the same application
several times without losing any data and without worrying about a data file. This
also allows to store a common data between users.

Note that the store has an option for installing applications as volatile.

## Commands

Applications can expose [shell commands (WIP)](). Multiple commands can be exposed
without any risk of clashing as the name command name must be prefixed by the
AID first.

For instance, if an application with AID `developer.app` exposes an `get_time` command,
the final usable command will be `developer.app.get_time`.

This is quite long name but allows to prevent any clashing between commands. It's
common for shell scripts to use imports at the beginning of the script to refer
more easily to applications' commands.

Note that, by default, shell prompts (not scripts) will allow to directly use
commands such as `get_time` in the short form if no other application exposes a
command with the same name.

Commands work by launching the application with specific [execution context (WIP)]().

## System applications

Some [native applications (WIP)] are part of the system itself and are called
*system applications*. They get a few specific features:

- Access to system-reserved features
- Ability to create [system services (WIP)]()
- They cannot be uninstalled

System applications cannot be removed in *any way*, as some of them are critical
for the system to function properly. Native applications which are not system
applications can be removed, though.

## Services

Applications can provide [services (WIP)]() by specifying them in their [manifest (WIP)]().
The services will be run at startup with the usual application's permissions.

There is exactly one process for each service per active user.