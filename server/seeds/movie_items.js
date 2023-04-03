/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const movies = [
  { title: "Mean Girls" },
  { title: "Hackers" },
  { title: "The Grey" },
  { title: "Sunshine" },
  { title: "Ex Machina" },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("movies_tbl").del();
  await knex("movies_tbl").insert(movies);
};
