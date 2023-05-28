# Foreword

- [Foreword](#foreword)
  - [Welcome!](#welcome)
    - [What is Violet?](#what-is-violet)
    - [What's the project's structure?](#whats-the-projects-structure)

## Welcome!

Welcome to the documentation of Violet!
These documents will show you how the system is designed,
how it works and what it can offer the end user.

**Before reading these documents, consider that**
I'm developing this project on my own and am not an expert.

This means that there may be mistakes in low-level documents.
If you find a mistake, feel free to [submit an issue](https://github.com/lapis-org/docs/issues/new/choose).

### What is Violet?
Violet is an operating system that aims to replace
legacy systems such as macOS, Linux, and Windows.
Of course, we know how Windows/macOS/Linux are
installed on today's devices. Therefore, Violet
is a theoretical operating system that shows how
an operating system that does not provide backward
compatibility with older architectures will look like.

### What's the project's structure?
The project consists of three different parts:
*the kernel*, *the system* and *the desktop environment*.

**The kernel** basically allows software to access hardware.
It is a microkernel, so unlike a monolithic kernel
like Linux, potential security issues are greatly reduced.

**The system** contains everything not directly related
to hardware or graphical interface. Examples of this
are applications, user accounts, and permission management.

**The desktop environment** is what the user sees from the launch of Violet.