import { TableCell, TableRow } from '@mui/material';

import CustomTable from '~/components/CustomTable';
import { ITaskBoard } from '~/models';
import { useSelector } from 'react-redux';

const TaskBoardList = () => {
  const tHead = ['Title', 'Description', 'Deadline', 'Status', 'Assigned'];
  const { taskboards } = useSelector(({ taskboardsReducer }: any) => {
    return {
      taskboards: taskboardsReducer.taskboards,
    };
  });
  console.log(taskboards, 'taskboards');
  const tBody = taskboards?.map(
    (
      { title, description, deadline, status, assign }: ITaskBoard,
      key: number
    ) => {
      return (
        <TableRow
          key={key}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">{title}</TableCell>
          <TableCell align="right">{description}</TableCell>
          <TableCell align="right">{deadline}</TableCell>
          <TableCell align="right">{status}</TableCell>
          <TableCell align="right">
            {assign.map((item, key) => (
              <div key={key}> {item} </div>
            ))}
          </TableCell>
        </TableRow>
      );
    }
  );

  return <CustomTable {...{ tHead }}>{tBody}</CustomTable>;
};

export default TaskBoardList;
