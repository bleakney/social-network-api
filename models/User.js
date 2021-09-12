const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: "Username required!",
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: "Email address required!",
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought"
            }
        ],
        friends: [this],
    },
     {
         toJSON: {
             virtuals: true
         },
         id: false
     }
);

UserSchema.virtual("friendCount").get(function () {
    return this.friends.length
});

const User = model("User", UserSchema);

module.exports = User;