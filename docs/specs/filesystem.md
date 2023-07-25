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
├── apps
│  └── <appname>                        An application's folder
│     ├── content                       Executables, static resources, etc
│     ├── crashsaves
│     │  └── [timestamp]_[pid].csf <F>
│     ├── data                          Application's data, such as databases, etc
│     ├── packages                      Packages (original package + update packages)
│     └── sandboxes
├── dev                                 Devices
│  ├── bst                              Basic storage devices (SD cards, USB drives)
│  ├── cam                              Cameras
│  ├── etc                              Uncategorized devices
│  ├── mic                              Microphones
│  ├── net                              Network adapters
│  ├── snd                              Sound-related output devices
│  ├── sst                              Sensitive storage devices (SSDs, HDDs)
│  └── wrl                              Other supported wireless devices (Bluetooth adapter, etc.)
├── etc
│  ├── env      <F>
│  ├── hosts    <F>
│  ├── logs
│  │  ├── fsck_btrfs        <F>
│  │  ├── fsck_btrfs_err    <F>
│  │  ├── logins            <F>
│  │  ├── sys                           Logs of system services
│  │  │  ├── app            <F>
│  │  │  ├── crashsave      <F>
│  │  │  ├── crypto         <F>
│  │  │  ├── flow           <F>
│  │  │  ├── fs             <F>
│  │  │  ├── hw             <F>
│  │  │  ├── i18n           <F>
│  │  │  ├── net            <F>
│  │  │  ├── perm           <F>
│  │  │  ├── process        <F>
│  │  │  └── ui             <F>
│  │  ├── upex              <F>
│  │  └── wifi              <F>
│  └── sys
│     ├── awake             <F>
│     ├── hashes            <F>
│     ├── registry          <F>
│     └── users             <F>
├── fl
├── home
│  └── <user>
│     ├── apps
│     │  └── <appname>
│     │     ├── content
│     │     ├── crashsaves
│     │     │  └── [timestamp]_[pid].csf <F>
│     │     ├── data
│     │     ├── packages
│     │     └── sandboxes
│     ├── desktop
│     ├── documents
│     ├── downloads
│     ├── movies
│     ├── music
│     └── pictures
├── mnt
├── sys
│  ├── apps
│  ├── backup
│  ├── boot
│  ├── kernel
│  └── old
└── tmp
   └── <user>
```
