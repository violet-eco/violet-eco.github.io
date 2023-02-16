# Parental Control

*Parental control* allows to manage a child's access to
a computer running LapisOS.

- [Parental Control](#parental-control)
	- [How it works](#how-it-works)
	- [Features](#features)
		- [Restrict usage hours](#restrict-usage-hours)
		- [Restrict mature contents](#restrict-mature-contents)
		- [Restrict access to applications](#restrict-access-to-applications)
		- [Restrict access to websites](#restrict-access-to-websites)
		- [Restrict installation of applications](#restrict-installation-of-applications)

## How it works

Parental control works using (at least) two accounts: the parent's
account, and the child's account, which is related to as a *child user*.
Note that multiple child users can be managed using parental control.

The parent account then gets access to an application called "Parental Control",
which allows access all parental control-related features for each child user.

It is also possible to get important notifications by email, and even to install
a smartphone application (iOS/Android) which brings the parental control application
to phones, allowing to manage child users even when not at home.

## Features

### Restrict usage hours

This feature allows to restrict usage of the computer by the child user during
specific hours in the day. These hours can be set independently for each day of
the week, allowing for instance to set specific hours in the week-end. It's also
possible to set specific hours for some specific weeks or periods of times
(e.g. for four specific days in a row), allowing for instance to set specific hours
for vacations.

Child user will not be able to log in outside of these hours. If they are logged in
when the upper limit is reached (e.g. only 8AM to 9AM is allowed and the child user
is still logged in as 9AM), a warning message will shown 15 minutes before reaching
the time limit, 5 minutes before, and 1 minute before, allowing the child to save
its data.

When the final minute comes, a pop-up shows telling the session is going to be closed
in 60 seconds, and a cooldown is shown in a closable pop-up balloon in the taskbar.
An option is also shown to extend the session by up to fifteen-minutes, sending
a notification to the parent's phone as well as an e-mail.

The parent can then do nothing and the session will extend for a maximum of fifteen minutes,
or reject it and the computer will shut down after 1 minute. Then another option shows to
ask if the parent wants to permanently disable time extension.

### Restrict mature contents

The child user's birth date can be declared during setup, so its age (not its birth date)
will be availeble to every application which asks for it (with a specific permission, which
is by default automatically granted to all applications	which ask it).

This allows, for instance, for web browsers to block websites that declare themselves as showing
adult contents. Or even more precise protection, like a movies store not showing movies whom age
limit is beyond the child user's age.

### Restrict access to applications

This feature restricts access to some applications, either using a
whitelist (listing all the *allowed* applications) or using a blacklist
(listing all the *forbidden* applications).

It's possible to automatically white/black-list new applications.

### Restrict access to websites

This feature restricts access to some websites, either using a whitelist or
blacklist. It's also possible to apply these restrictions only to compatible
web browsers. Whitelist is strongly discouraged outside of web browsers-only
usage, as it may prevent some applicatiosns to work properly.

Whenever an application tries to access a forbidden website, the request will
fail with a specific code indicating it's forbidden by parental control. Applications
can still enforce this rule but this requires a specific permission that cannot be
allowed by child users.

These restrictions are enabled through the built-in firewall.

### Restrict installation of applications

This feature prevents child users from installing and running volatile applicaitons.
By default, installation is allowed but sends a notification to the parent user asking
if the child user is allowed to install the requested application; while running volatile
applications is simply disabled.