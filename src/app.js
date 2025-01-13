import mongoose from "mongoose";
require("dotenv").config({ path: './config/homolog.env' });

class App {
    constructor() {
        this.database();
    };

    database = async () => {
        await mongoose.connect(process.env.URI_MONGO)
    };
};

export default new App();