export type TaskTreeGridRow = TreeGridTask & {
  rowNumber: number
  Def: 'Branch' | 'Leaf'
  isLeaf: boolean
  isBranch: boolean
  Items: TaskTreeGridRow[]
}

export type TreeGridTaskCellPermissions = {
  CanDelete: 0 | 1
  CanDrag: 0 | 1
  titleCanEdit: 0 | 1 | 2
  descriptionCanEdit: 0 | 1 | 2
  taskNumberCanEdit: 0 | 1 | 2
  statusCanEdit: 0 | 1 | 2
  stateCanEdit: 0 | 1 | 2
  statusDescriptionCanEdit: 0 | 1 | 2
  plannedStartDateCanEdit: 0 | 1 | 2
  plannedEndDateCanEdit: 0 | 1 | 2
  actualStartDateCanEdit: 0 | 1 | 2
  actualEndDateCanEdit: 0 | 1 | 2
  suppliersCanEdit: 0 | 1 | 2
  workspacesCanEdit: 0 | 1 | 2
  managersCanEdit: 0 | 1 | 2
  participantsCanEdit: 0 | 1 | 2
  GanttCanEdit: 0 | 1 | 2
  ganttAncestorsCanEdit: 0 | 1 | 2
}
export type TreeGridTask = TreeGridTaskCellPermissions & {
  // Task fields
  id: string
  taskNumber: string
  title: string
  description: string
  status: string
  state: string
  statusDescription: null | string
  // Task resource fields modified for treegrid
  participants: string
  managers: string
  suppliers: string
  workspaces: string
  // Task dates prepared for treegrid
  plannedStartDate: number | null
  plannedEndDate: number | null
  actualStartDate: number | null
  actualEndDate: number | null
  plannedStartDateClass: string
  plannedEndDateClass: string
  // Others
  order: number
  projectId: string
  parentTaskId: string | null
  ganttDescendants: string
  ganttAncestors: string
  GanttGanttHtmlRight: string // the text to display on the right side of gantt bar
  actualBarStartDate: number | null
  actualBarEndDate: number | null
  open: string
  statusDescriptionTip: string
  canCreateTasks: boolean // if true user is allowed to create/copy tasks as children of the current task
}
