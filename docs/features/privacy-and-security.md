# Privacy and Security

- [Privacy and Security](#privacy-and-security)
  - [User Data Protection](#user-data-protection)
    - [End-to-End Encryption](#end-to-end-encryption)
    - [Secure Storage](#secure-storage)
    - [Data Minimization](#data-minimization)
    - [Privacy Dashboard](#privacy-dashboard)
    - [Privacy Mode](#privacy-mode)
    - [Password Management](#password-management)
  - [Secure Boot Verification](#secure-boot-verification)
    - [Trusted Certificates](#trusted-certificates)
    - [System Recovery and Repair](#system-recovery-and-repair)
  - [Remote Wipe](#remote-wipe)
    - [How Remote Wipe Works?](#how-remote-wipe-works)
    - [Considerations for Remote Wipe](#considerations-for-remote-wipe)

## User Data Protection

Violet prioritizes data security and the platform is constructed with robust mechanisms
to secure user data while maintaining a high degree of privacy and security.

### End-to-End Encryption

Violet secures Violetians' data using end-to-end encryption mechanisms, guaranteeing that
data is encrypted before leaving the device and can only be decrypted by the intended
receiver.

1. **Secure Communication Channels:** Violet creates safe communication channels between devices and services to permit encrypted data sharing.
2. **Encryption at the Source:** User data is encrypted at the source, which means it is encrypted before leaving the user's device and stays encrypted during its travel.
3. **Zero-Knowledge Architecture:** Violet has a zero-knowledge architecture, which means that neither the service providers nor the intermediates engaged in data transfer have access to the decryption keys nor the unencrypted user data.

### Secure Storage

Violet uses secure storage technologies to keep user data safe from unwanted access or
manipulation.

1. **Data Encryption:** Data is encrypted when it is written to storage using powerful encryption methods. Without the decryption keys, the data remains unreadable and unavailable even if the underlying storage media is compromised.
2. **Access Controls:** Violet uses strong access controls to prevent unwanted access to user data, assigning access rights at multiple levels such as file and folder permissions, user privileges, and system-level constraints.
3. **Secure File Systems:** Violet makes use of secure file systems such as the Btrfs file system, which has features such as integrity checks and snapshot capabilities.
4. **Backup and Recovery:** Violet has backup and recovery techniques to safeguard user data against accidental loss or system failure. To ensure data confidentiality, backups are encrypted and stored in safe places.

### Data Minimization

Violet adheres to the concept of data minimization, collecting, processing and retaining
only the personal data required to achieve particular goals. Violet improves privacy and
decreases the danger of data breaches by limiting the gathering and preservation of user
data.

1. **Purpose Limitation:** Personal data is only gathered for defined, lawful purposes and is never utilized for unrelated or needless purposes.
2. **Data Limitation:** Violet only collects and processes the data required to offer the requested services or functionalities.
3. **Storage Limitation:** Personal data is retained only for as long as required to achieve the indicated purposes before being securely destroyed or anonymized.

### Privacy Dashboard

The Privacy Dashboard allows Violetians to monitor and change their privacy settings, permissions and data.

- **Permission Management:** The sorts of data gathered and shared by each application can be customized by users. When an application seeks to acquire new data categories or access sensitive information, Violet may alert users.
- **Data Collection Controls:** The sorts of data collected and shared by each application can be customized by users. When an application seeks to acquire new data categories or access sensitive information, Violet may alert users.

### Privacy Mode

Violet's *Privacy Mode* is a strong feature that increases user privacy by offering
heightened security for sensitive activities and data. When activated, Privacy Mode
protects user activities, interactions, and data.

Privacy Mode can be enabled in the [Privacy Dashboard](#privacy-dashboard).

1. **Incognito Browsing:** Privacy Mode enables incognito browsing in browsers, which prevents the storing of browsing history, cookies, or site data
2. **Private Search:** Users can do private searches that leave no record in search history and are unrelated to the user's identification.
3. **Application Privacy:** Privacy Mode limits access to sensitive data and application permissions while operating in a sandboxed environment to prevent data leaks or unwanted access.

### Password Management

Password management is a critical component of maintaining security and safeguarding
sensitive information. Violet provides a complete password management to assist users in
securely storing and managing passwords.

- **Password Vault:** A safe and secure storage space where users may keep their passwords, secured by robust encryption techniques.
- **Secure Password Generator:** Users can use the password generator to generate random, complicated passwords that meet certain requirements.
- **Autofilling:** Violet has autofill feature for usernames and passwords, allowing for quick and easy login.
- **Password Strength Analysis:** Violet evaluates the strength of saved passwords, giving users relevant security information.
- **Backup and Sync:** Users may back up and sync their Password Vault data across numerous devices or the Violet Cloud for safe recovery.

## Secure Boot Verification

*Secure Boot Verification* protects the operating system's integrity and authenticity during the boot process, preventing unauthorized modifications or malicious code execution.

When Secure Boot Verification is enabled, Violet performs the following
boot component verification process:

- During the boot process, the bootloader and subsequent boot components are checked against their respective digital signatures
- Violet verifies the digital signatures using a set of trusted certificates embedded in the system
- If the digital signatures match the trusted certificates, the boot components are considered valid and allowed to code
- If the digital signatures do not match or cannot be verified, Violet prevents the execution of the boot components and initiates a recovery process

After the boot, Violet will run system integrity checker, [Eden](../technical/integrity.md).

### Trusted Certificates

Violet relies on a set of trusted certificates to verify the digital signatures
of the boot components. These certificates are securely stored within the system
and are used as a reference for validation during the boot process. The trusted
certificates are regularly updated to ensure the highest level of security.

### System Recovery and Repair

In the event of boot component verification failure or other security-related issues,
Violet provides recovery and repair mechanisms to restore the system to a trusted state.
Users can initiate system recovery processes or utilize system repair tools to address
any security concerns and restore the integrity of the boot components.

## Remote Wipe

*Remote Wipe* is a Volet security feature that enables customers to remotely wipe data
from a lost or stolen device.

### How Remote Wipe Works?

When Remote Wipe is enabled and a device is reported as lost or stolen, the user can issue a remote wipe command from a trusted device via an internet portal. The following procedure explains how Secure Remote Wipe works in Violet:

- **User Authorization:** The user must provide appropriate credentials and authorization to start a remote wipe.
- **Device Identification:** The user identifies the specific device to be wiped by providing its unique identifier, such as its serial number or associated account details.
- **Data Erasure:** Once the remote wipe command is received and validated, Violet initiates the data erasure process on the target device. This process securely erases all user data, including personal files, applications and settings.
- **Confirmation and Feedback:** After the remote wipe process is complete, Violet provides confirmation and feedback to user, indicating the successful completion of the data erasure operation.

### Considerations for Remote Wipe

- **Data Backup:** Before starting a remote wipe, be sure that any vital data is safely backed up. The data CANNOT BE RECOVERED after a remote wipe.
- **Network Connectivity:** The target device must be connected to the internet in order for Remote Wipe to work. To optimize the odds of a successful remote wipe, notify the device's loss or theft as soon as possible.
- **Account Security:** To avoid unwanted access and potential exploitation of the remote wipe capability, Violetians should secure their Violet account with strong passwords and two-factor authentication.
- **Privacy and Legal Considerations:** Users should be aware of the privacy and legal concerns before attempting a remote wipe. It is suggested that you study the appropriate rules and regulations in your country on data protection and remote wiping.
