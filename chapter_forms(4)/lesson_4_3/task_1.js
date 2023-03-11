const form = document.forms.calculator;

function depositeCalc() {
  let contribution = form.money.value;
  let interest = form.interest.value / 100;
  let years = form.months.value / 12;
  let result = Math.round(contribution * (1 + interest) ** years);
  let moneyBefore = document.querySelector("#money-before");
  moneyBefore.innerHTML = contribution;
  let moneyAfter = document.querySelector("#money-after");
  moneyAfter.innerHTML = result;
  let heightAfter = document.querySelector("#height-after");
  heightAfter.style.height = 100 * (result / contribution) + "px";
}

depositeCalc();
form.money.oninput = depositeCalc;
form.interest.oninput = depositeCalc;
form.months.onchange = depositeCalc;
