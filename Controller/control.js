const User=require('../Model/model')

exports.getuser = async (req,res)=>{
    const list= await User.find({})
    console.log("list of user",list);
    res.status(200).json({users:list})
    }


    exports.user=async (req,res)=>{
        const {lastName}=req.body
         
        try {
            if(lastName.length<3){
                throw new Error('minimum length 3')
            }
        
       else{
        const result = await User.create({
            firstName:req.body.firstName,
           lastName:req.body.lastName,
           email:req.body.email,
           jobTitle:req.body.jobTitle,
           gender:req.body.gender
        })
    
        // console.log(result)

      
        res.status(201).json({message:"user registered successfully!"})
       }
    } catch (error) {
        // console.log(error.message);
        res.status(404).json({
         
            error:error.message
        })
    }
    }

    exports.getuserid=async (req,res)=>{
        const listid= await User.findById(req.params.id)
        console.log("list of user",listid);
    res.status(200).json({users:listid})
    
    
    }

    exports.update=async (req,res)=>{
        const{firstName,lastName,email,jobTitle,gender}=req.body
        const update=await User.findByIdAndUpdate({_id:req.params.id},{
            $set:
            {
                firstName,lastName,email,jobTitle,gender
            }
            })
            console.log("update",update);
            res.status(200).json({users:update})
    
    }

    exports.deletet=async (req,res)=>{
        const deletel = await User.findByIdAndDelete(req.params.id)
         console.log("delete",deletel);
         res.status(200).json({message:"deleted successfully"})
      }