# Foreword

## Welcome!

Welcome to LapisOS' documentation! This book will show you how the
system is designed, how it works, and all the little things it can offer
to the end user as well as the features available for application developers.

**Before reading this documentation, please note that** I'm developing this
project on my own and I'm by no mean an operating system expert.

This means there are surely many flaws in the very low-level aspects, especially
in the microkernel, like the way hardware devices are handled and mapped in memory.
If you find a flaw, feel free to [submit an issue](https://github.com/lapis-org/docs/issues/new).

### What is LapisOS?
LapisOS is an operating system aiming to replace ancient systems like Windows,
Linux, MacOS. Well, this is an *ideal* goal but given how much Windows/Linux/MacOS
and other systems are deeply installed in today's computers, LapisOS is more of
a theorical operating system that shows what we could get if we hadn't to maintain
legacy compatibility with ancient architectures.

### What's the project's structure?
The project is composed of three distinct parts: the kernel, the system
and the desktop environment.

The first one is the part that allows the software to access the hardware,
like writing files to the disk. It's a microkernel, meaning it's easier to
maintain and has a reduced attack surface for potential security issues
than a monolithic kernel like Linux.

The system is the higher-level component that deals with everything that is
not directly related to hardware or graphical interface. For instance, applications,
user accounts and permissions are all managed by the system.

The desktop environment, finally, is the part the user sees when launching LapisOS.