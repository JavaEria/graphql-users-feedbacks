import feedbacks from "./seed_data"

const resolvers = {
    Query: {
        feedbacks: () => feedbacks,
    },
    Mutation: {
        createFeedback: (roots: any, args: any, context: any) => {
            const newFeedback = {
                "username": args.username,
                "message": args.message,
                "rating": args.rating,
            }
            feedbacks.push(newFeedback)

        }
    } 
};

export default resolvers