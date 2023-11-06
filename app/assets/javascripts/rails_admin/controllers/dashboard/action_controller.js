Stimulus.register(
  "dashboard--action",
  class extends Controller {
    connect() {
      this.className = document.querySelector(
        ".dashboard .header .table-name"
      ).innerHTML;
      this.rowId = this.element.dataset.id;
    }

    deleteRecord(e) {
      const confirmation = confirm(
        "Are you sure you want to delete the record!"
      );
      if (!confirmation) return;

      $.ajax({
        url: dashboardAPI.destroy,
        data: {
          id: this.rowId,
          class_name: this.className,
        },
        type: "delete",
        dataType: "script",
      });
    }
  }
);
