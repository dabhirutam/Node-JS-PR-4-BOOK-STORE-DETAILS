const transactionModel = require("../models/transactionModel");

const Home = async (req, res) => {
    const books = await transactionModel.find();

    res.render('index', {books});
};

const Add = (req, res) => {
    res.render('add');
};

const AddBook = async (req, res) => {
    const { type,category,amount,description,date} = req.body;

    const data = new transactionModel({
        type,
        category,
        amount,
        description,
        date,
    });

    await data.save();

    console.log("Data is created..");

    res.redirect('/');
};

const Edit = async (req, res) => {
    const singleBook = await transactionModel.findById(req.params._id);
    res.render('edit', {singleBook});
};

const UpdateBook = async (req, res) => {    
    await transactionModel.findByIdAndUpdate(req.body._id, req.body);
    console.log(req.body._id," Data Is Updated..");
    res.redirect('/');
};

const Delete = async (req, res) => {
    await transactionModel.findByIdAndDelete(req.params._id);
    console.log(req.params._id, " Data is deleted..");
    res.redirect('/');
};

module.exports = { Home, Add, AddBook, Edit, UpdateBook, Delete }