---
slug: meteor
sidebar_position: 1
description: Meteor is the toolchain required to build Violet applications.
---

# Meteor

Meteor is the toolchain required to build Violet applications.

## Components

Meteor is built on several components that streamline the application development process:

### Builder

The Builder is responsible for constructing application packages from manifests. It gives
developers the ability to describe the features and needs of their applications, ensuring
a smooth and uniform packaging process. Developers can easily package their works and
share them with Violetians.

```plaintext
$ meteor build Meteor.toml -o HelloViolet.vap
```

### Publisher

The Publisher takes center stage after an application has been designed and packaged.
This component enables developers to securely sign their applications and simply publish
them to the [Violet Store](./store.md). With the Publisher's support, developers may
reach a large of Violetians, making their applications accessible to Violetians all over
the world.

```plaintext
$ meteor sign HelloViolet.vap
$ meteor publish HelloViolet.vap
```

## External Compiler Integration

Meteor is built with flexibility in mind. This integration enables developers to fully utilize the capabilities of modern programming languages while creating Violet apps.

Meteor enables developers to write code in their preferred language while taking benefit of its features, performance improvements and ecosystem by utilizing external compilers. Using Rust as the programming language for your Violet application, for example, lets you to take use of its memory safety support.
