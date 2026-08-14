import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    name: {
      type: String,
      trim: true,
      default: "",
    },
    message: {
      type: String,
      trim: true,
      default: "",
    },
    sourcePage: {
      type: String,
      default: "footer_contact",
    },
  },
  {
    collection: "oneninecontact", // Saves explicitly in oneninecontact table / collection
    timestamps: true,
  }
);

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
