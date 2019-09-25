---
id: ui-components
title: UI Components
---

Flipper has a lot of built in React components to build UIs. You can import them directly using e.g. `import {Button} from 'flipper'`.
## Button

A simple button, used in many parts of the application.

| Property | Type | Description |
|---------|------|-------------|
| `onMouseDown` | `(event: React.MouseEvent) => any` | onMouseUp handler. |
| `onClick` | `(event: React.MouseEvent) => any` | onClick handler. |
| `disabled` | `boolean` | Whether this button is disabled. |
| `large` | `boolean` | Whether this button is large. Increases padding and line-height. |
| `compact` | `boolean` | Whether this button is compact. Decreases padding and line-height. |
| `type` | `'primary' ⎮ 'success' ⎮ 'warning' ⎮ 'danger'` | Type of button. |
| `children` | `ReactReactNode` | Children. |
| `dropdown` | `Array<MenuItemConstructorOptions>` | Dropdown menu template shown on click. |
| `icon` | `string` | Name of the icon dispalyed next to the text |
| `iconSize` | `IconSize` | Size of the icon in pixels. |
| `selected` | `boolean` | For toggle buttons, if the button is selected |
| `pulse` | `boolean` | Button is pulsing |
| `href` | `string` | URL to open in the browser on click |
| `depressed` | `boolean` | Whether the button should render depressed into its socket |
| `iconVariant` | `'filled' ⎮ 'outline'` | Style of the icon. `filled` is the default |
| `padded` | `boolean` | Whether the button should have additional padding left and right. |
| `windowIsFocused` | `boolean` |  |

  
## ButtonGroup

Group a series of buttons together.

```jsx
  <ButtonGroup>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
```

| Property | Type | Description |
|---------|------|-------------|
| `children` | `ReactReactNode` |  |

  
## ButtonGroupChain

Groups a series of buttons together with
a right-chevron icon to seperate them.
Used to create a navigation heirarchy.

```jsx
  <ButtonGroupChain iconSize={12}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroupChain>
```

| Property | Type | Description |
|---------|------|-------------|
| `children` | `ReactReactNode` | Children. |
| `iconSize` | `8 ⎮ 10 ⎮ 12 ⎮ 16 ⎮ 18 ⎮ 20 ⎮ 24 ⎮ 32` | Size of the button seperator icon in pixels. |
| `icon` | `string` | Name of the icon seperating the buttons. Defaults to 'chevron-right'. |

  
## ButtonNavigationGroup

Button group to navigate back and forth.

| Property | Type | Description |
|---------|------|-------------|
| `canGoBack` | `boolean` | Back button is enabled |
| `canGoForward` | `boolean` | Forwards button is enabled |
| `onBack` | `() => void` | Callback when back button is clicked |
| `onForward` | `() => void` | Callback when forwards button is clicked |

  
## Checkbox

A checkbox to toggle UI state

| Property | Type | Description |
|---------|------|-------------|
| `checked` | `boolean` | Whether the checkbox is checked. |
| `onChange` | `(checked: boolean) => void` | Called when a state change is triggered |

  
## Console



| Property | Type | Description |
|---------|------|-------------|
| `client` | `PluginClient` |  |
| `getContext` | `() => string` |  |

  
## ContextMenu

Native context menu that is shown on secondary click.
Uses [Electron's context menu API](https://electronjs.org/docs/api/menu-item)
to show menu items.

Separators can be added by `{type: 'separator'}`

| Property | Type | Description |
|---------|------|-------------|
| `items` | `Array<MenuItemConstructorOptions>` | List of items in the context menu. Used for static menus. |
| `buildItems` | `() => MenuTemplate` | Function to generate the menu. Called right before the menu is showed. Used for dynamic menus. |
| `children` | `ReactReactNode` | Nodes that should have a context menu |
| `component` | `React.ComponentType<any> ⎮ string` | The component that is used to wrap the children. Defaults to `FlexColumn`. |
| `onMouseDown` | `(e: React.MouseEvent) => any` |  |

  
## ContextMenuProvider

Flipper's root is already wrapped with this component, so plugins should not
need to use this. ContextMenu is what you probably want to use.

| Property | Type | Description |
|---------|------|-------------|
| `children` | `ReactReactNode` |  |

  
## DataDescription



| Property | Type | Description |
|---------|------|-------------|
| `path` | `Array<string>` |  |
| `type` | `string` |  |
| `value` | `any` |  |
| `setValue` | `DataInspectorSetValue ⎮ null ⎮ undefined` |  |

  
## DataInspector

An expandable data inspector.

This component is fairly low level. It's likely you're looking for
[`<ManagedDataInspector>`]().

| Property | Type | Description |
|---------|------|-------------|
| `data` | `any` | Object to inspect. |
| `diff` | `any` | Object to compare with the provided `data` property. Differences will be styled accordingly in the UI. |
| `name` | `string` | Current name of this value. |
| `depth` | `number` | Current depth. |
| `path` | `Array<string>` | An array containing the current location of the data relative to its root. |
| `expandRoot` | `boolean` | Whether to expand the root by default. |
| `expanded` | `{   [key: string]: boolean; }` | An array of paths that are currently expanded. |
| `extractValue` | `(   value: any,   depth: number, ) =>   ⎮ {       mutable: boolean;       type: string;       value: any;     }   ⎮ undefined   ⎮ null` | An optional callback that will explode a value into its type and value. Useful for inspecting serialised data. |
| `onExpanded` | `((expanded: DataInspectorExpanded) => void) ⎮ undefined ⎮ null` | Callback whenever the current expanded paths is changed. |
| `setValue` | `DataInspectorSetValue ⎮ undefined ⎮ null` | Callback when a value is edited. |
| `collapsed` | `boolean` | Whether all objects and arrays should be collapsed by default. |
| `ancestry` | `Array<Object>` | Ancestry of parent objects, used to avoid recursive objects. |
| `tooltips` | `any` | Object of properties that will have tooltips |

  
## DataPreview



| Property | Type | Description |
|---------|------|-------------|
| `type` | `string` |  |
| `value` | `any` |  |
| `depth` | `number` |  |
| `extractValue` | `DataValueExtractor` |  |
| `maxProperties` | `number` |  |

  
## ManagedDataInspector

Wrapper around `DataInspector` that handles expanded state.

If you require lower level access to the state then use `DataInspector`
directly.

| Property | Type | Description |
|---------|------|-------------|
| `data` | `any` | Object to inspect. |
| `diff` | `any` | Object to compare with the provided `data` property. Differences will be styled accordingly in the UI. |
| `expandRoot` | `boolean` | Whether to expand the root by default. |
| `extractValue` | `DataValueExtractor` | An optional callback that will explode a value into its type and value. Useful for inspecting serialised data. |
| `setValue` | `(path: Array<string>, val: any) => void` | Callback when a value is edited. |
| `collapsed` | `boolean` | Whether all objects and arrays should be collapsed by default. |
| `tooltips` | `Object` | Object of all properties that will have tooltips |

  
## Elements



| Property | Type | Description |
|---------|------|-------------|
| `root` | `ElementID ⎮ undefined ⎮ null` |  |
| `selected` | `ElementID ⎮ undefined ⎮ null` |  |
| `focused` | `ElementID ⎮ undefined ⎮ null` |  |
| `searchResults` | `ElementSearchResultSet ⎮ undefined ⎮ null` |  |
| `elements` | `{[key: string]: Element}` |  |
| `onElementSelected` | `(key: ElementID) => void` |  |
| `onElementExpanded` | `(key: ElementID, deep: boolean) => void` |  |
| `onElementHovered` | `((key: ElementID ⎮ undefined ⎮ null) => void) ⎮ undefined ⎮ null` |  |
| `alternateRowColor` | `boolean` |  |
| `contextMenuExtensions` | `Array<ContextMenuExtension>` |  |
| `decorateRow` | `(e: Element) => ReactElement<any> ⎮ undefined ⎮ null` |  |

  
## ElementsInspector



| Property | Type | Description |
|---------|------|-------------|
| `onElementExpanded` | `(key: ElementID, deep: boolean) => void` |  |
| `onElementSelected` | `(key: ElementID) => void` |  |
| `onElementHovered` | `((key: ElementID ⎮ undefined ⎮ null) => any) ⎮ undefined ⎮ null` |  |
| `onValueChanged` | `((path: Array<string>, val: any) => any) ⎮ undefined ⎮ null` |  |
| `selected` | `ElementID ⎮ undefined ⎮ null` |  |
| `focused` | `ElementID ⎮ undefined ⎮ null` |  |
| `searchResults` | `ElementSearchResultSet ⎮ undefined ⎮ null` |  |
| `root` | `ElementID ⎮ undefined ⎮ null` |  |
| `elements` | `{[key: string]: Element}` |  |
| `useAppSidebar` | `boolean` |  |
| `alternateRowColor` | `boolean` |  |
| `contextMenuExtensions` | `Array<ContextMenuExtension>` |  |
| `decorateRow` | `DecorateRow` |  |

  
## InspectorSidebar



| Property | Type | Description |
|---------|------|-------------|
| `element` | `Element ⎮ undefined ⎮ null` |  |
| `tooltips` | `Object` |  |
| `onValueChanged` | `OnValueChanged ⎮ undefined ⎮ null` |  |
| `client` | `PluginClient` |  |
| `realClient` | `Client` |  |
| `logger` | `Logger` |  |
| `extensions` | `Array<Function>` |  |

  
## ErrorBlock

Displaying error messages in a red box.

| Property | Type | Description |
|---------|------|-------------|
| `error` | `Error ⎮ string ⎮ null` | Error message to display. Error object's `stack` or `message` property is used. |
| `className` | `string` | Additional className added to the container. |

  
## ErrorBoundary

Boundary catching errors and displaying an ErrorBlock instead.

| Property | Type | Description |
|---------|------|-------------|
| `buildHeading` | `(err: Error) => string` | Function to dynamically generate the heading of the ErrorBox. |
| `heading` | `string` | Heading of the ErrorBox. Used as an alternative to `buildHeading`. |
| `showStack` | `boolean` | Whether the stacktrace of the error is shown in the error box |
| `children` | `ReactReactNode` | Code that might throw errors that will be catched |

  
## File

Wrapper for loading file content from the file system.

| Property | Type | Description |
|---------|------|-------------|
| `src` | `string` | Path to the file in the file system |
| `buffer` | `string ⎮ null ⎮ undefined` | Initial content that should be shown while the file is loading |
| `encoding` | `string` | Encoding to parse the contents of the file. Defaults to UTF-8. |
| `onError` | `(err: Error) => React.ReactNode` | Content that should be rendered, when the file loading failed. |
| `onLoading` | `() => React.ReactNode` | Content that should be rendered, while the file is loaded. |
| `onData` | `(content: string) => void` | Callback when the data is successfully loaded. |
| `onLoad` | `(content: string) => React.ReactNode` | Content that should be rendered, when the file is successfully loaded. This ususally should render the file's contents. |

  
## FileList

List the contents of a folder from the user's file system. The file system is watched for
changes and this list will automatically update.

| Property | Type | Description |
|---------|------|-------------|
| `src` | `string` | Path to the folder |
| `onError` | `(err: Error) => React.ReactNode ⎮ null ⎮ undefined` | Content to be rendered in case of an error |
| `onLoad` | `() => void` | Content to be rendered while loading |
| `onFiles` | `(files: FileListFiles) => React.ReactNode` | Content to be rendered when the file list is loaded |

  
## FilterRow



| Property | Type | Description |
|---------|------|-------------|
| `children` | `ReactReactNode` |  |
| `addFilter` | `(filter: Filter) => void` |  |
| `filterKey` | `string` |  |

  
## FocusableBox



| Property | Type | Description |
|---------|------|-------------|
| `onBlur` | `(e: React.FocusEvent) => void` |  |
| `onFocus` | `(e: React.FocusEvent) => void` |  |
| `focusable` | `boolean` |  |

  
## Glyph



| Property | Type | Description |
|---------|------|-------------|
| `name` | `string` |  |
| `size` | `8 ⎮ 10 ⎮ 12 ⎮ 16 ⎮ 18 ⎮ 20 ⎮ 24 ⎮ 32` |  |
| `variant` | `'filled' ⎮ 'outline'` |  |
| `className` | `string` |  |
| `color` | `string` |  |

  
## Heading

A heading component.

| Property | Type | Description |
|---------|------|-------------|
| `level` | `number` | Level of the heading. A number from 1-6. Where 1 is the largest heading. |
| `children` | `ReactReactNode` | Children. |

  
## Interactive



| Property | Type | Description |
|---------|------|-------------|
| `isMovableAnchor` | `(event: React.MouseEvent) => boolean` |  |
| `onMoveStart` | `() => void` |  |
| `onMoveEnd` | `() => void` |  |
| `onMove` | `(top: number, left: number, event: MouseEvent) => void` |  |
| `id` | `string` |  |
| `movable` | `boolean` |  |
| `hidden` | `boolean` |  |
| `moving` | `boolean` |  |
| `grow` | `boolean` |  |
| `siblings` | `Partial` |  |
| `updateCursor` | `(cursor?: string ⎮ null ⎮ undefined) => void` |  |
| `zIndex` | `number` |  |
| `top` | `number` |  |
| `left` | `number` |  |
| `minTop` | `number` |  |
| `minLeft` | `number` |  |
| `width` | `number ⎮ string` |  |
| `height` | `number ⎮ string` |  |
| `minWidth` | `number` |  |
| `minHeight` | `number` |  |
| `maxWidth` | `number` |  |
| `maxHeight` | `number` |  |
| `onCanResize` | `(sides: ResizingSides) => void` |  |
| `onResizeStart` | `() => void` |  |
| `onResizeEnd` | `() => void` |  |
| `onResize` | `(width: number, height: number) => void` |  |
| `resizing` | `boolean` |  |
| `resizable` | `boolean ⎮ ResizingSides` |  |
| `innerRef` | `(elem: HTMLElement) => void` |  |
| `style` | `Object` |  |
| `className` | `string` |  |
| `children` | `ReactReactNode` |  |

  
## Link



| Property | Type | Description |
|---------|------|-------------|
| `href` | `string` |  |
| `children` | `ReactReactNode` |  |

  
## MarkerTimeline



| Property | Type | Description |
|---------|------|-------------|
| `onClick` | `(keys: Array<string>) => void` |  |
| `selected` | `string ⎮ null ⎮ undefined` |  |
| `points` | `DataPoint[]` |  |
| `lineHeight` | `number` |  |
| `maxGap` | `number` |  |

  
## ModalOverlay



| Property | Type | Description |
|---------|------|-------------|
| `onClose` | `() => void` |  |
| `children` | `ReactReactNode` |  |

  
## Orderable



| Property | Type | Description |
|---------|------|-------------|
| `items` | `{[key: string]: React.ReactNode}` |  |
| `orientation` | `'horizontal' ⎮ 'vertical'` |  |
| `onChange` | `(order: OrderableOrder, key: string) => void` |  |
| `order` | `OrderableOrder ⎮ null ⎮ undefined` |  |
| `className` | `string` |  |
| `reverse` | `boolean` |  |
| `altKey` | `boolean` |  |
| `moveDelay` | `number` |  |
| `dragOpacity` | `number` |  |
| `ignoreChildEvents` | `boolean` |  |

  
## Panel

A Panel component.

| Property | Type | Description |
|---------|------|-------------|
| `className` | `string` | Class name to customise styling. |
| `floating` | `boolean` | Whether this panel is floating from the rest of the UI. ie. if it has margin and a border. |
| `grow` | `boolean` | Whether the panel takes up all the space it can. Equivalent to the following CSS:   height: 100%;  width: 100%; |
| `heading` | `ReactReactNode` | Heading for this panel. If this is anything other than a string then no padding is applied to the heading. |
| `children` | `ReactReactNode` | Contents of the panel. |
| `padded` | `boolean` | Whether the panel header and body have padding. |
| `collapsable` | `boolean` | Whether the panel can be collapsed. Defaults to true |
| `collapsed` | `boolean` | Initial state for panel if it is collapsable |
| `accessory` | `ReactReactNode` | Heading for this panel. If this is anything other than a string then no padding is applied to the heading. |

  
## PathBreadcrumbs



| Property | Type | Description |
|---------|------|-------------|
| `path` | `string` |  |
| `isFile` | `boolean` |  |
| `onClick` | `(path: string) => void` |  |

  
## Popover



| Property | Type | Description |
|---------|------|-------------|
| `children` | `ReactReactNode` |  |
| `onDismiss` | `Function` |  |
| `forceOpts` | `{   minWidth?: number;   skewLeft?: boolean; }` |  |

  
## ResizeSensor

Listener for resize events.

| Property | Type | Description |
|---------|------|-------------|
| `onResize` | `(e: UIEvent) => void` | Callback when resize happened |

  
## FilterToken



| Property | Type | Description |
|---------|------|-------------|
| `filter` | `Filter` |  |
| `focused` | `boolean` |  |
| `index` | `number` |  |
| `onFocus` | `(focusedToken: number) => void` |  |
| `onBlur` | `() => void` |  |
| `onDelete` | `(deletedToken: number) => void` |  |
| `onReplace` | `(index: number, filter: Filter) => void` |  |

  
## SearchableManagedTable_immutable



| Property | Type | Description |
|---------|------|-------------|
| `innerRef` | `(ref: React.RefObject<any>) => void` | Reference to the table |
| `defaultFilters` | `Array<Filter>` | Filters that are added to the filterbar by default |

  
## SearchableManagedTable



| Property | Type | Description |
|---------|------|-------------|
| `innerRef` | `(ref: React.RefObject<any>) => void` | Reference to the table |
| `defaultFilters` | `Array<Filter>` | Filters that are added to the filterbar by default |

  
## Select

Dropdown to select from a list of options

| Property | Type | Description |
|---------|------|-------------|
| `className` | `string` | Additional className added to the element |
| `options` | `{   [key: string]: string; }` | The list of options to display |
| `onChange` | `(value: string) => void` | DEPRECATED: Callback when the selected value changes. The callback is called with the displayed value. |
| `onChangeWithKey` | `(key: string) => void` | Callback when the selected value changes. The callback is called with the key for the displayed value |
| `selected` | `string ⎮ null ⎮ undefined` | Selected key |
| `label` | `string` | Label shown next to the dropdown |
| `grow` | `boolean` | Select box should take all available space |

  
## Sheet

Usage: <Sheet>{onHide => <YourSheetContent onHide={onHide} />}</Sheet>

| Property | Type | Description |
|---------|------|-------------|
| `children` | `(onHide: () => void) => React.ReactNode ⎮ undefined` | Function as child component (FaCC) to render the contents of the sheet. A `onHide` function is passed as argument, that can be called to remove the sheet. |
| `onHideSheet` | `() => void` |  |
| `setActiveSheet` | `(sheet: ActiveSheet) => any` |  |
| `activeSheet` | `ActiveSheet` | Function that is called when the sheet becomes hidden. |

  
## Sidebar

A resizable sidebar.

| Property | Type | Description |
|---------|------|-------------|
| `position` | `'left' ⎮ 'top' ⎮ 'right' ⎮ 'bottom'` | Position of the sidebar. |
| `width` | `number` | Default width of the sidebar.  Only used for left/right sidebars. |
| `minWidth` | `number` | Minimum sidebar width. Only used for left/right sidebars. |
| `maxWidth` | `number` | Maximum sidebar width. Only used for left/right sidebars. |
| `height` | `number` | Default height of the sidebar. |
| `minHeight` | `number` | Minimum sidebar height. Only used for top/bottom sidebars. |
| `maxHeight` | `number` | Maximum sidebar height. Only used for top/bottom sidebars. |
| `backgroundColor` | `BackgroundColorProperty` | Background color. |
| `onResize` | `(width: number, height: number) => void` | Callback when the sidebar size ahs changed. |
| `children` | `ReactReactNode` | Contents of the sidebar. |
| `className` | `string` | Class name to customise styling. |

  
## StackTrace

Display a stack trace

| Property | Type | Description |
|---------|------|-------------|
| `children` | `Child[]` |  |
| `reason` | `string` | Reason for the crash, displayed above the trace |
| `isCrash` | `boolean` | Does the trace show a crash |
| `padded` | `boolean` | Display the stack trace in a padded container |
| `backgroundColor` | `string` | Background color of the stack trace |

  
## ManagedTable



| Property | Type | Description |
|---------|------|-------------|
| `columns` | `TableColumns` | Column definitions. |
| `rows` | `TableRows` | Row definitions. |
| `tableKey` | `string` |  |
| `floating` | `boolean` | Whether the table has a border. |
| `multiline` | `boolean` | Whether a row can span over multiple lines. Otherwise lines cannot wrap and are truncated. |
| `autoHeight` | `boolean` | Whether the body is scrollable. When this is set to `true` then the table is not scrollable. |
| `columnOrder` | `TableColumnOrder` | Order of columns. |
| `columnSizes` | `TableColumnSizes` | Initial size of the columns. |
| `filterValue` | `string` | Value to filter rows on. Alternative to the `filter` prop. |
| `filter` | `(row: TableBodyRow) => boolean` | Callback to filter rows. |
| `onRowHighlighted` | `(keys: TableHighlightedRows) => void` | Callback when the highlighted rows change. |
| `highlightableRows` | `boolean` | Whether rows can be highlighted or not. |
| `multiHighlight` | `boolean` | Whether multiple rows can be highlighted or not. |
| `rowLineHeight` | `number` | Height of each row. |
| `stickyBottom` | `boolean` | This makes it so the scroll position sticks to the bottom of the window. Useful for streaming data like requests, logs etc. |
| `onAddFilter` | `TableOnAddFilter` | Used by SearchableTable to add filters for rows. |
| `zebra` | `boolean` | Enable or disable zebra striping. |
| `hideHeader` | `boolean` | Whether to hide the column names at the top of the table. |
| `highlightedRows` | `Set` | Rows that are highlighted initially. |
| `buildContextMenuItems` | `() => MenuTemplate` | Allows to create context menu items for rows. |
| `onSort` | `(order: TableRowSortOrder) => void` | Callback when sorting changes. |
| `initialSortOrder` | `TableRowSortOrder` | Initial sort order of the table. |
| `horizontallyScrollable` | `boolean` | Table scroll horizontally, if needed |
| `enableKeyboardNavigation` | `boolean` | Whether to allow navigation via arrow keys. Default: true |

  
## TableHead



| Property | Type | Description |
|---------|------|-------------|
| `columnOrder` | `TableColumnOrder` |  |
| `onColumnOrder` | `(order: TableColumnOrder) => void` |  |
| `columns` | `TableColumns` |  |
| `sortOrder` | `TableRowSortOrder` |  |
| `onSort` | `TableOnSort` |  |
| `columnSizes` | `TableColumnSizes` |  |
| `onColumnResize` | `TableOnColumnResize` |  |
| `horizontallyScrollable` | `boolean` |  |

  
## TableRow



| Property | Type | Description |
|---------|------|-------------|
| `columnSizes` | `TableColumnSizes` |  |
| `columnKeys` | `TableColumnKeys` |  |
| `onMouseDown` | `(e: React.MouseEvent) => any` |  |
| `onMouseEnter` | `(e: React.MouseEvent) => void` |  |
| `multiline` | `boolean` |  |
| `rowLineHeight` | `number` |  |
| `highlighted` | `boolean` |  |
| `row` | `TableBodyRow` |  |
| `index` | `number` |  |
| `style` | `React.CSSProperties ⎮ undefined` |  |
| `onAddFilter` | `TableOnAddFilter` |  |
| `zebra` | `boolean` |  |

  
## renderValue




  
## Tabs

A Tabs component.

| Property | Type | Description |
|---------|------|-------------|
| `onActive` | `(key: string ⎮ null ⎮ undefined) => void` | Callback for when the active tab has changed. |
| `defaultActive` | `string` | The key of the default active tab. |
| `active` | `string ⎮ null ⎮ undefined` | The key of the currently active tab. |
| `children` | `React.ReactElement<TabProps>[] ⎮ React.ReactElement<TabProps>` | Tab elements. |
| `orderable` | `boolean` | Whether the tabs can be reordered by the user. |
| `onOrder` | `(order: Array<string>) => void` | Callback when the tab order changes. |
| `order` | `Array<string>` | Order of tabs. |
| `persist` | `boolean` | Whether to include the contents of every tab in the DOM and just toggle its visibility. |
| `newable` | `boolean` | Whether to include a button to create additional items. |
| `onNew` | `() => void` | Callback for when the new button is clicked. |
| `before` | `Array<React.ReactNode>` | Elements to insert before all tabs in the tab list. |
| `after` | `Array<React.ReactNode>` | Elements to insert after all tabs in the tab list. |

  
## ToggleButton

Toggle Button.

**Usage**

```jsx
import {ToggleButton} from 'flipper';
<ToggleButton onClick={handler} toggled={boolean}/>
```

| Property | Type | Description |
|---------|------|-------------|
| `onClick` | `(event: React.MouseEvent) => void` | onClick handler. |
| `toggled` | `boolean` | whether the button is toggled |
| `className` | `string` |  |
| `label` | `string` |  |

  
## Tooltip



| Property | Type | Description |
|---------|------|-------------|
| `title` | `ReactReactNode` | Content shown in the tooltip |
| `children` | `ReactReactNode` | Component that will show the tooltip |
| `options` | `TooltipOptions` |  |

  
## TooltipProvider



| Property | Type | Description |
|---------|------|-------------|
| `children` | `ReactReactNode` |  |

  
## ViewWithSize



| Property | Type | Description |
|---------|------|-------------|
| `onSize` | `(width: number, height: number) => any` |  |

  
## VirtualList



| Property | Type | Description |
|---------|------|-------------|
| `data` | `Array<any>` |  |
| `renderRow` | `(data: any, i: number) => any` |  |
| `rowHeight` | `number` |  |
| `overscanCount` | `number` |  |
| `sync` | `boolean` |  |
| `wrapInner` | `(data: any) => any` |  |

  