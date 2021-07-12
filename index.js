var today = new Date();
var dd = today.getDate() + 2;
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = yyyy + "-" + mm + "-" + dd;

document.getElementById("date").setAttribute("min", today);
document.getElementById("mob_date").setAttribute("min", today);

var todaynew = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
console.log(todaynew);
var ddnew = todaynew.getDate();
var mmnew = todaynew.getMonth() + 1;
var yyyynew = todaynew.getFullYear();

if (ddnew < 10) {
  ddnew = "0" + ddnew;
}
if (mmnew < 10) {
  mmnew = "0" + mmnew;
}

todaynew = yyyynew + "-" + mmnew + "-" + ddnew;

todaynew = "10-07-2021";
document.getElementById("date").setAttribute("max", todaynew);
document.getElementById("mob_date").setAttribute("max", todaynew);

var x = document.getElementById("timestamp");
x.value = new Date();

var y = document.getElementById("mob_timestamp");
y.value = new Date();

function SubForm() {
  document.querySelector("#btn").onclick = null;
  let count = 0;
  $.ajax({
    url: "https://api.apispreadsheets.com/data/14847/",
    type: "post",
    data: $("#myForm").serializeArray(),
    success: function () {
      let email = document.querySelector("#email").value;
      var regex1 =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (regex1.test(email)) {
        count++;
        localStorage.setItem("email", email);
      }

      let phno = document.querySelector("#phno").value;
      var regex = /^[+091]?[0-9]{10,12}$/;
      if (regex.test(phno)) {
        count++;
        localStorage.setItem("phno", phno);
      }

      let date = document.querySelector("#date").value;
      if (date == "") {
        alert("Date is empty");
      } else {
        count++;
        localStorage.setItem("date", date);
      }

      let time = document.querySelector("#time").value;
      if (time == "") {
        alert("Time is empty");
      } else {
        count++;
        localStorage.setItem("time", time);
      }
      let location = document.querySelector("#location").value;
      if (location == "") {
        alert("Location is empty");
      } else {
        count++;
        localStorage.setItem("location", location);
      }
      if (count == 5) {
        // alert("Form Data Submitted :)");
        window.location.href = "thank-you.html";
      } else {
        // alert("Please fill all the fields");
      }
    },
    error: function () {
      alert("There was an error :(  Please Try Again!");
    },
  });
}

function MobSubForm() {
  document.querySelector("#m_btn").onclick = null;
  let count = 0;
  $.ajax({
    url: "https://api.apispreadsheets.com/data/14847/",
    type: "post",
    data: $("#mob_myForm").serializeArray(),
    success: function () {
      let mob_email = document.querySelector("#mob_email").value;
      var regex1 =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (regex1.test(mob_email)) {
        count++;
        localStorage.setItem("mob_email", mob_email);
      }

      let mob_phno = document.querySelector("#mob_phno").value;
      var regex = /^[+91]?[0-9]{10,12}$/;
      if (regex.test(mob_phno)) {
        count++;
        localStorage.setItem("mob_phno", mob_phno);
      }

      let mob_date = document.querySelector("#mob_date").value;
      if (mob_date == "") {
        alert("Date is empty");
      } else {
        count++;
        localStorage.setItem("mob_date", mob_date);
      }

      let mob_time = document.querySelector("#mob_time").value;
      if (mob_time == "") {
        alert("Time is empty");
      } else {
        count++;
        localStorage.setItem("mob_time", mob_time);
      }

      let mob_location = document.querySelector("#mob_location").value;
      if (mob_location == "") {
        alert("location is empty");
      } else {
        count++;
        localStorage.setItem("mob_location", mob_location);
      }

      if (count == 5) {
        // alert("Form Data Submitted :)");
        window.location.href = "thank-you.html";
      } else {
        // alert("Please fill all the fields");
      }
    },
    error: function () {
      alert("There was an error :(  Please Try Again!");
    },
  });
}

function mob_thankyou() {
  var mob_name = localStorage.getItem("mob_email");
  document.querySelector(".render_email").innerHTML = mob_name;

  var mob_phno = localStorage.getItem("mob_phno");
  document.querySelector(".render_phone").innerHTML = mob_phno;

  var mob_date = localStorage.getItem("mob_date");
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var mob_d = new Date(mob_date);
  var mob_dayName = days[mob_d.getDay()];
  document.querySelector(".render_date").innerHTML = mob_dayName;

  var mob_time = localStorage.getItem("mob_time");
  document.querySelector(".render_time").innerHTML = mob_time;

  var mob_location = localStorage.getItem("mob_location");
  document.querySelector(".render_loc").innerHTML = mob_location;
}

function thankyou() {
  var name = localStorage.getItem("email");
  document.querySelector(".render_email").innerHTML = name;

  var phno = localStorage.getItem("phno");
  document.querySelector(".render_phone").innerHTML = phno;

  var date = localStorage.getItem("date");
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(date);
  var dayName = days[d.getDay()];
  document.querySelector(".render_date").innerHTML = dayName;

  var time = localStorage.getItem("time");
  document.querySelector(".render_time").innerHTML = time;

  var location = localStorage.getItem("location");
  document.querySelector(".render_loc").innerHTML = location;
}

let screen_size;
function size() {
  screen_size = screen.width;
  localStorage.setItem("screen_size", screen_size);
}

function display() {
  var screen_size = localStorage.getItem("screen_size");
  if (screen_size > 430) {
    thankyou();
  } else {
    mob_thankyou();
  }
}

// $("#mob_date").flatpickr({
//   minDate: new Date().fp_incr(2),
//   maxDate: new Date().fp_incr(8),
//   disable: [
//     function (date) {
//       return date.getDay() === 2; // disable weekends
//     },
//   ],
//   locale: {
//     firstDayOfWeek: 0, // set start day of week to Monday
//   },
// });

function modify(val) {
  let location = val;
  localStorage.setItem("location", location);

  if (location == "Jogeshwari") {
    document.querySelector(".age1").style.display = "block";
    document.querySelector(".age2").style.display = "block";

    document.querySelector(".age0").style.display = "none";
    document.querySelector(".age3").style.display = "none";
    document.querySelector(".age4").style.display = "none";
    document.querySelector(".age5").style.display = "none";
  } else if (location == "Mahalaxmi") {
    document.querySelector(".age1").style.display = "block";
    document.querySelector(".age2").style.display = "block";

    document.querySelector(".age0").style.display = "none";
    document.querySelector(".age3").style.display = "none";
    document.querySelector(".age4").style.display = "none";
    document.querySelector(".age5").style.display = "none";
  } else if (location == "Churchgate") {
    document.querySelector(".age1").style.display = "block";
    document.querySelector(".age2").style.display = "block";
    document.querySelector(".age3").style.display = "block";

    document.querySelector(".age0").style.display = "none";
    document.querySelector(".age4").style.display = "none";
    document.querySelector(".age5").style.display = "none";
  } else if (location == "Versova") {
    document.querySelector(".age1").style.display = "block";
    document.querySelector(".age2").style.display = "block";
    document.querySelector(".age3").style.display = "block";
    document.querySelector(".age4").style.display = "block";

    document.querySelector(".age0").style.display = "none";
    document.querySelector(".age5").style.display = "none";
  } else if (location == "Juhu") {
    document.querySelector(".age1").style.display = "block";

    document.querySelector(".age0").style.display = "none";
    document.querySelector(".age3").style.display = "none";
    document.querySelector(".age2").style.display = "none";
    document.querySelector(".age4").style.display = "none";
    document.querySelector(".age5").style.display = "none";
  } else if (location == "Parel") {
    document.querySelector(".age0").style.display = "block";
    document.querySelector(".age1").style.display = "block";

    document.querySelector(".age2").style.display = "none";
    document.querySelector(".age4").style.display = "none";
    document.querySelector(".age5").style.display = "none";
    document.querySelector(".age6").style.display = "none";
  } else if (location == "Prabhadevi") {
    document.querySelector(".age1").style.display = "block";

    document.querySelector(".age0").style.display = "none";
    document.querySelector(".age2").style.display = "none";
    document.querySelector(".age3").style.display = "none";
    document.querySelector(".age4").style.display = "none";
    document.querySelector(".age5").style.display = "none";
  } else if (location == "Shivaji Park") {
    document.querySelector(".age2").style.display = "block";
    document.querySelector(".age3").style.display = "block";
    document.querySelector(".age4").style.display = "block";
    document.querySelector(".age5").style.display = "block";

    document.querySelector(".age0").style.display = "none";
    document.querySelector(".age1").style.display = "none";
  }

  $("#date").flatpickr({
    // dateFormat: "m-d-Y",
    minDate: new Date().fp_incr(2),
    maxDate: new Date().fp_incr(8),
    disable: [
      function (date) {
        if (location == "Jogeshwari") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 2 ||
            date.getDay() === 3 ||
            date.getDay() === 4 ||
            date.getDay() === 5
          );
        } else if (location == "Mahalaxmi") {
          return (
            date.getDay() === 0 ||
            date.getDay() === 2 ||
            date.getDay() === 3 ||
            date.getDay() === 4 ||
            date.getDay() === 5 ||
            date.getDay() === 6
          );
        } else if (location == "Churchgate") {
          return (
            date.getDay() === 0 ||
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 6
          );
        } else if (location == "Parel") {
          return (
            date.getDay() === 0 || date.getDay() === 4 || date.getDay() === 6
          );
        } else if (location == "Versova") {
          return date.getDay() === 0 || date.getDay() === 6;
        } else if (location == "Juhu") {
          return (
            date.getDay() === 0 ||
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5
          );
        } else if (location == "Parel") {
          return (
            date.getDay() === 0 || date.getDay() === 4 || date.getDay() === 6
          );
        } else if (location == "Prabhadevi") {
          return (
            date.getDay() === 0 ||
            date.getDay() === 2 ||
            date.getDay() === 6 ||
            date.getDay() === 4
          );
        } else if (location == "Shivaji Park") {
          return date.getDay() === 0 || date.getDay() === 6;
        }
      },
    ],
    locale: {
      firstDayOfWeek: 1, // set start day of week to Monday
    },
  });
}

function mob_modify(val) {
  let location = val;
  localStorage.setItem("location", location);

  if (location == "Jogeshwari") {
    document.querySelector(".m_age1").style.display = "block";
    document.querySelector(".m_age2").style.display = "block";

    document.querySelector(".m_age0").style.display = "none";
    document.querySelector(".m_age3").style.display = "none";
    document.querySelector(".m_age4").style.display = "none";
    document.querySelector(".m_age5").style.display = "none";
  } else if (location == "Mahalaxmi") {
    document.querySelector(".m_age1").style.display = "block";
    document.querySelector(".m_age2").style.display = "block";

    document.querySelector(".m_age0").style.display = "none";
    document.querySelector(".m_age3").style.display = "none";
    document.querySelector(".m_age4").style.display = "none";
    document.querySelector(".m_age5").style.display = "none";
  } else if (location == "Churchgate") {
    document.querySelector(".m_age1").style.display = "block";
    document.querySelector(".m_age2").style.display = "block";
    document.querySelector(".m_age3").style.display = "block";

    document.querySelector(".m_age0").style.display = "none";
    document.querySelector(".m_age4").style.display = "none";
    document.querySelector(".m_age5").style.display = "none";
  } else if (location == "Versova") {
    document.querySelector(".m_age1").style.display = "block";
    document.querySelector(".m_age2").style.display = "block";
    document.querySelector(".m_age3").style.display = "block";
    document.querySelector(".m_age4").style.display = "block";

    document.querySelector(".m_age0").style.display = "none";
    document.querySelector(".m_age5").style.display = "none";
  } else if (location == "Juhu") {
    document.querySelector(".m_age1").style.display = "block";

    document.querySelector(".m_age0").style.display = "none";
    document.querySelector(".m_age3").style.display = "none";
    document.querySelector(".m_age2").style.display = "none";
    document.querySelector(".m_age4").style.display = "none";
    document.querySelector(".m_age5").style.display = "none";
  } else if (location == "Parel") {
    document.querySelector(".m_age0").style.display = "block";
    document.querySelector(".m_age1").style.display = "block";

    document.querySelector(".m_age2").style.display = "none";
    document.querySelector(".m_age4").style.display = "none";
    document.querySelector(".m_age5").style.display = "none";
  } else if (location == "Prabhadevi") {
    document.querySelector(".m_age1").style.display = "block";

    document.querySelector(".m_age0").style.display = "none";
    document.querySelector(".m_age2").style.display = "none";
    document.querySelector(".m_age3").style.display = "none";
    document.querySelector(".m_age4").style.display = "none";
    document.querySelector(".m_age5").style.display = "none";
  } else if (location == "Shivaji Park") {
    document.querySelector(".m_age2").style.display = "block";
    document.querySelector(".m_age3").style.display = "block";
    document.querySelector(".m_age4").style.display = "block";
    document.querySelector(".m_age5").style.display = "block";

    document.querySelector(".m_age0").style.display = "none";
    document.querySelector(".m_age1").style.display = "none";
  }

  $("#mob_date").flatpickr({
    // dateFormat: "m-d-Y",
    minDate: new Date().fp_incr(2),
    maxDate: new Date().fp_incr(8),
    disable: [
      function (date) {
        if (location == "Jogeshwari") {
          return (
            date.getDay() === 1 ||
            date.getDay() === 2 ||
            date.getDay() === 3 ||
            date.getDay() === 4 ||
            date.getDay() === 5
          );
        } else if (location == "Mahalaxmi") {
          return (
            date.getDay() === 0 ||
            date.getDay() === 2 ||
            date.getDay() === 3 ||
            date.getDay() === 4 ||
            date.getDay() === 5 ||
            date.getDay() === 6
          );
        } else if (location == "Churchgate") {
          return (
            date.getDay() === 0 ||
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5 ||
            date.getDay() === 6
          );
        } else if (location == "Parel") {
          return (
            date.getDay() === 0 || date.getDay() === 4 || date.getDay() === 6
          );
        } else if (location == "Versova") {
          return date.getDay() === 0 || date.getDay() === 6;
        } else if (location == "Juhu") {
          return (
            date.getDay() === 0 ||
            date.getDay() === 1 ||
            date.getDay() === 3 ||
            date.getDay() === 5
          );
        } else if (location == "Parel") {
          return (
            date.getDay() === 0 || date.getDay() === 4 || date.getDay() === 6
          );
        } else if (location == "Prabhadevi") {
          return (
            date.getDay() === 0 ||
            date.getDay() === 2 ||
            date.getDay() === 6 ||
            date.getDay() === 4
          );
        } else if (location == "Shivaji Park") {
          return date.getDay() === 0 || date.getDay() === 6;
        }
      },
    ],
    locale: {
      firstDayOfWeek: 1, // set start day of week to Monday
    },
  });
}

function datechanger(event) {
  var location = localStorage.getItem("location");

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(event.target.value);
  var dayName = days[d.getDay()];

  if (location == "Jogeshwari") {
    document.querySelector(".time1").style.display = "block";
    document.querySelector(".time3").style.display = "block";

    document.querySelector(".time0").style.display = "none";
    document.querySelector(".time2").style.display = "none";
    document.querySelector(".time4").style.display = "none";
    document.querySelector(".time5").style.display = "none";
  } else if (location == "Mahalaxmi") {
    document.querySelector(".time4").style.display = "block";

    document.querySelector(".time0").style.display = "none";
    document.querySelector(".time1").style.display = "none";
    document.querySelector(".time2").style.display = "none";
    document.querySelector(".time3").style.display = "none";
    document.querySelector(".time5").style.display = "none";
  } else if (location == "Churchgate") {
    document.querySelector(".time4").style.display = "block";

    document.querySelector(".time0").style.display = "none";
    document.querySelector(".time1").style.display = "none";
    document.querySelector(".time2").style.display = "none";
    document.querySelector(".time3").style.display = "none";
    document.querySelector(".time5").style.display = "none";
  } else if (location == "Versova") {
    document.querySelector(".time2").style.display = "block";
    document.querySelector(".time4").style.display = "block";

    document.querySelector(".time0").style.display = "none";
    document.querySelector(".time1").style.display = "none";
    document.querySelector(".time3").style.display = "none";
    document.querySelector(".time5").style.display = "none";
  } else if (location == "Juhu") {
    if (dayName == "Tuesday") {
      document.querySelector(".time4").style.display = "block";

      document.querySelector(".time0").style.display = "none";
      document.querySelector(".time1").style.display = "none";
      document.querySelector(".time2").style.display = "none";
      document.querySelector(".time3").style.display = "none";
      document.querySelector(".time5").style.display = "none";
    } else if (dayName == "Saturday") {
      document.querySelector(".time0").style.display = "block";

      document.querySelector(".time1").style.display = "none";
      document.querySelector(".time2").style.display = "none";
      document.querySelector(".time3").style.display = "none";
      document.querySelector(".time4").style.display = "none";
      document.querySelector(".time5").style.display = "none";
    } else if (dayName == "Thursday") {
      document.querySelector(".time0").style.display = "block";
      document.querySelector(".time4").style.display = "block";

      document.querySelector(".time1").style.display = "none";
      document.querySelector(".time2").style.display = "none";
      document.querySelector(".time3").style.display = "none";
      document.querySelector(".time5").style.display = "none";
    }
  } else if (location == "Parel") {
    document.querySelector(".time4").style.display = "block";

    document.querySelector(".time0").style.display = "none";
    document.querySelector(".time1").style.display = "none";
    document.querySelector(".time2").style.display = "none";
    document.querySelector(".time3").style.display = "none";
    document.querySelector(".time5").style.display = "none";
  } else if (location == "Prabhadevi") {
    document.querySelector(".time5").style.display = "block";

    document.querySelector(".time0").style.display = "none";
    document.querySelector(".time1").style.display = "none";
    document.querySelector(".time2").style.display = "none";
    document.querySelector(".time3").style.display = "none";
    document.querySelector(".time4").style.display = "none";
  } else if (location == "Shivaji Park") {
    document.querySelector(".time4").style.display = "block";

    document.querySelector(".time0").style.display = "none";
    document.querySelector(".time1").style.display = "none";
    document.querySelector(".time2").style.display = "none";
    document.querySelector(".time3").style.display = "none";
    document.querySelector(".time5").style.display = "none";
  }
}

function mob_datechanger(event) {
  var location = localStorage.getItem("location");

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(event.target.value);
  var dayName = days[d.getDay()];

  if (location == "Jogeshwari") {
    document.querySelector(".m_time1").style.display = "block";
    document.querySelector(".m_time3").style.display = "block";

    document.querySelector(".m_time0").style.display = "none";
    document.querySelector(".m_time2").style.display = "none";
    document.querySelector(".m_time4").style.display = "none";
    document.querySelector(".m_time5").style.display = "none";
  } else if (location == "Mahalaxmi") {
    document.querySelector(".m_time4").style.display = "block";

    document.querySelector(".m_time0").style.display = "none";
    document.querySelector(".m_time1").style.display = "none";
    document.querySelector(".m_time2").style.display = "none";
    document.querySelector(".m_time3").style.display = "none";
    document.querySelector(".m_time5").style.display = "none";
  } else if (location == "Churchgate") {
    document.querySelector(".m_time4").style.display = "block";

    document.querySelector(".m_time0").style.display = "none";
    document.querySelector(".m_time1").style.display = "none";
    document.querySelector(".m_time2").style.display = "none";
    document.querySelector(".m_time3").style.display = "none";
    document.querySelector(".m_time5").style.display = "none";
  } else if (location == "Versova") {
    document.querySelector(".m_time2").style.display = "block";
    document.querySelector(".m_time4").style.display = "block";

    document.querySelector(".m_time0").style.display = "none";
    document.querySelector(".m_time1").style.display = "none";
    document.querySelector(".m_time3").style.display = "none";
    document.querySelector(".m_time5").style.display = "none";
  } else if (location == "Juhu") {
    if (dayName == "Tuesday") {
      document.querySelector(".m_time4").style.display = "block";

      document.querySelector(".m_time0").style.display = "none";
      document.querySelector(".m_time1").style.display = "none";
      document.querySelector(".m_time2").style.display = "none";
      document.querySelector(".m_time3").style.display = "none";
      document.querySelector(".m_time5").style.display = "none";
    } else if (dayName == "Saturday") {
      document.querySelector(".m_time0").style.display = "block";

      document.querySelector(".m_time1").style.display = "none";
      document.querySelector(".m_time2").style.display = "none";
      document.querySelector(".m_time3").style.display = "none";
      document.querySelector(".m_time4").style.display = "none";
      document.querySelector(".m_time5").style.display = "none";
    } else if (dayName == "Thursday") {
      document.querySelector(".m_time0").style.display = "block";
      document.querySelector(".m_time4").style.display = "block";

      document.querySelector(".m_time1").style.display = "none";
      document.querySelector(".m_time2").style.display = "none";
      document.querySelector(".m_time3").style.display = "none";
      document.querySelector(".m_time5").style.display = "none";
    }
  } else if (location == "Parel") {
    document.querySelector(".m_time4").style.display = "block";

    document.querySelector(".m_time0").style.display = "none";
    document.querySelector(".m_time1").style.display = "none";
    document.querySelector(".m_time2").style.display = "none";
    document.querySelector(".m_time3").style.display = "none";
    document.querySelector(".m_time5").style.display = "none";
  } else if (location == "Prabhadevi") {
    document.querySelector(".m_time5").style.display = "block";

    document.querySelector(".m_time0").style.display = "none";
    document.querySelector(".m_time1").style.display = "none";
    document.querySelector(".m_time2").style.display = "none";
    document.querySelector(".m_time3").style.display = "none";
    document.querySelector(".m_time4").style.display = "none";
  } else if (location == "Shivaji Park") {
    document.querySelector(".m_time4").style.display = "block";

    document.querySelector(".m_time0").style.display = "none";
    document.querySelector(".m_time1").style.display = "none";
    document.querySelector(".m_time2").style.display = "none";
    document.querySelector(".m_time3").style.display = "none";
    document.querySelector(".m_time5").style.display = "none";
  }
}
