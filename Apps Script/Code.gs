function sendEmail() {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("TestSheet1");
  var lastRow = spreadSheet.getLastRow();

  // PERSONAL DETAILS
  // REPLACE WITH YOUR OWN
  var my_name = "Lu Hou Yang"; // replace with your name
  var my_phone = "+6010-258 0630"; // +6010-000 0000 replace with your phone number

  // cc & bcc
  var cc = "luhouyang@gmail.com,luyangbang@gmail.com"; // add people to cc here
  var bcc = "luhouyang@gmail.com,luyangbang@gmail.com"; // add people to bcc here

  // add row index of people/company you want to exclude
  var exclude = [3]

  for (var i = 2; i < lastRow + 1; i++) {
    if (exclude.indexOf(i) == -1 && spreadSheet.getRange(i, 6).getValue() == "sent"){
      var company_name = spreadSheet.getRange(i, 1).getValue();
      var name = spreadSheet.getRange(i, 3).getValue();
      var honorific = spreadSheet.getRange(i, 4).getValue();
      var email = spreadSheet.getRange(i, 5).getValue();

      var subject = "[Sponsorship Invitation] DevFest George Town 2024";

      var message = HtmlService.createHtmlOutputFromFile("MainTemplate").getContent();

      message = message.replace('{{Title}}', honorific);
      message = message.replace('{{Full Name}}', name);
      
      if (honorific != "") {
        message = message.replace('{{Organization}}', company_name);
      } else {
        message = message.replace('{{Organization}}', "");
      }

      message = message.replace('{{YOUR_NAME}}', my_name);
      message = message.replace('{{YOUR_PHONE_NUMBER}}', my_phone);

      try {
        MailApp.sendEmail({
          to: email,
          // cc: cc // UNCOMMENT TO CC
          // bcc: bcc, // UNCOMMENT TO BCC
          subject: subject,
          htmlBody: message
        });
        spreadSheet.getRange(i, 6).setValue("sent");
        spreadSheet.getRange(i, 7).setValue(Utilities.formatDate(new Date(), "GMT+8", "dd/MM/yyyy"));
      } catch (error) {
        Logger.log(error);
      }
    }
  }
}