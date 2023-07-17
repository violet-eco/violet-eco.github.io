# Services
In Violet, a *service* is a process that launches at startup and performs specific tasks or provides functionality to the system or applications. Services can be categorized into two types: *system services* and *application services*.

- [Services](#services)
  - [System services](#system-services)
  - [Application services](#application-services)

## System services
System services are native applications that are an integral part of the Violet operating
system. These services have system privileges, allowing them to perform various tasks and
interact with the system at a deep level. They are responsible for managing critical
system functionalities and providing essential services to other processes.

They are designed to handle specific actions and functions without directly engaging the
kernel. They have the necessary permissions and access to system resources to perform
their tasks effectively. These services are typically launched at system startup and run
in the background, ensuring the smooth operation of the operating system.

Check [this document](../specs/services/README.md) for further details.

## Application services
Application services, also known as *userspace services*, are services provided by
applications themselves. These services extend the functionality of applications and
allow them to provide specific features or interact with other parts of the system.
Application services are typically created and managed by application developers and are
specific to their respective applications.

Application services can be accessed and utilized by other applications or system
components through well-defined APIs or communication mechanisms. These services enable
inter-application communication, data sharing, and collaboration, making it possible to
build complex and integrated software ecosystems on top of Violet.

Examples of application services include:
- A messaging application providing a service for sending and receiving messages.
- A media player application offering a service for playing audio and video files.
- A document editor providing a service for creating and editing documents.

By leveraging application services, developers can build rich and interconnected
applications that leverage the capabilities of Violet and provide seamless user
experiences.