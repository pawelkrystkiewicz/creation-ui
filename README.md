# Gemini UI
Design System

Gemini is a library of React UI components built with Tailwind CSS to get you started building websites faster and more efficiently.

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



# List of components
***
## Date & Time
<details>
  <summary><b>DateTime</b></summary>

* Must have
  - [ ] select date from popup calendar
* Should have
  - [ ] clear date
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Date range</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Date</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Time range</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Time</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

***
## Avatar

<details>
  <summary><b>Avatar</b></summary>


```js
    <Avatar alt="Mr Beans" src="/avatar.png" /> //pic
    <Avatar alt="Johnny English" src="/avatar.png" /> // pic
    <Avatar alt="Sherlock Holmes" src={null} /> // SH
    <Avatar alt={null} src={null} /> // user icon
    <Avatar alt={null} src={null} icon={<EditIcon/>} /> // custom icon
```
* Must have
  - [ ] display picture from `src`
* Should have
  - [ ] if no picture then initials
  - [ ] if no initials > then user icon
* Could have
  - [ ] can specify icon
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Avatars group</b></summary>

```js
  <AvatarGroup max={3}>
    <Avatar alt="Mr Beans" src="/avatar.png" /> //pic
    <Avatar alt="Johnny English" src="/avatar.png" /> // pic
    <Avatar alt="Sherlock Holmes" src={null} /> // SH
    <Avatar alt={null} src={null} /> // user icon
    <Avatar alt={null} src={null} icon={<EditIcon/>} /> // custom icon
  </AvatarGroup>
```
* Must have
  - [ ] display given set[] as overlaping avatars
  - [ ] default `numberOfVisible = 3`
  - [ ] if `set[] > numberOfVisible` display as icon `+${n}` where `n = set.length - numberOfVisible`
* Should have
  - [ ] can handle src, initials and icons at once
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Avatar badge</b></summary>

* Must have
  - [ ] display offline/online status as green/gray
* Should have
  - [ ] counter of notifications
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

***
## Buttons
<details>
  <summary><b>Button</b></summary>

* Must have:
  * 3 variants:
    - [X] text
    - [X] outlined (secondary)
    - [X] contained (primary)

  * 3 roundness levels:
    - [x] default (slightly rounded)
    - [x] rounded (button pill)
    - [x] circle (fab)
* Should have
  - [ ] danger variant (red)
* Could have
  - [ ] changing color of button (rather along with theme)
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Icon button (FAB)</b></summary>

* Must have
  - [ ] pass icon to button as children
* Should have
  - [ ] larger shadow
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Buttons group</b></summary>

* Must have
  - [x] display buttons in group
  - [x] buttons have proper roundness and     removed inner border
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Button toggle group</b></summary>

* Must have
  - [ ] display buttons in group with one always active and visibly "on"
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>


***
## Inputs
<details>
  <summary><b>Text</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>TextArea</b></summary>

* Must have
  - [X] have text area component
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>


<details>
  <summary><b>Number</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Currency /(with dropdown)</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>


***
## Form controls
<details>
  <summary><b>Radio</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Dropdown</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>


<details>
  <summary><b>Multiselect</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Transfer list</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>


<details>
  <summary><b>Slider (value track bar)</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>



<details>
  <summary><b>Search</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Checkbox</b></summary>

* Must have
  - [X] visible checked
  - [X] visible unchecked
  - [X] disabled
  - [X] focus
* Should have
  - [X] indeterminate state
  - [X] active
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Switch</b></summary>

* Must have
  - [X] switch component exists
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>


***
## Info

<details>
  <summary><b>Loading spinner</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Loading overlay</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Progress bar
</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Notifications</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Breadcrumbs</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Pagination</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Context menu</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

***
## Containers

<details>
  <summary><b>Modal</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Drawer</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Layout</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Accordion</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

<details>
  <summary><b>Tabs</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>

### Special Components

<details>
  <summary><b>System Events Timeline</b></summary>

* Must have
  - [ ] ?
* Should have
  - [ ] ?
* Could have
  - [ ] ?
* Won't have
  - [ ] ?
</details>



