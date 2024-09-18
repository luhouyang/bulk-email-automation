function sendEmail() {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("TestSheet1");

  var lastRow = spreadSheet.getLastRow();

  var cc = "luhouyang@gmail.com,luhouyang01@gmail.com";

  for (var i = 2; i < lastRow + 1; i++) {
    var organization = spreadSheet.getRange(i, 1).getValue();
    var name = spreadSheet.getRange(i, 4).getValue();
    var title = spreadSheet.getRange(i, 5).getValue();
    var email = spreadSheet.getRange(i, 6).getValue();

    var subject = "[Sponsorship Invitation] DevFest George Town 2024";

    var message = HtmlService.createHtmlOutputFromFile("MainTemplate").getContent();
    // var message = HtmlService.createHtmlOutputFromFile("TemplateWithGoogleSans").getContent();

    message = message.replace('{{Title}}', title);
    message = message.replace('{{Full Name}}', name);
    message = message.replace('{{Organization}}', organization);

    try {
      MailApp.sendEmail({
        to: email,
        cc: cc,
        subject: subject,
        htmlBody: message
      });
    } catch (error) {
      Logger.log(error);
    }
  }
}
