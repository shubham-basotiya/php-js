$('#register').on('submit', function(e){
    e.preventDefault();
    var formData = $('register').serialize();
    // $.ajax()
    // var usname = $('#name').val();
    // var pwd = $('#pwd').val();
    // var email = $('#email').val();

    // console.log(usname + " " + pwd + " " + email);

    $.ajax({
        type: "POST",
        url: 'dataCon.php',
        data: {
            "valid": formData
        },
        done: function(data){
            alert("data saved successfully" + data);
        },
      fail: function(){
            alert("data not saved successfully!, try again");
        }
    });

});

// document.getElementById('register').onsubmit(
    
//     var usname = document.getElementById('name');
//     var pwd = document.getElementById('pwd');
//     var email = document.getElementById('email');

//     console.log(usname + " " + pwd + " " + email);

// );