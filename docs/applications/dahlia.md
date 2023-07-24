---
slug: dahlia
sidebar_position: 1
description: Dahlia is the toolchain required to build Violet applications.
---

# Dahlia

Dahlia is the toolchain required to build Violet applications.

## Components

Dahlia is built on several components that streamline the application development process:

### Builder

The Builder is responsible for constructing application packages from manifests. It gives
developers the ability to describe the features and needs of their applications, ensuring
a smooth and uniform packaging process. Developers can easily package their works and
share them with Violetians.

```plaintext
$ dahlia build Dahlia.toml -o HelloViolet.vap
```

### Publisher

The Publisher takes center stage after an application has been designed and packaged.
This component enables developers to securely sign their applications and simply publish
them to the [Violet Store](./store.md). With the Publisher's support, developers may
reach a large of Violetians, making their applications accessible to Violetians all over
the world.

```plaintext
$ dahlia sign HelloViolet.vap
$ dahlia publish HelloViolet.vap
```

## External Compiler Integration

Dahlia is built with flexibility in mind. This integration enables developers to fully utilize the capabilities of modern programming languages while creating Violet apps.

Dahlia enables developers to write code in their preferred language while taking benefit of its features, performance improvements and ecosystem by utilizing external compilers. Using Rust as the programming language for your Violet application, for example, lets you to take use of its memory safety support.
