import {
	SubmitHandler,
	useFormContext,
} from 'react-hook-form';

import {
	Button,
	Container,
	Stack,
} from '@mui/material';
import { Schema } from './schema';
import { RHFTextField } from '../atoms/RHFTextField';
import { RHFCheckbox } from '../atoms/RHFCheckbox';
import { RHFSlider } from '../atoms/RHFSlider';
import { RHFSwitch } from '../atoms/RHFSwitch';

import { genders, languages, skills, states, } from '../../app-data';
import { RHFAutocomplete } from '../atoms/RHFAutocomplete';
import { RHFToggleButtonGroup } from '../atoms/RHFToggleButtonGroup';
import { RHFRadioGroup } from '../atoms/RHFRadioGroup';
import { AppDispatch, RootState } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../state/users/usersSlice';
import Loader from '../atoms/loader/Loader';
import AppSnackbar from '../atoms/notifications/AppSnackbar';
// import { SMALL_ERROR, SMALL_SUCCESS } from '../../constants/constants';
import { SMALL_ERROR, SMALL_SUCCESS } from '../../constants/constants';

const Users = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.users);
    console.log('user============================', user);
    // const count = useSelector((state: RootState) => state.counter.value);


    const { handleSubmit } = useFormContext<Schema>();

    // useEffect(() => {
	// 	const sub = watch((value) => {
	// 		console.log('value==== ', value);
	// 	});

	// 	return () => sub.unsubscribe();
	// }, [watch]);

    const onSubmit: SubmitHandler<Schema> = (data) => {
		console.log('data: ', data);
        dispatch(createUser(data))
	};
    return(
        <>
            <h1>{user?.data?.email}</h1>
            <h2>{user?.message}</h2>
            <h2>{user?.isLoading ? 'Loading' : 'Completed'}</h2>
            <Loader isLoading={user?.isLoading} />
            <AppSnackbar payload={{openSnack: user?.showNotification, snackMsg: user?.message, snackType: user?.isSuccess ? SMALL_SUCCESS : SMALL_ERROR}} />
            {/* <AppSnackbar snackAction={snackAction} setSnackAction={setSnackAction} /> */}
            <Container maxWidth="sm" component="form" onSubmit={handleSubmit(onSubmit)}>
                <Stack sx={{ flexDirection: 'row', gap: 2 }}>
                    {/* <List subheader={<ListSubheader>Users</ListSubheader>}>
                        {usersQuery.data?.map((user) => (
                            <ListItem disablePadding key={user.id}>
                                <ListItemButton
                                    onClick={() => handleUserClick(user.id)}
                                    selected={id === user.id}
                                >
                                    <ListItemText primary={user.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List> */}

                    <Stack sx={{ gap: 2 }}>
                        <RHFTextField<Schema> name="name" label="Name" />
                        <RHFTextField<Schema> name="email" label="Email" />
                        <RHFAutocomplete<Schema>
                            name="states"
                            label="States"
                            options={states}
                        />
                        <RHFToggleButtonGroup<Schema>
                            name="languagesSpoken"
                            options={languages}
                        />
                        <RHFRadioGroup<Schema>
                            name="gender"
                            options={genders}
                            label="Gender"
                        />
                        <RHFCheckbox<Schema>
                            name="skills"
                            options={skills}
                            label="Skills"
                        />

                        {/* <RHFDateTimePicker<Schema>
                            name="registrationDateAndTime"
                            label="Registration Date & Time"
                        /> */}
                        {/* <Typography>Former Employment Period:</Typography> */}
                        {/* <RHFDateRangePicker<Schema> name="formerEmploymentPeriod" /> */}
                        <RHFSlider<Schema> name="salaryRange" label="Salary Range" />
                        <RHFSwitch<Schema> name="isTeacher" label="Are you a teacher?" />


                        <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button variant="contained" type="submit">
                                Add User
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}

export default Users;
