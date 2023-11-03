Stimulus.register(
  "header",
  class extends Controller {
    changeTable(e) {
      $.ajax({
        url: dashboardAPI.show,
        data: {
          class_name: e.target.dataset.model,
        },
        type: "get",
        dataType: "script",
      });
    }
  }
);
