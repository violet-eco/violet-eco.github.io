# What are users?

- [What are users?](#what-are-users)
  - [The concept](#the-concept)
  - [Users type](#users-type)
  - [Dangers of an administrator account](#dangers-of-an-administrator-account)
  - [User Privileges Elevation (UPE)](#user-privileges-elevation-upe)
  - [Groups](#groups)

## The concept

Most computers are intended to be shared among many people.
In such a situation it is quite useful to separate each user's
data from each other and restrict access to the other.

By default, there are two user accounts: the *System* and the *Administrator*.
They are called *virtual users* because it is not possible to log in these accounts.
Other users are called *custom users*.

Each custom user has a data folder called *home directory* designated as `/home/[username]`.
Users can access the files and folders inside this folder and do whatever they want.
By default, each user has access to:

- Its home directory in `/home/[username]`
- The mounted units in `/media`
- Its temporary directory in `/tmp/[username]`

## Users type

Each user is in one of these types:

- **Phantom:** all data of the user is deleted after the computer is turned off
- **Standard:** nothing special
- **Administrator:** can run programs directly as administrator
- **Main administrator:** administrator account that can manage storage encryption

When a user wants to perform a task for which he is not authorized,
it may want to run the task as another user. The other user's login
informations are required then.

A task cannot be performed as system or administrator because these
accounts are virtual and have no passwords, **except** if an administrator
user tries to run a task as administrator.

Keep in mind that there is always only one and exactly one administrator.
This account is created during the installation process and can later be transferred
to another administrator account.

## Dangers of an administrator account

The problem with the administrator account is that **it can do anything** (except
some very specific things). They can change system settings, read and modify other users'
data, and even run background processes on startup.
They also have all possible permissions.

Having two administrator accounts on one computer is **definitely** not
recommended unless both accounts are used by trusted people. For this reason,
a large warning is shown when you try to create a new administrator account.

## User Privileges Elevation (UPE)

Users can request permission to run a task as another user, such as running as administrator.

In such a case, the program is still run as the same user, but with the same user's
privileges and the user's privileges specified to the UPE.

To run a program with UPE, either knowing the user's password or *authorization*
from this user is required. For example, administrator accounts are *authorized*
to use the Administrator account without specifying a password.

Successful or not, every request is logged in the log file at `/etc/logs/auc`.

## Groups

Groups are a set of privileges defined by the administrator. Access some folders or application's permissions (e.g. microphone access) can be restricted to a specific group, for instance. When a user is created, it can be put in a group. It then automatically inherits all of the group's privileges, in addition to its own ones. The administrator can add and remove users from groups with the control panel.

When a user is in a group, the group's privileges cannot be revoked for this user.