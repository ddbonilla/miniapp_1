/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies_tbl').del()
  await knex('movies_tbl').insert([
    {id: 1, title: 'Mean Girls'},
    {id: 2, title: 'Hackers'},
    {id: 3, title: 'The Grey'},
    {id: 4, title: 'Sunshine'},
    {id: 15, title: 'Ex Machina'},
  ]);
};


