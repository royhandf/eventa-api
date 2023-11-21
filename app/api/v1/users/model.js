const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama harus diisi"],
      minlength: [3, "Panjang nama minimal 3 karakter"],
      maxlength: [50, "Panjang nama maksimal 50 karakter"],
    },
    email: {
      type: String,
      unique: [true, "Email sudah terdaftar"],
      required: [true, "Emal harus diisi"],
    },
    password: {
      type: String,
      required: [true, "Password harus diisi"],
      minlength: [8, "Panjang password minimal 8 karakter"],
    },
    role: {
      type: String,
      enum: ["admin", "organizer", "owner"],
      default: "admin",
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const User = this;
  if (User.isModified("password")) {
    User.password = await bcrypt.hash(User.password, 12);
  }
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", userSchema);
