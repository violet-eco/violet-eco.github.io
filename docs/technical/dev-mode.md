# Developer Mode
The developer mode enables several features that are not
available by default. Only administrator user get access to
them when they are enabled.

- [Developer Mode](#developer-mode)
  - [How to enable?](#how-to-enable)
  - [Kernel Module Development](#kernel-module-development)
  - [Application proxies](#application-proxies)

## How to enable?
Developer mode can be enabled either by typing the following command
in the terminal:

Developer Mode can be enabled in two ways:
1. Open the terminal and type following command:
```sh
vio central --enable dev-mode
```
1. Alternatively, while holding the `Ctrl` `Alt` and `Shift` keys, type `DEV`.

Once Developer Mode is enabled, additional features and options become accessible,
providing developers with greater control and flexibility over the system.

## Kernel Module Development
Kernel module development is a powerful capability offered by Violet's Developer
Mode that allows developers to extend the functionality of the operating system at
the kernel level. Kernel modules are pieces of code that can be dynamically loaded
and unloaded into the running kernel.

Kernel modules have direct access to various services and resources provided by Sakura,
such as memory management, process scheduling, IPC.

## Application proxies
Application proxies collect all calls made by the application to the system.
It is useful for applications debugging.

When a proxy is set up for an application, all system calls sent to this application
will be transferred to the proxy, which will be able to do whatever it wants with it.
It's possible for the proxy to never answer the signal, to change its content before actually sending it to the system, etc.

Basic usage of an application proxy is as a "listener": it only listens to
specific signals and logs them, without cancelling them and/or modifying them.
This is useful to check all filesystem access requested by an application, in real time.