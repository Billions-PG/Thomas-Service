const path = require('path');
const { Seeder } = require('mongo-seeding');

const url = 'mongodb://localhost:27017/recommended';

const config = {
  database: process.env.MONGO_URL || url,
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
  .import(collections);
