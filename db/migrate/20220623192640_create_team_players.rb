class CreateTeamPlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :team_players do |t|
      t.integer :user_id
      t.integer :player_id
      t.integer :team_id
      t.timestampss
    end
  end
end
