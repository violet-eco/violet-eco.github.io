# Notifications

*Notifications* are the way for both the applications and the system
itself to indicate when an event happens which user should be notified of,
or to indicate a persistent state.

- [Notifications](#notifications)
	- [Structure](#structure)
	- [Display rules](#display-rules)
		- [Cover image](#cover-image)
		- [Buttons](#buttons)
	- [Persistent notifications](#persistent-notifications)
	- [Notification types](#notification-types)
		- [Free Notifications](#free-notifications)
		- [Multimedia Notifications](#multimedia-notifications)

## Structure

A notification is made of:

- A title
- A description

As well as optional fields:

- A description
- An icon (by default the icon of the [application](../concepts/applications.md))
- A notification sound (by default selected by the system)
- A shaking effect
- A background color (by default chosen by the desktop environment)
- A set of [buttons](#buttons)
- A [cover image](#cover-image)
- A [persistent state](#persistent-notifications)
- A [type-dependent](#notification-types) set of data
- A timeout
- A handler called when the notification is clicked
- A context menu when the notification is right-clicked

## Display rules

The way notifications are displayed depends on the [desktop environment (WIP)](),
therefore the requested shaking effect, background color, and so may not be respected
by DE, although it's highly recommended for DE to follow these attributes.

Also, there is no rule indicating how elements are visually arranged inside a notification.
Some DE may for instance put the icon on the left, while some others on the right. Additional
elements may also be displayed, such as a cross to close the notification or an arrow to hide
it to the [notifications center (WIP)]().

### Cover image

A notification can request to display a large image. Some desktop environments may decide
to hide the application's icon in such case.

### Buttons

Notifications can have action buttons, which are then linked to the owner application's
event system. Buttons are usually limited in size and colors.

## Persistent notifications

Persistent notifications don't disappear after a timeout. They can for instance be used to
indicate a pending state like the activation of a battery-consuming element like a GPS.

## Notification types

There are several notification types, which their own required sets of data.

### Free Notifications

This is the default type of notifications, which no particular constraint.

### Multimedia Notifications

Multimedia notifications are used to indicate a [multimedia playback (WIP)](). It must
be composed of a cover image and six buttons (previous, rewind, play/pause, stop, fast-forward, next)
whose appearance is decided by the [desktop environment (WIP)]().