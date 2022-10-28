let mongoose = require('mongoose');

let bclModel = mongoose.Schema({
    contactName: String,
    contactNumber: String,
    email: String
    

},
{
    collection:'bcl'
});

module.exports = mongoose.model('BCL', bclModel);
