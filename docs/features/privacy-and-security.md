# Privacy and Security

- [Privacy and Security](#privacy-and-security)
  - [User Data Protection](#user-data-protection)
    - [End-to-End Encryption](#end-to-end-encryption)
    - [Secure Storage](#secure-storage)
    - [Data Minimization](#data-minimization)
      - [Principles of Data Minimization](#principles-of-data-minimization)
    - [Privacy Dashboard](#privacy-dashboard)
      - [Permission Management](#permission-management)
      - [Data Collection Controls](#data-collection-controls)
    - [Privacy Mode](#privacy-mode)
      - [Key Aspects of Privacy Mode](#key-aspects-of-privacy-mode)
    - [Password Management](#password-management)
      - [Password Vault](#password-vault)
      - [Secure Password Generation](#secure-password-generation)
      - [Autofilling](#autofilling)
      - [Password Strength Analysis](#password-strength-analysis)
      - [Regular Backup and Sync](#regular-backup-and-sync)
  - [Secure Boot Verification](#secure-boot-verification)
    - [Trusted Certificates](#trusted-certificates)
    - [System Recovery and Repair](#system-recovery-and-repair)
  - [Secure Remote Wipe](#secure-remote-wipe)
    - [How Secure Remote Wipe Works?](#how-secure-remote-wipe-works)
    - [Considerations for Secure Remote Wipe](#considerations-for-secure-remote-wipe)

## User Data Protection

Data protection is a top priority in Violet. Violet implements advanced
measures to protect user data.

### End-to-End Encryption

Violet employs end-to-end encryption techniques to secure Violetians' data. This
encryption ensures that data is encrypted before leaving the device and can only
be decrypted by the intended recipient.

1. **Secure Communication Channels:** Violet establishes secure communication channels between devices and services to facilitate the exchange of encrypted data.

2. **Encryption at the Source:** Violet ensures that user data is encrypted at its source, meaning it is encrypted on the user's device before leaving and remains encrypted through its journey.

3. **Zero-Knowledge Architecture:** Violet follows a zero-knowledge architecture, meaning that the service providers or intermediaries involved in data transmission do not have access to the decryption keys or the unencrypted user data.

**Note:** While end-to-end encryption provides a high level of security and privacy,
it's important for users to exercise caution when sharing sensitive information. Users
should be mindful of the devices and applications they use and take steps to protect their
encryption keys, such as using strong and unique passwords.

### Secure Storage

Violet incorporates secure storage mechanisms to protect user information from
unauthorized access or tampering.

1. **Data Encryption:** When data is written to storage, it is encrypted using strong encryption algorithms. This ensures that even if the underlying storage medium is compromised, the data remains unreadable and inaccessible without the decryption keys.

2. **Access Controls:** Violet enforces strict access controls to prevent unauthorized access to user data. Access permissions are assigned at verious levels, including file and folder permissions, user privileges and system-level controls.

3. **Secure File Systems:** Violet utilizes secure file systems, such as the Btrfs file system. These file systems provide advanced features like integrity checks, snapshot capabilities.

4. **Backup and Recovery:** Violet provides backup and recovery mechanisms to protect user data from accidental loss or system failures. Backed-up data is encrypted and stored in secure locations to maintain its confidentiality.

User data stored on Violet devices is stored securely, protected by strong encryption.

### Data Minimization

Data minimization is an essential principle in Violet's approach to the user data
protection. It refers to the practice of collecting, processing and storing
only the **MINIMUM AMOUNT OF PERSONAL DATA** necessary to fullfill specific purposes.
By minimizing the collection and retention of user data, Violet aims to enhance privacy
and reduce the risk of data breaches.

#### Principles of Data Minimization

1. **Purpose Limitation:** Violet ensures that personal data is collected for specific, legitimate purposes and not used for unrelated or unnecessary activities.

2. **Data Limitation:** Violet follows the principle of data minimization by collecting and processing only the essential data needed to provide the requested services or features.

3. **Storage Limitation:** Violet retains presonal data only for as long as necessary to fullfill the specified purposes. Once the data is no longer needed, it is securely deleted or anonymized to ensure that it is not retained longer than necessary.

### Privacy Dashboard

The Privacy Dashboard in Violet is a tool that empowers users to monitor and manage
their privacy settings, permissions and data within the Violet ecosystem. It provides
users transparency and control over their personal information.

#### Permission Management

With the Permission Management feature, users can review, customize and manage the
permissions associated with each installed application.

1. **Application Permissions:** You will find a list of installed applications. Each application entry displays the specific permissions it requests. Within the detailed view of an application's permissions, you can customize the permissions granted to the application.

2. **Permission Notifications:** Violet may notify you when an application requests a new permission or attempts to access a sensitive resource.

#### Data Collection Controls

1. **Application Data Collection:** You will find a list of installed applications. Each application entry displays the types of data collected by the application, such as personal information, device identifiers, usage statistics, and more. Within the detailed view of an application's data collection settings, you can customize the types of data collected and shared by the application.

2. **Data Collection Notifications:** Violet may notify you when an application requests access to new data categories or attempts to collect sensitive information.

### Privacy Mode

*Privacy Mode* is a powerful feature in Violet that enhances user privacy by providing
a heightened level of protection for sensitive activitites and data. When enabled,
Privacy Mode ensures that user actions, interactions and data remain secure.

Privacy Mode can be enabled in the [Privacy Dashboard](#privacy-dashboard).

#### Key Aspects of Privacy Mode

1. **Incognito Browsing:** Privacy Mode enables incognito browsing in browsers by default. This allows users to browse the web without storing browsing history, cookies or site data. This prevents websites from tracking user activities.

2. **Private Search:** With Privacy Mode, users can conduct private searches that do not leave a trace in search history. The search queries and results are not associated with the user's identity or stored on the device.

3. **Application Privacy:** Privacy Mode extends privacy protection to applications by restricting access to sensitive data and permissions. When enabled, applications operate in a sandboxed environment that limits their access to user data and system resources, mitigating the risk of data leakage or unauthorized access.

### Password Management

Password management is an essential aspect of maintaining security and protecting
sensitive information. Violet offers a comprehensive password management system to
help users securely store and manage their passwords.

#### Password Vault

Violet includes a Password Vault, a secure and encrypted storage area where users
can store their passwords. The Password Vault is protected by strong encryption
algorithms to ensure security of stored passwords.

#### Secure Password Generation

Violet provides a built-in password generator to help users create strong and
secure passwords. When creating a new password entry, users can utilize the password
generator to generate a random, complex password with specified criteria such as length,
character types (uppercase, lowercase, numbers, symbols), and any specific requirements.

#### Autofilling

Violet offers autofill functionality, allowing users to automatically fill in
username and password fields on websites and applications. When visiting a login page,
Violet can detect the corresponding password entry from the Password Vault and offer to
autofill the credentials for quick and convenient login.

#### Password Strength Analysis

Violet includes a password strength analysis feature that assesses the strength of
passwords stored in the Password Vault. It evaluates factors such as length, complexity,
and uniqueness to provide users with insights into the security of their passwords. Users
can review the strength analysis results and update passwords if necessary.

#### Regular Backup and Sync

Violet allows users to back up their Password Vault data and sync it accross multiple
devices or Violet Cloud. Regularly backing up the Password Vault ensures that password
data remains secure and can be restored in case of device loss, damage, or other
unforeseen events.

## Secure Boot Verification

*Secure Boot Verification* is an essential security feature in Violet that ensures
the integrity and authenticity of the operating system during the boot process.
It helps protect against unauthorized modifications, tampering or the execution
of malicious code.

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

## Secure Remote Wipe

*Secure Remote Wipe* is a security feature in Volet that allows users to
remotely erase their data from a lost or stolen device.

### How Secure Remote Wipe Works?

When Secure Remote Wipe is enabled and a device is reported as lost or stolen,
the user can initiate a remote wipe command from a trusted device through an
online portal. The following process outlines how Secure Remote Wipe works
in Violet:

- **User Authorization:** The user must provide appropriate credentials and authorization to initiate a remote wipe.

- **Device Identification:** The user identifies the specific device to be wiped by providing its unique identifier, such as its serial number or associated account details.
  
- **Data Erasure:** Once the remote wipe command is received and validated, Violet initiates the data erasure process on the target device. This process securely erases all user data, including personal files, applications and settings.
  
- **Confirmation and Feedback:** After the remote wipe process is complete, Violet provides confirmation and feedback to user, indicating the successful completion of the data erasure operation.

### Considerations for Secure Remote Wipe

- **Data Backup:** Before initiating a remote wipe, it is crucial to ensure that all important data is backed up securely. Once a remote wipe is performed, the data cannot be recovered.
- **Network Connectivity:** For Secure Remote Wipe to function, the target device must have an active network connection. It is essential to report the loss or theft of the device as soon as possible to maximize the chances of successful remote wipe.
- **Account Security:** Users should ensure the security of their Violet account, including strong passwords and two-factor authentication, to prevent unauthorized access and potential misuse of the remote wipe feature.
- **Privacy and Legal Considerations:** Before performing a remote wipe, users should be aware of privacy and legal implications. It is recommended to consult applicable laws and regulations regarding data protection and remote wiping in your jurisdiction.
