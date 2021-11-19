import { ReactNode } from 'react';
import { Table } from '@material-ui/core';

interface TCProps {
  children: ReactNode;
}

const useTable = (records?: any[], headCells?: any) => {
  const TableContainer = ({ children }: TCProps) => <Table>{children}</Table>;

  return {
    TableContainer,
  };
};

export default useTable;
