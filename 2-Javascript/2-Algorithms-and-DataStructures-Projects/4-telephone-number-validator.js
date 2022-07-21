function telephoneCheck(str) {
  // notice that regEx are arranged based on example variants
  // 555-555-5555
  // (555)555-5555
  // (555) 555-5555
  // 555 555 5555
  // 5555555555
  // 1 555 555 5555
  // 1(555)555-5555
  // 1 (555) 555-5555
  // 1 555-555-5555
  const checkRe =
    /^(^\d{3}-\d{3}-\d{4}$|^\(\d{3}\)\d{3}-\d{4}$|^\(\d{3}\) \d{3}-\d{4}$|^\d{3} \d{3} \d{4}$|^\d{3}\d{3}\d{4}$|^1 \d{3} \d{3} \d{4}$|^1\(\d{3}\)\d{3}-\d{4}$|^1 \(\d{3}\) \d{3}-\d{4}$|^1 \d{3}-\d{3}-\d{4}$)/;
  const result = checkRe.test(str);

  return result;
}

telephoneCheck("1 456 789 4444");
