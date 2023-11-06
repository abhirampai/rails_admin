Stimulus.register(
  "new--form",
  class extends Controller {
    static get targets() {
      return ["formInput"];
    }

    connect() {
      this.className = document.querySelector(
        ".dashboard .header .table-name"
      ).innerHTML;
    }

    save(e) {
      let payload = { [this.className]: {} };
      this.formInputTargets.forEach((input) => {
        payload[this.className][input.dataset.key] = input.value;
      });

      if (e.target.dataset.rowId) {
        payload["id"] = e.target.dataset.rowId;
      }
      $.ajax({
        url: dashboardAPI.create,
        data: {
          ...payload,
          class_name: this.className,
        },
        type: e.target.dataset.method,
        dataType: "script",
      });
    }
  }
);
