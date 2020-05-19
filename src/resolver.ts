import feedbacks from "./seed_data"

const resolvers = {
    Query: {
        feedbacks: () => feedbacks,
    },
    Mutation: {
        createFeedback: (roots: any, {username, message, rating}: {username: string, message: string, rating: number}, context: any) => {
            const newFeedback = {
                username,
                message,
                rating,
            }
            feedbacks.push(newFeedback)

        }
    } 
};

export default resolvers