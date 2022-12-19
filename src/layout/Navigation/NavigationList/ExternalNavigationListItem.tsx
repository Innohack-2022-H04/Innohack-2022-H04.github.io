import { ExternalNavigationConfigProps as AppExternalNavigationConfigProps } from 'layout/navigation-config';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import styled from '@emotion/styled';
import PureNavigationListItem from './PureNavigationListItem';

const StyledMenu = styled(Menu)`
  .MuiMenu-paper {
    overflow: visible;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32));
    margin-left: 14px;
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: calc(50% - 7px);
      left: -5px;
      width: 10px;
      height: 10px;
      background-color: ${(p) => p.theme.palette.background.paper};
      transform: translateY(50%) rotate(45deg);
      z-index: 0;
    }
  }
`;

function ExternalNavigationListItem(props: AppExternalNavigationConfigProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { url } = props;

  const handleNavItemClick = (event) => {
    if (typeof url === 'string') {
      window.open(url);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <PureNavigationListItem
        {...props}
        onNavItemClick={handleNavItemClick}
        selected={false}
      />
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        transformOrigin={{ horizontal: 'left', vertical: 'center' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'center' }}
        onClose={handleClose}
        onClick={handleClick}
        PaperProps={{
          elevation: 0,
        }}
      >
        {Array.isArray(url) &&
          url.map((link) => (
            <MenuItem onClick={() => window.open(link.url)}>
              {link.label}
            </MenuItem>
          ))}
      </StyledMenu>
    </>
  );
}

export default ExternalNavigationListItem;
