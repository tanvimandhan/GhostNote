# Anonymous Message & Feedback Sender(Currently working on it)

A web application that allows users to send **anonymous messages or feedback** to others — completely identity-free. It also provides **AI-suggested messages** using a ChatGPT-style API and allows **message deletion**. Built with a clean UI using the powerful **Shadcn UI** library.

## Tech Stack

- **Frontend:** Next.js, TypeScript  
- **UI Library:** Shadcn UI (Radix + Tailwind)  
- **Database:** MongoDB (via Mongoose)  
- **AI Suggestions:** ChatGPT API (or similar AI text generation API)  

## Features

- 🔒 **Send messages anonymously** — Login/Signup is required for sender validation and Next auth is used for authentication.
- 🤖 **AI-powered message suggestions** using GPT API  
- 🗑️ **Delete messages** you’ve sent or received 
- 🎨 **Clean, accessible UI** using Shadcn components for better and fast development process.
- 📨 **OTP verification & security features** 

##  Installation & Setup

1.Clone the repository
2.Install dependencies i.e.npm install
3.Add environment variables
  Create a .env.local file in the root and add:
  MONGODB_URI=your-mongodb-uri
  AI_API_KEY=your-openai-or-other-api-key
  NEXT_PUBLIC_BASE_URL=http://localhost:3000
4.Run the development server


