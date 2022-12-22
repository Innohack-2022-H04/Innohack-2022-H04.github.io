import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import OutlinedInput from '@mui/material/OutlinedInput';

const theme = createTheme();

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function App() {
  const countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

  const [selectedStartDate, setSelectedStartDate] = React.useState<Dayjs | null>(
    dayjs(),
  );

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setSelectedStartDate(newValue);
  };

  const [selectedEndDate, setSelectedEndDate] = React.useState<Dayjs | null>(
    dayjs(),
  );

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setSelectedEndDate(newValue);
  };

  const [selectedCountry1, setSelectCountry1] = React.useState('');

  const handleCountry1Change = (event: SelectChangeEvent) => {
    setSelectCountry1(event.target.value as string);
  };
  const [selectedCountry2, setSelectCountry2] = React.useState('');

  const handleCountry2Change = (event: SelectChangeEvent) => {
    setSelectCountry2(event.target.value as string);
  };

  const [selectedCountry3, setSelectCountry3] = React.useState('');

  const handleCountry3Change = (event: SelectChangeEvent) => {
    setSelectCountry3(event.target.value as string);
  };
  const [selectedCountry4, setSelectCountry4] = React.useState('');

  const handleCountry4Change = (event: SelectChangeEvent) => {
    setSelectCountry4(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Innohack
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Create DOTs record
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Stack spacing={3}>
              <InputLabel>Period</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <MobileDatePicker
                        label="Start Date"
                        inputFormat="DD/MM/YYYY"
                        value={selectedStartDate}
                        onChange={handleStartDateChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <MobileDatePicker
                        label="End Date"
                        inputFormat="DD/MM/YYYY"
                        value={selectedEndDate}
                        onChange={handleEndDateChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                  </Grid>
                </Stack>
              </LocalizationProvider>
              <InputLabel>Countries</InputLabel>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel>Country1</InputLabel>
                    <Select
                      value={selectedCountry1}
                      onChange={handleCountry1Change}
                      input={<OutlinedInput label="Country1" />}
                      MenuProps={MenuProps}
                    >
                      {countryList.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Country2</InputLabel>
                  <Select
                    value={selectedCountry2}
                    onChange={handleCountry2Change}
                    input={<OutlinedInput label="Country2" />}
                    MenuProps={MenuProps}
                  >
                    {countryList.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Country3</InputLabel>
                  <Select
                    value={selectedCountry3}
                    onChange={handleCountry3Change}
                    input={<OutlinedInput label="Country3" />}
                    MenuProps={MenuProps}
                  >
                    {countryList.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Country4</InputLabel>
                  <Select
                    value={selectedCountry4}
                    onChange={handleCountry4Change}
                    input={<OutlinedInput label="Country4" />}
                    MenuProps={MenuProps}
                  >
                    {countryList.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Stack>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>

          </Box>
        </Box>
      </Container>

    </ThemeProvider>
  );
}
export default App;
