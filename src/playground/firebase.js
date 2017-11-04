// const expensesRef = database.ref('expenses');

// // child_removed
// expensesRef.on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// expensesRef.on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// expensesRef.on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// Tree read
// const onChange = expensesRef.on(
//   'value',
//   snapshot => {
//     const expensesData = [];
//     snapshot.forEach(childSnapshot => {
//       expensesData.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expensesData);
//   },
//   e => {
//     console.log('Error', e);
//   }
// );

// expensesRef.once('value').then(snapshot => {
//   const expensesData = [];
//   snapshot.forEach(childSnapshot => {
//     expensesData.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expensesData);
// });

// Write
// expenses.forEach(expense => {
//   expensesRef.push({
//     description: expense.description,
//     amount: expense.amount,
//     createdAt: expense.createdAt,
//     note: expense.note
//   });
// });

// Read
// const onChange = database.ref().on(
//   'value',
//   snapshot => {
//     const value = snapshot.val();
//     console.log(value.name, 'is a', value.job.title, 'at', value.job.company);
//   },
//   e => {
//     console.log('Fetching data error', e);
//   }
// );

// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Error:', e);
//   });

// database
//   .ref()
//   .set({
//     name: 'Mike',
//     age: 30,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Philadephia',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data set.');
//   })
//   .catch(e => {
//     console.log('Error:', e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// });
