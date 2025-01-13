import mongoose from "mongoose";
import customerModel from "../models/customerModel";

const Customer = mongoose.model('customer', customerModel);

class CustomerManagement {
    findAllCustomer = async () => {
        try {
            const data = await Customer.find();

            if(data.length < 1){
                return {
                    status: 404,
                    response: {
                        success: false,
                        message: "Não há nenhuma customer cadastrado!"
                    }
                };
            }
            else{
                return {
                    status: 200,
                    response: {
                        success: true,
                        data: data
                    }
                };
            };
        } 
        catch(err) {
            return false;
        };
    };
};

export default new CustomerManagement();
