// business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
//   this.addressMail= address;
//   this.phoneNumber= phone;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    // var inputtedAddressMail=$("input#new-email").val();
    // var inputtedPhoneNo=$("input#new-phone").val();


    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    // inputtedAddressMail,inputtedPhoneNo

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName +newContact.lastName+"</span></li>");
    // newContact.addressMail+newContact.phoneNo+

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    // $("input#new-email").val("");
    // $("input#new-phone").val("");
  });
}); 