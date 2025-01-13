import customerManagement from "../services/customerManagement";

class CustomerController {
    FindAllCustomer = async (req, res) => {
        try {
            const data = await customerManagement.findAllCustomer();

            res.status(data.status).json(
                data.response
            );
        } catch(err) {
            res.status(500).json({
                success: false,
                message: "Ocorreu um erro no servidor"
            });
        };
    };  
};

export default new CustomerController();