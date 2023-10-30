module RailsAdmin
  class DashboardsController < ApplicationController
    def index
      @model = ::ApplicationRecord.subclasses.first
      render
    end
  end
end
