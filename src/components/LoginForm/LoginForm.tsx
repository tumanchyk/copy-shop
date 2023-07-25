import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { grey } from '@mui/material/colors';

import { useFormik } from 'formik';

import {
  FormContainer,
  BtnSubmit,
  ErrMessage,
  Form,
  Input,
  InputField,
  Label
} from '../RegisterForm/RegisterForm.styled';
import { SectionTitle } from '../LoginAddSection/LoginAddSection.styled';


export const LoginForm: React.FC = () => {

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    resetForm,
    setFieldValue
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      isInSystem: false,
    },

    // validationSchema: registrationSchema,

    onSubmit: values => {
      // dispatch(
      //   registerUser({
      //     name: values.name,
      //     email: values.email,
      //     password: values.password,
      //   })
      // );
      console.log(values);
      resetForm();
    },
  });

   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFieldValue(name, checked); // Update the Checkbox value using setFieldValue
  };


  return (
    <FormContainer style={{ background: '#fff' }}>
       <Form onSubmit={handleSubmit}>
        <SectionTitle style={{ marginBottom: '40px' }}>Ви користувач?</SectionTitle>
        <InputField>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          onChange={handleChange}
          value={values.email}
          // ValidationState={getStatus(
          //   errors.email,
          //   touched.email,
          //   isValid,
          //   isSubmitting
          // )}
        />
        <Label>Електронна пошта</Label>
        <ErrMessage>
          {errors.email && touched.email ? <span>{errors.email}</span> : null}
        </ErrMessage>
      </InputField>

      <InputField>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          autoComplete="off"
          value={values.password}
          // ValidationState={getStatus(
          //   errors.password,
          //   touched.password,
          //   isValid,
          //   isSubmitting,
          //   checkPasswordSecure(values.password)
          // )}
        />
        <Label>Пароль</Label>
        <ErrMessage>
          {errors.password && touched.password ? (
            <span>{errors.password}</span>
          ) : null}
        </ErrMessage>

      </InputField>

        <FormControlLabel required control={<Checkbox
          name="isInSystem"
          checked={values.isInSystem}
          onChange={handleCheckboxChange}
          sx={{
              color: grey[300],
              '&.Mui-checked': {
              color: grey[900],
            },
           }}/>} label="Залишатися в системі"/>
        
      <BtnSubmit type="submit">Увійдіть</BtnSubmit>
    </Form>
   </FormContainer>
  );
};