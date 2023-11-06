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

    save() {
      let payload = { [this.className]: {} };
      this.formInputTargets.forEach((input) => {
        payload[this.className][input.dataset.key] = input.value;
      });

      $.ajax({
        url: dashboardAPI.create,
        data: {
          ...payload,
          class_name: this.className,
        },
        type: "post",
        dataType: "script",
      });
    }
  }
);
