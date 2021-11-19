export interface Employee {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  gender: string;
  departmentId: string;
  hireDate: Date;
  isPermanent: boolean;
}

export interface EmployeesSliceState {
  employees: Employee[];
  getAllLoading: boolean | null;
  getAllError: boolean | null;
  addLoading: boolean | null;
  addError: boolean | null;
}
