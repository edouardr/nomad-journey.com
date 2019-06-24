exports.handler = function (event, context, callback) {
  callback(null, {
    principalId: 'x-api-key',
    usageIdentifierKey: event.queryStringParameters['x-api-key'],
    policyDocument: {
      Version: '2019-05-21',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: event.methodArn,
        },
      ],
    },
  });
};
