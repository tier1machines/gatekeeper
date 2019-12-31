const request = require("request");
const fetch = require("node-fetch");

const resolvers = {
  checker: async () => {},

  register: async args => {
    console.log("in register");
    console.log("args: ", args);
    const body = {
      email: args.email,
      password: args.password,
      firstname: args.firstname,
      lastname: args.lastname
    };

    console.log("body: ", body);

    return fetch(
      "https://tf9mkhioga.execute-api.us-east-2.amazonaws.com/dev/register",
      {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        return json;
      });
  },

  login: async () => {}
};

module.exports = resolvers;
