---
slug: filesystem
sidebar_position: 3
description: This document describes the structure, features and behaviours to both applications and libraries.
---

# Filesystem

Violet utilizes the **Btrfs** filesystem as the primary storage system. There are three partitions used for data:

1. **FAT32 partition for bootloader:** This partition is dedicated to storing the bootloader, which is responsible for booting the operating system.
2. **FAT32 partition for the system (`/sys` and `/etc/sys`):** The system partition contains essential system files and configurations that are necessary for the proper functioning of the operating system.
3. **Btrfs partition for user data:** The user data partition is where user-specific files and data are stored.

## Structure

```plaintext
/
├── app                            Interactables available to all users
│   └── <appname>                  An application's folder (NOTE: one sub-folder per version for libraries)
│       ├── content                Application's program (executables, static resources, ...)
│       ├── crashsaves             Application's crash saves
│       ├── data                   Application's data (e.g. database)
│       ├── packages               Application's packages (original package + update packages)
│       └── sandboxes              Application's sandboxes
├── dev                            Connected devices
│   ├── cam                        Cameras
│   ├── bst                        Basic storage devices (SD cards, USB keys, ...)
│   ├── etc                        Uncategorized devices
│   ├── mic                        Microphones
│   ├── net                        Network adapters (Ethernet adapter, WiFi card, ...)
│   ├── snd                        Sound-related output devices (Sound card, DAC, ...)
│   ├── sst                        Sensitive storage devices (Hard drives, SSDs, ...)
│   └── wrl                        Other supported wireless devices (Bluetooth adapter, ...)
├── etc                            Mutable data folder
│   ├── env   <F>                  Environment variables
│   ├── hosts <F>                  Hosts overriding (e.g. 'localhost')
│   ├── lock                       Opened lock files
│   ├── logs                       Log files
│   |   └── upe <F>                History of UPE requests
│   ├── public                     Public data, readable and writable by everyone
│   └── sys                        System's mutable data - available to system only
│       ├── registry <F>           System's registry
│       ├── awake    <F>           System's shutdown indicator to detect if there was an error during last shutdown
│       ├── hashes   <F>           Critical files' hashes for the integrity checker (2)
│       ├── gbpwd    <F>           Global storage's encryption key
│       └── users    <F>           User profiles and groups
├── fl                             Flow files
├── home                           Users' data
│   └── <user>                     A specific user's data
│       ├── apps                   User's applications (same structure as for `/apps`)
│       ├── appdata                User's applications persistent data (not removed when the application is uninstalled)
│       ├── desktop                User's files appearing on the desktop
│       ├── documents              User's documents
│       ├── downloads              User's downloads
│       ├── music                  User's music files
│       ├── pictures               User's pictures
│       ├── videos                 User's videos
│       └── trash                  User's trash
├── mnt                            Mounted storages
├── sys                            System - immutable outside of installation, repair processes and updates
│   ├── apps                       System applications
│   ├── boot                       System's boot program
│   ├── langs                      Translation files
│   ├── old                        Old versions of the system, used during the repair process (compressed archives)
│   ├── backup                     Copy of the last system version (compressed archive)
│   ├── kernel                     Sakura
│   └── valid   <F>                A file that just contains "ValidMasterKey" to test if the provided master key is valid at startup
├── tmp                            Temporary folder (cleaned during shutdown)
    └── <user>                     Temporary folder for a specific user
```
