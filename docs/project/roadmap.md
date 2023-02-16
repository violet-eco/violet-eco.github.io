# Roadmap

- [Roadmap](#roadmap)
	- [Conception](#conception)
	- [Validation](#validation)
	- [Implementation](#implementation)
		- [Phase 1: Unoptimized kernel](#phase-1-unoptimized-kernel)
		- [Phase 2: Low-level implementation](#phase-2-low-level-implementation)
		- [Phase 3: Applications \& System Optimization](#phase-3-applications--system-optimization)
		- [Phase 4: Completion](#phase-4-completion)
	- [Evolution, Optimization \& Maintenance](#evolution-optimization--maintenance)

## Conception
This first part is to write conception documents about how the system works, both at
high-level (native applications, features etc.) and low-level (process management, kernel
design etc.).

This project is currently in this state.

## Validation
Once all conception documents are ready, they will be validated one by one,
and frozen. Breaking changes after validation are still possible but should
be avoided as much as possible.

## Implementation
Once all documents have been validated, the different pieces can be implemented.

It may be happen that, during implementation, some validated documents get
modifications in order to improve or fix some specific points. Each modification
will need to be validated in order to preserve the stability of these documents.

### Phase 1: Unoptimized kernel
The first piece to be implemented will be the kernel. This is required as the
kernel is needed in order to implement higher-level pieces like processes.

### Phase 2: Low-level implementation
Once the unoptimized kernel is ready, two implementations will start in parallel:
- Kernel optimization
- System development

The system development will consist in building the following pieces successively:
- The BIOS/UEFI bootloader
- The process manager

### Phase 3: Applications & System Optimization
The third phase consists in developing the native applications, which are
meant to be used by the end user, as well as optimizing the system in
parallel and improving its stability.

Starting from this point, all conception documents are definitely validated,
which means they cannot receive breaking changes anymore, only few points/features.

This also coincides with the system's **first alpha release**, which will allow persons
who are external to the project to test it and suggest improvements.

### Phase 4: Completion
The last phase's purpose is to ensure the system is in a fully usable state.

The kernel and system will also need to be properly optimized, and once all
these things are done a **first beta release** will be deployed.

## Evolution, Optimization & Maintenance
The *Evolution, Optimization & Maintenance* (EPM) part is pretty explicit: it's all
about improving LapisOS' existing features, introducing new ones as needed, improving
performances and stability, and fixing new bugs.

This part will last forever, as for all operating systems.