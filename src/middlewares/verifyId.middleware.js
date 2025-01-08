export const verifyIdMiddleware = (req, res, next) => {
    try {

        if(!req.params.id) return res.status(400).json({message: "Id is Required"});

        if(isNaN(req.params.id)) return res.status(400).json({message: "Id Must be a Number"});

        req.params.id = parseInt(req.params.id);

        next();

    } catch (error) {
        return res.status(400).json({
            message: "Error While Validating Id...",
            data: error,
        });
    }
};
