import { ReactNode } from 'react';
import './Table.scss';

export interface Column<T> {
  header: string;
  key: keyof T;
  render?: (value: T[keyof T], item: T) => ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

function Table<T extends Record<string, unknown>>({ 
  columns, 
  data, 
  className = '' 
}: TableProps<T>): ReactNode {
  return (
    <div className={`table-container ${className}`}>
      <table className="table">
        <thead className="table__head">
          <tr>
            {columns.map((column) => (
              <th key={`header-${String(column.key)}`} className="table__header">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {data.map((item, index) => (
            <tr key={`row-${index}`} className="table__row">
              {columns.map((column) => (
                <td key={`cell-${String(column.key)}-${index}`} className="table__cell">
                  {column.render
                    ? column.render(item[column.key], item)
                    : String(item[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
