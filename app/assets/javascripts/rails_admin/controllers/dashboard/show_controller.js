Stimulus.register(
  "dashboard--show",
  class extends Controller {
    static get targets() {
      return ["searchTerm"];
    }

    connect() {
      if (this.searchTermTarget) {
        this.initializeSearch();
      }
      this.timeOutId = null;
    }

    initializeSearch() {
      const debouncedSearch = (e) => {
        clearTimeout(this.timeOutId);

        this.timeOutId = setTimeout(() => this.searchTable(e), 800);
      };
      this.searchTermTarget.addEventListener("keyup", debouncedSearch);
    }

    searchTable(e) {
      clearTimeout(this.timeOutId);

      $.ajax({
        url: dashboardAPI.show,
        data: {
          search_term: e.target.value,
          class_name: document.querySelector(".dashboard .header .table-name")
            .innerHTML,
        },
        type: "get",
        dataType: "script",
      });
    }
  }
);
