export const layout = {
  Cfg: {
    id: '__taskTreeGrid__',
    SuppressCfg: 1,
    Style: 'white',
    GanttStyle: 'Material',
    MainCol: 'title',
    Selecting: 0,
    Dragging: 1,
    ScrollLeft: 0,
    LeftScrollLeft: 0,
    RightScrollLeft: 0,
    LeftCanResize: 0,
    RightCanResize: 4,
    LeftWidth: 408,
    SectionShrinkOrder: ['Right,Mid,Left'],
    PrintVisible: 1,
    PrintExpanded: 1,
    PrintPageOrientation: 1,
    PrintPaddingHeight: 20,
    PDFFitPage: 1,
  },
  LeftCols: [
    {
      Name: 'rowNumber',
      MaxWidth: 56,
      Type: 'Int',
      Visible: true,
      CanSort: 0,
      MinWidth: 56,
      header: '',
    },
    {
      Name: 'open',
      Type: 'Button',
      Visible: true,
      MinWidth: 56,
      Class: 'openButton',
      header: '',
      CanExport: 0,
      CanPrint: 0,
      CanSort: 0,
    },
    {
      Name: 'Panel',
    },
    {
      Name: 'taskNumber',
      MinWidth: 80,
      MaxWidth: 80,
      CaseSensitive: 0,
      header: 'Task Number',
    },
    {
      Name: 'title',
      Width: 280,
      CaseSensitive: 0,
      header: 'Title',
    },
    {
      Name: 'status',
      Type: 'Enum',
      Enum: '|Not Started|In Progress|Completed|Rejected',
      MinWidth: 120,
      Visible: true,
      header: 'Status',
    },
    {
      Name: 'state',
      Type: 'Enum',
      Enum: '|\n    <span style="display: inline-block; padding-top: 6px; padding-bottom: 6px;">\n    Not reported\n    </span>\n  |<span class="material-symbols-rounded" style="font-size: 22px;  color: #302D43; padding: 1px; border: 1.5px solid; border-radius: 2px; background-color: #43a04777; border-color: #43a047">sentiment_satisfied</span>|<span class="material-symbols-rounded" style="font-size: 22px;  color: #302D43; padding: 1px; border: 1.5px solid; border-radius: 2px; background-color: #FFC15277; border-color: #FFC152;">sentiment_neutral</span>|<span class="material-symbols-rounded" style="font-size: 22px;  color: #302D43; padding: 1px; border: 1.5px solid; border-radius: 2px; background-color: #ff333377; border-color: #ff3333;">sentiment_dissatisfied</span>',
      CanSort: 0,
      CanExport: 0,
      MinWidth: 64,
      MaxWidth: 64,
      Visible: false,
      header: 'State',
    },
    {
      Name: 'statusDescription',
      Visible: false,
      CaseSensitive: 0,
      Type: 'Lines',
      MinWidth: 300,
      AcceptEnters: 1,
      header: 'Status description',
    },
    {
      Name: 'managers',
      Type: 'Enum',
      Enum: '|',
      EnumKeys: '|',
      Value: 0,
      Range: true,
      MinWidth: 120,
      CanHide: 0,
      Visible: false,
      header: 'Responsible person',
    },
    {
      Name: 'participants',
      Type: 'Enum',
      Enum: '|',
      EnumKeys: '|',
      Value: 0,
      Range: true,
      MinWidth: 120,
      CanHide: 0,
      Visible: false,
      header: 'Participants',
    },
    {
      Name: 'plannedStartDate',
      Type: 'Date',
      Format: 'dd.MM.yyyy',
      MinWidth: 120,
      Visible: true,
      header: 'Planned start',
    },
    {
      Name: 'plannedEndDate',
      Type: 'Date',
      Format: 'dd.MM.yyyy',
      MinWidth: 120,
      Visible: true,
      header: 'Planned end',
    },
    {
      Name: 'description',
      Visible: false,
      CaseSensitive: 0,
      Type: 'Lines',
      MinWidth: 300,
      AcceptEnters: 1,
      RelWidth: 1,
      header: 'Description',
    },
    {
      Name: 'actualStartDate',
      Type: 'Date',
      Format: 'dd.MM.yyyy',
      MinWidth: 120,
      Visible: false,
      header: 'Actual start',
    },
    {
      Name: 'actualEndDate',
      Type: 'Date',
      Format: 'dd.MM.yyyy',
      Visible: false,
      MinWidth: 120,
      header: 'Actual end',
    },
    {
      Name: 'actualBarEndDate',
      Type: 'Date',
      Visible: 0,
      CanHide: 0,
      CanExport: 0,
      CanPrint: 0,
      header: 'HiddenActualBarEndDate',
    },
    {
      Name: 'actualBarStartDate',
      Type: 'Date',
      Visible: 0,
      CanHide: 0,
      CanExport: 0,
      CanPrint: 0,
      header: 'HiddenActualBarStartDate',
    },
    {
      Name: 'basePlanStartDate',
      Type: 'Date',
      Visible: 0,
      CanHide: 0,
      header: 'Base plan start',
    },
    {
      Name: 'basePlanEndDate',
      Type: 'Date',
      Visible: 0,
      CanHide: 0,
      header: 'Base plan end',
    },
    {
      Name: 'suppliers',
      Type: 'Enum',
      Enum: '|',
      EnumKeys: '|',
      Value: 0,
      Range: true,
      MinWidth: 120,
      CanHide: 0,
      Visible: 0,
      header: 'Suppliers',
    },
    {
      Name: 'workspaces',
      Type: 'Enum',
      Enum: '|',
      EnumKeys: '|',
      Value: 0,
      Range: true,
      MinWidth: 120,
      CanHide: 0,
      Visible: 0,
      header: 'Workspaces',
    },
    {
      Name: 'ganttAncestors',
      type: 'Html',
      CanHide: 0,
      Visible: 0,
      CanPrint: 0,
      CanExport: 0,
    },
  ],
  Cols: [],
  RightCols: [
    {
      Name: 'Gantt',
      Type: 'Gantt',
      GanttCount: 1,
      GanttEdit: 'Main,Dependency,DependencyTypes,DependencyLags',
      GanttLines: '0#12.10.2023#Navy',
      GanttExclude: 'w#10/8/2023~10/9/2023;w#10/7/2023~10/8/2023;',
      GanttBackground: 'd#12.10.2023',
      GanttBase: null,
      GanttFinish: null,
      GanttBaseCanEdit: 0,
      GanttFinishCanEdit: 0,
      GanttShowBounds: 2,
      GanttDependencyColor: 3,
      GanttAncestors: 'ganttAncestors',
      GanttIncorrectDependencies: 0,
      GanttCorrectDependencies: 0,
      GanttZoom: 'Months, Weeks and Days',
      GanttZoomList: [
        {
          Name: 'Years and Quarters',
          GanttUnits: 'M3',
          lagUnit: 'M3',
          GanttSize: '0',
          GanttChartRound: 'y',
          GanttHeader1: 'y#yyyy',
          GanttHeader2: 'M3#MMMMM',
          GanttWidth: 64,
        },
        {
          Name: 'Quarters and Months',
          GanttUnits: 'M',
          lagUnit: 'M',
          GanttSize: '0',
          GanttChartRound: 'M3',
          GanttHeader1: 'M3#MMMMM yyyy',
          GanttHeader2: 'M#MMM',
          GanttWidth: 64,
        },
        {
          Name: 'Months, Weeks and Days',
          GanttUnits: 'd',
          lagUnit: 'd',
          GanttLastUnit: 'd',
          GanttChartRound: 'M',
          GanttSize: '0',
          GanttHeader1: 'M#MMMM yyyy',
          GanttHeader2: 'w1#"wk "dddddddd',
          GanttHeader3: 'd#dd',
        },
        {
          Name: 'Weeks and Days',
          GanttUnits: 'd',
          lagUnit: 'd',
          GanttLastUnit: 'd',
          GanttChartRound: 'w1',
          GanttSize: 'y5',
          GanttHeader1: 'w1#"wk "dddddddd, MMM yyyy',
          GanttHeader2: 'd#dd',
          GanttHeader3: 'd#ddddd',
        },
      ],
      GanttSmoothZoom: 2,
      GanttChartMinStart: '12.10.2021',
      GanttChartMaxStart: '12.10.2021',
      GanttChartMinEnd: '12.10.2028',
      GanttChartMaxEnd: '12.10.2028',
      GanttPaging: 1,
      GanttPageWidth: '120%',
      GanttStart: 'plannedStartDate',
      GanttEnd: 'plannedEndDate',
      GanttHeight: 16,
      GanttClass: 'Blue',
    },
  ],
  Header: {
    Name: 'Row headers',
    rowNumber: '',
    open: '',
    taskNumber: 'Task Number',
    title: 'Title',
    status: 'Status',
    state: 'State',
    statusDescription: 'Status description',
    managers: 'Responsible person',
    participants: 'Participants',
    plannedStartDate: 'Planned start',
    plannedEndDate: 'Planned end',
    description: 'Description',
    actualStartDate: 'Actual start',
    actualEndDate: 'Actual end',
    actualBarEndDate: 'HiddenActualBarEndDate',
    actualBarStartDate: 'HiddenActualBarStartDate',
    basePlanStartDate: 'Base plan start',
    basePlanEndDate: 'Base plan end',
    suppliers: 'Suppliers',
    workspaces: 'Workspaces',
  },
  Actions: {
    OnRightClickCell: 'Grid.showContextMenu(Row, Col, Grid)',
  },
  Panel: {
    Move: 1,
    PanelDeleteTip: 'Archive task',
  },
  Toolbar: {
    AddChild: 0,
    Cfg: 0,
    Contrasts: 0,
    Debug: 0,
    DefSort: 0,
    GanttStyles: 0,
    Help: 0,
    Indent: 0,
    Lock: 0,
    Outdent: 0,
    Reload: 0,
    Sizes: 0,
    Space: 0,
    Styles: 0,
    WinScroll: 0,
    Correct: 0,
    Add: 0,
    Link: 0,
    Cells05Custom: 'AddTask',
    Cells60Filter: 'Filter',
    FilterType: 'Button',
    FilterButtonClass: 'Filter_Button',
    FilterOnClick: 'window.Grids.OnFilterToggle()',
    AddTaskType: 'Button',
    AddTaskButton: 'Button',
    AddTask: '<button>Add task<span class="icon"> + </span></button>',
    AddTaskClass: 'toolbarCustomButton toolbarCustomButton--primary',
    AddTaskOnClick: 'window.Grids.OnAddTask()',
    Cells50GanttZoom: '',
    Cells99GanttZoom: 'ZoomIn,ZoomOut,ZoomFit,Zoom,Prev,Today,Next',
    ZoomType: 'SelectGanttZoom',
    ZoomHtmlPrefix: 'Show <b>',
    ZoomHtmlPostfix: '</b>',
    ZoomWidth: '184',
    NextType: 'Button',
    NextButton: 'Button',
    Next: '<button class="icon"> > </button>',
    NextClass: 'toolbarCustomButton toolbarCustomButton--small',
    NextOnClick: 'window.Grids.OnClickNext()',
    PrevType: 'Button',
    PrevButton: 'Button',
    Prev: '<button class="icon"> < </button>',
    PrevClass: 'toolbarCustomButton toolbarCustomButton--small',
    PrevOnClick: 'window.Grids.OnClickPrev()',
    TodayType: 'Button',
    TodayButton: 'Button',
    Today: '<button >12 Oct</button>',
    TodayClass: 'toolbarCustomButton toolbarCustomButton--small',
    TodayOnClick: 'window.Grids.OnClickToday()',
    PrintTip: 'Print',
    ExportTip: 'Export',
    ExpandAllTip: 'Expand all',
    CollapseAllTip: 'Collapse all',
    ColumnsTip: 'Display menu to choose visible columns',
    ZoomInTip: 'Zoom in',
    ZoomOutTip: 'Zoom out',
    ZoomFitTip: 'Zoom to fit',
    PrevTip: 'Scroll gantt backward',
    NextTip: 'Scroll gantt forward',
  },
  Head: [
    {
      id: 'headerRow',
      Name: 'Page header',
      Space: -1,
      Visible: 0,
      PanelVisible: 0,
      CanExport: 0,
      CanPrint: 2,
      Cells: 'Logo,GridInfo,PrintDate',
      LogoRelWidth: 1,
      LogoAligh: 'Left',
      LogoVAligh: 'middle',
      LogoType: 'Html',
      Logo: '<img style="height: 40px;" src="/favicon.png"  alt="company logo"/>',
      PrintDate: '2023-10-12T16:26:22.926Z',
      PrintDateType: 'Date',
      PrintDateFormat: 'dd.MM.yyyy',
      PrintDateCanEdit: 0,
      GridInfo: '<span class="largeText"><span>',
      GridInfoType: 'Html',
      GridInfoRelWidth: 2,
    },
    {
      CanExport: 0,
      CanPrint: 0,
      id: 'filterRow',
      Kind: 'Filter',
      statusFilterOff: 'All statuses',
      managersFilterOff: 'All managers',
      participantsFilterOff: 'All participants',
      suppliersFilterOff: 'All suppliers',
      workspacesFilterOff: 'All workspaces',
      Visible: 0,
    },
  ],
  Def: [
    {
      Name: 'Leaf',
      GanttMenu: [
        {
          Name: 'Delete main bar',
        },
      ],
    },
    {
      Name: 'Branch',
      GanttMenu: [],
    },
    {
      Name: 'R',
      MaxHeight: 16,
    },
  ],
  Lang: {
    Format: {
      FirstWeekDay: 1,
      GMT: 1,
      DateSeparator: '.',
    },
    Gantt: {
      DelGanttDep: 'Delete the dependency',
      GanttDepLagChange: "Change dependency's lag",
    },
  },
}
