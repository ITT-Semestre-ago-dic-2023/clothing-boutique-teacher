// values for model status
export const STATUS_VALUES = Object.freeze({
  ACTIVE: 1,
  DISABLED: 2,
  DELETED: 3,
});

/* A model object that will contain the name of every model in the database, with the following structure:
key (name for us to identify in code) : value (name that the table will have in the database)
*/
export const MODEL = Object.freeze({
  Category: 'categories',
});