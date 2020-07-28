var details = [];

$.ajax({
  method: "GET",
  url: "https://api.covid19india.org/data.json",
  success: function (response) {
    details = response.statewise;
    buildTable(details);
    totalStats(details);
    console.log(details);
  },
});

function buildTable(state) {
  var table = document.getElementById("stats");
  for (var i = 1; i < state.length; i++) {
    if (i == 36) {
      continue;
    }
    var row = `<tr>
                                <td>${state[i].state}</td>
                                <td>${state[i].active}</td>
                                <td>${state[i].confirmed}</td>
                                <td>${state[i].recovered}</td>   
                                <td>${state[i].deaths}</td>    
                                      
                            </tr>`;
    table.innerHTML += row;
  }
}
function totalStats(state) {
  $("#activeCases").text(`${state[0].active}`);
  $("#confirmedCases").text(`${state[0].confirmed}`);
  $("#curedCases").text(`${state[0].recovered}`);
  $("#deaths").text(`${state[0].deaths}`);
}
