import mongoose from 'mongoose';
const PostSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    linkCount: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', PostSchema);
export default PostMessage;
