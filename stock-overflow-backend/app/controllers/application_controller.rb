class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def encode_token(payload)
    JWT.encode payload, secret, 'HS256'
  end

  def user_payload(user)
    { user_id: user.id }
  end

  def token
    request.headers["Authorization"]
  end

  def decoded_token
    JWT.decode token, secret, true, {algorithm: 'HS256'}
  end

  def current_user
    # debugger
    User.find(decoded_token[0]["user_id"])
  end

  def secret 
    Rails.application.credentials.app_secret
  end
end
