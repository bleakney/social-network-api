const { Schema, model } = require('mongoose');
const dayjs = require('dayjs');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought"
            }
        ],
        friends: [UserSchema],
    },
     {
         toJSON: {
             virtuals: true
         },
         id: false
     }
);

UserSchema.virtual("friendCount").get(function () {
    return this.replies.length
});

const User = model("User", UserSchema);

module.exports = User;