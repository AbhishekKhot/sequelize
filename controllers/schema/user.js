const User = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
  required: ["name", "email", "password"],
};

const addUserSchema = {
  body: {
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
};

const getUserSchema = {
  schema: {
    response: {
      200: {
        user: User,
      },
    },
  },
};

const getUsersSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        user: User,
      },
    },
  },
};

const updateUserSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
};

const deleteUserSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
};

module.exports = {
  addUserSchema,
  getUserSchema,
  getUsersSchema,
  updateUserSchema,
  deleteUserSchema,
};
