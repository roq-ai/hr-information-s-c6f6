import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeDataInterface {
  id?: string;
  user_id: string;
  job_title: string;
  department: string;
  start_date: any;
  end_date?: any;
  salary: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EmployeeDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  job_title?: string;
  department?: string;
}
