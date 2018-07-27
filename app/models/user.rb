class User < ApplicationRecord
    has_many :songs, dependent: :destroy
end
