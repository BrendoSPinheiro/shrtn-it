exports.seed = async (knex) => {
  await knex('urls').insert([
    {
      title: 'Youtube',
      full_url: 'https://www.youtube.com',
      slug: '5c23b4',
    },
    {
      title: 'Google',
      full_url: 'https://www.google.com',
      slug: '3ab23g',
    },
  ]);
};
