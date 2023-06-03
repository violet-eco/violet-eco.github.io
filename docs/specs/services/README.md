# System services
Since [Sakura](../kernel/) is microkernel, it only handles the most basic things.

System services are run by the system itself under the `sys` [DID](../apps-and-libraries.md#application-identifier).

# List of system services
- PID 10: [`sys::fs`](./fs.md): filesystem management service
- PID 11: [`sys::hw`](./hw.md): hardware communication service
- PID 12: [`sys::perm`](./perm.md): permissions management service
- PID 13: [`sys::net`](./net.md): network communication service
- PID 14: [`sys::crypto` (WIP)](): cryptography service
- PID 15: [`sys::crashsave` (WIP)](): crash save management service
- PID 16: [`sys::flow` (WIP)](): flow management service
- PID 17: [`sys::i18n` (WIP)](): translation service
- PID 18: [`sys::ui` (WIP)](): user interface service
- PID 19: [`sys::app` (WIP)](): application management service
- PID 20: [`sys::process` (WIP)](): process management service