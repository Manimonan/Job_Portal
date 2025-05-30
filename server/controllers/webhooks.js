import {Webhook} from "svix"
import User from "../models/User.js"

//API Controller functuion to manage clerk user to the database

export const clerkWebhooks = async (req, res) => {
    try {
        // Create a new Webhook instance with your SVIX secret
        const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // Verifing the Headers
        await webhook.verify(JSON.stringify(req.body),{
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        // Extract the event type and data from the request body
        const {type, data} = req.body;
        // Handle the event based on its type

        switch (type) {
            case 'user.created':{
               
                const userData = {
                    _id: data.id,
                    name: data.first_name + " " + data.last_name,
                    email: data.emailAddresses[0].emailAddress,
                    resume: "",
                    image: data.image_Url
                }
                await User.create(userData)
                res.json({})
                break;
            }
            case 'user.updated':{
                const userData = {
                    
                    name: data.first_name + " " + data.last_name,
                    email: data.emailAddresses[0].emailAddress,
                    image: data.image_Url
                }
                await User.findByIdAndUpdate(data.id, userData)
                res.json({})
                break;
            }
            case 'user.deleted':{
                await User.findByIdAndDelete(data.id)
                res.json({})
                break;
                
            }  
            default:
                break;
        
            
        }
        
    } catch (error) {
         console.log(error.massage);
         res.json({success: false, massage:'Webhook verification failed'});
    }
}