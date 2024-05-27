import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import {
    Stack,
    Alert,
    Button
} from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { ForgotPassword } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";

const ResetPasswordForm = () => {
    const dispatch = useDispatch();
    const [submitError, setSubmitError] = useState(null);

    const ResetPasswordSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email address"),
    });

    const defaultValues = {
        email: "demo@tawk.com",
    };

    const methods = useForm({
        resolver: yupResolver(ResetPasswordSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
    } = methods;

    const onSubmit = async (data) => {
        try {
            // Submit data to backend
             dispatch(ForgotPassword(data));
        } catch (error) {
            console.error(error);
            reset();
            setSubmitError(error.message);
        }
    };

    return (
        <FormProvider
            methods={methods}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Stack spacing={3}>
                {submitError && (
                    <Alert severity="error">{submitError}</Alert>
                )}

                <RHFTextField name="email" label="Email address" />
                <Button
                fullWidth
                color="inherit"
                size="large"
                type="submit"
                variant="contained"
                sx={{
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
                Send Request
            </Button>
            </Stack>

            
        </FormProvider>
    );
};

export default ResetPasswordForm;
