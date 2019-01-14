# Dir[File.join(File.dirname(__FILE__), '../lib', '*.rb')].sort.each { |f| require f }

require 'pry'
require 'require_all'
require_relative '../lib/pet'
require_relative '../lib/module'
require_all 'lib' # require a folder <= pull in all the files in that folder
# shortcut for require_relative
# BUT! It does it alphabetically. Oh man...

# No animal yet... so I can show this.
