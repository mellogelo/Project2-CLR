/* The follwoing Web Technology - HTML questions come from
https://www.avatto.com/computer-science/test/mcqs/web-technology/html/162/1.html
*/

var userName = "";
var loginButton = document.getElementById("login-button");
var registerButton = document.getElementById("register-button");
var registerationForm = document.getElementById("registration-form");
var loginForm = document.getElementById("login-form");

function clearRegistrationForm() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("registration-password").value = "";
  document.getElementById("registration-confirm-password").value = "";
  document.getElementById("email-input").value = "";

  document.getElementById("registration-error-message").innerHTML = "";
  document.getElementById("firstname").focus();
}

$(".btn-sell").click(function () {
  console.log("Sell button clicked");
  let code = $(this).data("code");
  let inpId = `#pos-inp-${code}`;
  let inpVal = $(inpId).val();

  if (inpVal == null || (inpVal = inpVal.trim()).length == 0 || isNaN(inpVal)) {
    $(inpId).val("");
    $(inpId).focus();
    return;
  }
});
// event listener for button class on click
/*
 * Event listeners are applied to the forms surrounding the buttons.
 * that way when the button is clicked, the event is fired since the button
 * type is "submit"
 */
if (registerationForm)
  registerationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Register button clicked");
    // check inputs
    var svalue;
    var fnameEl = document.getElementById("firstname");
    var lnameEl = document.getElementById("lastName");
    var pwdEl = document.getElementById("registration-password");
    var pwdEl2 = document.getElementById("registration-confirm-password");
    var emailEl = document.getElementById("email-input");
    var errorEl = document.getElementById("registration-error-message");
    var baseCurrencySelectEl = $("#base-currency-select");

    console.log("\n\n\nBase Currency Select Value ==> " + baseCurrencySelectEl.val());
    var fname, lname, pwd, pwd2, emailString, errText;

    errorEl.innerHTML = "";

    var udata = {};
    // First Name
    if ((svalue = fnameEl.value) === null || (fname = svalue.trim()).length === 0) {
      errorEl.innerHTML = "Invalid First Name";
      fnameEl.focus();
      fnameEl.value = "";
      return;
    }
    udata.firstName = fname;

    // Last Name
    if ((svalue = lnameEl.value) === null || (lname = svalue.trim()).length === 0) {
      errorEl.innerHTML = "Invalid Last Name";
      lnameEl.focus();
      lnameEl.value = "";
      return;
    }
    udata.lastName = lname;

    // Password
    if ((svalue = pwdEl.value) === null || (pwd = svalue.trim()).length === 0) {
      errorEl.innerHTML = "Invalid Password";
      pwdEl.focus();
      pwdEl.value = "";
      return;
    }
    // Confirm Password
    if ((svalue = pwdEl2.value) === null || (pwd2 = svalue.trim()).length === 0) {
      errorEl.innerHTML = "Invalid Confirm Password";
      pwdEl2.focus();
      pwdEl2.value = "";
      return;
    }
    // check if password and confirm password are the same. If not, delete
    // both and set focus back to pwd
    if (pwd.localeCompare(pwd2) != 0) {
      errorEl.innerHTML = "Mismatched Password/Confirm Password";
      pwdEl.value = "";
      pwdEl2.value = "";
      pwdEl.focus();
    }
    udata.password = pwd;

    // Email
    if ((svalue = emailEl.value) === null || (emailString = svalue.trim()).length === 0) {
      errorEl.innerHTML = "Invalid Email";
      emailEl.focus();
      emailEl.value = "";
      return;
    }
    udata.email = emailString;
    var currencyCode = baseCurrencySelectEl.val();
    // make sure base currency is choosen
    if (currencyCode === "Choose...") {
      errorEl.innerHTML = "Choose Base Currency";
      baseCurrencySelectEl.focus();
      return;
    }

    let registerData = {
      firstName: fname,
      lastName: lname,
      email: emailString,
      password: pwd,
      confirmPassword: pwd2,
      baseCurrencyCode: currencyCode,
    };
    console.log(registerData);
    //
    // send registration data and wait for response
    $.ajax("/register", { type: "POST", data: registerData }).done(function (resp) {
      console.log(resp);
      if (resp.status !== "OK") {
        errorEl.innerHTML = resp.message;
        fnameEl.focus();
        return;
      }
      var emailElement = document.getElementById("login-email");
      emailElement.value = emailString;
      document.getElementById("login-password").focus();
      errorEl.innerHTML = `${emailString} successfully registered!!. Please log in`;
    });
    // clear the register form
    clearRegistrationForm();
  });

/*
 *
 */
if (loginForm)
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // check the inputs to make sure the entry is valid
    var emailElement = document.getElementById("login-email");
    var pwdElement = document.getElementById("login-password");
    var errorEl = document.getElementById("login-error-message");

    if (emailElement === null || pwdElement == null) return;
    var inputString;
    var emailString, passwordString;
    // check userName validity
    if ((inputString = emailElement.value) == null || (emailString = inputString.trim().toLowerCase()).length == 0) {
      console.log("UserNameString = " + emailString);
      emailElement.value = "";
      emailElement.focus();
      errorEl.innerHTML = "Invalid Username entry";
      return;
    }
    // check password validity
    if ((inputString = pwdElement.value) == null || (passwordString = inputString.trim().toLowerCase()).length == 0) {
      pwdElement.value = "";
      pwdElement.focus();
      errorEl.innerHTML = "Invalid Password entry";
      return;
    }
    console.log(`Email:    ${emailString}`);
    console.log(`Password: ${passwordString}`);
    let loginData = { email: emailString, password: passwordString };
    // send registration data and wait for response
    $.ajax("/login", { type: "POST", data: loginData }).done(function (resp) {
      console.log(resp);
      if (resp.status !== "OK") {
        errorEl.innerHTML = resp.message;
        emailElement.focus();
        return;
      }
      let sessionUUID = resp.sessionUUID;
      // login successful. go to account summary
      let accountSummaryData = { sessionUUID: sessionUUID };
      console.log(`Calling /accountSummary`);
      let redirectUrl = `/accountSummary?sessionUUID=${sessionUUID}`;
      location.replace(redirectUrl);
      // $.ajax("/accountSummary", { type: "POST", data: accountSummaryData }).done(function (resp) {
      //   console.log(`Returned from accountSummary route`);
      //   //console.log(resp);
      // });
    });
  });
