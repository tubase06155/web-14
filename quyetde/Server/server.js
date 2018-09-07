const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
let app = express();
// Khai báo model bên Server
const QuestionModel = require('./models/questionModels');
// Kết nối tới cơ sở dữ liệu
mongoose.connect('mongodb://localhost/quyetde', (err) => {
    if (err) console.log(err);
    else
        console.log("Connect Success!!!");
});
app.use(cors());
app.use(bodyparser.urlencoded({
    extended: false
}));
// Nhận câu hỏi từ Client 
app.post('/ask', (req, res) => {
    const newQuestion = {
        content: req.body.question
    }
    QuestionModel.create(newQuestion, (err, questionCreated) => {
        if (err) console.log(err)
        else {
            res.redirect('http://localhost:8080/index.html');
            console.log("Đã thêm thành công!");
        }
    })
})
// Server trả về một câu hỏi ngẫu nhiên cho Client
app.get('/question', (req, res) => {
    QuestionModel.find({}, (err, questionFound) => {
        let randomNum = Math.floor(Math.random() * questionFound.length);
        QuestionModel
            .findOne({})
            .skip(randomNum == 0 ? randomNum : randomNum - 1)
            .exec((err, questionFound) => {
                if (err) console.log(err)
                else
                    res.send({
                        message: 'Success',
                        question: questionFound
                    })
            });
    });
});
// Server nhận câu trả lời từ Client và update vào MongoDB
app.put('/answer', (req, res) => {
    const answer = req.body.answer;
    const questionId = req.body.questionId;
    console.log(answer, questionId);
    if (answer == "yes") {
        QuestionModel.findByIdAndUpdate({
                _id: questionId
            },
            // $inc Để auto tăng giá trị của một ducument
            {
                $inc: {
                    yes: 1
                }
            }, {
                new: true
            },
            function (err, questionUpdate) {
                if (err) console.log(err)
                else {
                    res.send({
                        message: 'Update Success!!',
                        question: questionUpdate
                    });
                    console.log("Đã cập nhật thành công!");
                }
            }
        )
    } else {
        QuestionModel.findByIdAndUpdate({
                _id: questionId
            }, {
                $inc: {
                    no: 1
                }
            }, {
                new: true
            },
            function (err, questionUpdate) {
                if (err) console.log(err)
                else {
                    res.send({
                        message: 'Update Success!',
                        question: questionUpdate
                    });
                    console.log("Đã cập nhật thành công!");
                }
            }
        )
    }

});

app.get('/questionInfor', (req, res) => {
    const questionId = req.body.id;
    console.log(questionId);
    QuestionModel.findById(questionId, (err, questionFound) => {
        if (err) console.log(err)
        else {
            res.send({
                message: 'Trả về kêt quả nè',
                question: questionFound
            })
        }
    })
});


app.listen(6969, (err) => {
    if (err) console.log(err);
    else console.log("Server is running at port 6969");
});