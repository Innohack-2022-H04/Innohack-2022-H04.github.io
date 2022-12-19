import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export interface PureNotificationProps {
  badgeContent: number;
}
export function PureNotification({ badgeContent }: PureNotificationProps) {
  return (
    <IconButton size="large">
      <Badge badgeContent={badgeContent} color="secondary">
        <NotificationsOutlinedIcon />
      </Badge>
    </IconButton>
  );
}

export function Notification() {
  const badgeContent = 0; // TODO replace with redux and saga
  return <PureNotification badgeContent={badgeContent} />;
}
export default Notification;
