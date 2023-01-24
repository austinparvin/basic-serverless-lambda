'use strict';

module.exports.generateRandomNumber = async (event) => {
 const randomNumber = Math.floor(Math.random() * 100);
 console.log('[Asimo] randomNumber:', randomNumber)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
        randomNumber: randomNumber
      })
  };
};
