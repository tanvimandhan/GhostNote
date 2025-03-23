import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content:string;
    createdAt:Date
}
const MessageSchema:Schema<Message>=new Schema({
    content:{
        type:String,
        required:true

    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})
export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifycode:string;
    verifyCodeExpiry:Date;
    isverified:boolean;
    isAcceptingmessages:boolean;
    messages:Message[]

}
const UserSchema:Schema<User>=new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        match:[/.+\@.+\..+/,"please use valid mail address"]

    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    verifycode:{
        type:String,
        required:[true,"verifycode is required"]
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"verifycodeexpiery is required"]
    },
    isverified:{
        type:Boolean,
        default:false
    },
    isAcceptingmessages:{
        type:Boolean,
        default:true
    },
    messages:[MessageSchema]
    
})
const userModel=(mongoose.models.User as mongoose.Model<User>)|| mongoose.model<User>("user",UserSchema)

export default userModel;