import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
   email:string,
   username:string,
   verifyCode:string,
):Promise<ApiResponse>{
    try{
       return {success:true,message:"email send successfully"}
       await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'mystery message | verification code',
        react:VerificationEmail({username,otp:verifyCode}),
        
      });
    }catch(error){
       console.error("error sending verificaion email",error)
       return {success:false,message:"failed to send email"}
    }
}