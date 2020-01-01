const fetch = require("node-fetch");
const { registerKey, loginKey, checkerKey } = require("./../config/lambdaKeys");

const resolvers = {
  checker: async (args, root, context, info) => {
    console.log("in checker");

    // console.log("args: ", args);
    console.log("root: ", root.headers);
    console.log("root: ", root.headers.authorization);
    // console.log("context: ", context);
    // console.log("info: ", info);

    // let result;
    // axios
    //   .get(checkerKey, {
    //     headers: { Authorization: root.headers.authorization }
    //   })
    //   .then(async res => {
    //     console.log("res: ", res);
    //     console.log("res headers: ", res.headers);
    //     console.log("res data Item: ", res.data.Item);
    //     result = await res.data.Item;
    //     // return res.data.Item;
    //   });
    // return result;

    return fetch(checkerKey, {
      headers: { Authorization: root.headers.authorization }
    })
      .then(res => {
        console.log("res: ", res);
        console.log("res.body: ", res.body);
        console.log("res.headers: ", res.headers);
        return res.json();
      })
      .then(json => {
        console.log("json: ", json);
        return json;
      });
  },

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

    return fetch(registerKey, {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        return json;
      });
  },

  login: async args => {
    console.log("in login");
    console.log("args: ", args);
    const body = {
      email: args.email,
      password: args.password
    };

    console.log("body: ", body);

    return fetch(loginKey, {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        return json;
      });
  }
};

module.exports = resolvers;
