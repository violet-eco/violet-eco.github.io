# Development Roadmap

This document outlines the development roadmap for Violet. Please note that the roadmap
is subject to change as the project evolves and new priorities emerge.

- [Development Roadmap](#development-roadmap)
  - [Phase 1: Conception \<- current stage](#phase-1-conception---current-stage)
  - [Phase 2: Validation](#phase-2-validation)
  - [Phase 3: Implementation](#phase-3-implementation)
    - [Phase 3.1: Core System](#phase-31-core-system)
    - [Phase 3.2: User Interface](#phase-32-user-interface)
    - [Phase 3.3: Application Ecosystem](#phase-33-application-ecosystem)
    - [Phase 3.4: Performance Optimization and Stability](#phase-34-performance-optimization-and-stability)

## Phase 1: Conception <- current stage

The conception phase of Violet project involves documenting and conceptualizing how the
system will work at both high-level and low-level aspects. This phase focuses on defining
the system's concepts, features, native applications, as well as the design and
management of processes and the kernel.

## Phase 2: Validation

The validation phase of Violet involves reviewing and validating the conception documents

that were created during the previous phase. The purpose of the validation phase is to
ensure that the conceived system design is comprehensive, coherent, and aligned with the
project's goals.

During the validation phase, each conception document will be thoroughly reviewed,
analyzed, and evaluated. The validation process aims to identify any gaps, inconsistencies, or potential issues in the system design.

Once a conception document has been validated, it will be considered as a foundation for
the development process and will serve as a reference for subsequent implementation
phases. While breaking changes after validation are still possible, they should be
avoided as much as possible to maintain stability and consistency in the system design.

The validation phase ensures that the conceived system design meets the project's
requirements, aligns with the project's goals, and provides a solid basis for the
subsequent development and implementation stages.

## Phase 3: Implementation

### Phase 3.1: Core System

- **Kernel Development:** Build the microkernel of the operating system with essential functionalities, including process management, memory management, and basic system services.
- **System Initialization:** Implement the boot process, system initialization routines, and device detection mechanisms.
- **Filesystem Implementation:** Develop the Btrfs-based filesystem for storage management, file organization, and data integrity.
- **System Services:** Create essential system services, such as hardware access, filesystem access, networking, and security services.

### Phase 3.2: User Interface

- **Desktop Environment:** Design and implement a modern and intuitive desktop environment for user interaction, including a graphical user interface, window management, taskbar, and system tray.
- **User Accounts and Permissions:** Develop user account management functionalities, including user creation, login/logout, and permissions management.
- **Application Framework:** Build an application framework to support the development, installation, and management of user applications, including package management and application lifecycle management.

### Phase 3.3: Application Ecosystem

- **Violet Store:** Establish an official application store where users can discover, download, and install applications for Violet.
- **Application Development:** Encourage and support third-party developers to create applications for Violet, providing documentation, SDKs, and development tools.
- **Application Compatibility:** Improve compatibility with existing applications by creating compatibility layers, porting tools, and ensuring support for common application frameworks.

### Phase 3.4: Performance Optimization and Stability

- **Performance Optimization:** Continuously optimize system performance, reducing boot time, improving resource utilization, and enhancing overall system responsiveness.
- **Stability and Bug Fixes:** Address any stability issues, software bugs, and performance bottlenecks through rigorous testing, bug fixing, and quality assurance processes.
- **Security Enhancements:** Implement robust security measures, including vulnerability assessments, security patches, and system hardening techniques, to ensure the safety and integrity of the operating system.
