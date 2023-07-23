# I/O Nano-manager

The Input/Output Nano-manager, also known as *Iona*, is an integral part of the
Violet system responsible for handling input/output requests from processes. It serves
as the intermediary between processes and the underlying hardware, managing and
coordinating the flow of data between them.

Iona is represented by the [`sys::hw`](../specs/services/hw.md) service, which provides a
unified interface for accessing and controlling various hardware devices within the system.

- [I/O Nano-manager](#io-nano-manager)
  - [Hardware Access](#hardware-access)
    - [Requests Priority](#requests-priority)

## Hardware Access

When a process needs to access hardware resources, such as storage devices or network
interfaces, it sends its request to Iona. Iona acts as the gatekeeper, deciding whether
to grant or deny the requested access based on predefined rules and permissions.

System services, such as [`sys::fs`](../specs/services/fs.md) for file system operations or [`sys::net`](../specs/services/net.md) for network communication, rely on Iona to
interact with the corresponding hardware devices.

### Requests Priority

To ensure efficient resource utilization, Iona handles the requests from processes based
on their priority. The priority of a request is determined either by the arrival
timestamp of the request or the priority assigned to the process making the request.

In this way, Iona can optimize the allocation of hardware resources and give precedence
to higher-priority processes or time-sensitive operations. This prioritization mechanism
helps ensure smooth and responsive I/O operations throughout the system.
