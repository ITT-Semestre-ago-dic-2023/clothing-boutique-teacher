import { STATUS_VALUES, modelNames } from '@server/common';
import { DataTypes } from 'sequelize';
import { handleValidateDBError } from '../utils';

export default (sequelize) => sequelize.define(
    modelNames.Category,
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            unique: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        status: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: STATUS_VALUES.ACTIVE,
            validate: {
                isIn: {
                    args: [[STATUS_VALUES.ACTIVE, STATUS_VALUES.DELETED, STATUS_VALUES.DISABLED]],
                    msg: 'Invalid status value provided',
                },
            },
        },
    }
);
