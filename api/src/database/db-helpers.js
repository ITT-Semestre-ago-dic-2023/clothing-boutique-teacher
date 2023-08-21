import db from '.';
import categoryModel from '../models/category';

let models;

export const registerModels = () => {
    models = {
        Category: categoryModel(db),
    };
};
