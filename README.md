# Boilermaker

At Everydayhero, we start a lot of javascript projects: from tiny prototypes to
full-blown applications to widget libraries. This means that we are answering
the question 'what is my Javascript toolchain' more often than we'd care to
admit.

The [Boiler Room](https://github.com/everydayhero/boiler-room) project is our
current state of the union in Javascript tooling: a standard toolchain,
bundling configuration, and set of libraries (React/Redux/ReactRouter) for
building a client-facing web application. It works great, for the vast majority
of our new projects.

However, Boiler Room is all-or-nothing. You can get from zero-to-running dev
server in just a few minutes, but if you want to customise the standard tooling
to start with a more or less full stack, you're left deleting code like a chump.

Enter Boilermaker (brm). Boilermaker is simply a generator for Boiler Room projects.
This way, you can instantly create a new project with our standard toolchain
but cleanly exclude the parts that your project doesn't need. Boilermaker also
takes Boiler Room further: it creates a hot-reloading dev server, running in
a production-ready Docker container, and generates the continuous integration
and deployment pipeline for your project.

In other words, where Boiler Room got you from zero to dev, Boilermaker gets you
from zero to :shipit:.

## Install

## Create a Project

The main feature of Boilermaker is to provide a one-shot method for creating
a project, creating and runnning a development server, and setting up a build
pipeline.

If you're creating a new project on your dev machine, you'll probably want to
do this interactively.

```shell
brm create
```

This will take you through a sequence of questions for customising your Boiler
Room project, mainly relating to optional dependencies, and then build out a
project based on your answers.
