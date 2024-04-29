import DataTable from "react-data-table-component";
import { columns } from './columns';
import { data } from './data';

const Table = ( {data} ) => {
  return (
    <DataTable columns={columns} data={data} pagination customStyles={{
      headRow: {
        style: {
          backgroundColor: 'var(--table-header-bg)',
          color: 'var(--table-header-color)',
          fontWeight: 'bold',
          paddingLeft: '32px',
          paddingRight: '20px',
        },
      },
      rows: {
        style: {
          backgroundColor: 'var(--table-row-bg)',
          color: 'var(--table-row-color)',
        },
      },
    }} className="custom-table" />
  );
};

export { Table };