# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(name: 'Tosie', email: 'tosie@gmail.com', admin: true, password: "password")
u2 = User.create(name: 'hiZ', email: 'hiZ@gmail.com', admin: true, password: "password")


puts "🏀 Seeding teams..."
Team.create([
    { name: 'Fanduel'},
    { name: 'Raps 5'},
    { name: 'Rookies'},
    { name: 'Avengers'},
    { name: 'Legacies'}
])


puts "⛹🏽‍♂️ Seeding players..."
Player.create([
    { name: 'Lebron James', ppg: 30.3, image: 'https://www.basketball-reference.com/req/202106291/images/players/jamesle01.jpg'},
    { name: 'Steph Curry', ppg: 25.5, image: 'https://www.basketball-reference.com/req/202106291/images/players/curryst01.jpg'},
    { name: 'Scottie Barnes', ppg: 15.30, image: 'https://www.basketball-reference.com/req/202106291/images/players/barnesc01.jpg'},
    { name: 'Evan Mobley', ppg: 15.0, image: 'https://www.basketball-reference.com/req/202106291/images/players/mobleev01.jpg'},
    { name: 'Pascal Siakam', ppg: 22.8, image: 'https://www.basketball-reference.com/req/202106291/images/players/siakapa01.jpg'},
    { name: 'OG Anunoby', ppg: 17.1, image: 'https://www.basketball-reference.com/req/202106291/images/players/anunoog01.jpg'},
    { name: 'Gary Trent Jr.', ppg: 18.3, image: 'https://www.basketball-reference.com/req/202106291/images/players/trentga02.jpg'},
    { name: 'Precious Achiuwa', ppg: 9.1, image: 'https://www.basketball-reference.com/req/202106291/images/players/achiupr01.jpg'},
    { name: 'Jalen Green', ppg: 17.3, image: 'https://www.basketball-reference.com/req/202106291/images/players/greenja05.jpg'},
    { name: 'Fred Vanvleet', ppg: 20.3, image: 'https://www.basketball-reference.com/req/202106291/images/players/vanvlfr01.jpg'},
    { name: 'Cade Cunningham', ppg: 17.3, image: 'https://www.basketball-reference.com/req/202106291/images/players/cunnica01.jpg'},
    { name: 'Herb Jones', ppg: 9.5, image: 'https://www.basketball-reference.com/req/202106291/images/players/joneshe01.jpg'},
    { name: 'Michael Jordan', ppg: 30.1, image: 'https://www.basketball-reference.com/req/202106291/images/players/jordami01.jpg'},
    { name: 'Kawhi Leonard', ppg: 19.2, image: 'https://www.basketball-reference.com/req/202106291/images/players/leonaka01.jpg'},
    { name: 'Magic Johnson', ppg: 19.5, image: 'https://www.basketball-reference.com/req/202106291/images/players/johnsma02.jpg'}

])

puts " Seeding team players..."
TeamPlayer.create!([
    {user_id: 1, player_id: 1, team_id: 1},
    {user_id: 2, player_id: 2, team_id: 1},
    {user_id: 1, player_id: 3, team_id: 2},
    {user_id: 1, player_id: 3, team_id: 3},
    {user_id: 1, player_id: 4, team_id: 3},
    {user_id: 1, player_id: 5, team_id: 2},
    {user_id: 1, player_id: 6, team_id: 2},
    {user_id: 1, player_id: 7, team_id: 2},
    {user_id: 1, player_id: 8, team_id: 2},
    {user_id: 1, player_id: 9, team_id: 3},
    {user_id: 1, player_id: 10, team_id: 2},
    {user_id: 1, player_id: 11, team_id: 3},
    {user_id: 1, player_id: 12, team_id: 3},
    {user_id: 1, player_id: 13, team_id: 1},
    {user_id: 1, player_id: 14, team_id: 1},
    {user_id: 1, player_id: 15, team_id: 1}
    ],
)

