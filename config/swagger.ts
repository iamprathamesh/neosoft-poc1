const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Agency API",
            description: "Agency API Information",
            contact: {
                name: "Prathamesh Madur",
            },
            servers: [{ url: "http://localhost:" + process.env.PORT!, description: "Local server" }],
            version: "1.0.0",
        },
        components: {
            schemas: {
                user: {
                    type: "object",
                    properties: {
                        _id: {
                            type: "string",
                        },
                        firstname: {
                            type: "string",
                        },
                        lastname: {
                            type: "string",
                        },
                        roles: {
                            type: "array",
                            items: {
                                type: "string",
                            }
                        },
                        email: {
                            type: "string",
                        },
                        password: {
                            type: "string",
                        }
                    }
                },
                product: {
                    type: "object",
                    properties: {
                        _id: {
                            type: "string",
                        },
                        name: {
                            type: "string",
                        },
                        description: {
                            type: "string",
                        },
                        price: {
                            type: "integer",
                        },
                        maxPrice: {
                            type: "integer",
                        },
                        thumbnail: {
                            type: "string",
                        },
                        rating: {
                            type: "integer",
                        },
                    }
                },
            }
        },
        paths: {
            "/auth/login": {
                post: {
                    tags: ["Login"],
                    summary: "Login",
                    description: "Login",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            required: "true",
                            schema: {
                                allOf: [
                                    {
                                        type: "object",
                                        properties: {
                                            email: {
                                                type: "string",
                                            },
                                            password: {
                                                type: "string",
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successfully created user token",
                            content: "application/json"
                        },
                        "500": {
                            description: "Exception occured on server side"
                        }
                    }
                }
            },
            "/user/findAll": {
                get: {
                    tags: ["Get all users"],
                    summary: "get all users",
                    description: "get all users",
                    parameters: [
                        {
                            in: "header",
                            name: "Authorization",
                            description: "JWT token for authentication",
                            type: "string",
                            required: "true"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successfully returned all users",
                            content: "application/json"
                        },
                        "500": {
                            description: "Exception occured in fetching users"
                        }
                    }
                }
            },
            "/product/findAll": {
                get: {
                    tags: ["Get all products"],
                    summary: "get all products",
                    description: "get all products",
                    parameters: [
                        {
                            in: "header",
                            name: "Authorization",
                            description: "JWT token for authentication",
                            type: "string",
                            required: "true"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successfully returned all products",
                            content: "application/json"
                        },
                        "500": {
                            description: "Exception occured in fetching products"
                        }
                    }
                }
            },
            "/user/save": {
                post: {
                    tags: ["Save user"],
                    summary: "Save the user",
                    description: "Save user in db",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            required: "true",
                            schema: {
                                allOf: [
                                    {
                                        type: "object",
                                        properties: {
                                            firstname: {
                                                type: "string",
                                            },
                                            lastname: {
                                                type: "string",
                                            },
                                            email: {
                                                type: "string",
                                            },
                                            password: {
                                                type: "string",
                                            }
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            in: "header",
                            name: "Authorization",
                            description: "JWT token for authentication",
                            type: "string",
                            required: "true"
                        }
                    ],
                    responses: {
                        "201": {
                            description: "Successfully saved user",
                            content: "application/json"
                        },
                        "500": {
                            description: "Exception in saving user"
                        }
                    }
                }
            },
            "/product/save": {
                post: {
                    tags: ["Save product"],
                    summary: "Save the product",
                    description: "Save the product in db",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            required: "true",
                            schema: {
                                allOf: [
                                    {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string",
                                            },
                                            description: {
                                                type: "string",
                                            },
                                            thumbnail: {
                                                type: "string",
                                            },
                                            price: {
                                                type: "integer",
                                            },
                                            maxPrice: {
                                                type: "integer",
                                            },
                                            rating: {
                                                type: "integer",
                                            },
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            in: "header",
                            name: "Authorization",
                            description: "JWT token for authentication",
                            type: "string",
                            required: "true"
                        }
                    ],
                    responses: {
                        "201": {
                            description: "Successfully inserted product",
                            content: "application/json"
                        },
                        "500": {
                            description: "Exception occured on server side"
                        }
                    }
                }
            },
            // "/client/update": {
            //     put: {
            //         tags: ["updateClient"],
            //         summary: "Update client",
            //         description: "Update the client document",
            //         parameters: [
            //             {
            //                 in: "body",
            //                 name: "body",
            //                 required: "true",
            //                 schema: {
            //                     allOf: [
            //                         {
            //                             type: "object",
            //                             properties: {
            //                                 "_id": {
            //                                     type: "string"
            //                                 }
            //                             }
            //                         },
            //                         {
            //                             $ref: "#/components/schemas/client"
            //                         }
            //                     ]
            //                 }
            //             },
            //             {
            //                 in: "header",
            //                 name: "Authorization",
            //                 description: "JWT token for authentication",
            //                 type: "string",
            //                 required: "true"
            //             }
            //         ],
            //         responses: {
            //             "201": {
            //                 description: "Successfully updated client",
            //                 content: "application/json"
            //             },
            //             "500": {
            //                 description: "Exception occured on server side"
            //             }
            //         }
            //     }
            // },
            // "/agency/getTopClient": {
            //     get: {
            //         tags: ["getAllTopClients"],
            //         summary: "get top client among all the agencies",
            //         description: "get top client among all the agencies",
            //         parameters: [
            //             {
            //                 in: "header",
            //                 name: "Authorization",
            //                 description: "JWT token for authentication",
            //                 type: "string",
            //                 required: "true"
            //             }
            //         ],
            //         responses: {
            //             "200": {
            //                 description: "Successfully fetched top clients for all agencies",
            //                 content: "application/json"
            //             },
            //             "500": {
            //                 description: "Exception occured on server side"
            //             }
            //         }
            //     }
            // }
        }
    },
    apis: ["app.js", "./src/api/routes/*.js"]
};

export default swaggerOptions;
