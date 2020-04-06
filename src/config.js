export default {
    cognito: {
        REGION: 'us-west-2',
        USER_POOL_ID: 'us-west-2_5B5Xonj5E',
        APP_CLIENT_ID: '2o832hfo4l82mlomkmafot3dc',
        // IDENTITY_POOL_ID: 'xxxx'

    },
    
    graphql: {
        URL: "https://36uep254ijennmlrc5h7z6ezla.appsync-api.us-west-2.amazonaws.com/graphql",
        REGION: 'us-west-2',
        AUTHENTICATION_TYPE: 'AMAZON_COGNITO_USER_POOLS'
    }   

    // awsconfig: {
    //     "aws_appsync_graphqlEndpoint": "https://36uep254ijennmlrc5h7z6ezla.appsync-api.us-west-2.amazonaws.com/graphql",
    //     "aws_appsync_region": "us-west-2",
    //     "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    //     "aws_appsync_apiKey": "null",
    // }
}