import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  pay_date: yup.date().required(),
  gross_pay: yup.number().integer().required(),
  net_pay: yup.number().integer().required(),
  deductions: yup.number().integer().required(),
  bonus: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
