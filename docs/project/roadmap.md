---
slug: roadmap
sidebar_position: 1
description: This document outlines the development roadmap for Violet.
---

# Roadmap

This document outlines the development roadmap for Violet. Please note that the roadmap
is subject to change as the project evolves and new priorities emerge.

## Phase 1: Conception <- current stage

Documenting and conceiving how the system would function from both a high-level and low-level perspective are tasks involved in the conception phase of the Violet project. The principles, features, and native applications of the system are defined at this phase, along with the design and administration of the kernel and processes.

## Phase 2: Validation

Reviewing and validating the conception documents that were produced during the previous
phase is part of Violet's validation process. The validation phase's goal is to confirm
that the proposed system design is complete, coherent and in line with the project's
objectives.

Each conception document will be carefully examined, studied and assessed during the
validation phase. The goal of the validation phase is to find any holes, contradictions
or possible problems in the system design.

A conception document will be used as the basis for the development process and as a
guide for the next phases of execution once it has been confirmed. Even while breaking
changes can still be made after validation, it is best to avoid them in order to preserve
the stability and coherence of the system architecture.

The validation phase makes that the proposed system design satisfies the project's
criteria, is in line with its objectives and serves as a firm foundation for the
development and implementation phases that follow.

## Phase 3: Implementation

### Phase 3.1: Core System

- **Kernel development:** Create the operating system's microkernel with necessary features, such as process management, memory management, and foundational system functions.
- **System initialization:** Implement the system initialization procedures, device detection techniques and boot process.
- **Filesystem Implementation:** Create the Btrfs-based filesystem for storage management, file organization, and data integrity.
- **System Services:** Create crucial system services, such as networking, filesystem access, hardware access and security services.

### Phase 3.2: User Interface

- **Desktop Environment:** Design and implement a cutting-edge desktop environment that is simple to use, complete with a graphical user interface, window management, taskbar, and system tray.
- **User Accounts and Permissions:** Create user account management features, such as login/logout, permissions management, and user creation.
- **Application Framework:** Create a framework for managing user applications, including package management and application lifecycle management, during the development, installation and management phases.

### Phase 3.3: Application Ecosystem

- **Violet Store:** Create a dedicated application store where users can browse, download and install Violet apps.
- **Application Development:** Support and encourage the creation of apps for Violet by third parties by making documentation, SDKs and development tools available.
- **Application Compatibility:** By creating compatibility layers, implementing tools, and supporting well-liked application frameworks, it is possible to improve compatibility with existing applications.

### Phase 3.4: Performance Optimization and Stability

- **Performance Optimization:** Continuously improve system performance by cutting down on boot time, increasing resource efficiency and boosting responsiveness across the board.
- **Stability and Bug Fixes:** Apply stringent testing, bug-fixing, and quality assurance procedures to any stability concerns, software flaws and performance bottlenecks.
- **Security Enhancements:** To protect the integrity and safety of Violet, use strong security procedures, such as vulnerability assessments, security patches and system hardening approaches.
