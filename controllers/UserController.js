const { response } = require('express');

const getUser = (req, res = response) => {
    res.send('working')
}

module.exports = {
    getUser
}