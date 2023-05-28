# Pre-compiling

In traditional systems, programs are distributed as
binary and are only availeble for one specific platform (Windows, Linux, macOS, ...)
with a specific architecture (x86, ARM, ...).

To prevent this and to make native programs more stable and
secure, Violet applications are distributed as *Violet Pre-compiled Programs*
(VPP) using a special very low-level language called [**Rosa**](https://github.com/violet-eco/rosa).

- [Pre-compiling](#pre-compiling)
  - [How it works?](#how-it-works)
  - [Compatibility](#compatibility)

## How it works?

[**Rosa**](https://github.com/violet-eco/rosa) is very similar to WebAssembly: compressed very low-level
source files that are built ahead of time on the machine that will
run it. This enables several advantages:

- Programs are multi-platform and multi-architecture
- Programs run faster thanks to being optimized for the specific machine they will run on
- Programs are still very fast to compile
- Source code is protected for closed-source applications as Rosa is made of basic instructions

## Compatibility

Rosa can also run on non-Violet operating systems using a lightweight
wrapper available on Violet's website.

**NOTE:** Although Rosa is multi-platform, Violet apps use Violet's
ultra-beautiful features that are *not* natively supported on other platforms.
To run such applications, you must install the [full wrapper](multi-platform.md) available on the website.