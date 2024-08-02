import { QueryInterface, DataTypes } from 'sequelize'

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },

      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },

      desiganation: {
        allowNull: false,
        type: Sequelize.STRING
      },

      email: {
        allowNull: false,
        type: Sequelize.STRING
      },

      address1: {
        allowNull: false,
        type: Sequelize.STRING
      },

      address2: {
        allowNull: false,
        type: Sequelize.STRING
      },

      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },

      gender: {
        allowNull: false,
        type: Sequelize.STRING
      },

      zipcode: {
        allowNull: false,
        type: Sequelize.STRING
      },

      state: {
        allowNull: false,
        type: Sequelize.STRING
      },

      city: {
        allowNull: false,
        type: Sequelize.STRING
      },

      relationshipStatus: {
        allowNull: false,
        type: Sequelize.STRING
      },

      dateOfBirth: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.dropTable('Users');
  }
};