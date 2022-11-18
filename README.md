# Creation UI

Design System

Creation UI is a library of React UI components built with Tailwind CSS to get you started building websites faster and more efficiently.

### With Material Icons

Provided via `.material-icons` class inside `span` element.
Fully typed list of all Material Icons as of 06.08.2022

## Deps

- tailwindcss
- react

Component sizes:

- `sm`
- `md`
- `lg`

# Contents

## Core

- Hooks
- Utils
- Theme
- DarkModeToggle

## Packages

@creation-ui/core
@creation-ui/input
@creation-ui/avatar
@creation-ui/button
@creation-ui/button-group
@creation-ui/button-toggle-group
@creation-ui/switch
@creation-ui/radio
@creation-ui/radio-group
@creation-ui/autocomplete
@creation-ui/select
@creation-ui/modal
@creation-ui/drawer
@creation-ui/breadcrumbs
@creation-ui/tooltip
@creation-ui/typography
@creation-ui/menu
@creation-ui/layout
@creation-ui/context-menu
@creation-ui/accordion
@creation-ui/progress-bar
@creation-ui/info-bar
@creation-ui/transfer-list
@creation-ui/date-time
@creation-ui/table
@creation-ui/schedule
@creation-ui/timeline

## Installation

Using npm via terminal

> npm login --registry https://r.privjs.com

> npm i -S react-gradient-progress --registry https://r.privjs.com

Using CI/CD environments such as Netlify, Zeit, Travis CI, etc.
Add `.npmrc` file to your project root with the following line:

```
 //r.privjs.com/:_authToken=${NPM_TOKEN}
```

Set environment variable NPM_TOKEN with your PrivJs Token in your preferred CI/CD environment
That's all
Tutorial:
[Netlify](https://answers.netlify.com/t/support-guide-using-private-npm-modules-on-netlify/795),
[GH Actions](https://blog.bitsrc.io/install-npm-private-packages-in-ci-cd-with-github-actions-746db95017cc),
[NPM](https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow)
