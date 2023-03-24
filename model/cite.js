import { DataTypes } from "sequelize";
const Cite = (sequelize) =>
{
    return sequelize.define("cite", {
        id: 
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:
        {
            type: DataTypes.STRING,
            required: true,
        }
    });
}

export default Cite;