class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :ppg, :image
  has_many :teams
end
