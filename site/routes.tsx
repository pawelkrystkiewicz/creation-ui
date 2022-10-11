
import React from 'react';
import { Outlet } from 'react-router-dom';


const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicAvatar = React.lazy(() => import('./pages/avatar'));
const DynamicButton = React.lazy(() => import('./pages/button'));
const DynamicButtonToggleGroup = React.lazy(() => import('./pages/button-toggle-group'));
const DynamicCheckbox = React.lazy(() => import('./pages/checkbox'));
const DynamicDatePickers = React.lazy(() => import('./pages/date-pickers'));
const DynamicDrawer = React.lazy(() => import('./pages/drawer'));
const DynamicIcon = React.lazy(() => import('./pages/icon'));
const DynamicLoadingOverlay = React.lazy(() => import('./pages/loading-overlay'));
const DynamicModal = React.lazy(() => import('./pages/modal'));
const DynamicPopover = React.lazy(() => import('./pages/popover'));
const DynamicRadio = React.lazy(() => import('./pages/radio'));
const DynamicSpinner = React.lazy(() => import('./pages/spinner'));
const DynamicStatusBadge = React.lazy(() => import('./pages/status-badge'));
const DynamicSwitch = React.lazy(() => import('./pages/switch'));
const DynamicTable = React.lazy(() => import('./pages/table'));
const DynamicTimelineHorizontal = React.lazy(() => import('./pages/timeline-horizontal'));
const DynamicTooltips = React.lazy(() => import('./pages/tooltips'));
const DynamicInputsText = React.lazy(() => import('./pages/inputs/text'));
const DynamicInputsTextarea = React.lazy(() => import('./pages/inputs/textarea'));


export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true},
      { path: '/avatar', element: <DynamicAvatar />, },
      { path: '/button', element: <DynamicButton />, },
      { path: '/button-toggle-group', element: <DynamicButtonToggleGroup />, },
      { path: '/checkbox', element: <DynamicCheckbox />, },
      { path: '/date-pickers', element: <DynamicDatePickers />, },
      { path: '/drawer', element: <DynamicDrawer />, },
      { path: '/icon', element: <DynamicIcon />, },
      { path: '/loading-overlay', element: <DynamicLoadingOverlay />, },
      { path: '/modal', element: <DynamicModal />, },
      { path: '/popover', element: <DynamicPopover />, },
      { path: '/radio', element: <DynamicRadio />, },
      { path: '/spinner', element: <DynamicSpinner />, },
      { path: '/status-badge', element: <DynamicStatusBadge />, },
      { path: '/switch', element: <DynamicSwitch />, },
      { path: '/table', element: <DynamicTable />, },
      { path: '/timeline-horizontal', element: <DynamicTimelineHorizontal />, },
      { path: '/tooltips', element: <DynamicTooltips />, },
      { path: '/inputs/text', element: <DynamicInputsText />, },
      { path: '/inputs/textarea', element: <DynamicInputsTextarea />, },
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/avatar' },
  { route: '/button' },
  { route: '/button-toggle-group' },
  { route: '/checkbox' },
  { route: '/date-pickers' },
  { route: '/drawer' },
  { route: '/icon' },
  { route: '/loading-overlay' },
  { route: '/modal' },
  { route: '/popover' },
  { route: '/radio' },
  { route: '/spinner' },
  { route: '/status-badge' },
  { route: '/switch' },
  { route: '/table' },
  { route: '/timeline-horizontal' },
  { route: '/tooltips' },
  { route: '/inputs/text' },
  { route: '/inputs/textarea' },
]
