import IconButton, {
  IconButtonProps as MUIIconButtonProps,
} from '@mui/material/IconButton';
import SvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from '@mui/material/SvgIcon';
import Tooltip, {
  TooltipProps as MUITooltipProps,
} from '@mui/material/Tooltip';
import { SvgIconComponent } from '@mui/icons-material';

export interface TooltipIconButtonProps {
  className?: string;
  tooltip: MUITooltipProps['title'];
  icon: SvgIconComponent;
  disabled?: MUIIconButtonProps['disabled'];
  onClick: MUIIconButtonProps['onClick'];
  TooltipProps?: Omit<MUITooltipProps, 'title' | 'children'>;
  IconButtonProps?: Omit<MUIIconButtonProps, 'onClick' | 'disabled'>;
  SvgIconProps?: Omit<MUISvgIconProps, 'component'>;
}
function TooltipIconButton({
  className,
  tooltip,
  icon,
  disabled,
  onClick,
  TooltipProps,
  IconButtonProps,
  SvgIconProps,
}: TooltipIconButtonProps) {
  return (
    <Tooltip className={className} {...TooltipProps} title={tooltip}>
      {/*
          By default disabled elements like <button>, underlying HTML component of IconButton, do nto trigger user interactions. 
          So a Tooltip will nto activate on normal events like hover. 
          To accommodate disabled elements, add a simple wrapper element, such as span.
          Refer to MUI documentation, Tooltip API - Disabled Elements for more details
         */}
      <span>
        <IconButton
          className="TooltipIconButton-iconButton"
          {...IconButtonProps}
          disabled={disabled}
          onClick={onClick}
        >
          <SvgIcon
            className="TooltipIconButton-icon"
            fontSize="inherit" // override default="medium"; inherit will take reference from IconButton size
            {...SvgIconProps} // put external props after fontSize to allow override of default
            component={icon}
          />
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default TooltipIconButton;
