import React, { useCallback } from "react";
import * as Yup from "yup";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import {
    Stack,
    Alert,
    Button
} from "@mui/material";
import FormProvider from "../../components/hook-form/FormProvider";
// components
import { RHFTextField } from "../../components/hook-form";
import { YoutubeLogo } from "phosphor-react";


const ProfileForm = () => {

    const LoginSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required"),
        about: Yup.string()
            .required("About is required"),

        avatarUrl: Yup.string()
            .required("Avatar is required")
    });

    const defaultValues = {
        name: "",
        about: "",
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        control,
        setError,
        setValue,
        handleSubmit,
        formState: { errors },
    } = methods;

    const values = watch();

    const handleDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file)
        })
        if (file) {
            setValue("avatarUrl", newFile, { shouldValidate: true });

        }

    }, [setValue]);

    const onSubmit = async (data) => {
        try {

            // submit data to backend
            console.log("Data", data);
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

                <Stack spacing={3}>
                    {!!errors.afterSubmit && (
                        <Alert severity="error">{errors.afterSubmit.message}</Alert>
                    )}

                    <RHFTextField name="name" label="Name" helperText={"This name is visible to your contacts"} />

                    <RHFTextField multiline rows={3} maxRows={5} name={"about"} label="About" />

                </Stack>
                <Stack direction={"row"} justifyContent={"end"}>
                    <Button color="primary" size="large" type="submit" variant="outlined"> Save </Button>
                </Stack>
            </Stack>
        </FormProvider>
    );
};

export default ProfileForm; 
