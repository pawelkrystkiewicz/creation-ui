import { flexRender, Row } from '@tanstack/react-table'
import './table.scss'

interface RowCellProps {
  row: Row<any>
}

const RowCell = ({ row }: RowCellProps) => {
  return (
    <tr>
      {row.getVisibleCells().map(cell => (
        <td className='px-6 py-4 whitespace-nowrap' key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  )
}

export default RowCell
