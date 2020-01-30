require 'rails_helper'
RSpec.describe 'Message CRUD', :type => :request do
  before :all do 
    # auth 
    post '/api/auth/sign_in', :params => { :email => "test@test.com", :password =>  "password"}
    token = response.headers["access-token"]
    token_type = response.headers["token-type"]
    client = response.headers["client"]
    expiry = response.headers["expiry"]
    uid = response.headers["uid"]
    @headers = {
      "access-token" => "#{token}",
      "token-type" => "#{token_type}",
      "client" => "#{client}",
      "expiry" => "#{expiry}",
      "uid" => "#{uid}"
    }
  end

  it 'creates a message' do 
    post '/api/email', :params => { :message => { :subject => "a subject", :body => "a body", :email => "test@test.com", :name => "a name"} }, :headers => @headers
    expect(response.status).to eql(200) 
    expect(JSON.parse(response.body)["id"]).to be > 0
  end

  it 'indexes all messages' do 
    get '/api/messages', :headers => @headers
    expect(response.status).to eql(200) 
    expect(JSON.parse(response.body).length).to be > 0 
  end

end