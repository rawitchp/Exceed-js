const users = [
    {
      id: 1,
      name: 'A',
      age: 44
    },
    {
      id: 2,
      name: 'B',
      age: 20
    },
    {
      id: 3,
      name: 'C',
      age: 13
    },
    {
      id: 4,
      name: 'D',
      age: 18
    },
    {
      id: 5,
      name: 'E',
      age: 5
    }
  ];
  
  // function getUserById(id) {
  //   console.log('Starting operation...');
  
  //   // Simulate network call
  //   setTimeout(() => {
  //     console.log('Finding user...');
  
  //     const user = users.find((user) => user.id === id);
  
  //     console.log('Operation ended');
  
  //     if (user) {
  //       return user;
  //     } else {
  //       return 'User not found';
  //     }
  //   }, 1500);
  // }
  
  // const user = getUserById(1);
  // console.log(user);
  
  // function getUserById(id, cb) {
  //   console.log('Starting operation...');
  
  //   // Simulate network call
  //   setTimeout(() => {
  //     console.log('Finding user...');
  
  //     const user = users.find((user) => user.id === id);
  
  //     console.log('Operation ended');
  
  //     if (user) {
  //       cb(null, user);
  //     } else {
  //       cb('User not found', null);
  //     }
  //   }, 1500);
  // }
  
  // getUserById(3, (error, user) => {
  //   console.log(error);
  //   console.log(user);
  // });
  
  // function getUserById(id) {
  //   return new Promise((resolve, reject) => {
  //     console.log('Starting operation...');
  
  //     // Simulate network call
  //     setTimeout(() => {
  //       console.log('Finding user...');
  
  //       const user = users.find((user) => user.id === id);
  
  //       console.log('Operation ended');
  
  //       if (user) {
  //         resolve(user);
  //       } else {
  //         reject('User not found');
  //       }
  //     }, 1500);
  //   });
  // }
  
  // getUserById(9)
  //   .then((user) => console.log(user))
  //   .catch((error) => console.log(error));
  
  async function getUserById(id) {
    return new Promise((resolve, reject) => {
      console.log('Starting operation...');
  
      // Simulate network call
      setTimeout(() => {
        console.log('Finding user...');
  
        const user = users.find((user) => user.id === id);
  
        console.log('Operation ended');
  
        if (user) {
          resolve(user);
        } else {
          reject('User not found');
        }
      }, 1500);
    });
  }
  
  (async function () {
    try {
      const user = await getUserById(9);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  })();