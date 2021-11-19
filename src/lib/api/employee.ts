import { Employee } from 'interfaces/employee';

type IKeys = {
  employees: string;
  employeeId: string;
};

class EmployeeApi {
  KEYS: IKeys;

  constructor() {
    this.KEYS = {
      employees: 'employees',
      employeeId: 'employeeId',
    };
  }

  generateId() {
    if (localStorage.getItem(this.KEYS.employeeId) === null) {
      localStorage.setItem(this.KEYS.employeeId, '0');
    }
    let id = parseInt(localStorage.getItem(this.KEYS.employeeId)!);
    localStorage.setItem(this.KEYS.employeeId, (++id).toString());
    return id;
  }

  getAll(): Promise<Employee[] | any> {
    if (localStorage.getItem(this.KEYS.employees) === null) {
      return new Promise((resolve, reject) => {
        resolve(localStorage.setItem(this.KEYS.employees, JSON.stringify([])));
      });
    }
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(localStorage.getItem(this.KEYS.employees)!));
    });
  }

  async add(data: Employee) {
    let employees = await this.getAll();
    data['id'] = this.generateId();
    employees.push(data);
    localStorage.setItem(this.KEYS.employees, JSON.stringify(employees));
    return { ...data };
  }
}

export default EmployeeApi;
