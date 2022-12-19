import styled from '@emotion/styled';
import TextField, {
  TextFieldProps as MUITextFieldProps,
} from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const StyledTextField = styled(TextField)`
  margin: 0px ${(p) => p.theme.spacing(2)};

  .MuiOutlinedInput-input.MuiInputBase-input {
    padding: ${(p) => p.theme.spacing(1.25)};
  }
`;

export interface PureSearchTextFieldProps {
  value: string;
  onChange: MUITextFieldProps['onChange'];
  onSearch: () => void;
}
export function PureSearchTextField({
  value,
  onChange,
  onSearch,
}: PureSearchTextFieldProps) {
  /*
    Note: Some key event has been deprecated.
    https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/
  */
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <StyledTextField
      fullWidth
      id="layout-toolbar-searchTextField"
      variant="outlined"
      placeholder="Search..."
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

function SearchTextField() {
  // TODO redux and saga
  const initialValue = '';
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = () => {
    setValue('');
  };

  return (
    <PureSearchTextField
      value={value}
      onChange={onChange}
      onSearch={onSearch}
    />
  );
}
export default SearchTextField;
