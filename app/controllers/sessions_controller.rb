class SessionsController < ApplicationController

    def login
        

    user = User.find_by!(email: params[:email])
    ß
    end
end
