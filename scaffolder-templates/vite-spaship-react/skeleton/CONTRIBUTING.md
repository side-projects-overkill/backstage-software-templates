# Welcome to ${{values.spa_name}} contributing guide 

Thank you for investing your time in contributing to ${{values.spa_name}}! 

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## New contributor guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:

- [Set up Git](https://docs.gitlab.com/en/get-started/quickstart/set-up-git)
- [gitlab flow](https://docs.gitlab.com/en/get-started/quickstart/gitlab-flow)
- [Collaborating with pull requests](https://docs.gitlab.com/en/gitlab/collaborating-with-pull-requests)


## Getting started

Now clone the forked repository to your machine. Go to your Gitlab account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.


For example:

```
git clone git@gitlab.cee.redhat.com:<this-is-you>/${{values.spa_name}}.git
```

where `this-is-you` is your gitlab username. Here you're copying the contents of the contributions repository on gitlab to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd ${{values.spa_name}}
```

Now create a branch using the `git switch` command:

```
git switch -c your-new-branch-name
```

For example:

```
git switch -c add-alonzo-church
```

## Make necessary changes and commit those changes

Now open `Contributors.md` file in a text editor, add your name to it. Don't add it at the beginning or end of the file. Put it anywhere in between. Now, save the file.

<img align="right" width="450" src="https://firstcontributions.gitlab.io/assets/Readme/git-status.png" alt="git status" />

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```
git add Contributors.md
```
Now commit those changes using the `git commit` command:

```
git commit -m "Add your-name to Contributors list"
```

replacing `your-name` with your name.

## Push changes to gitlab

Push your changes using the command `git push`:

```
git push -u origin your-branch-name
```

replacing `your-branch-name` with the name of the branch you created earlier.


## Submit your changes for review

If you go to your repository on gitlab, you'll see a `Compare & merge request` button. Click on that button.

Now submit the merge request.

Soon maintainers be merging all your changes into the main branch of this project. You will get a notification email once the changes have been merged.

### Issues

#### Create a new issue

- Check if the issue already exsists by clicking on JIRA link in the repository

#### Solve an issue

Scan through our [existing issues](https://issues.redhat.com/browse/${{values.spa_name}}) to find one that interests you. You can narrow down the search using `labels` as filters. 

### Happy Coding

