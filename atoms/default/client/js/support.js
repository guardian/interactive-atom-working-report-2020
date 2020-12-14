createSupport();

function createSupport() {
  const sectionEl = document.querySelector('.working-report__section:nth-of-type(2)');
  const sectionInnerEl = sectionEl.querySelector('.working-report__section__inner');

  let supportEl = document.createElement('div');
  supportEl.classList.add('support-the-guardian');

  supportEl.innerHTML = "<p><strong>Support the Guardian’s vital, open, independent journalism</strong>You can help sustain our high-impact reporting for 2021 and beyond</p><a href='https://support.theguardian.com/contribute?acquisitionData=%7B%22source%22%3A%22GUARDIAN_WEB%22%2C%22componentType%22%3A%22ACQUISITIONS_BUTTON%22%2C%22componentId%22%3A%22working_report_2020_embed%22%2C%22campaignCode%22%3A%22working_report_2020%22%7D&INTCMP=working_report_2020'>Show your support</a>";


  sectionInnerEl.appendChild(supportEl);


}
