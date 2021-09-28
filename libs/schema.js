import { makeExecutableSchema } from '@graphql-tools/schema';

import resolvers from './resolvers.js';

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
        age: Int
        email: String
        contacts: [Contact]
    }
    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
        age: Int
        email: String
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export {schema}

/*
import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Friend{
        firstName:String,
        lastName:String,
        gender:String
        emails:[Email]!
    }
    type Email{
        email:String
    }
    type Query{
        friend: Friend
    }
`)
*/


export default schema;