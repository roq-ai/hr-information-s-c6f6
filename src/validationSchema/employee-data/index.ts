import * as yup from 'yup';

export const employeeDataValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  department: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  salary: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
