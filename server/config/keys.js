const ttrack_password = require('../../../ttrack_password/ttrack_password')

module.exports = {
    mongoURI: `mongodb+srv://leon:${ttrack_password}@sprint3.05fm9.mongodb.net/sprint3?retryWrites=true&w=majority`,
    secretOrKey: 'secret'
}