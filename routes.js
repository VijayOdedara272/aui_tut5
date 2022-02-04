const express = require('express');
const router = express.Router();

const MaterialMaster = require('./models/Mobilenode');
const ChemicalMaster = require('./models/Laptopnode');
const req = require('express/lib/request');

// Mobile
router.get('/Mobile', async (request, response) => {
    const data = await Mobilenode.find();
    response.send(data);
});

router.post('/Mobile', async (request, response) => {
    const Mobile = new Mobilenode(request.body)
    await Mobile.save();
    response.send(Mobile);
})

router.patch('/Mobile/:id', async (request, response) => {
    const _id = request.params.id;
    const Mobile = await Mobilenode.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(Mobile);
})

router.delete('/Mobile/:id', async (request, response) => {
    try{
        const _id = request.params.id;
        const Mobile = await Mobilenode.findByIdAndDelete(_id);
        response.send(Mobile);
    }catch (e){
        response.send(e);
    }
})

// Laptop
router.get('/Laptop', async (request, response) => {
    const data = await Laptopnode.find();
    response.send(data);
});

router.post('/Laptop', async (request, response) => {
    const Laptop = new Laptopnode(request.body)
    Laptop.save();
    response.send(Laptop);
})

router.patch('/Laptop/:id', async (request, response) => {
    const _id = request.params.id;
    const Laptop = await Laptopnode.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(Laptop);
})

router.delete('/Laptop/:id', async (request, response) => {
    const _id = request.params.id;
    const Laptop = await Laptopnode.findByIdAndDelete(_id);
    response.send(Laptop);
})
module.exports = router;