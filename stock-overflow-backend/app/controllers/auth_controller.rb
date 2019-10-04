class AuthController < ApplicationController
  def login
    user = User.find_by(email: params[:email])

    
    is_authenticated = user.authenticate(params[:password]) if user
    
    if is_authenticated
      render json: {token: encode_token(user_payload(user)), user: user}
    else
      render json: {error: "Wrong username and/or password."}
    end
  end
end