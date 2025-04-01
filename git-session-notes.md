
# Git Notes: Personal Learning Summary

This markdown summarizes everything discussed about Git in this session for quick review.

---

## 1. Git Local vs Remote

- **Local Branch:** Exists on your computer. You can commit, switch, and modify locally.
- **Remote Branch:** Exists on the Git server (like GitHub). You can't commit directly to it — you must push from a local branch.

To list all remote branches:
```bash
git branch -r
```

To see detailed info about a remote (like origin):
```bash
git remote show origin
```

---

## 2. Creating and Working with Branches

### Create a new local branch:
```bash
git checkout -b BE
```

### Push local branch to remote:
```bash
git push -u origin BE
```

### Create a local branch from a remote one:
```bash
git checkout -b FE origin/FE
```

---

## 3. Detached HEAD State

Happens when you checkout a remote branch directly:
```bash
git checkout origin/FE
```

- You are not on a branch, just on a commit.
- Commits made here are "floating" — not on any branch.
- To fix:
```bash
git checkout -b FE origin/FE
```

---

## 4. Can't Commit Directly to Remote Branch

You can't commit to `origin/FE` because it's read-only. Always create a local branch and push to update remote:
```bash
git checkout -b FE origin/FE
git add .
git commit -m "message"
git push origin FE
```

---

## 5. Git History & Tracking

### View all branches and commit graph:
```bash
git log --oneline --graph --decorate --all
```

### HEAD, origin/main, main
- `HEAD`: your current position
- `main`: local main branch
- `origin/main`: remote-tracking branch

All 3 pointing to the same commit means no divergence yet.

---

## 6. Untracked Files and Leftover Folders

Git won't delete untracked folders when switching branches.

### To see what’s tracked in current branch:
```bash
git ls-tree -r --name-only HEAD
```

### To safely remove untracked files/folders:
```bash
git clean -fdn    # Dry run
git clean -fd     # Real delete
```

---

## 7. JetBrains VCS Mapping (`.idea/vcs.xml`)

Example:
```xml
<component name="VcsDirectoryMappings">
  <mapping directory="$PROJECT_DIR$" vcs="Git" />
</component>
```

Means the project is tracked using Git.

---

## 8. Git Error: refusing to merge unrelated histories

Happens when two repos have unrelated commit histories.

### Fix with:
```bash
git pull origin main --allow-unrelated-histories
```

---

## 9. Committing Behavior

- Git only creates a commit when files change.
- If nothing changed: `nothing to commit, working tree clean`

---

## 10. Helpful Git Commands Summary

```bash
git status            # Check status
git add .             # Stage all changes
git commit -m "msg"   # Commit
git push              # Push changes
git pull              # Pull updates
git branch            # List local branches
git branch -r         # List remote branches
git checkout -b BR origin/BR  # Create local from remote
```

---

Keep this file as your personal Git reference!
