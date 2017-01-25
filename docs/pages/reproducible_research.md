---
layout: page
title: Reproducible Research
permalink: reproducible
group: navigation
---

The goal of reproducible research is to make available
the required environment, documentation, code, and data
in a way that sufficiently allows another researcher
to recreate, verify, and validated your work.
This clarity will help your work be better understood and
more widely useful.

## Overview

There are several aspects to reproducible research:

1. **Documenation**: Everything should be documented so that there exists a transparent understanding
of why you did something, what that something does, or how to do something.

2. **Environment**: Computational software is constantly evolving and changing and it's important that the environment you use can be replicated and is well-documented.

3. **Data collection**: Every research project involves data and it's critical to describe how you acquired the data you are working with and what you did to the data to
prepare it for your research?

4. **Data Analysis**: [Literate programming](https://en.wikipedia.org/wiki/Literate_programming) is a great way
to document and communicate your analysis.  It allows natural language to exists with code, images, tables, and other media in an "executable document".

5. **Data Access**: If external data is utilized in the project, a canonical access method (API) should be agreed upon. If data changes through mutation, downsampling, and filtering data can be versioned similarly to code.

6. **Tracking changes**: Tracking changes allows you to understand the state of your software,
what has changed, and who has contributed.  Just as you need to reproduce the external software environment, it is also necessary to reproduce the state your own workflow.
This helps break the cycle of appending versions to files where it's difficult to revert back to a specific instance
of your code.

7. **Accessibility**:
Version control using a remote server, such as `github`,
allows others to collaborate and contribute.  Sending documentation and code via email is harder to manage and
less reproducible.

8. **Testing**:
Tests for your code provide a few key features:  First, it allows you to check that changes you have made do not have
any undesirable side-effects. Second, it can serve as example code for your repository, providing use-cases for the features you provide.

9. **Code**:
Python code should be written and commented such that it follows the [pep8 standard](https://www.python.org/dev/peps/pep-0008). Other software should also be validated with a [linter](http://stackoverflow.com/questions/8503559/what-is-linting).


## Best practices

In this section we look at the best practices for each item in the overview.

### Documentation

Everything needs to be documented.  For documentation that describe the installation and execution of your code and environment, it is best to use a standard, human-readable format such
as **markdown** that can be viewed in any
text editor.  This format can also be converted to other formats such as `HTML` and `pdf` for alternative view options.

Markdown also supports complex equations formulation, images, tables, as well as code segments.
A standard text file, like Markdown, also allows your documentation to be collaborative and version controlled when using software
such as `git`.





### Environment

The most simple environment that is reproducible is probably
the best choice. Some projects, such as [docker](https://www.docker.com/), can replicate an entire environment, but that level of replication may not be needed.
[Anaconda] (https://www.continuum.io/downloads), on the other hand, is a Python distribution that allows for different environments across
the three major operating systems. This allows you to create the same code versions of you base environment across most systems.  Anaconda's tool for managing environments is called [Conda](http://conda.pydata.org/docs/using/).

Conda environments are described by a `environment.yml` file that
contain the versions and dependancies that your code
requires.  It is best to specify the versions of the packages you need and let conda figure out the dependancies
that meet this requirement.  You can also export your
environment, but unfortunately, this is not necessarily operating system independent.

The environment is documented through the `environment.yml`,
which is a text file that can be versioned controlled as
your code and dependancies change.

If your Python project requires non-python code, you may consider writing a conda package for it and hosting it on [conda-forge](https://conda-forge.github.io/) before making the step towards docker.

### Data collection

Using scripts is one of the best ways to document how
you collected external data.  Since large files will likely not be part of a projects repository (see git best practices below), it is best to script the collection of the data and store that in the repository.  Adding comments will help, but the script itself is one of the best ways to communicate how you collect data.

Data should be left in it's unadulterated state and
any manipulation can and should be documented in code.  It
is very difficult to describe how to manually change data, but a script can be documented and it is explicit about the changes being made.  For example, it is much better to use the Pandas library to change the column headers in a *csv* file than to describe in documentation what the headers should be.

### Data analysis

One of the best tools for literate programming is the [Jupyter](http://jupyter.org/) notebook.  It allows markdown text
to exists with tables, latex formulas, images, code, and visualization in a document that can be executed.

Jupyter notebooks are stored as `json` files and can easily be converted to other formats, such as HTML and pdf, for sharing information.  Sharing analysis with Jupyter notebooks is a best practice.

Making sure the notebooks in your repository are up-to-date with your current code snapshot is more difficult.  There are projects such as `runipy` that may help develop a workflow that executes and runs your notebooks.

### Data access

Multi-source data analysis often involves external data sources accessed through databases or APIs. When data is too large to keep in the repository itself, the methods of access (including protocols, data version, and data format) must be documented. All users of the source code should have similar access to the data-sources in a complete form. Ideally, raw data should be preserved and scripts that convert raw data to analysis-ready formats can be kept as living documentation.

### Git

Git and Github are tools and anyone with commit access should know how to use them. The book, [Pro Git](https://git-scm.com/book/en/v2), is one resource that may be useful.  Below are some best practices for using Git.

- **Commit often**: Git is only able to track changes when
you commit them and it's much easier to see where you have made mistakes if you have a finer level of history of those changes.

- **Branches**: Git can store several snapshots of your code at different times.  It is common to have a stable branch, usually called the *master*, and another branch that is used for testing and development, often called *develop*.  It is also a good practice to form a short-lived branch for adding features.  This will be branched from the *develop* and quickly merged back in.  If you are using your own clone of *develop* to test features, you should `git pull --rebase` before doing you final testing and pushing back to the remote branch.

- **Releases**: There are two ways to release code.  One is to create a separate branch and the other is to *tag* the master branch.  Tagging the master is a preferred method because you may accidentally write to the release branch and this may lead to confusion.  A tag is a snapshot in time and that doesn't change.

- **Large files**: Large files should be stored in their own repository which makes the code and documentation base much more efficient.  Git does not handle large repositories well.

- **Messages**: Make useful commit messages that reflect the changes you made to the code.  If you commit often, the messages will more easily reflect the work you have done.

- **Pull often**: It is a best practice to keep your local repository up-to-date.

- **Issue tracking**: Using a system to track issues and bugs is an industry-wide best practice.

- **Commits**: There are a few things that should not be committed into git:

  1. Configuration files: Often these have information specific to your environment.
  2. Large binary files: It's worth mentioning again here.  Large files make your code repository less efficient to work with.
  3. Don't commit anything that can be regenerated from the code in the repository.  This includes `*.pyc` files, `pdf` files that are created from markdown documents already in the repository, etc.

### Testing

Test driven development (TDD) is the process of implementing code by first writing the test cases that drive the correct implementation of functionality and then implementing the functionality you need.  You can watch your tests cases
fail, and then change your code until they pass.  This also forces developers to think about the problem they are solving first.

There are several packages available for testing code in Python.  The `unittest` is Python's build-in package and tends to work best for tests that don't involve just simple functions, where some setup and teardown may be required.  External packages, such as `pytest`, make testing simple functionality easy.  The popular `nose` package is no longer under active development.


### Code

Code should be broken up into small methods or functions that perform specific task. It should follow the [PEP 8 guidelines](https://www.python.org/dev/peps/pep-0008) for code, and linting tools, such as googles [yapf](https://github.com/google/yapf) can help do this automatically.

Code documentation should
follow the the [PEP 8 style guidelines](https://www.python.org/dev/peps/pep-0008/#comments).

As a general guideline, comments should be through enough to describe what is being done, the expected inputs and outputs, and
anything that is not clear from reading the code itself.
