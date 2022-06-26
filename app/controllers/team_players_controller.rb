class TeamPlayersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_team
    def create
        team_player =TeamPlayers.create!(team_player_params)
        render json: team_player.player, status: :created
    end


    private

    def team_player_params
        params.permit(:team_id, :player_id)
    end
    def invalid_team (exceptions)
        render json: { errors: exceptions.record.errors.full_messages }, status: :unprocessable_entity
    end
end
