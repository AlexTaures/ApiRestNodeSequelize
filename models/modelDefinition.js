let models = [];
models['User'] = require('../models/user')


const modelDefinition = async (sequelize) => {
    models.forEach(async (model) => {
        await model(sequelize)
    })
}

module.exports = { modelDefinition }