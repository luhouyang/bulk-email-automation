function sendEmail() {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("TestSheet1");

  var lastRow = spreadSheet.getLastRow();

  for (var i = 2; i < lastRow + 1; i++) {
    var email = spreadSheet.getRange(i, 1).getValue();
    var name = spreadSheet.getRange(i, 2).getValue();
    var sponsorship = spreadSheet.getRange(i, 3).getValue();

    var subject = "DevFes 2024 - GDG George Town SPONSORSHIP";

    var message = HtmlService.createHtmlOutputFromFile("MainTemplate").getContent();
    // var message = HtmlService.createHtmlOutputFromFile("TemplateWithGoogleSans").getContent();

    message = message.replace('VAR_NAME', name);
    message = message.replace('VAR_SPONSORSHIP', sponsorship);


    try {
      MailApp.sendEmail(email, subject, "", {htmlBody: message});
    } 
    catch (error) {
      Logger.log(error);
    }
  }
}
