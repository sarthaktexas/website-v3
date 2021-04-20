import { post } from 'axios'

module.exports = async (req, res) => {
    try {
        const {
            email
        } = req.query;
        console.log(`Incoming subscription request for ${email}`);

        if (!email) {
            return res.status(400).json({
                error: "Email is required"
            });
        }

        await subscribe(email);
    } catch (error) {
        console.error(
            (error && error.response && error.response.data) || error.message
        );
        if (
            error.response &&
            error.response.data &&
            error.response.data.length > 0 &&
            error.response.data[0].includes("already subscribed")
        ) {
            return res
                .status(400)
                .json({
                    error: "Looks like you already subscribed to my newsletter!"
                });
        }

        return res.status(400).json({
            error: error.message || error.toString()
        });
    }

    return res.status(200).json({
        response: "subscribed!",
        error: ""
    });
}

const headers = {
    Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
    "Content-Type": "application/json"
}

const subscribe = async (email) => {
    post(
        "https://api.buttondown.email/v1/subscribers",
        {
            email,
            notes: "Subscribed from website",
        },
        {
            headers,
        }
    );
}