- [Welcome](#welcome)
  - [What is Violet?](#what-is-violet)
    - [Key Features](#key-features)
    - [My Big Dreams and Goals](#my-big-dreams-and-goals)
    - [Components](#components)
      - [Kernel (Sakura)](#kernel-sakura)
      - [System](#system)
      - [Desktop Environment](#desktop-environment)

# Welcome

![Banner](https://github.com/violet-eco/docs/blob/main/brand/banner.png?raw=true)

Dear Violetian, welcome to the documentation of Violet! These documents serve as a
comprehensive guide to understand the inner workings of Violet, its features and its
potential. Whether you are a developer, an enthusiast or simply curious about Violet,
this documentation will provide valuable insights into the project.

Now, let's get real for a moment. Violet is a project by a single person (me truly), so
while I've poured my heart and soul into it, there may be a few quirks or hiccups along
the way. If you spot any bugs, glitches or have ideas for improvement, please don't hold
back—your feedback is invaluable!

Thank you for joining me on this exciting adventure with Violet.
Let's unlock the full potential of your digital world.

## What is Violet?

Violet is not just another run-of-the-mill operating system. It's a revolutionary
platform that's set to redefine the way we interact with technology.

Imagine an operating system that combines the best features of macOS, Linux and
Windows, while pushing the boundaries of performance, security and customization.
That's exactly what Violet aims to achieve.

### Key Features

1. **Advanced Privacy and Security:** Violet takes your privacy and security seriously. With built-in encryption, secure boot verification and comprehensive permission management, you have full control over your data. Refer to [this document](./features/privacy-and-security.md) for further details.
2. **AI-Powered Personal Assistance:** Meet your new digital companion!
3. **Cloud Integration:** Harness the power of the cloud with seamless integration into Violet. Access your files, sync data across devices and collaborate with ease, all while ensuring the highest level of data protection.
4. **Immutable System:** Violet adopts the concept of immutability, ensuring that critical system files and configurations remain unchanged. This provides a stable and secure foundation for the operating system.

### My Big Dreams and Goals

1. **Accessibility to ALL:** I strive to make Violet accessible to every Violetian, regardless of their abilities or limitations. I'm committed to implementing inclusive design practices and providing a range of accessibility features to ensure that Violet is usable by every Violetian. Refer to [this document](./applications/lotus.md#accessibility-features) for further details.

### Components

Violet's architecture is designed with modularity, performance and flexibility in mind. It consists of several key components that work together harmoniously to create an efficient operating system.

#### Kernel (Sakura)

> Refer to [this document](./specs/kernel/README.md).

At the heart of Violet lies the microkernel named *Sakura*. The kernel provides the
foundation for all system applications and facilitates communication between the hardware
and software layers. It ensures the efficient utilization of system resources, enforces
security measures, manages processes and memory.

#### System

The system encompasses all the essential system-level functionalities and services that
enable the smooth operation of Violet. This includes the management of user accounts,
permissions, file systems, networking, security and system configurations. The system
component acts as the intermediary between the kernel and the user-facing applications,
ensuring proper coordination and execution of system-level tasks.

#### Desktop Environment

> Refer to [this document](./applications/lotus.md).

The desktop environment in Violet, known as *Lotus*, provides the user interface for
interacting with the operating system and its applications. It encompasses the graphical
elements, window management, application launchers, taskbars and other visual components
that make up the user experience. Lotus offers a modern, intuitive and customizable
interface, allowing users to personalize their desktop, switch between applications, and
access system features efficiently.
