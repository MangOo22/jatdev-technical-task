module.exports = {
  schema: {
    '/users': {
      get: {
        summary: 'Get all users',
        description: 'Retrieves a list of all users in the system.',
        tags: ['Users'], // Group your endpoints by tags for better organization
        responses: {
          '200': {
            description: 'Successful response with a list of users',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/User', // Reference to a User schema definition
                  },
                },
              },
            },
          },
          '404': {
            description: 'No users found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: 'Create a new user',
        description: 'Creates a new user in the system.',
        tags: ['Users'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User', // Reference to a User schema definition
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'User created successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User', // Reference to a User schema definition
                },
              },
            },
          },
          '400': {
            description: 'Bad request (e.g., invalid user data)',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/users/{id}': {
      get: {
        summary: 'Get a user by ID',
        description: 'Retrieves a specific user by their ID.',
        tags: ['Users'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'integer',
            },
            description: 'The ID of the user to retrieve',
          },
        ],
        responses: {
          '200': {
            description: 'Successful response with the user data',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User', // Reference to a User schema definition
                },
              },
            },
          },
          '404': {
            description: 'User not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
      },
      put: {
        summary: 'Update a user by ID',
        description: 'Updates an existing user in the system.',
        tags: ['Users'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'integer',
            },
            description: 'The ID of the user to update',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User', // Reference to a User schema definition
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'User updated successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User', // Reference to a User schema definition
                },
              },
            },
          },
          '400': {
            description: 'Bad request (e.g., invalid user data or user not found)',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
      },
      delete: {
        summary: 'Delete a user by ID',
        description: 'Deletes an existing user from the system.',
        tags: ['Users'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'integer',
            },
            description: 'The ID of the user to delete',
          },
        ],
        responses: {
          '204': {
            description: 'User deleted successfully (no content returned)',
          },
          '404': {
            description: 'User not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'The unique identifier of the user',
          },
          firstname: {
            type: 'string',
            description: 'The firstname of the user',
          },
          lastname: {
            type: 'string',
            description: 'The lastname of the user',
          },
          email: {
            type: 'string',
            description: 'The email address of the user',
          },
        },
        required: ['firstname', 'lastname', 'email'], // Specify required properties
      },
    },
  },
};