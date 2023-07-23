---
slug: integrity
sidebar_position: 3
description: Integrity is a crucial aspect of Violet, ensuring the stability, security and reliability of the system.
---

# Integrity

Integrity is a crucial aspect of Violet, ensuring the stability, security
and reliability of the system.

## System immutability

The `/sys` folder in Violet is designed as immutable, meaning that
it cannot be modified by any user or process, including the main administrator.
This strict immutability ensures the integrity and consistency of system-level
components and configurations. The only exceptions to this immutability rule are the
repair process and system updates initiated by the operating system itself.

## Hashes

To ensure the integrity of critical files within the `/sys` and `/sys/etc` directories,
Violet employs the [`BLAKE3`](https://github.com/BLAKE3-team/BLAKE3) hashing algorithm.
When these files are written or updated, their contents are hashed, and the resulting
hash values are stored in the system's hash registry, located at `/etc/sys/hashes`.

## Checking hashes

During the boot process or when critical files are accessed, Violet performs integrity
checks by recalculating the hashes of the files and comparing them with the values stored
in the hash registry. If the calculated hashes do not match the stored values, it
indicates that the file has been tampered with or corrupted.

1. System (`/sys`) or System Backup (`/sys/backup`):
   - If a hash mismatch is detected in a system file, Violet initiates a check of the system backup's integrity.
   - If the backup is intact, the system will restore itself from the backup.
   - If the backup is also corrupted, the system will refuse to boot and prompt for reinstallation.
   - Users' personal documents and data will remain unaffected unless they have been specifically corrupted.
2. Hash Registry (`/etc/sys/hashes`) or Registry (`/etc/sys/registry`):
   - Similar to the system files, a hash mismatch in the hash registry or system registry triggers a check of the system backup's integrity.
   - If the backup is valid, the system will restore itself from the backup, preserving the integrity of the hash registry and registry files.
3. Crash Save:
   - In the case of crash saves, if a hash mismatch is detected, the corresponding crash save file will not be restored.
   - This precautionary measure ensures that potentially corrupted crash saves do not compromise the stability or security of the system.
   - In exceptional cases, users may choose to force the restoration of crash saves, but they are warned about the potential risks and instability it may introduce.
4. Sandbox:
   - If a hash mismatch occurs in a sandbox file, the system will refuse to start the sandbox.
   - This safeguard prevents potential security breaches that could arise from compromised or tampered sandbox environments.
   - As with crash saves, there is an option to force the startup of the sandbox, but it is accompanied by a warning highlighting the associated risks.
