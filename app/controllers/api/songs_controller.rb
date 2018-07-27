class Api::SongsController < ApplicationController
    def index
      @songs = User.find(params[:user_id]).songs
      render json: @songs
    end
  
    def show
      @song = Song.find(params[:id])
      render json: @song
    end
  
    def create
      @user = User.find(params[:user_id])
      @song = @user.songs.create(song_params)
      render json: @song
    end
  
    def update
      @song = Song.find(params[:id])
      @song.update(song_params)
      render json: @song
    end
  
    def destroy
      @song = Song.find(params[:id]).destroy
      render status: :ok
    end
  
    private
  
    def song_params
      params.require(:song).permit(:title, :song_url)
    end
  end