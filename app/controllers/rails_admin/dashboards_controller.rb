module RailsAdmin
  class DashboardsController < ApplicationController
    before_action :load_model
    def show; end

    private

    def load_model
      @model = params[:class_name]&.constantize || ::ApplicationRecord.subclasses.first
    end
  end
end
