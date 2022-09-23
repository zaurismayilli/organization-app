import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { NavLink, Outlet } from 'react-router-dom';
import { useAdmin } from '~/hooks';

const TaskBoard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const isAdmin = useAdmin();

  return (
    <Container>
      <Stack direction="row" spacing={2} marginBottom={5}>
        {isAdmin && (
          <Item>
            <NavLink to="/taskboard/create"> Create </NavLink>{' '}
          </Item>
        )}
        <Item>
          <NavLink to="/taskboard/list"> list </NavLink>{' '}
        </Item>
      </Stack>
      <Outlet />
    </Container>
  );
};

export default TaskBoard;
