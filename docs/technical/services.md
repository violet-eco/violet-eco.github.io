# Services
A *service* is a process that launches at startup and
may receive IPC messages from any process.

- [Services](#services)
  - [System services](#system-services)
  - [Application services](#application-services)

## System services
System services are native applications.
They have system privileges and can do whatever they want.
Their purpose is to perform specific actions without engaging the kernel.

Every system service is a system application that exposes the service.

## Application services
Application services, also called *userspace services*, are provided
by [applications themselves](../concepts/applications.md#services).