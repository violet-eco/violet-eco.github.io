# Developer Mode

The *developer mode* enables several features that are not available by default.
Only administrator user get access to them when they are enabled.

- [Developer Mode](#developer-mode)
  - [How to enable](#how-to-enable)
  - [Application proxies](#application-proxies)

## How to enable

Developer mode can be enabled either by typing the following command in the terminal:

```
adm central --enable dev-mode
```

Or, while holding the `Ctrl` `Alt` and `Maj` key, type `DEV`.

A warning dialog will appear. If you confirm, it will display an
[UPE dialog](../concepts/users.md#user-privileges-elevation-upe)
for the administrator account. Then a final confirmation dialog
will ensure you're sure about what you're doing. Then development mode will
be enabled (no reboot is required).

## Application proxies

*Application proxies* are applications that intercept all applications calls to
the system on-the-fly. It is useful for applications debugging.

When a proxy is set up for an application, all system calls sent to this application
will be transferred to the proxy, which will be able to do whatever it wants with it.
It's possible for the proxy to never answer the signal, to change its content before
actually sending it to the system, etc.

Basic usage of an application proxy is as a "listener": it only listens to specific
signals and logs them, without cancelling them and/or modifying them. This is useful
to check all filesystem access requested by an application, in real time.