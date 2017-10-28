import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Food',
    amount: 2000,
    note: '',
    createdAt: 0
  },
  {
    id: '2',
    description: 'April Rent',
    amount: 102000,
    note: '',
    createdAt: moment(0)
      .subtract(5, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'Gas Bill',
    amount: 3000,
    note: '',
    createdAt: moment(0)
      .add(5, 'days')
      .valueOf()
  }
];
