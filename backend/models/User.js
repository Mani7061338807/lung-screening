import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    age: String,
    currentlySmoke: String,
    quitAge: String,
    startedSmokingAge: String,
    packPerDay: String,
    copd: String,
    cancer: String,
    familyCancer: String,
    race: String,
    education: String,
    height: String,
    weight: String,
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{6}$/, "ID must be 6 digits"],
    },
    questions: questionSchema,
    currentPage: {
      type: String,
      default: "page-1",
    },
    screeningResult: {
      type: String, // e.g., 'recommended', 'not recommended', 'incomplete'
      default: "incomplete",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
