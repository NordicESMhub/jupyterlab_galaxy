# jupyterlab_galaxy

![Github Actions Status](https://github.com/NordicESMHub/jupyterlab_galaxy/workflows/Build/badge.svg)

Add two buttons to communicate with Galaxy from JupyterLab interactive environment


## Requirements

* JupyterLab >= 1.0

## Install (when published)

It is not possible yet but in the future we would like to be able to install this jupyterLab extension with:

```bash
jupyter labextension install jupyterlab_galaxy
```

## Contributing

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to jupyterlab_galaxy directory
# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension link .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

### Uninstall

```bash
jupyter labextension uninstall jupyterlab_galaxy
```

