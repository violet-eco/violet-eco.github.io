# Controller

*Controller* is a system library that manages permissions of libraries.

It is concretely represented by the [`sys::perm` (WIP)]() service.

- [Notion of scope](#notion-of-scope)
- [The perm system library](#the-perm-system-library)
- [Permission extension](#permission-extension)

## Notion of scope

Permissions are split into several scopes:

- The *application scope* contains the permissions a given process is borned from
- The *user scope* contains the permissions the user who launched the application has
- The *mode scope* contains the permissions the *execution mode* (either system or userland) has

The mode scope restricts the user scope, which itself restricts the application scope.
This means that, if the application scope specify a permission that is not covered by
the user scope, it is not applyable to the process. This allows to prevent applications
and users from getting too high permissions.

The mode scope prevents applications from performing harmful tasks such as writing the
system. Only system applications, which run in system mode instead of userland mode,
gets an unrestricted mode scope.

## The perm system library

The `perm` system library is an interface for the controller which allows processes
to check their own permissions, ensure they can make I/O requests before effectively
making them, and extend their permissions.

## Permission extension

A process can, at any moment, send a *permission extension request* (PER) using
the `perm` library. It allows to gain a new permission by showing an overlay the
user can accept or decline. If the permission is accepted, the requested permission
is added to the process' one - and sometimes the application's one.

If the requested permission is out of its maximum scope (e.g. asking for write access to
`/etc` while being ran as standard user), the request is automatically rejected.