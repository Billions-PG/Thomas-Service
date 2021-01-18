const path = require('path');
const { Seeder } = require('mongo-seeding');

const config = {
  database: {
    name: 'recommended',
  },
  dropDatabase: true,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve('./data'),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  },
);

seeder
  .import(collections)
  .then(() => {
    console.info('Success');
  })
  .catch((err) => (
    console.log('Error', err)
  ));
