# Crash saves
*Crash saves* prevent most data loss caused
by a crash.

A signal is sent to all running applications
at a periodic time interval that can be changed from the registry (1 minute by default).
This signal can be answered in 3 different ways:
1. Applications respond with all the necessary information they need
to return to the current state they are in.
1. They can also give a specific reply stating that they will not provide crash save data during the current collect. The signal is sent to the application after a certain time.
2. Another response method is a message stating that they will not give any crash saves during this running instance. This time, the signal is not sent to the application's instance again.

If the application does not respond, the signal is aborted but
the next signal continues to be sent.

The integrity of crash saves is checked by
[Eden](../technical/integrity.md) [(GitHub)](https://github.com/violet-eco/eden), integrity checker of Violet, as they are vulnerable to use for malicious purposes.

When the crash save is collected, it is
stored in `/home/[user]/appdata/[appname]/crashsaves/[timestamp]_[pid].csf`.

All [native applications](../concepts/applications.md#system-applications)
support crash saves.