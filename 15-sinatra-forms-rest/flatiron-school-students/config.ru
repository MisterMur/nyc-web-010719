require './config/environment'

if ActiveRecord::Migrator.needs_migration?
  raise 'Migrations are pending. Run `rake db:migrate` to resolve the issue.'
end

# Rack::OverrideMethod # even though rails is dank, you wont use it 
run ApplicationController
