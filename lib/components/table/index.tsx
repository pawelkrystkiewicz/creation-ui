import HeaderCell from './header-cell'
import RowCell from './row-cell'
import { TableProps } from './table.types'
import './table.scss'

const Table = ({ table }: TableProps) => {
  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg overflow-y-scroll h-[80vh]'>
            <table className='min-w-full divide-y divide-gray-200 relative'>
              <thead className='bg-gray-50 sticky top-0 mb-10'>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <HeaderCell
                        header={header}
                        table={table}
                        key={header.id}
                      />
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {table.getRowModel().rows.map(row => (
                  <RowCell key={row.id} row={row} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Table
