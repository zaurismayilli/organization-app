import { ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface ICustomTableProps {
  tHead: string[];
  children?: ReactNode;
}

const CustomTable = ({ tHead, children }: ICustomTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            {tHead.map((item) => (
              <TableCell key={item} align="right">
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
