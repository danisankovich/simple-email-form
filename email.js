jQuery(function($) {
  $("#email_form").submit(function() {
    var email = $("#email").val();
    var name = $("#name").val();
    var message = $("#message").val();
    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'MANDRILL_API_KEY', //Insert your unique Mandrill API Key
          'message': {
            'from_email': email,
            'from_name': name,
            'headers': {
              'Reply-To': email
            },
            'subject': '***Subject......***', //Type in a default subject for all emails, or add another parameter for users to use.
            'text': message,
            'to': [{
              'email': '***Recipient\'s email***', //who should be recieving this email?
              'name': '***Recipient\'s name***',  //what is their name?
              'type': 'to'
            }]
          }
        }
      })
      .done(function(response) {
        alert("Delivery Message"); //Alert users that email was successful
        $("#name").val('');
        $("#email").val('');
        $("#message").val('');
      })
      .fail(function(response) {
        alert("Failure Message"); //Alert Users that Email was unsuccessful.
      });
    return false;
  });
});
