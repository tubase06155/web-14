$(document).ready(function(){
    // lấy câu hỏi từ server trả về
    $.ajax({
        url: 'http://localhost:6969/question',
        method: 'GET',
        success: function(data){
            console.log("Success!!!" + data.question.content);
            $('#content').text(data.question.content);
            $('.answer').attr("id-data",data.question._id);
        },
        error: function(){
            console.log("Error!!!");
        }
        
    })
    // client trả lời câu hỏi xong gửi kết quả lên server
    $('.answer').on('click',function(e){
        let answer = $(e.target).attr("id-answer");
        let questionId = $(e.target).attr("id-data");
        console.log(answer,questionId);
        $.ajax({
            url: 'http://localhost:6969/answer',
            method: 'PUT',
            // data này là một thuộc tính của ajax
            data:{
                answer,
                questionId
            },
            success: function(data){
                // data trong function này là một tham số được truyền vào khi server trả về giá trị cho ajax
                if(data.question){
                    total = (data.question.yes + data.question.no);
                    $('#vote').text(total);
                    $('#voteYes').text(((data.question.yes/total)*100).toFixed(2));
                    $('#voteNo').text(((data.question.no/total)*100).toFixed(2));
                    $('.QuestionInfor').css('display', 'block');
                    $('.answer').css('display', 'none');
                }
            },
            error: function(error){
                console.log(error);
            }
        })
    })
    // Client cick nút infor để hiển thị thông tin về câu hỏi
    $('#ViewInfor').on('click',function(e){
        let questionId = $('.answer:first-child').attr('id-data');
        console.log("id:" ,questionId);
        $.ajax({
            url: 'http://localhost:6969/questionInfor',
            method: 'GET',
            data: {
                id : questionId
            },
            success: function(data){
                if(data.question){
                    total = (data.question.yes + data.question.no);
                    $('#vote').text(total);
                    $('#voteYes').text(((data.question.yes/total)*100).toFixed(2));
                    $('#voteNo').text(((data.question.no/total)*100).toFixed(2));
                    $('.QuestionInfor').css('display', 'block');
                    $('.answer').css('display', 'none');
                }
            },

            errror: function(err){
                console.log(err);
            },
        })
    })
})