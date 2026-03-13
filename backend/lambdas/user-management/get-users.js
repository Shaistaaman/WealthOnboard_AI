// AWS Lambda function for retrieving user accounts
exports.handler = async (event) => {
    // Get all user accounts for admin management
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET'
        },
        body: JSON.stringify({
            message: 'Get users endpoint'
        })
    };
};