RailsAdmin::Engine.routes.draw do
  resource :dashboard
  root "dashboards#index"
end
