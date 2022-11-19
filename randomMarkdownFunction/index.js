var { faker } = require("@faker-js/faker");

function generateMD() {
  var fileName = faker.lorem.word() + "-" + faker.lorem.word();
  var fileContents = `
  ${faker.lorem.paragraphs()}
  `;
  return {
    fileName: fileName,
    body: fileContents,
  };
}

function generatePosts(count) {
  const arr = [];
  for (var i = 0; i < count; i++) {
    arr.push(generateMD());
  }
  return arr;
}

exports.handler = async (event) => {
  console.log(event?.queryStringParameters, "THIS IS EVEnt PARAMS");
  const markDownCount = event?.queryStringParameters?.count || 1;
  const markdownPosts = generatePosts(markDownCount);
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(markdownPosts),
  };
  return response;
};
