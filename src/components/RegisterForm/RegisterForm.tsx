// import { useDispatch } from 'react-redux';
// import { registerUser } from '../../redux/auth/operations';
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
  Label,
  InputWrapper
} from './RegisterForm.styled';
import { SectionTitle } from '../LoginAddSection/LoginAddSection.styled';


export const RegisterForm: React.FC = () => {
  // const dispatch = useDispatch();

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
      name: '',
      surname: '',
      email: '',
      password: '',
      isInSystem: false,
      isSubscribed: false,
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
    <FormContainer>
       <Form onSubmit={handleSubmit}>
        <SectionTitle style={{ marginBottom: '40px' }}>Це ваш перший візит?</SectionTitle>
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

      <InputWrapper>
          <InputField style={{ marginRight: '10px' }}>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={values.name}
            // ValidationState={getStatus(
            //   errors.name,
            //   touched.name,
            //   isValid,
            //   isSubmitting
            // )}
          />
        <Label>Ім'я</Label>

          <ErrMessage>
            {errors.name && touched.name ? <span>{errors.name}</span> : null}
          </ErrMessage>
        </InputField>

        <InputField>
          <Input
            id="surname"
            name="surname"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={values.surname}
            // ValidationState={getStatus(
            //   errors.email,
            //   touched.email,
            //   isValid,
            //   isSubmitting
            // )}
          />
          <Label>Прізвище</Label>
          <ErrMessage>
            {errors.email && touched.email ? <span>{errors.email}</span> : null}
          </ErrMessage>
        </InputField>
      </InputWrapper>

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

        <FormGroup>
          <FormControlLabel control={<Checkbox style={{ marginRight: '5px' }}
            name="isSubscribed"
            checked={values.isSubscribed}
            onChange={handleCheckboxChange}
            sx={{
              color: grey[300],
              '&.Mui-checked': {
              color: grey[900],
            },
           }}/>} label="Так, я хочу підписатися на розсилку новин та отримати знижку 10%(необов’язково)" />
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
        </FormGroup>
      <BtnSubmit type="submit">Створити обліковий запис</BtnSubmit>
    </Form>
   </FormContainer>
  );
};