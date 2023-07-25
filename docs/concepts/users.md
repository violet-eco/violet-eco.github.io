---
slug: users
sidebar_position: 3
description: User accounts allow multiple Violetians to use a Violet system.
---

# Users in Violet

## The Concept

Violet is intended to be shared by numerous Violetians, and user accounts are critical to
ensuring individual data separation and access limits. System and Administrator are the
default virtual users, with custom users having their own data folders called home
directories placed at `/home/[user]`. Custom users can access their home directories,
mounted units under `/mnt`, and temporary folders under `/tmp/[user]`.

## User Types

Each user is in one of these types:

- **Guest Users:** When the computer is shut off, the data of guest users is immediately destroyed. This kind is appropriate for brief periods and guarantees that no traces are left behind.
- **Standard Users:** Standard users have ordinary access and rights and can accomplish actions that do not require enhanced authorization.
- **Administrator Users:** Administrator users have the power to launch applications with administrator rights directly. They have the power to change system settings and control the data of other users.
- **Main Administrator:** A unique administrator account that has extra powers, such as handling storage encryption.

:::danger

## Dangers of an Administrator Account

Administrator credentials are comprehensive, allowing users to execute essential
system-level functions. These rights, however, come with hazards, since administrators
may mistakenly make modifications to the system or other users' data. Violet suggests
limiting the amount of administrator accounts and ensuring that they are only utilized by
trustworthy Violetian for increased security.
:::

## User Privileges Extension (UPEX)

Users can request User Privileges Extension (UPEX) to accomplish operations that need elevated rights. The software runs as the same user but with the given increased rights when using UPEX. To begin UPEX, the user must enter their password or obtain authorisation from another user with the necessary credentials.

Important notes about UPEX:

- Administrator accounts can utilize UPEX *without* a password to access the Administrator account.
- To provide openness and accountability, all UPEX requests are stored in the log file at `/etc/logs/upex`.

## Groups

Violet's groups allow the administrator to define sets of privileges and access
permissions. Users can be allocated to certain groups and inherit the rights of the group
in addition to their own. Access to files and application permissions can be controlled
by the administrator depending on group membership. The control panel makes it simple to
add or remove people from groups.

Once a user is in a group, the group's privileges cannot be withdrawn for that user,
guaranteeing consistent access permissions among group members.
