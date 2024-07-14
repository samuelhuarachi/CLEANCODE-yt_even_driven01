import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    company: {
        type: String,
    },
    year_fabrication: {
        type: Number,
    },
    total_km: Number,
    total_seats: Number,
});

const MongoBus = mongoose.model("Bus", busSchema);

export default MongoBus;
