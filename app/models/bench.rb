# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base

  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)

    Bench.where(lat: (bounds["northEast"]["lat"] - bounds["southWest"]["lat"]),
      lng: (bounds["northEast"]["lng"] - bounds["southWest"]["lng"]))
      # && this.where(lng: (bounds["northEast"]["lng"] - bounds["southWest"]["lng"]))
  end

end
