# What are users?

- [The concept](#the-concept)
- [Users type](#users-type)
- [Dangers of an administrator account](#dangers-of-an-administrator-account)
- [User Privileges Elevation (UPE)](#user-privileges-elevation-upe)
- [Groups](#groups)

## The concept

Many computers are intended to be shared by multiple persons.
In such case, it is useful to separate the data of each user
and to prevent other users from accessing another's.

By default, there is two user accounts: the System and the Administrator.
They are called *virtual users* because it's not possible to log in
these accounts. Other users are called *custom users*.

Each custom user has a dedicated data directory called *homedir*, in
`/home/[username]`, as well as a list of files and directories it
can read and/or write. By default, each user gets access to:

- Its homedir in `/home/[username]`
- The mounted periphericals in `/media`
- Its temporary directory in `/tmp/[username]`

## Users type

Each user is of a specific type:
- *Phantom*: the user's datas are erased after the computer is turned off
- *Standard*: nothing special
- *Administrator*: can run programs directly as administrator
- *Main administrator*: administrator that can manage storage encryption

When a user wants to perform a task it does not have the privileges to,
it can (by default) ask to run the task as *another user*. The other user's
credentials are then required.

It's not possible to ask to run a task as system or as administrator as these
accounts are virtual and do not have passwords such, **except** if an administrator
user tries to run a task as administrator.

Note that there is always one and exactly one main administrator. The user account
is created during the installation process, and can be transferred later on to
another administrator account.

## Dangers of an administrator account

The problem with administrators account is that **can do almost anything**
(except some very specific things like editing the system's files). They can
change system settings, read and change other users' data, and even run background
processes at startup. They also have all possible privileges as they can edit their
own.

This is why it's extremely discouraged to have two administrator users on the
same computer, unless the two accounts are used by really trustworthy persons.
As such, a large warning is shown if you try to create a new administrator user.

## User Privileges Elevation (UPE)

Users can ask to perform a task with the privileges of another user, such
as running a program as administrator. This uses the *User Privileges Elevation*
(UPE) system.

In such case, the program is still run as the current user, but with the
privileges of both the running user and the user specified to the UPE.

Running a program with UPE requires to know either the other account's
password, or to have an *authorization* from this user. For instance, admin.
users have an *authorization* to use Administrator account, without providing
any password, although a human confirmation is required.

Each request, successful or not, is logged in the log file at `/etc/logs/auc`.

## Groups

*Groups* are a set of privileges defined by the administrator. Access some folders
or application's permissions (e.g. microphone access) can be restricted to a specific
group, for instance. When a user is created, it can be put in a group. It then
automatically inherits all of the group's privileges, in addition to its own ones.
The administrator can add and remove users from groups with the control panel.

When a user is in a group, the group's privileges cannot be revoked for this user.