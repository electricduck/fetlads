# Contributing

## Commit messages

Since [#81aaddb](https://github.com/electricduck/fetlads/commit/81aaddbde518455fdda457715cfe4b46c95cf4c9), this repo is now using so-called "semantic commit messages". Commit messages are **required** to follow the format outlined below.

##### Message fomat

`{1}[{2}]: [{3}] {4}`

 * `{1}` **Type**
    * `🆕 feat`: New feature for the user
    * `🛠 fix`: Bug or performance fix for the user
    * `📖 docs`: Modifications to the documentation (including READMEs)
    * `🎨 style`:
        * Reformatting code (e.g. missing semi-colors, incorrect spacing, etc.)
        * Modifications to content (e.g. re-wording, typo fixes, i18n, etc.)
            * i18n changes should use the summary `translate to 🏴 <language>`, along with the scope `i18n`
    * `🧹 refactor`: Refactoring production code
    * `🧪 test`: Adding/modifying unit tests
    * `🧱 build`: Adding/modifying tasks for build/release process (e.g. Dockerfile, Github Actions, etc.)
    * `📝 chore`: Misc. changes (e.g. scripts, external tools, version bumps, etc.)
    * `🗑 revert`: Reverting a previous commit
    * `📦 various`: Various changes (no summary)
    * `👋 init`: New repo (no summary)
 * `{2}` **Scope** _(optional)_: Part of repository changed (e.g. feature, document name, etc.)
 * `{3}` **Issue** _(optional)_: Issue number surrounded by square brackets (e.g. `[#123]`)
 * `{4}` **Summary**: Summary of changes
    * Start with a verb
        * **Do not use** "change", "make", or "update" (exception being when updating libraries)
        * Don't capatalize the first letter
        * Don't put a period (`.`) at the end

##### Examples

  * `🆕 feat(api): [#321] add API endpoint for getting users`
  * `🛠 fix(util): fix text utility returning invalid characters`
  * `🛠 fix: [#234] improve performance of database`
  * `📖 docs(readme): modify build process outline`
  * `🎨 style: remove extra semi-colons`
  * `🎨 style(i18n): translate to 🇷🇺 Russian`
  * `🧱 build(ci): add Github workflow for NodeJS CI`
  * `📝 chore: bump version to 1.2.3`
  * `📝 chore(npm): update VueJS to 3.0.0`
  * `🗑 revert: 81aaddb`
  * `📦 various`
  
##### Misc.

  * On releases to the `release` branch, the message should just be the version (e.g. `20.1.2`, `0.0.1`, `1.2.3`, `9.4.0-beta`)
  
##### References

  * https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
  * https://www.conventionalcommits.org/
  * https://seesparkbox.com/foundry/semantic_commit_messages
  *  http://karma-runner.github.io/1.0/dev/git-commit-msg.html
