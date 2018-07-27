require_relative './song_data.rb'
require_relative './user_data.rb'

Song.destroy_all
User.destroy_all

song_data = get_song_data
user_data = get_user_data

song_data.each_pair do |user_name, songs|
  info = user_data[user_name]
  current_user = User.create!({
    name:         info[:name],
    photo_url:    info[:photo_url],
    bio:  info[:bio]
  })

  songs.each do |song|
    Song.create!({
      title:        song[:title],
      song_url:  song[:song_link],
      user:       current_user
    })
  end
end