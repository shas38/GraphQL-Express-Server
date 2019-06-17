"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql = require("graphql");
exports.default = graphql.buildSchema("\n    type Booking {\n        _id: ID!\n        event: Event!\n        user: User!\n        createdAt: String!\n        updatedAt: String!\n    }\n    type Event {\n        _id: ID!\n        title: String!\n        description: String!\n        price: Float!\n        date: String!\n        creator: User!\n    }\n    type User {\n        _id: ID!\n        email: String!\n        password: String\n        createdEvents: [Event!]\n    }\n    type AuthData{\n        userId: ID!\n        token: String!\n        tokenExpiration: Int!\n    }\n    input EventInput {\n        title: String!\n        description: String!\n        price: Float!\n        date: String!\n    }\n    input UserInput {\n        email: String!\n        password: String!\n    }\n    type RootQuery {\n        events: [Event!]!\n        bookings: [Booking!]!\n        login(email: String!, password: String!): AuthData!\n    }\n    type RootMutation {\n        createEvent(eventInput: EventInput!): Event\n        createUser(userInput: UserInput): User\n        bookEvent(eventId: ID!): Booking!\n        cancelBooking(bookingId: ID!): Event!\n    }\n    schema {\n        query: RootQuery  \n        mutation: RootMutation  \n    }\n    ");
//# sourceMappingURL=index.js.map