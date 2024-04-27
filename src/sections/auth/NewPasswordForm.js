import React, { useState } from "react";
import * as Yup from "yup";
// import { Link as RouterLink } from "react-router-dom";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import {
    Stack,
    Alert,
    IconButton,
    InputAdornment
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import FormProvider from "../../components/hook-form/FormProvider";
import { Eye, EyeSlash } from "phosphor-react";
// components
import { RHFTextField } from "../../components/hook-form";


const NewPasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);



    const NewPasswordSchema = Yup.object().shape({

        newPassword: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    const defaultValues = {
        newPassword: '',
        confirmPassword: '',
    };

    const methods = useForm({
        resolver: yupResolver(NewPasswordSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors },
    } = methods;

    const onSubmit = async (data) => {
        try {
            //   console.log(data);
            // submit data to backend
            //   dispatch(LoginUser(data));
        } catch (error) {
            console.error(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            });
        }
    };


    return (
        <FormProvider
            methods={methods}
            onSubmit={handleSubmit(onSubmit)}>

            <Stack spacing={3}>
                {!!errors.afterSubmit && (
                    <Alert severity="error">{errors.afterSubmit.message}</Alert>
                )}


                <RHFTextField name="email" label="Email address" />
                <RHFTextField
                    name="newPassword"
                    label="New Password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                >
                                    {showPassword ? <Eye /> : <EyeSlash />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <RHFTextField
                    name="confirmPassword"
                    label="Confirm New Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <Eye /> : <EyeSlash />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

            </Stack>


            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"

                sx={{
                    mt: 3,
                    bgcolor: "text.primary",
                    color: (theme) =>
                        theme.palette.mode === "light" ? "common.white" : "grey.800",
                    "&:hover": {
                        bgcolor: "text.primary",
                        color: (theme) =>
                            theme.palette.mode === "light" ? "common.white" : "grey.800",
                    },
                }}
            >
                Update Password
            </LoadingButton>


        </FormProvider>
    );
};

export default NewPasswordForm; 
