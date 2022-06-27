class TeamPlayerSerializer < ActiveModel::Serializer
  attributes :id
  has_many :players
end
