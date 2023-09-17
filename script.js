function calculate() {
    var fd = Number(document.getElementById("fd").value);
    var fm = Number(document.getElementById("fm").value);
    var fy = Number(document.getElementById("fy").value);

    var td = Number(document.getElementById("td").value);
    var tm = Number(document.getElementById("tm").value);
    var ty = Number(document.getElementById("ty").value);

    if (
      (fd) == 0 ||
      (fm) == 0 ||
      (fy) == 0 ||
      (td) == 0 ||
      (tm) == 0 ||
      (ty) == 0
    ) {
      document.getElementById("result").innerHTML =
        "Invalid input, Please enter valid numbers.";
      return;
    }

    if (ty >= fy) {
      var dd = td - fd;
      var mm = tm - fm;
      var yy = ty - fy;

      if (dd < 0) {
        mm -= 1;
        dd += 30;
      }

      if (mm < 0) {
        yy -= 1;
        mm += 12;
      }

      document.getElementById("result").innerHTML =
        yy + " years, " + mm + " months, " + dd + " days";
    } else {
      document.getElementById("result").innerHTML =
        "Invalid input. 'End' date must be later than 'Start' date.";
    }
  }