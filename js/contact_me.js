$(document).ready(function() {
    $("#sendMessageButton").click(function() {
        // get values from FORM
        var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var company = $("input#company").val();
        var job_title = $("input#job_title").val();
        var message = $("input#message").val();
        $.ajax({
            url: "api.php",
            type: "POST",
            data: {
                name: name,
                email: email,
                phone: phone,
                company: company,
                job_title: job_title,
                message: message
            },
            cache: false,
            success: function() {
                $("input#name").val("");
                $("input#email").val("");
                $("input#phone").val("");
                $("input#company").val("");
                $("input#job_title").val("");
                $("input#message").val("");
            },
            error: function() {

            },
        });
    });
});