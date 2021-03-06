class UsersController < ApplicationController
  def index
    users = User.all
    render json: UserSerializer.new(users).to_serialized_json
  end

  def show
    user = User.find(params[:id])
    render json: UserSerializer.new(user).to_serialized_json
  end

  def create
    # debugger
    user = User.create(user_params)

    if user.valid?
      render json: {token: encode_token(user_payload(user)), user: user}
    else 
      render json: {errors: user.errors.full_messages}
    end
  end

  def profile
    render json: current_user
  end

  def update
    # debugger
    user = User.find(params[:id])
    user.update(user_params)
    render json: user
  end

  private

  def user_params
    params.permit(:name, :password, :email, :account_balance)
  end
end