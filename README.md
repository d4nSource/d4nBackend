# table of content

* [Prerequisite](#prerequisite)
* [Installation](#installation)
* [Folder Structure](#folder-structure)


## Prerequisite

You must have installed `npm` (version 3+) and `node` (version 6+)

## Installation 

To install the server you install all packages via

```bash
npm install
```
To execute the server two environments are preset and can be executed via npm commands:

```bash
npm start           (use port of environment variable PORT, with a fallback to 3000)
npm run serve:prod  (use preset port 3000)
npm run serve:dev   (use preset port 3001)
```

In production mode its recommended to use a service/demon to manage the node process, like PM2.

## Folder Structure

| Folder            | description
|---                |---
| .vscode           | VS Code configuration files
| database          | SQLite database
| dist              | compiled JS code used to execute the server
| docs              | documentation
| node_modules      | node packages
| src               | typescript source code
| tools             | additional tools
| tools/gulp        | gulp configuration files and tasks