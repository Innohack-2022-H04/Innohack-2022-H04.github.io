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

  const reasonList = ["Official Duties", "Recreational", "Visiting Friends / Relatives", "Others"];

  const travelModeList = ["Aircraft", "Bus", "Ferry / Ship", "Motorcycle", "Car", "Train", "Others"];

  const relationshipList = ["Spouse", "Child", "Father", "Mother", "Brother", "Sister", "Uncle", "Auntie", "Cousin", "Nephew", "Niece", "Grandfather", "Grandmother", "Father-in-law", "Mother-in-law", "Registered Partner", "Adopted Child", "Brother/Sister", "Friend", "Step-father", "Step-mother", "Step-brother", "Step-sister", "Half-brother", "Half-sister", "Adoptive-father", "Adoptive-mother", "Adoptive-brother", "Adoptive-sister"];

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

  const [selectedTravelModeDeparture, setSelectTravelModeDeparture] = React.useState('');

  const handleTravelModeDepartureChange = (event: SelectChangeEvent) => {
    setSelectTravelModeDeparture(event.target.value as string);
  };

  const [selectedTravelModeReturn, setSelectTravelModeReturn] = React.useState('');

  const handleTravelModeReturnChange = (event: SelectChangeEvent) => {
    setSelectTravelModeReturn(event.target.value as string);
  };

  const [selectedReason1, setSelectReason1] = React.useState('');

  const handleReason1Change = (event: SelectChangeEvent) => {
    setSelectReason1(event.target.value as string);
  };

  const [selectedReason2, setSelectReason2] = React.useState('');

  const handleReason2Change = (event: SelectChangeEvent) => {
    setSelectReason2(event.target.value as string);
  };

  const [selectedReason3, setSelectReason3] = React.useState('');

  const handleReason3Change = (event: SelectChangeEvent) => {
    setSelectReason3(event.target.value as string);
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

  const [selectedCountry5, setSelectCountry5] = React.useState('');

  const handleCountry5Change = (event: SelectChangeEvent) => {
    setSelectCountry5(event.target.value as string);
  };

  const [selectedCountry6, setSelectCountry6] = React.useState('');

  const handleCountry6Change = (event: SelectChangeEvent) => {
    setSelectCountry6(event.target.value as string);
  };

  const [selectedCountry7, setSelectCountry7] = React.useState('');

  const handleCountry7Change = (event: SelectChangeEvent) => {
    setSelectCountry7(event.target.value as string);
  };

  const [selectedCountry8, setSelectCountry8] = React.useState('');

  const handleCountry8Change = (event: SelectChangeEvent) => {
    setSelectCountry8(event.target.value as string);
  };

  const [selectedCountry9, setSelectCountry9] = React.useState('');

  const handleCountry9Change = (event: SelectChangeEvent) => {
    setSelectCountry9(event.target.value as string);
  };

  const [selectedCountry10, setSelectCountry10] = React.useState('');

  const handleCountry10Change = (event: SelectChangeEvent) => {
    setSelectCountry10(event.target.value as string);
  };

  const [selectedRelationship, setSelectRelationship] = React.useState('');

  const handleRelationshipChange = (event: SelectChangeEvent) => {
    setSelectRelationship(event.target.value as string);
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
              <InputLabel >Period Details</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <MobileDatePicker
                        label="Start Date"
                        inputFormat="DD/MM/YYYY"
                        value={selectedStartDate}
                        onChange={handleStartDateChange}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <MobileDatePicker
                        label="End Date"
                        inputFormat="DD/MM/YYYY"
                        value={selectedEndDate}
                        onChange={handleEndDateChange}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                      />
                    </Grid>
                  </Grid>
                </Stack>
                <Stack spacing={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <InputLabel>Travel Mode (Departure)</InputLabel>
                      <Select
                        value={selectedTravelModeDeparture}
                        onChange={handleTravelModeDepartureChange}
                        input={<OutlinedInput label="Travel Mode (Departure)" />}
                        MenuProps={MenuProps}
                        fullWidth
                      >
                        {travelModeList.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>Travel Mode (Return)</InputLabel>
                      <Select
                        value={selectedTravelModeReturn}
                        onChange={handleTravelModeReturnChange}
                        input={<OutlinedInput label="Travel Mode (Return)" />}
                        MenuProps={MenuProps}
                        fullWidth
                      >
                        {travelModeList.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  </Grid>
                </Stack>
                <Stack spacing={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <InputLabel>Travel Reasons 1</InputLabel>
                      <Select
                        value={selectedReason1}
                        onChange={handleReason1Change}
                        input={<OutlinedInput label="Travel Reasons 1" />}
                        MenuProps={MenuProps}
                        fullWidth
                      >
                        {reasonList.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  </Grid>
                </Stack>
                <Stack spacing={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <InputLabel>Travel Reasons 2</InputLabel>
                      <Select
                        value={selectedReason2}
                        onChange={handleReason2Change}
                        input={<OutlinedInput label="Travel Reasons 2" />}
                        MenuProps={MenuProps}
                        fullWidth
                      >
                        {reasonList.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  </Grid>
                </Stack>
                <Stack spacing={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <InputLabel>Travel Reasons 3</InputLabel>
                      <Select
                        value={selectedReason3}
                        onChange={handleReason3Change}
                        input={<OutlinedInput label="Travel Reasons 3" />}
                        MenuProps={MenuProps}
                        fullWidth
                      >
                        {reasonList.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  </Grid>
                </Stack>
              </LocalizationProvider>
              <InputLabel>Countries Details</InputLabel>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputLabel>Country 1</InputLabel>
                    <Select
                      value={selectedCountry1}
                      onChange={handleCountry1Change}
                      input={<OutlinedInput label="Country 1" />}
                      MenuProps={MenuProps}
                      fullWidth
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
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel>Country 2</InputLabel>
                    <Select
                      value={selectedCountry2}
                      onChange={handleCountry2Change}
                      input={<OutlinedInput label="Country 2" />}
                      MenuProps={MenuProps}
                      fullWidth
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
                  </Grid>
                </Grid>
              </Stack>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputLabel>Country 3</InputLabel>
                    <Select
                      value={selectedCountry3}
                      onChange={handleCountry3Change}
                      input={<OutlinedInput label="Country 3" />}
                      MenuProps={MenuProps}
                      fullWidth
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
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel>Country 4</InputLabel>
                    <Select
                      value={selectedCountry4}
                      onChange={handleCountry4Change}
                      input={<OutlinedInput label="Country 4" />}
                      MenuProps={MenuProps}
                      fullWidth
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
                  </Grid>
                </Grid>
              </Stack>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputLabel>Country 5</InputLabel>
                    <Select
                      value={selectedCountry5}
                      onChange={handleCountry5Change}
                      input={<OutlinedInput label="Country 5" />}
                      MenuProps={MenuProps}
                      fullWidth
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
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel>Country 6</InputLabel>
                    <Select
                      value={selectedCountry6}
                      onChange={handleCountry6Change}
                      input={<OutlinedInput label="Country 6" />}
                      MenuProps={MenuProps}
                      fullWidth
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
                  </Grid>
                </Grid>
              </Stack>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputLabel>Country 7</InputLabel>
                    <Select
                      value={selectedCountry7}
                      onChange={handleCountry7Change}
                      input={<OutlinedInput label="Country 7" />}
                      MenuProps={MenuProps}
                      fullWidth
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
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel>Country 8</InputLabel>
                    <Select
                      value={selectedCountry8}
                      onChange={handleCountry8Change}
                      input={<OutlinedInput label="Country 8" />}
                      MenuProps={MenuProps}
                      fullWidth
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
                  </Grid>
                </Grid>
              </Stack>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputLabel>Country 9</InputLabel>
                    <Select
                      value={selectedCountry9}
                      onChange={handleCountry9Change}
                      input={<OutlinedInput label="Country 9" />}
                      MenuProps={MenuProps}
                      fullWidth
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
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel>Country 10</InputLabel>
                    <Select
                      value={selectedCountry10}
                      onChange={handleCountry10Change}
                      input={<OutlinedInput label="Country 10" />}
                      MenuProps={MenuProps}
                      fullWidth
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
                  </Grid>
                </Grid>
              </Stack>
              <InputLabel>Additional Overseas Details</InputLabel>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel>Address in foreign country (including Hotels). Please indicate the city/cities and states</InputLabel>
                    <TextField type="string" fullWidth multiline rows={5} />
                  </Grid>
                </Grid>
              </Stack>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel>Mobile Contact Number (Local/Overseas)</InputLabel>
                    <TextField type="string" fullWidth />
                  </Grid>
                </Grid>
              </Stack>
              <InputLabel>Person to contact in Singapore in case of emergency</InputLabel>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel>Name of Contact Person</InputLabel>
                    <TextField type="string" fullWidth />
                  </Grid>
                </Grid>
              </Stack>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel>Relationship</InputLabel>
                    <Select
                      value={selectedRelationship}
                      onChange={handleRelationshipChange}
                      input={<OutlinedInput label="Relationship" />}
                      MenuProps={MenuProps}
                      fullWidth
                    >
                      {relationshipList.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                </Grid>
              </Stack>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel>Home / Office Number</InputLabel>
                    <TextField type="string" fullWidth />
                  </Grid>
                </Grid>
              </Stack>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel>Mobile Number</InputLabel>
                    <TextField type="string" fullWidth />
                  </Grid>
                </Grid>
              </Stack>

              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel>Alternative Number</InputLabel>
                    <TextField type="string" fullWidth />
                  </Grid>
                </Grid>
              </Stack>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel>Residential Address </InputLabel>
                    <TextField type="string" fullWidth multiline rows={5} />
                  </Grid>
                </Grid>
              </Stack>
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

    </ThemeProvider >
  );
}
export default App;
