// representational state transfer apis 
// only used when request is received 

const express = require("express");
const app = express();
const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" },
];
app.get("/",(req,res)=>{
    res.send("Express Server Running");
});
app.get("/users", (req, res) => {
  res.status(200).json(users);
});
app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});
app.get("/usr/:test",(req,res)=>{
    console.log(req.params);
    res.status(200).json(users)
})
app.get("/usr/three",(req,res)=>{
    console.log(req.params)
    console.log("Second Code");
    res.status(200).json(users);
})
app.listen(3000,()=>{
    console.log("Server Initiated On PORT 3000")
})