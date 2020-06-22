
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: "aaronmatson",
          first_name: "Aaron",
          last_name:"Matson",
          password: "$2a$06$jDeIjVuWLox8PBT5O.3jQ.LH8F4lXjVW40bcQPpRX7Bg4ZJq8wcYm"

      },
        { id: 2,
          username: 'Testing123',
          first_name: 'Test', 
          last_name: 'McTesterson',
          password: '$2a$06$JVykKsacW/D0exJFV9QCfuL2qqGJlfoRwub9wnWyUqlrCANtQ7g1.' }
      ]);
    });
};