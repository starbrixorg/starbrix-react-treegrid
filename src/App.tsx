/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { TaskTreeGridRow } from './types'
import { layout } from './layout'
import data from './data.json'

/* eslint-disable @typescript-eslint/no-explicit-any */
function App() {
  const zoomRef = React.useRef<string | null>(null)
  const scrollToDateRef = React.useRef<Date | null>(null)
  const id = layout.Cfg.id

  if (window.Grids) {
    // @ts-ignore
    window['treegridLayout'] = layout
    // Event handlers
    window.Grids.OnEndDrag = function (
      _: any,
      origRow: TaskTreeGridRow & TRow,
      __: any,
      destRow: TaskTreeGridRow & TRow,
      type: number
    ) {
      const projectId = 'rootNode.projectId'
      const taskId = origRow.id
      const fromOrder = origRow?.order
      const toOrder = destRow?.order

      /** Task is being moved above destRow */
      if (type === 1) {
        let order

        if (origRow?.parentTaskId === destRow?.parentTaskId) {
          order = fromOrder < toOrder ? toOrder - 1 : toOrder
        } else {
          order = toOrder
        }
        const parentTaskId = destRow?.parentTaskId || ''
        console.log(taskId, { projectId, order, parentTaskId })
        return
      }

      /** Task is being moved to be child of destRow */
      if (type === 2) {
        console.log(taskId, {
          projectId,
          parentTaskId: destRow.id,
        })
        return
      }

      /** Task is being moved below destRow */
      if (type === 3) {
        let order

        if (origRow?.parentTaskId === destRow?.parentTaskId) {
          order = fromOrder < toOrder ? toOrder : toOrder + 1
        } else {
          order = toOrder + 1
        }
        const parentTaskId = destRow?.parentTaskId || ''
        console.log(taskId, { projectId, order, parentTaskId })
        return
      }
    }

    // @ts-ignore
    window.Grids.OnAddTask = function () {
      const title = 'Untitled task'
      // if (disableAddTaskButton) return
      // setDisableAddTaskButton(true)
      // onAddTask({ title }).then((response) => {
      //   openCtxMenuHelpModal()
      //   setDisableAddTaskButton(false)
      //   setAddedTasks([{ ...response.created, focus: true, scrollTo: true }])
      // })
      console.log({ title })
    }

    window.Grids.OnEndDragGantt = function (
      _,
      row: TRow & TaskTreeGridRow,
      __,
      draggedObjectName,
      start,
      end
    ) {
      /** Update task plan if plan bar is dragged */
      if (
        row.GanttCanEdit === 0 &&
        draggedObjectName === 'Main' // The plan bar has gantt object name Main, so its making sure the dragged object is really a plan bar
      ) {
        const startDate: Date = new Date(start)
        const endDate: Date = new Date(end)

        // let plannedEndDate: string = dateTimeService // ISO date string of planned end date with timezone offset
        //   .addTimezoneOffset(endDate, 'UTC')
        //   .toISOString()
        // let plannedStartDate: string = dateTimeService // ISO date string of planned start date with timezone offset
        //   .addTimezoneOffset(startDate, 'UTC')
        //   .toISOString()
        // if (!rootNode.enableTimeComponent) {
        //   /**
        //    * The treegrid gives the midnight timestamp of next day, however, we need today's end of the day.
        //    * When there is already a planned end date, the gantt gives the different date but the same time.
        //    */
        //   if (dateTimeService.hasMidnightTime(endDate)) {
        //     plannedEndDate = dateTimeService
        //       .addTimezoneOffset(new Date(end - 1), 'UTC')
        //       .toISOString()
        //   } else {
        //     plannedEndDate = dateTimeService
        //       .addTimezoneOffset(endDate, 'UTC')
        //       .toISOString()
        //   }
        //   /** */
        // }
        // taskActions.updatePlan(row.id, { plannedEndDate, plannedStartDate })
        console.log({ startDate, endDate })
        return true
      }
    }

    /**
     * @link http://www.treegrid.com/Doc/GanttAPI.htm#OnEndDragGanttDependency
     */
    window.Grids.OnEndDragGanttDependency = function (_, deps) {
      const [newDependency] = deps
      const [ganttAncestorTaskId, toId, type = 'fs', lagTime = 0] =
        newDependency
      const currentZoom = zoomRef.current as string
      const zooms = layout['RightCols'][0]['GanttZoomList']
      const lagUnit = zooms.find((z) => z.Name === currentZoom)?.lagUnit || 'd'
      const dependencyData = {
        ganttAncestorTaskId,
        toId,
        type,
        lagTime,
        lagUnit,
      }
      // taskActions.addDependency(toId, dependencyData)
      console.log({ dependencyData })
      return false
    }

    window.Grids.OnGanttMenuClick = function (_, __, ___, menuName, menuItem) {
      if (menuName === 'Delete the dependency') {
        const dependency = (menuItem as any).Param?.[0]?.[0]
        const [fromId, toId, type] = dependency
        const dependencyData = { ganttAncestors: [{ taskId: fromId, type }] }
        // taskActions.removeDependency(toId, dependencyData)
        console.log(toId, dependencyData)
        return
      }
      if (menuName === 'Delete main bar') {
        const updateData = { plannedStartDate: '', plannedEndDate: '' }
        // taskActions.updatePlan(row.id, updateData)
        console.log(updateData)
        return
      }
    }

    window.Grids.OnValueChanged = function (
      _,
      row: TRow & TaskTreeGridRow,
      column: keyof TaskTreeGridRow,
      newValue,
      oldValue
    ) {
      const isColumnEditRestricted = (row as any)[`${column}CanEdit`] !== 1 // if true, the user is not allowed to edit the column
      const isSameValue = newValue === oldValue // if true, the value has not changed
      if (isSameValue || isColumnEditRestricted) return oldValue
      // let value = adaptValue({ column, value: newValue })

      // If the column is a date column, then we need to adjust the timezone
      // if (isDateColumn(column) && value) {
      //   const date = new Date(value)
      //   const adjustedDate = dateTimeService.addTimezoneOffset(date, 'UTC')
      //   value = adjustedDate.toISOString()
      // }

      // if (column === 'status') {
      //   if (
      //     value === 'Completed' &&
      //     shouldConfirmChangeAllToCompleted(row.id, tasks)
      //   ) {
      //     confirmChangeAllToCompleted(row.id, { status: value })
      //     return newValue
      //   } else if (
      //     value === 'Not Started' &&
      //     shouldConfirmChangeAllToNotStarted(row.id, tasks)
      //   ) {
      //     confirmChangeAllToNotStarted(row.id, { status: value })
      //     return newValue
      //   }
      // }

      // taskActions.updateRequest(row.id, { field: column, value })
      console.log({ row, column, newValue, oldValue })
      return newValue
    }

    window.Grids.OnGanttChange = function (
      _grid,
      row,
      _col,
      item,
      _value,
      value2,
      old = null,
      _old2 = null,
      action = null
    ) {
      if (
        item === 'Dependency' &&
        action === 'Edit' &&
        old === (row as any).ganttDescendants
      ) {
        const [ganttAncestorTaskId, taskId, type, lag = ''] = value2
        const regex = /^([\d\s]+)([a-zA-Z]+)?$/
        const [match, time, unit] = lag.match(regex)
        if (!ganttAncestorTaskId || !taskId || !type || !match) return
        // const lagTime = Number(time.trim())
        // const zooms = layout['RightCols'][0]['GanttZoomList']
        // const currentZoom = zoomRef.current as string
        // const fallbackUnit = getGanttUnitFromZoom(zooms, currentZoom)
        // const lagUnit = unit ? getLagUnitFromText(unit) : fallbackUnit
        // const dependencyData = { ganttAncestorTaskId, type, lagTime, lagUnit }
        // taskActions.updateDependency(taskId, dependencyData)
        console.log({ ganttAncestorTaskId, taskId, type, lag, time, unit })
      }
    }

    window.Grids.OnRowDelete = function (_, row, type) {
      // handleRowDelete()
      // async function handleRowDelete() {
      //   if (type !== 2) {
      //     const [error] = await doublet(taskActions.archive, {
      //       taskId: row.id,
      //     })
      //     if (error) {
      //       const errorMessage =
      //         error.message || translations.archiveErrorMessage
      //       onArchiveError(errorMessage)
      //     } else {
      //       onArchiveSuccess(row.id, translations.archiveSuccessMessage)
      //     }
      //   }
      // }
      console.log('Row delete', row, type)
    }

    window.Grids.OnGanttTip = function (_g, _r, _c, _tip, event, name) {
      if (name === 'Dependency') {
        const { DependencyFrom, DependencyType, DependencyTo } = event
        const fromRowNumber = (_g?.Rows as any)[DependencyFrom]?.rowNumber
        const toRowNumber = (_g?.Rows as any)[DependencyTo]?.rowNumber
        return `${fromRowNumber} => ${toRowNumber} (${DependencyType})`
      } else {
        return _tip
      }
    }

    window.Grids.OnRenderFinish = function () {
      if (window.Grids[id]) {
        /** Scrolling to today on Gantt Chart */
        scrollToDateRef.current = new Date()
        console.log(scrollToDateRef.current)
        window.Grids[id]?.ScrollToDate(scrollToDateRef.current, 'Left')
      }
    }

    window.Grids.OnZoom = function (_, zoom) {
      console.log(zoom)
      zoomRef.current = zoom
    }
    // @ts-ignore
    window.Grids['OnFilterToggle'] = function () {
      // toggleFilters()
    }
    // @ts-ignore
    window.Grids.OnClickNext = function () {
      if (window.Grids[id]) {
        if (
          zoomRef.current === 'Months, Weeks and Days' ||
          zoomRef.current === 'Weeks and Days'
        ) {
          scrollToDateRef.current = addDays(scrollToDateRef.current as Date, 7)
          window.Grids[id]?.ScrollToDate(
            scrollToDateRef.current as Date,
            'Left'
          )
        } else if (zoomRef.current === 'Quarters and Months') {
          scrollToDateRef.current = addMonths(
            scrollToDateRef.current as Date,
            1
          )
          window.Grids[id]?.ScrollToDate(
            scrollToDateRef.current as Date,
            'Left'
          )
        } else if (zoomRef.current === 'Years and Quarters') {
          scrollToDateRef.current = addMonths(
            scrollToDateRef.current as Date,
            3
          )
          window.Grids[id]?.ScrollToDate(
            scrollToDateRef.current as Date,
            'Left'
          )
        }
      }
    }
    // @ts-ignore
    window.Grids.OnClickPrev = function () {
      if (window.Grids[id]) {
        if (
          zoomRef.current === 'Months, Weeks and Days' ||
          zoomRef.current === 'Weeks and Days'
        ) {
          scrollToDateRef.current = subDays(scrollToDateRef.current as Date, 7)
          window.Grids[id]?.ScrollToDate(
            scrollToDateRef.current as Date,
            'Left'
          )
        } else if (zoomRef.current === 'Quarters and Months') {
          scrollToDateRef.current = subMonths(
            scrollToDateRef.current as Date,
            1
          )
          window.Grids[id]?.ScrollToDate(
            scrollToDateRef.current as Date,
            'Left'
          )
        } else if (zoomRef.current === 'Years and Quarters') {
          scrollToDateRef.current = subMonths(
            scrollToDateRef.current as Date,
            3
          )
          window.Grids[id]?.ScrollToDate(
            scrollToDateRef.current as Date,
            'Left'
          )
        }
      }
    }
    // @ts-ignore
    window.Grids.OnClickToday = function () {
      if (window.Grids[id]) {
        window.Grids[id]?.ScrollToDate(new Date(), 'Center')
      }
    }
    // @ts-ignore
    window.Grids.OnClickButton = function (grid, row, col) {
      // if (col === 'open') setNavigateToTaskId(row.id)
      console.log(row.id)
    }

    window.Grids.OnGanttPage = function (_grid, _col, size) {
      if (window.Grids[id]) {
        const [left] = size as unknown as number[]
        // @ts-ignore
        const leftDate = window.Grids[id].GetGanttDate(left)
        scrollToDateRef.current = new Date(leftDate)
      }
    }

    window.Grids.OnGetExportValue = function (
      _grid,
      row,
      col,
      _value,
      _format
    ) {
      const task = row as any
      if (col === 'statusDescription') {
        const tipValue = (row as any).statusDescriptionTip
          ?.replaceAll('&nbsp;', ' ')
          .replaceAll('&bull;', '')
        const tipFormatted = tipValue ? `(${tipValue})` : ''
        const statusDescription =
          task.statusDescription?.toString().replaceAll('\n', ' ') || ''
        const statusDescriptionExportValue = `${statusDescription} ${tipFormatted}`
        return statusDescriptionExportValue
      }
    }
  }

  React.useEffect(() => {
    if (!window.Grids[id]) {
      // eslint-disable-next-line no-console
      console.log('Creating treegrid instance')
      window.TreeGrid(
        {
          Layout: { Script: 'treegridLayout' },
          Data: { Data: { Body: [data] } },
          Debug: 'Problem,Error',
        },
        id
      )
    }
    // Destroy the treegrid instance when the component unmounts
    return () => {
      // eslint-disable-next-line no-console
      console.log('Destroying treegrid instance')
      // @ts-ignore
      window.Grids[id]?.Dispose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={createContainerStyle()}>
      <div id={id} style={{ height: 'calc(100vh - 124px)' }} />
    </div>
  )
}

export default App

function addDays(inputDate: Date, daysToAdd: number) {
  const resultDate = new Date(inputDate)
  resultDate.setDate(resultDate.getDate() + daysToAdd)
  return resultDate
}

function subDays(inputDate: Date, daysToSubtract: number) {
  const resultDate = new Date(inputDate)
  resultDate.setDate(resultDate.getDate() - daysToSubtract)
  return resultDate
}

function subMonths(inputDate: Date, monthsToSubtract: number) {
  const resultDate = new Date(inputDate)
  resultDate.setMonth(resultDate.getMonth() - monthsToSubtract)
  return resultDate
}
function addMonths(inputDate: Date, monthsToAdd: number) {
  const resultDate = new Date(inputDate)
  resultDate.setMonth(resultDate.getMonth() + monthsToAdd)
  return resultDate
}

function createContainerStyle() {
  return {
    position: 'absolute' as const,
    left: 0,
    right: 0,
    top: 32,
    padding: `0 8px`,
  }
}
