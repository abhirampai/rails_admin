Stimulus.register(
  "header",
  class extends Controller {
    changeTable(e) {
      $.ajax({
        url: dashboardAPI.show,
        data: {
          class_name: e.target.dataset.model,
          change_table: true,
        },
        type: "get",
        dataType: "script",
      });
    }
  }
);
