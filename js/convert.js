let result = document.getElementById("result");
let getCurrnecyName = document.getElementById("list");
const list = document.getElementById("list");
let id = 0;

let currnecy = () => {
  {
    axios({
      method: "get",
      url: "https://api.nbp.pl/api/exchangerates/tables/a/today/",
    })
      .then(function (response) {
        let data = response.data;
        let rates = data[0].rates;

        let names = rates.map((name) => {
          return name.code;
        });

        let currentRates = rates.map((rates) => {
          return rates.mid;
        });

        for (let i = 0; i < names.length; i++) {
          list.innerHTML += `<option>${names[i]}</option>`;
        }

        console.log(names);

        getNumber = () => {
          let number = document.getElementById("number").value;

          for (i = 0; i < names.length; ++i) {
            if (names[id] != getCurrnecyName.value) {
              id++;
            }
          }

          result.innerHTML = `${number * currentRates[id]}`;
          id = 0;
          return result;
        };
      })
      .catch(function (error) {
        console.log(error);
        alert(error.message);
      });
  }
};

currnecy();
