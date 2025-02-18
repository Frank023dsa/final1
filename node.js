const express = require('express')
const app = express()
const port = 3003
app.use(express.json())
//ข้อ7
//let me =[
    //{nameF: "พงศภัทร์", nameL:"ไพพุฒ"}
//]
//app.get('/',(req,res)=> res.json(me));

//ข้อ9
const equipment = [{id: 1 ,name:'Football',brand:'Nike'},
    {id:2 ,name:'Tennis Racket',brand:'Wilson'}
];
app.get('/equipment',(req,res)=> res.json(equipment));
//ข้อ10
app.get('/equipment/:id',(req,res)=> {
    let data = equipment.find(i => i.id == req.params.id)
    if(data != undefined) res.json(data)
        else res.json({ message: "can't find"})
});
//ข้อ11
app.post('/equipment',(req,res) => {
    let equipmentID = std[std.length - 1].id + 1
    let equipmentName =req.body.name
    let equipmentBrand =req.body.brand
    equipment = [...equipment,{id: equipmentID, name:equipmentName,brand:equipmentBrand}]
    res.json(std) 
    //ข้อ12
    });
    app.put('/equipment/:id', (req, res)=>{
        let data = equipment.find(i => i.id == req.params.id)
        if (data == undefined) res.json('ไม่มีข้อมูล')
        else data.brand = req.body.brand
    equipment.map((i)=>{
    if (i.id == data.id) i.name == data.name;
    })
    res.json(equipment)
    });

//ข้อ13
    app.delete('/equipment/:id', (req,res) => {
        equipment = equipment.filter(i => i.id != req.params.id)
        res.json(equipment);
    });

app.listen(port,()=>{
    console.log("Server is runing on port",port)
   })