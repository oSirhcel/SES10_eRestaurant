const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ReservationSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId
    },
    dateTime: {
        type: Date,
        required: true
    },
    numPeople: {
        type: Number,
        required: true
    },
});
/*Need to add this to the Schema
        mealOrder: {
        type: Schema.Types.ObjectId
    }
*/

module.exports = mongoose.model('reservation', ReservationSchema);