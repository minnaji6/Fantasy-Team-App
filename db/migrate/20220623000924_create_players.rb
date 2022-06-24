class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :ppg
      t.string :image
      t.timestamps
    end
  end
end
