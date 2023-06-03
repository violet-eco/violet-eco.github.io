# I/O Nano-manager
The *Input/Output Nano-manager*, known as *Iona*, is the
part of the system that handles the input/output requests of processes.

Concretely, it is represented by the [`sys::hw`](../specs/services/hw.md) service.

- [I/O Nano-manager](#io-nano-manager)
  - [Hardware access](#hardware-access)
    - [Requests priority](#requests-priority)

## Hardware access
When a process tries to access hardware, that request goes to Iona,
which will either allow or deny it.

System services such as [`sys::fs`](../specs/services/fs.md)
or [`sys::net`](../specs/services/net.md) use Iona to
deal with the related hardware devices.

### Requests priority
The requests of the processes are treated according to their
priority determined by their arrival timestamp. But it can also be
treated by priority of processes, I/O requests of the process with
higher priority are run faster.