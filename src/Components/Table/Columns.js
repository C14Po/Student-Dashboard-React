import { ColumnFilter } from "./ColumnFilter"

export const Columns = [
    {
        Header: 'Project',
        accessor: 'project',
        disableSortBy: true,
        Filter: ColumnFilter
    },
    {
        Header: 'Difficulty factor',
        accessor: 'difficultyFactor',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Fun factor',
        accessor: 'funFactor',
        Filter: ColumnFilter,
        disableFilters: true
    }
]

