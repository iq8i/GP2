
const User = require("../models/user");
const AccountingFirm = require("../models/accounting_firm")
const bcryptjs = require("bcryptjs")

  

exports.postLogin = async (req, res, next) => {
 
  
  const userType = "bussniss";
  if(userType === "bussniss"){
    try{
       const {email ,password} = req.body;
    const bussniss = await User.findOne({email:email})
    if(!bussniss){
      
      return res.status(404).json({ message: "he not signin" });
      
    }
    //const doMatch = await bcryptjs.compare(password,bussniss.password);
    const doMatch = password === bussniss.password;
    if(doMatch){
      req.session.user = bussniss;
      req.session.isLoggedIn = true;
      return req.session.save((err)=>{
        res.status(200).json({ message: "he is signin correctlly" });
      });
      } 
    return res.status(400).json({ message: "the password is not correct" });
    }catch(err){
      console.log(err)
    }
  } else if (userType === "accountfirm"){
    try{
     const {email ,password} = req.body;
     const accountfirm = await User.findOne({email:email})
     if(!accountfirm){
      return res.status(404).json({ message: "he not signin" });
    }
    const doMatch = await bcryptjs.compare(password,accountfirm.password);
    if(doMatch){
      req.session.user = accountfirm;
      req.session.isLoggedIn = true;
      return req.session.save((err)=>{
        res.status(200).json({ message: "he is signin correctlly" });
      });
      } 
    return res.status(400).json({ message: "the password is not correct" });
    }catch(err){
      console.log(err)
    }

    }else{
    try{
      const {email ,password} = req.body;
      const admin = await User.findOne({email:email})
      if(!admin){
        return res.status(404).json({ message: "the admin is not regester yet" });
      }
      //const doMatch = await bcryptjs.compare(password,admin.password);
        const doMatch = password === admin.password;
       
      if(doMatch){
        req.session.user = admin;
        req.session.isLoggedIn = true;
        return req.session.save((err)=>{
          res.status(200).json({ message: "the admin is signin correctlly" });
        });
        }
        return res.status(400).json({ message: "the password is not correct" });
    }catch(err){
      console.log(err)
    }
  }
    
  }



  

 


 


  exports.postSignup = async (req, res, next) => {

    const userType = req.body.userType;
    if(userType === "business"){
      const {name,phoneNumber,email,password} = req.body; // same names as react
      try{
        const user = await User.findOne({email:email})
        if(user){
          //we need the confirmation message
          return res.status(404).json({ message: "User already exists. Redirect to login page." });
        }else{
          const hashedPassword = await bcryptjs.hash(password,12);

          const bussnissUser = new User({
            name:name,
            phoneNumber:phoneNumber,
            email:email,
            userType:userType,
            password:hashedPassword,
            // the transaction should appear atomaticly
          })
          
          await bussnissUser.save();
          return res.status(200).json({ message: "Signup successful. Redirect to login page." });
        }
      }catch(err){
        console.log(err)
      }  
    }
    else{
      const {address,name,commercialRegister,certificationDetails,email,password} = req.body;
      try{
        const user = await User.findOne({email:email})
        const user2 = await User.findOne({name:name})
        if(user || user2){
          //we need the confirmation message
          if(user)
           return res.status(404).json({ message: "User already exists. Redirect to login page." });
          else{
            return res.status(404).json({ message: "Firm name is already taken." });
          } 
      }else{
        const hashedPassword = await bcryptjs.hash(password,12);
  
        const accountingFirm = new AccountingFirm({
          firmName:name,
          certificationDetails:certificationDetails,
          address:address,
          commercialRegister:commercialRegister
        })
  
        await accountingFirm.save();

        const AF= accountingFirm;
  
        const accountingFirmUser = new User({
          email:email,
          userType:userType,
          password:hashedPassword,
          accountingFirm:AF._id
          // the transaction should appear atomaticly
        })
        
        await accountingFirmUser.save();
        return res.status(200).json({ message: "Signup successful. Redirect to login page." });
      }
    }catch(err){
    console.log(err)
  }  
  }
  }; 
  
  
  
  exports.postLogout =  (req, res, next) => {
    // req.session.destroy(() =>{
    //   res.redirect("/login")
    // })

  };
