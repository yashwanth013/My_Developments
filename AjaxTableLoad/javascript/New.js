$(document).ready(function () {
  $("button").click(function () {
    $.ajax({
      url: "https://reqres.in/api/unknown",
      success: function (result) {
        var res = result;

        for (i = 0; i < result.data.length; i++) {
          $("#Id_" + i).html(result.data[i].id);
          $("#name_" + i).html(result.data[i].name);
          {
            if (i === 5) {
              $("#name_" + i)
                .closest("tr")
                .hide();
            }
          }

          $("#year_" + i).html(result.data[i].year);
          $("#color_" + i).css("background-color", result.data[i].color);

          $("#pantone_" + i).html(result.data[i].pantone_value);
        }

        $("#customers").each(function () {
          // Check each <td> in the current row
          $(this)
            .find("td")
            .each(function () {
              // Check if the <td> contains the specific text
              if ($(this).text() === "") {
                // Hide the entire row that contains this <td>
                $(this).closest("tr").hide();
              }
            });
        });
      },
    });
  });
  $.ajax({
    url: "https://reqres.in/api/unknown",
    success: function (result) {
      var res = result;
      for (i = 0; i < result.data.length; i++) {
        $("#email_" + i).html(result.data[i].email);
        $("#Id_" + i).html(result.data[i].id);
        $("#first_" + i).html(result.data[i].first_name);
        $("#last_" + i).html(result.data[i].last_name);
        $("#avatar_" + i).html(
          '<img src="' + result.data[i].avatar + '" alt="Avatar">'
        );
      }
    },
  });
});
