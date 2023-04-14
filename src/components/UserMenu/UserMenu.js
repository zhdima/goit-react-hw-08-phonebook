import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button } from '../GlobalStyle'
import Avatar from '@mui/material/Avatar';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <Avatar sx={{ width: 26, height: 26, bgcolor: "teal" }} />
      <p className={css.username}>{user.email}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
}; 
