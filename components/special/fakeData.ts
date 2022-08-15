import {
  Contractor,
  Device,
  DeviceType,
  Employee,
  EmployeeType,
  Event,
  EventRegister,
  EventType,
  Location,
} from './chronos'

const common = { createdAt: new Date(), updatedAt: new Date() }

export const contractor: Contractor = {
  city: '',
  contractorFullName: '',
  contractorShortName: '',
  contractorUUID: '',
  commune: '',
  country: '',
  devices: [],
  employees: [],
  isActive: true,
  isAPT: false,
  isOwner: false,
  numberNIP: 657987977,
  postalCode: '',
  street: '',
  ...common,
}

export const device: Device = {
  deviceUUID: '',
  contractor: contractor,
  isActive: true,
  description: '',
  deviceId: '',
  deviceName: '',
  deviceType: DeviceType.INDOOR,
  eventRegister: [],
  lastSeenAt: new Date(),
  ...common,
}

export const location: Location = {
  color: 'blue',
  isActive: true,
  locationFullName: 'Magazyn 1',
  locationShortName: 'MAG1',
  locationUUID: 'e23405ry3fh3',
  responsibleEmployee: {} as any,
  ...common,
}

export const employee: Employee = {
  employeeUUID: 'np2rtfgyd82',
  firstName: 'Johny',
  lastName: 'English',
  isActive: true,
  email: 'j.english@work.com',
  employeeType: EmployeeType.EMPLOYEE,
  avatar:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  ...common,
}

const event_start: Event = {
  eventShortName: 'Start',
  eventFullName: 'Start',
  priority: 0,
  isWorkTime: false,
  isBreak: false,
  greetingText: 'Hello there',
  eventUUID: '312531',
  eventType: EventType.INDOOR,
  eventRegister: [],
  eventPaired: null,
  color: '#079bff',
  isActive: true,
  ...common,
}

const event_end: Event = {
  ...event_start,
  eventShortName: 'End',
  eventFullName: 'End',
  greetingText: 'Bye!',
  eventType: EventType.INDOOR,
  eventUUID: '111111',
  eventPaired: event_start,
  color: '#ff079b',
}

const event_break_start: Event = {
  ...event_start,
  eventShortName: 'Break Start',
  eventFullName: 'Break Start',
  greetingText: 'Break started',
  eventType: EventType.INDOOR,
  eventUUID: '12e51',
  eventPaired: event_start,
  color: '#ffd000',
}

const event_break_end: Event = {
  ...event_start,
  eventShortName: 'Break End',
  eventFullName: 'Break End',
  greetingText: 'Break ended',
  eventType: EventType.INDOOR,
  eventUUID: '12e51121',
  eventPaired: event_start,
  color: '#ffd01a',
}

export const events: EventRegister[] = [
  {
    device,
    employee,
    event: event_start,
    eventRegisterUUID: 'mfop249r9d',
    originEvent: event_start,
    suggestedEvent: event_start,
    eventRegisteredAt: '2022-08-13T05:41:49.990Z',
    originRegisteredAt: '2022-08-13T05:41:49.990Z',
    ...common,
  },
  {
    device,
    employee,
    event: event_break_start,
    eventRegisterUUID: 'jd192d12',
    originEvent: event_break_start,
    suggestedEvent: event_break_start,
    eventRegisteredAt: '2022-08-13T09:01:49.990Z',
    originRegisteredAt: '2022-08-13T09:01:49.990Z',
    ...common,
  },
  {
    device,
    employee,
    event: event_break_end,
    eventRegisterUUID: 'mfop249r9d3123',
    originEvent: event_break_end,
    suggestedEvent: event_break_end,
    eventRegisteredAt: '2022-08-13T09:50:49.990Z',
    originRegisteredAt: '2022-08-13T09:50:49.990Z',
    ...common,
  },
  {
    device,
    employee,
    event: event_end,
    eventRegisterUUID: '98f79w6d234',
    originEvent: event_end,
    suggestedEvent: event_end,
    eventRegisteredAt: '2022-08-13T14:20:49.990Z',
    originRegisteredAt: '2022-08-13T14:20:49.990Z',
    ...common,
  },
]
