module RailsAdmin
  class DashboardsController < ApplicationController
    before_action :load_model
    def show; end

    private

    def load_model
      @model = params[:class_name]&.constantize || ::ApplicationRecord.subclasses.first
      filtered_query
    end

    def filtered_query
      @searchable_columns = @model.columns_hash.map { |c, k| c if k.type == :string }.compact
      key = "#{@searchable_columns.join('_or_')}_cont"
      @filtered_query = @model.ransack({ "#{key}": params[:search_term] }).result
    end
  end
end
