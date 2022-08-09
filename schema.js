import { buildSchema } from "graphql";

const schema = buildSchema(
  `
    type Course{
        id:ID
        courseName: String
        category: String
        price: Int
        language: String
        email: String
        stack: Stack
        teachingAssistans: [teachingAssistant]
    }

    type teachingAssistant {
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHERS
    }

    type Query {
        getCourse(id:ID): Course
    }

    input CourseInput {
        id:ID
        courseName: String
        category: String
        price: Int
        language: String
        email: String
        stack: Stack
        teachingAssistansInput:[teachingAssistantInput]
    }

    input teachingAssistantInput {
        firstName: String
        lastName: String
        experience: Int
    }

    type Mutation {
        createCourse (input: CourseInput) : Course
    }

`
);

export default schema;
