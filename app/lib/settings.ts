export type Invoice = {
  id: string;
  custom_id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid';
};
