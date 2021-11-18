type DepartmentType = {
  id: string;
  title: string;
};

export const getDepartmentCollection = (): DepartmentType[] => [
  { id: '1', title: 'Development' },
  { id: '2', title: 'Marketing' },
  { id: '3', title: 'Accounting' },
  { id: '4', title: 'HR' },
];
