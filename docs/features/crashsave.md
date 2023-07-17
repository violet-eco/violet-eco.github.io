# Crash saves
Crash saves are a crucial feature in Violet that helps prevent data loss caused by system
crashes or unexpected terminations.

## Signal and Response Mechanism
Violet sends a periodic signal to all running applications at a configurable time
interval, with a default interval of 1 minute. This signal prompts the applications to
respond with the necessary information to return to their current state.

Applications have three response options to the crash save signal:
1. **Provide Crash Save Data:** Applications can respond by providing all the relevant information needed to restore their state. This includes preserving user data, application settings, active session details, and any other critical data required for a complete recovery.
   
2. **Decline Current Collect:** Applications may choose to decline providing crash save data during the current signal collection. The signal will be sent to the application again after a certain time.
   
3. **Refuse Crash Saves:** Applications can send a message indicating that they will not provide any crash saves during the current running instance. In this case, the signal will not be sent to the application's instance again, as the application explicitly opts out of participating in crash save data collection.

If an application does not respond to the crash save signal, the signal is aborted for
that particular application. However, the subsequent signals will continue to be sent to
other running applications.

## Integrity and Security
To ensure the trustworthiness and authenticity of crash save data, Violet incorporates an
integrity checker called [Eden](../technical/integrity.md) ([GitHub](https://github.com(violet-eco/eden))). Eden validates the integrity of crash saves to
prevent any potential tampering or unauthorized access to user data.

## Storage and Accessibility
When crash saves are collected, they are stored in a dedicated directory: `/home/[user]
appdata/[appname]/crashsaves/[timestamp]_[pid].csf`. 
It's important to note that crash saves are supported by all native applications in Violet.