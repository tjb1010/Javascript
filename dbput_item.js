import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

//  Just for testing. Lambda will pass creds, no need to code in.
//var credentials = new AWS.SharedIniFileCredentials({ profile: "thi" });
//AWS.config.credentials = credentials;

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });

var params = {
  TableName: "Users",
  Item: {
    // find a way to have these passed in
    Email: { S: "justafakeemail@email.com" },
    Role: { S: "Inspector" },
    Name: { S: "Richard Roe" },
    Address: { S: "456 Fake St" },
    // may need to update
    userId: event.requestContext.identity.cognitoIdentityId
  }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, (error, data) => {
  // Set response headers to enable CORS (Cross-Origin Resource Sharing)
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };

  // Return status code 500 on error
  if (error) {
    const response = {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify({ status: false })
    };
    callback(null, response);
    return;
  }

  // Return status code 200 and the newly created item
  const response = {
    statusCode: 200,
    headers: headers,
    body: JSON.stringify(params.Item)
  };
  callback(null, response);
});
