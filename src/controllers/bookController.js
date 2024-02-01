const connection = require("../database/db");
const express = require("express");
const addBook = async (req, res, next) => {
  const { bookname, note } = req.body;
  connection.query(
    "INSERT INTO books(name,note) VALUES(?,?)",
    [bookname, note],
    (err, result) => {
      if (err) {
        return res.send("Error adding book.");
      } else {
        return res.status(201).json({
          message: "success",
        });
      }
    }
  );
};

const getAllBooks = async (req, res, next) => {
  connection.query("SELECT * FROM books", (err, result) => {
    if (err) {
      return res.send("Error fetching books data. Try again!");
    } else {
      const data = JSON.parse(JSON.stringify(result));
    //   return res.send(data);
    // console.log(data);
      return res.render("index.ejs",{books:data})
    }
  });

};

const deleteBook = async (req, res) => {
  const bookid = req.params.id;

  connection.query("DELETE FROM books WHERE id=?", bookid, (err, result) => {
    if (err) {
      return res.send("Error 500");
    } else {
      if (result.affectedRows == 0) {
        return res.send("Book not found!");
      } else {
        return res.send("Book deleted successfully!");
      }
    }
  });
};

const updateBookInfo = async (req, res) => {
  const bookid = req.params.id;
  const { bookname, note } = req.body;

  connection.query(
    "UPDATE books SET name=?, note=? WHERE id=?",
    [bookname, note, bookid],
    (err, result) => {
      if (err) {
        return res.send("Error updating book info");
      } else {
        if (result.changedRows == 0) {
          return res.send("Already Updated");
        } else {
          return res.send("Updated Successfully!");
        }
      }
    }
  );
};

module.exports = { getAllBooks, addBook, deleteBook, updateBookInfo };
