---
slug: permissions
sidebar_position: 4
description: Permissions are used to control what applications can do or not.
---

# Permissions

Permissions are used to control what applications can
do or not.

## Level of Permissions

Permissions are divided into the following categories:

- Basic (`B`): basic permissions, like window creation, which are granted automatically by default
- Implicit (`I`): ermissions implied by the usage of an application, like opening a file with an application grants it an access while the application is running
- Global (`G`): accessing and modifying non-critical parts of the state of the system, like controlling the global volume or reading
- Sensitive (`S`): accessing sensitive informations, like filesystem or network access
- Privacy (`P`): accessing privacy-related data, like microphone or webcam access

If applications request permission from the user to get
sensitive and privacy permissions while using them, a popup will shown:

- Only one time
- For the active application
- For the current session
- Forever

## User Privileges

Some permissions require the user to have specific privileges,
such as being administrator. These permissions are marked
in this document with an `{A}`.

## List of Permissions

### Devices

- (P) `devices.enum`: enumerate devices
- (P) `devices.subscribe`: subscribe to devices
- (P) `devices.register_driver`: register a device driver
- (P) `devices.ask_driver`: ask a device's driver to perform a method

### Filesystems

- (S) `fs.filesystems.mounted`: check if a given filesystem is mounteds
- (S) `fs.filesystems.metadata`: get metadata on a given filesystem
- (S) `fs.filesystems.list`: enumerate mounted filesystems
- (S) `fs.filesystems.mount`: mount an existing filesystem
- (S) `fs.filesystems.unmount`: unmount filesystems mounted by other applications
- (S) `fs.filesystems.watch`: be notified when a filesystem is (un)mounted
- (S) `fs.filesystems.format`: format an existing filesystem

### Filesystem Elements

- (S) `fs.items.exists`: check if an item exists at a given path
- (S) `fs.items.metadata`: get metadata on a given item
- (S) `fs.items.create`: create new filesystem elements
- (S) `fs.items.move`: rename and move existing filesystem elements
- (S) `fs.items.remove.trash`: send items to the current user's trash
- (S) `fs.items.remove`: delete items permanently

### Flows

- (S) `flow.list`: list flows opened by all applications
- (S) `flow.metadata`: get metadata on flows
- (B) `flow.create`: create flows
- (S) `flow.read`: read from flow
- (S) `flow.write`: write to flow

### Network

- (S) `net.fetch`: fetch a resource
- (S) `net.expose`: listen to a specific port

### System

- (B) `system.clock.date.read`: get the current date
- (B) `system.clock.time.read`: get the current time
- (B) `system.clock.timezone.read`: get the current timezone
- (S) `system.user.name.read`: get the current user's name
- (S) `system.user.avatar.read`: get the current user's avatar
- (B) `system.hw.cpu.count`: get the number of CPUs
- (G) `system.hw.cpu.list`: list CPUs
- (B) `system.hw.mem.total`: get the amount of total memory
- (B) `system.hw.mem.available`: get the amount of available memory
- (G) `system.hw.mem.slots`: get the number of RAM slots
- (G) `system.hw.mem.list`: list RAM slots

### Programs

- (S) + {A} `programs.running.processes`: get the list of running processes
- (S) `programs.running.apps`: get the list of running applications

### System-reserved Permissions

- `sys.process.kill`: suspend or kill external processes
- `sys.process.signal`: send a signal to an external process
