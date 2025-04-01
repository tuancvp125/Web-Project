
# Git Essentials: Quick Reference Guide

This guide covers 10 key topics about Git to help you review the most important concepts and commands.

---

1. **Basic Git Concepts**  
   - **Git** is a distributed version control system that tracks changes in your files.
   - **Repositories:**  
     - **Local:** Your personal copy on your computer.  
     - **Remote:** A copy hosted on a server (like GitHub) for collaboration.

2. **Configuration**  
   Set your global username and email so that your commits are properly identified:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Repository Initialization & Cloning**  
   - **Initialize a new repository:**  
     ```bash
     git init
     ```
   - **Clone an existing repository:**  
     ```bash
     git clone <repository-url>
     ```

4. **Staging & Committing Changes**  
   - **Check Status:**  
     ```bash
     git status
     ```
   - **Stage Changes:**  
     ```bash
     git add <file>
     ```
     or to stage all changes:
     ```bash
     git add .
     ```
   - **Commit Changes:**  
     ```bash
     git commit -m "Your commit message"
     ```

5. **Branching**  
   - **Create and Switch to a New Branch:**  
     ```bash
     git checkout -b <branch-name>
     ```
   - **Switch to an Existing Branch:**  
     ```bash
     git checkout <branch-name>
     ```
   - **List Local Branches:**  
     ```bash
     git branch
     ```

6. **Remote Repositories**  
   - **Add a Remote Repository:**  
     ```bash
     git remote add origin <repository-url>
     ```
   - **List Remote Repositories:**  
     ```bash
     git remote -v
     ```

7. **Pushing & Pulling Changes**  
   - **Push Local Changes to Remote:**  
     ```bash
     git push -u origin <branch-name>
     ```
     The `-u` flag sets the upstream branch.
   - **Pull Latest Changes from Remote:**  
     ```bash
     git pull
     ```

8. **Merging Branches & Handling Conflicts**  
   - **Merge a Branch into the Current Branch:**  
     ```bash
     git merge <branch-name>
     ```
   - **Handling Merge Conflicts:**  
     - Open conflicted files, resolve the conflicts.
     - Stage the resolved files with `git add`.
     - Commit the merge resolution with `git commit`.

9. **Viewing History & Differences**  
   - **View Commit History:**  
     ```bash
     git log --oneline --graph --decorate --all
     ```
   - **See Differences Between Changes:**  
     ```bash
     git diff
     ```
     Use `git diff --staged` to see differences for staged changes.

10. **Additional Tools and Cleanup**  
    - **Stashing Changes:** Temporarily save changes that are not ready to commit:
      ```bash
      git stash
      git stash pop
      ```
    - **Deleting Branches:**  
      - **Local Branch:**  
        ```bash
        git branch -d <branch-name>
        ```
      - **Remote Branch:**  
        ```bash
        git push origin --delete <branch-name>
        ```

---

Keep this file handy to quickly review Git basics whenever you need a refresher!
