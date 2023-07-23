# Crash saves

Violet has crash saves as a standard feature to prevent data loss due to system failures
or unexpected terminations. When misfortunes occur, such as power outages, crashes or
unexpected shutdowns, Violet's crash save system protects Violetians' work and progress.

- [Crash saves](#crash-saves)
  - [Signal and Response Mechanism](#signal-and-response-mechanism)
  - [Integrity and Security](#integrity-and-security)
  - [Storage and Accessibility](#storage-and-accessibility)
  - [Crash Save Priority Management](#crash-save-priority-management)
  - [Recovery Options](#recovery-options)

## Signal and Response Mechanism

Violet periodically notifies all running programs, with a default interval of one minute,
at a configurable time interval. The applications are prompted by this signal to respond
with the information required to maintain their current condition.

The crash save signal has three possible responses from applications:

1. **Provide crash save information:** Applications can reply by supplying all the necessary data to enable state restoration. This entails maintaining user information, application settings, information about currently active sessions, and any other crucial data needed for a thorough recovery.
2. **Declining the current collect:** Applications have the option to deny delivering crash save information while the signal is being collected. After a specific amount of time, the signal will be transmitted to the application once more.
3. **Refuse crash saves:** Applications have the option of sending a message stating that they will not offer any crash saves while the current instance of the application is operating. Since the application explicitly chooses not to participate in the gathering of crash save data, the signal will not be transmitted to the application's instance once more in this scenario.

Crash save signals are terminated for certain applications if they are not responded to
by the program in question. The succeeding signals, however, will keep getting
transmitted to other open applications.

## Integrity and Security

Violet uses an integrity checker named [Eden](../technical/integrity.md)
([GitHub](https://github.com(violet-eco/eden)) to make sure that crash save data is
reliable and legitimate. For the purpose of preventing any possible tampering with or
unauthorized access to user data, Eden verifies the integrity of crash saves.

## Storage and Accessibility

The directory `/home/[user]/appdata/[appname]/crashsaves/[timestamp]_[pid].csf` is where
crash saves are kept after they have been gathered. This directory's layout makes it
simple to store and access crash save information for specific programs. If users need to
recover work from a prior session, they can use this location to access the crash save
files.

## Crash Save Priority Management

Violet uses intelligent crash save priority management to manage system resources and give
precedence to important processes. The system prioritizes the gathering of crash save
data when several apps are active at once depending on a number of variables, including
application significance, memory utilization, and processing power.

Priority status is granted to critical apps or those that have a greater impact on user
productivity, ensuring that their crash save data is quickly and effectively gathered. To
avoid interfering with the user's main duties, crash saves for lower priority programs
could be delayed.

## Recovery Options

Violet provides enhanced recovery options for Violetians in the case of a system crash, in
addition to automated recovery. Users can select from many recovery locations, each of
which corresponds to a different crash save instance:

Recovery options might include:

- **Restore to the most recent crash save:** Users can choose to restore to the most recent crash save point, allowing them to resume work from the moment of the last crash.
- **Select specific crash save instance**: Users can select a specific crash save from a list of potential recovery points. This enables for a more personalized rehabilitation approach depending on individual needs.
- **Merge crash save data:** In complicated workflows involving numerous instances, users can blend crash save information from various points to restore a thorough and coherent process.
