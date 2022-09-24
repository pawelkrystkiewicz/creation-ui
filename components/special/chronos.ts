export type DateType = string | Date

export type EntityCommonFields = {
  color: string
  isActive: boolean
  createdAt: DateType
  updatedAt: DateType
}
export type EntityCommonFieldsAndEmployee = {
  responsibleEmployee: Employee
} & EntityCommonFields

export enum EmployeeType {
  EMPLOYEE = 'EMPLOYEE',
  MANAGER = 'MANAGER',
  SUPPORT = 'SUPPORT',
}

export type Employee = Omit<EntityCommonFields, 'color'> & {
  firstName: string
  lastName: string
  email: string
  employeeUUID: string
  employeeType: EmployeeType
  avatar?: string | null
}

export type EmployeeShort = Pick<
  Employee,
  'employeeUUID' | 'firstName' | 'lastName' | 'avatar'
>
export type EmployeeShortWithLocations = Pick<
  Employee,
  'employeeUUID' | 'firstName' | 'lastName'
> & {
  locations: Location[]
  avatarLink: string | null
}

export type EmployeeOnList = Pick<Employee, 'employeeUUID'>
export type LocationOnList = Pick<Location, 'locationUUID'>

export type AuthResponse = {
  employeeUUID: string
  employeeType: EmployeeType
  email: string
  firstName: string
  lastName: string
  isActive: boolean
  createdAt: DateType
  updatedAt: DateType
  contractorUUID: string
  contractorShortName: string
  // passwordPortal: string
}

export enum DisabilityLevel {
  NONE = 'NONE',
  HIGH = 'HIGH',
  MODERN = 'MODERN',
  SLIGHT = 'SLIGHT',
}

export type User = Omit<EntityCommonFields, 'color'> & {
  userUUID: string
  employee: Employee
}

export type Department = EntityCommonFieldsAndEmployee & {
  departmentShortName: string
  departmentFullName: string
  departmentUUID: string
}

export enum DeviceType {
  OUTDOOR = 'OUTDOOR',
  INDOOR = 'INDOOR',
}

export enum EventType {
  OUTDOOR = 'OUTDOOR',
  INDOOR = 'INDOOR',
}

export type Device = Omit<EntityCommonFields, 'color'> & {
  deviceUUID: string
  deviceName: string
  description: string
  deviceType: DeviceType
  eventRegister: EventRegister[]
  deviceId: string
  contractor: Contractor
  lastSeenAt?: DateType
}

export type Event = EntityCommonFields & {
  eventShortName: string
  eventFullName?: string
  priority: number
  isWorkTime: boolean
  isBreak: boolean
  greetingText: string
  eventUUID: string
  eventType: EventType
  eventRegister: EventRegister[]
  eventPaired: Event | null
}

export type Contractor = Omit<EntityCommonFields, 'color'> & {
  contractorUUID: string
  contractorShortName: string
  contractorFullName: string
  city: string
  commune: string
  country: string
  devices: Device[]
  employees: Employee[]
  street: string
  postalCode: string
  numberNIP: number
  isAPT: boolean
  isOwner: boolean
}

export type Competence = EntityCommonFields & {
  competenceShortName: string
  competenceUUID: string
  competenceFullName: string
  employees?: EmployeeShort[]
}
export enum AgreementType {
  CONTRACT = 'CONTRACT',
  PERMANENT = 'PERMANENT',
  TEMPORARY = 'TEMPORARY',
  FOREIGNER = 'FOREIGNER',
  INTERNSHIP = 'INTERNSHIP',
  OUTSOURCING = 'OUTSOURCING',
  PERMAMENT_WITH_TASK_MODE = 'PERMAMENT_WITH_TASK_MODE',
  TEMPORARY_WITH_TASK_MODE = 'TEMPORARY_WITH_TASK_MODE',
  TRIAL = 'TRIAL',
}

export type Currency = Omit<EntityCommonFields, 'color' | 'isActive'> & {
  currencyFullName: string
  currencyShortName: string
  currencyUUID: string
}

export enum RateType {
  HOUR = 'HOUR',
  MONTH = 'MONTH',
}

export type Agreement = Omit<EntityCommonFields, 'color' | 'isActive'> & {
  agreementUUID: string
  agreementShortName: string
  agreementFullName: string
  agreementType: AgreementType
  workTimeRules: number
  rate: number
  rateCurrency: Currency
  rateType: RateType
  responsibleEmployee: Employee
  workplace: Workplace
  department: Department
  start: DateType
  end: DateType
  billingPeriod: BillingPeriodType
  maximumWorkHourDay: number
  minimumWorkHourDay: number
  locations: Location[]
}

export type Location = EntityCommonFieldsAndEmployee & {
  locationShortName: string
  locationFullName: string
  locationUUID: string
}

export type Workplace = EntityCommonFieldsAndEmployee & {
  workplaceShortName: string
  workplaceUUID: string
  workplaceFullName: string
}

export type EventRegister = Omit<EntityCommonFields, 'color' | 'isActive'> & {
  device: Device
  employee: Employee
  originRegisteredAt: DateType
  eventRegisteredAt: DateType
  eventRegisterUUID: string
  suggestedEvent: Event
  originEvent: Event
  event: Event
}
export type VacationLimit = Omit<EntityCommonFields, 'color'> & {
  vacationLimitUUID: string
  vacationLimitShortName: string
  vacationLimitFullName: string
  vacationLimitMax: number
  vacationLimitDefault: boolean
}

export type VacationLimitEmployee = Omit<
  EntityCommonFields,
  'color' | 'isActive'
> & {
  hoursPreviousYear: number
  hoursCurrentYear: number
  employeeVacationLimitUUID: string
  employee: Employee
}

export type Note = Omit<EntityCommonFields, 'color' | 'isActive'> & {
  title: string
  notationUUID: string
  notationType: NoteType
  description: string
  author: Employee
  employee: Employee
}

export enum NoteType {
  CONFIDENTIAL = 'CONFIDENTIAL',
  NORMAL = 'NORMAL',
}

export type Equipment = {
  description: string
  returnedAt: DateType
  equipmentUUID: string
  equipmentNumber: string
  quantity: number
  employee: Employee
  transferedAt: DateType
  transferedBy: Employee
}

export type Examination = Omit<EntityCommonFields, 'color' | 'isActive'> & {
  examinationUUID: string
  examinationType: ExaminationType
  description: string
  request: RequestWFM
  employee: Employee
  completedAt: DateType
  expiresAt: DateType
}
export enum ExaminationType {
  MEDICAL = 'MEDICAL',
  OHS = 'OHS',
  PERIODIC = 'PERIODIC',
  SPECIALIZED = 'SPECIALIZED',
}

export type RequestWFM = Omit<EntityCommonFields, 'color' | 'isActive'> & {
  requestUUID: string
  workHoursCount: number
  workDaysCount: number
  start: DateType
  replacement: Employee
  requestType: RequestType
  referralType: ReferralType
  examination: Examination
  end: DateType
  comment: string
  author: Employee
  employee: Employee
  absence?: Absence
  absenceType: AbsenceType
  status: RequestStatusType
  responsibleEmployee: Employee
}

export enum ReferralType {
  CONTROL = 'CONTROL',
  INITIAL = 'INITIAL',
  PERIODIC = 'PERIODIC',
}
export enum RequestType {
  REFERRAL = 'REFERRAL',
  VACATION = 'VACATION',
}
export enum RequestStatusType {
  APPROVED = 'APPROVED',
  REGISTERED = 'REGISTERED',
  REJECTED = 'REJECTED',
}
export enum BillingPeriodType {
  FOURMONTHS = 'FOURMONTHS',
  HALFYEAR = 'HALFYEAR',
  ONEMONTH = 'ONEMONTH',
  QUARTER = 'QUARTER',
  TWOMONTHS = 'TWOMONTHS',
  YEAR = 'YEAR',
}

export type Absence = Omit<EntityCommonFields, 'color' | 'isActive'> & {
  absenceUUID: string
  toDate: DateType
  fromDate: DateType
  description: string
  absenceType: AbsenceType
  employee: Employee
}

export type AbsenceType = Omit<EntityCommonFields, 'color'> & {
  absenceTypeUUID: string
  shortName: string
  fullName: string
  description: string
  isRequest: boolean
  annualLeaveLimit?: VacationLimit
  annualOnDemandLeaveLimit?: VacationLimit
}

export type EventShort = {
  fullName: string
  shortName: string
  color?: string
  eventRegisteredAt: DateType
}

export type EventRegisterSummary = {
  break: number
  paidBreak: number
  workTime: number
  scheduleWorkTime: number
  workTimeWithPaidBreak: number
}

export type EdgeEvent = {
  shortName: string
  fullName: string
  eventRegisteredAt: string
  eventRegisteredAtFrom: string
  eventRegisteredAtTo: string
}

export type EventRegisterView = {
  employeeUUID: string
  firstName: string
  lastName: string
  avatar: null | string
  firstEventRegister: EdgeEvent
  lastEventRegister: EdgeEvent
  eventsRegistered: EventRegister[]
  blocked: boolean
  exported?: boolean
  schedule: null | EventSchedule
  summary: EventRegisterSummary
}

export type EventSchedule = {
  scheduleUUID: string
  startDate: string
  endDate: string
  absenceTypeUUID: string
  shortName: string
  fullName: string
  type: string
}

export type EventRegisterShort = {
  color: string
  eventUUID: string
  eventFullName: string | SyntheticEvent
  eventShortName: string | SyntheticEvent
  eventRegisteredAtFrom: DateType
  eventRegisteredAtTo: DateType
  lengthInSeconds: number
}

export enum SyntheticEvent {
  NoneWorkTime = 'NoneWorkTime',
  WorkTime = 'WorkTime',
  BreakNoneWorkTime = 'BreakNoneWorkTime',
  BreakTime = 'BreakTime',
}

export type OwnerSettings = Omit<EntityCommonFields, 'color' | 'isActive'> & {
  ownerSettingUUID: string
  colorWorkTime: string
  colorNoneWorkTime: string
  colorBreakNoneWorkTime: string
  colorBreak: string
  colorHoliday: string
  colorWeekend: string
  breakPaidTimeLimit?: number
  endWorkEvent: Event | null
  startWorkEvent: Event | null
}

export enum ScheduleType {
  NoneWorkTime = 'ISNONEWORKTIME',
  WorkTime = 'ISWORKTIME',
  Holiday = 'ISHOLIDAY',
}

export type ScheduleEntry = {
  updatedAt?: string
  createdAt?: string
  scheduleUUID: string
  startDate: string
  endDate: string
  type: ScheduleType
  absenceType?: AbsenceType
  fullName?: string
  shortName?: string
  employee: Employee
}

export type ScheduleData = EmployeeShortWithLocations & {
  schedule: ScheduleEntry[]
}

export type RemappedSchedule = ScheduleData & { overlaps: number[] }

export type ScheduleGraphqlShape = ScheduleEntry & {
  employee: Employee
}

export type Holiday = Omit<EntityCommonFields, 'color' | 'isActive'> & {
  holidayUUID: string
  shortName: string
  fullName: string
  startDate: DateType
  endDate: DateType
}

export type ScheduleHoliday = {
  date: string
  shortName: string
  fullName: string
}

export type Shift = {
  shiftUUID: string
  shortName: string
  fullName: string
  startHour: DateType
  endHour: DateType
}

export type LeaveLimitAmount = {
  days: number
  hour: number
}

export enum NotificationType {
  INFO = 'INFO',
  WARN = 'WARN',
}

export type Notification = {
  notificationType: NotificationType
  notificationCode: string // NotificationCode
  notificationName: string
  notificationText: string
  notificationUUID: string
  read: boolean
  readAt?: DateType
  employee?: EmployeeShort
}

export type ActionGroup = EntityCommonFields & {
  icon: string
  actionGroupUUID: string
  actionGroupShortName: string
  actionGroupFullName: string
  actions: Action[]
}

export type Action = EntityCommonFields & {
  icon: string
  actionUUID: string
  actionShortName: string
  actionFullName: string
  actionGroup: ActionGroup
  rate: number
  sortBy?: number
  rateCurrency: Currency
}

export type Project = Omit<EntityCommonFields, 'color'> & {
  projectUUID: string
  projectShortName: string
  projectFullName: string
  contractor?: Contractor
}
export type ActionRegister = Omit<EntityCommonFields, 'color' | 'isActive'> & {
  actionRegisterUUID: string
  action: Action
  costTotal: number
  contractor: Contractor
  estimatedTime: number
  measuredTime: number
  rate: number
  originStartRegisteredAt: string
  originStopRegisteredAt: string
  startRegisteredAt: string
  stopRegisteredAt: string
  employee: Employee
  project: Project
}

export enum EmployeeIdCardStatus {
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  REVOKED = 'REVOKED',
  STOLEN = 'STOLEN',
  LOST = 'LOST',
}

export type EmployeeIdCard = Omit<EntityCommonFields, 'color' | 'isActive'> & {
  employee: EmployeeShort
  employeeCardUUID: string
  status: EmployeeIdCardStatus
  createdAt: string
  updatedAt: string
  expirationDate: string
  releaseDate: string
}

export type EventRegisterDetailsView = {
  eventRegisterUUID: string
  createdAt: DateType
  updatedAt: DateType
  employee: Employee | EmployeeShort
  event: Event
  originEvent: Event
  suggestedEvent: Event
  originRegisteredAt: DateType
  eventRegisteredAt: DateType
  device: Device
  summary: EventRegisterSummary
}
