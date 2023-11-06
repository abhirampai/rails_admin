module RailsAdmin
  class DashboardsController < ApplicationController
    before_action :load_model
    before_action :filtered_query, only: :show
    before_action :required_fields_for_new_form, only: :new

    def show; end

    def new; end

    def create
      permitted_params = params[@model.name].permit(required_fields_for_new_form.map(&:first))
      @created_record = @model.create(permitted_params)
      respond_with_error(@created_record.errors.full_messages) if @created_record.errors.present?
    end

    private

    def respond_with_error(errors)
      @error = errors.join(", ")
    end

    def load_model
      @model = params[:class_name]&.constantize || ::ApplicationRecord.subclasses.first
    end

    def filtered_query
      @searchable_columns = @model.columns_hash.map { |c, k| c if k.type == :string }.compact
      key = "#{@searchable_columns.join('_or_')}_cont"
      @filtered_query = @model.ransack({ "#{key}": params[:search_term] }).result
    end

    def required_fields_for_new_form
      @required_fields_for_new_form ||= @model.columns_hash.map do |c, k|
        [c, k.type] unless exclude_columns.include?(c)
      end.compact
    end

    def exclude_columns
      %w[id created_at updated_at]
    end
  end
end
