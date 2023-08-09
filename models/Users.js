const { Schema, model } = require('mongoose');

const UserSchema = new schema (
    {
        username:{
            type: String, 
            unique: true,
            required: true, 
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
        }
)

UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})