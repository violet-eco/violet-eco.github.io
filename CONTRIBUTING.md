# Contributing to LapisOS

We would love for you to contribute to LapisOS and help make it even better than it is today!

## Code of Conduct

Help us keep LapisOS open and inclusive.
Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**.
```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the
[Commit Message Header](#commit-message-header) format.

The `body` is optional.
It must conform to the [Commit Message Body](#commit-message-body) format.

The `footer` is optional.

### Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: concepts|project
  │
  └─⫸ Commit Type: add|build|ci|fix|improve|typo
```

The `<type>` and `<short summary>` fields are mandatory, the `(<scope>)` field is optional.

#### Type

Must be one of the following:

- `add`: Adding new documentation file or folder
- `build`: Changes that affect the book build system
- `ci`: Changes to our CI configuration files
- `fix`: Fixing errors in documentation files (e.g. broken link)
- `improve`: Change that adds information to existing documentation files
- `typo`: A typo fix

#### Scope

The scope should be the name of the subdirectory. 

The following is the list of supported scopes:

- `concepts`
- `project`

#### Summary

Use the summary field to provide a succinct description of the change:

- use the imperative, present tense: "change" not "changed" or "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

The body can contain information about breaking changes and deprecations. For example:	

```
BREAKING CHANGE: <breaking change summary>
```
or
```
DEPRECATED: <what is deprecated>
```

### Commit Message Footer

The footer can contain reference to GitHub issues and other PRs that this commit
closes or is related to. For example:

```
Fixes #<issue number>
```
or
```
Closes #<pr number>
```