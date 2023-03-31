import moment from 'moment';

export const dateGenerator = (date: string) => {
  if (date) {
    return moment(date).format('YYYY-MM-DD');
  }
  return '';
};

export const validatePassword = (password: string, attributes: string[]) => {
  const isValidLength = /^.{8,32}$/;
  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  const isContainsLowercase = /^(?=.*[a-z]).*$/;
  const isContainsNumber = /^(?=.*[0-9]).*$/;
  const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;

  let isValidated = true;
  let errorMessage: string[] = [];

  if (!isValidLength.test(password)) {
    isValidated = false;
    errorMessage.push('Password must be 8-32 characters long');
  }
  if (!isContainsUppercase.test(password)) {
    isValidated = false;
    errorMessage.push('Password must have one upper case character');
  }
  if (!isContainsLowercase.test(password)) {
    isValidated = false;
    errorMessage.push('Password must have one lower case character');
  }
  if (!isContainsNumber.test(password)) {
    isValidated = false;
    errorMessage.push('Password must have one number');
  }
  if (!isContainsSymbol.test(password)) {
    isValidated = false;
    errorMessage.push('Password must have one special symble');
  }

  return { isValidated, errorMessage };
};
