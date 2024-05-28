$(document).ready(function () {
  var userData = {
    name: "morpheus",
    job: "leader",
  };
  $.ajax({
    url: "https://reqres.in/api/users",
    method: "POST",
    data: JSON.stringify(userData),
    success: function (response) {
      console.log("Data successfully sent:", response);
      $("#name").text("Name: " + userData.name);
      $("#job").text("Job: " + userData.job);
      $("#id").text("ID: " + response.id);
      $("#createdat").text("Created At: " + response.createdAt);
      /*$("#user-data").text(JSON.stringify(response, null, 4));*/
    },
    error: function (xhr, status, error) {
      console.error("Error fetching data:", error);
    },
  });
});
