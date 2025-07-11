export const allOkInPersonalDeatils = (details, setError) => {
  if (details.userName.length < 6) {
    setError({
      type: "userName",
      msg: "Please enter a valid name",
    });
    return false;
  }
  if (details.userEmail.length < 6) {
    setError({
      type: "userEmail",
      msg: "Please enter a valid email",
    });
    return false;
  }
  if (details.userPhone.length < 10) {
    setError({
      type: "userPhone",
      msg: "Please enter a valid phone number",
    });
    return false;
  }
  setError({
    type: "",
    msg: "",
  });
  return true;
};
export const allOkInBankDeatils = (bankDeatils, setError) => {
  if (
    bankDeatils.bankAccountNumber.length < 10 ||
    bankDeatils.bankAccountNumber.length > 16
  ) {
    setError({
      type: "bankAccountNumber",
      msg: "Please enter a valid account number",
    });
    return false;
  }
  if (bankDeatils.bankIfsc.length < 10 || bankDeatils.bankIfsc.length > 13) {
    setError({
      type: "bankIfsc",
      msg: "Please enter a valid IFSC code",
    });
    return false;
  }
  setError({
    type: "",
    msg: "",
  });
  return true;
};
