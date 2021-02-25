//====PROBLEM MODEL====//
//====================//

module.exports = (mongoose, Schema) => {

    const ProblemsSchema = new Schema({
        title: String,
        author: String,
        problemPrompt: String,
        problemSolve: String

    },
    { timestamps: true });

    const Problems = mongoose.model('Problems', ProblemsSchema);

    return Problems
}
