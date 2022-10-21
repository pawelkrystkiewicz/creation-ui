import StatusBadge from '@cui/core/components/status-badge'
import Table from '@cui/core/components/table'
import data from '@cui/core/components/table/mock-data.json'
import Pagination from '@cui/core/components/table/pagination'
import _ from 'lodash'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  FilterFn,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

type Person = {
  name: string
  title: string
  department: string
  role: string
  email: string
  image: string
  status: {
    value: string
    label: string
  }
}

const UserCell = ({ person }: { person: Person }) => (
  <div className='flex items-center'>
    <div className='flex-shrink-0 h-10 w-10'>
      <img className='h-10 w-10 rounded-full' src={person.image} alt='' />
    </div>
    <div className='ml-4'>
      <div className='text-sm font-medium text-gray-900'>{person.name}</div>
      <div className='text-sm text-gray-500'>{person.email}</div>
    </div>
  </div>
)

const TitleCell = ({ person }: { person: Person }) => (
  <>
    <div className='text-sm text-gray-900'>{person.title}</div>
    <div className='text-sm text-gray-500'>{person.department}</div>
  </>
)

/**
 *
 * TODO:
 * 1. Pagination - highlight current page
 * 2. Selecting rows https://www.youtube.com/watch?v=e-EFSkq4AaI
 * 3. Filters above table
 * 4. Batch operations above table
 * 5. Create new record above table
 * 6. add context to avoid passing {table} around
 */

const Home = () => {
  const fuzzy: FilterFn<any> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value)
    // Store the itemRank info
    addMeta({ itemRank })
    // Return if the item should be filtered in/out
    return itemRank.passed
  }

  const table = useReactTable<Person>({
    data: data,
    columns: [
      {
        footer: props => props.column.id,
        accessorKey: 'user',
        header: 'Full Name',
        aggregationFn: (vals: any) => {
          console.log(vals)
          return _.round(_.mean(vals))
        },
        aggregatedCell: (row: any) => {
          return <span>{row.value} (avg)</span>
        },

        enableColumnFilter: false,
        cell: props => <UserCell person={props.row.original} />,

        accessorFn: row => row.name,
        filterFn: 'fuzzy',
      },
      {
        accessorKey: 'role',
        enableColumnFilter: false,
        footer: props => props.column.id,
        cell(props) {
          return <TitleCell person={props.row.original} />
        },
      },
      {
        accessorKey: 'status',
        accessorFn: row => row.status.label,
        enableColumnFilter: false,
        cell({ row: { original } }) {
          return (
            <StatusBadge
              label={original.status.label}
              status={original.status.value as any}
            />
          )
        },
      },
      {
        accessorKey: '_actions',
        header: 'Actions',
        enableColumnFilter: false,
        cell(props) {
          return (
            <a
              href='#'
              className='text-indigo-600 hover:text-indigo-900'
              onClick={() => console.log(props.row.original)}
            >
              Edit
            </a>
          )
        },
      },
    ],
    debugAll: true,
    filterFns: { fuzzy },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  })

  return (
    <div>
      <Table table={table} />
      <Pagination
        pageButtonsVariant={'buttons'}
        table={table}
        showTotalCount
        totalInSizesSelector
        pageSizes={[10, 20]}
      />
    </div>
  )
}

export default Home
