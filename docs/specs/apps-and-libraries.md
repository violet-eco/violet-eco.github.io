# Applications and libraries

This document describes the structure, features and behaviours
to both [applications](../concepts/applications.md) and
[libraries](../concepts/libraries.md).

- [Applications and libraries](#applications-and-libraries)
  - [Name and slug](#name-and-slug)
  - [Application identifier](#application-identifier)
  - [Features](#features)
  - [Manifest](#manifest)

## Name and slug

Each application has a name as well as a slug. The name can any valid UTF-8 string, while the slug must respect several rules:
- Only lowercase letters, underscores and digits
- Must not start by a digit
- Must not be the name of a native shell command
- Must not be the name of a native shell function
- Must not be the name of a shell type

By default, the slug is auto-generated from the name, but it can also be customized.

## Application identifier

The *Application identifier* (AID) is created using the slug and the developer's identifier (DID).

For example, an application with slug of `app` made by a developer
whose DID is `gulje` will get an AID of `gulje::app`.

The AID is unique across the store as well as in a single Violet installation.
As malicious application may provide the DID and the slug of a legit application
(*AID spoofing*), sideloading is verified by default.

System applications are registered under the reserved `sys` DID.

## Features

Applications and libraries can define features that are optional parts in the application.
They are described in the manifest and can be enabled or disabled when installing
a program.

Each feature allows to embed additional assets and declare additional supported
languages and a specific build option.

This allows to save space and build time when a specific feature isn't required,
but should still embedded in the program itself instead of making an additional
application or library.

When the manifest declares one or more feature(s), it must also specify
a set of default features to enable.

## Manifest
```toml
[infos]
name = "Beautiful App" # [REQ]
slug = "beautiful-app" # [REQ]
description = "The most beautiful app on the Violet Store" # [REQ]
version = "1.0.0" # [REQ]
authors = [ # [REQ]
  "Gülce <guljeee@yandex.com>",
  "Tuhana <hi@tuhana.me> (https://tuhana.me)"
]
icons = "assets/icons/app/%{}.png" # [REQ]
license = "Apache-2.0" # [OPT] SPDX License Identifier

[content] # [OPT]
assets = ["./assets"]

[content.program] # [REQ]
precomp = "main.vpp" # <for precomp packages> [REQ]

# Packages can either contain source code only, pre-compiled programs only, or both
[content.program.source] # <for source packages> [REQ]
toolchain = "rust" # [REQ]
build = {} # [REQ]
options = { optimize = "O3" } # [OPT]

[dependencies.libraries] # [REQ]
sysver = "^1.0.0"

[features.testing] # [OPT]
assets = [] # [OPT]
dependencies = {} # [OPT]
languages = [] # [OPT]
```