# Integrity

- [Integrity](#integrity)
  - [System immutability](#system-immutability)
  - [Hashes](#hashes)
  - [Checking hashes](#checking-hashes)

## System immutability

The `/sys` folder is immutable, which means that even the
main administrator cannot change this folder. **The only process**
this folder changes is the repair process or update run by the system itself.

## Hashes

When written to critical files in `/sys` or `/sys/etc`,
their hashes are calculated using the `SHA-256` algorithm and stored in
the system's *hash registry* (the `/etc/sys/hashes` file).

## Checking hashes

When these files are initially read, their contents are calculated
and compared with the hash registry. If the hashes don't match,
the file is considered as *corrupted*. The consequences depend on the location
of the file:

- **System** (`/sys`): the system will check its backup integrity and then restore itself from the backup
- **System backup** (`/sys/backup`): the system will check its backup integrity and then restore itself from the backup
- **System + system backup**: the system won't boot and indicate it must be reinstalled (documents won't be lost if they aren't corrupted) It's possible to force the boot process, but a large warning will indicate it may cause crashes or even introduce security issues
- **Hash registry** (`/etc/sys/hashes`): same as *system + system backup*
- **Registry** (`/etc/sys/registry`): same as *system + system backup*
- **Crash save:** the crash saves won't be restored (can be forced)
- **Sandbox:** system will refuse to start the sandbox (can be forced)