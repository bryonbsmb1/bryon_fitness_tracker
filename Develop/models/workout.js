const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema 

(
    {
        day: {type:Date,
        default:Date.now,
    },
    exercises: [
        {
            type: {String,
            trim: true,
        },

            name: {String,
                trim: true,
            },

            duration: Number,
            weight:{
                type: Number,
                default: 0,

            },



        }





    ]}

























    });