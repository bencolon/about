require 'sinatra'
require 'haml'

get '/' do
  @title = "Benjamin Colon"
  haml :'index', :layout => :layout
end