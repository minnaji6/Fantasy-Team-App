# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
    { name: 'Lebron James', ppg: 30.3, image: 'https://www.basketball-reference.com/req/202106291/images/players/jamesle01.jpg', team_id: 1},
    { name: 'Steph Curry', ppg: 25.5, image: 'https://www.basketball-reference.com/req/202106291/images/players/curryst01.jpg', team_id: 1},
    { name: 'Scottie Barrnes', ppg: 15.30, image: 'https://www.basketball-reference.com/req/202106291/images/players/barnesc01.jpg', team_id: 2},
    { name: 'Scottie Barrnes', ppg: 15.30, image: 'https://www.basketball-reference.com/req/202106291/images/players/barnesc01.jpg', team_id: 3},
    { name: 'Evan Mobley', ppg: 15.0, image: 'https://www.basketball-reference.com/req/202106291/images/players/mobleev01.jpg', team_id: 3},
    { name: 'Pascal Siakam', ppg: 22.8, image: 'https://www.basketball-reference.com/req/202106291/images/players/siakapa01.jpg', team_id: 2},
    { name: 'OG Anunoby', ppg: 17.1, image: 'https://www.basketball-reference.com/req/202106291/images/players/anunoog01.jpg', team_id: 2},
    { name: 'Gary Trent Jr.', ppg: 18.3, image: 'https://www.basketball-reference.com/req/202106291/images/players/trentga02.jpg', team_id: 2},
    { name: 'Precious Achiuwa', ppg: 9.1, image: 'https://www.basketball-reference.com/req/202106291/images/players/achiupr01.jpg', team_id: 2},
    { name: 'Jalen Green', ppg: 17.3, image: 'https://www.basketball-reference.com/req/202106291/images/players/greenja05.jpg', team_id:3},
    { name: 'Fred Vanvleet', ppg: 20.3, image: 'https://www.basketball-reference.com/req/202106291/images/players/vanvlfr01.jpg', team_id: 2},
    { name: 'Cade Cunningham', ppg: 17.3, image: 'https://www.basketball-reference.com/req/202106291/images/players/cunnica01.jpg', team_id:3},
    { name: 'Herb Jones', ppg: 9.5, image: 'https://www.basketball-reference.com/req/202106291/images/players/joneshe01.jpg', team_id:3},
    { name: 'Michael Jordan', ppg: 30.1, image: 'https://www.basketball-reference.com/req/202106291/images/players/jordami01.jpg', team_id: 1},
    { name: 'Kawhi Leonard', ppg: 19.2, image: 'https://www.basketball-reference.com/req/202106291/images/players/leonaka01.jpg', team_id: 1},
    { name: 'Magic Johnson', ppg: 19.5, image: 'https://www.basketball-reference.com/req/202106291/images/players/johnsma02.jpg', team_id: 1}

])
