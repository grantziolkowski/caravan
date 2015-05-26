class Address < ActiveRecord::Base
  belongs_to :user
  validates :state, length: { maximum: 2 }
  validates :user_id, :city, :state, :zip_code, presence: true
  geocoded_by  :full_address
  after_validation :geocode

  def full_address
    "#{street_address}, #{city_state}, #{zip_code}"
  end

  def city_state
    "#{city}, #{state}"
  end

  def self.new_from_params(params)
    Address.new(street_address: params[:street_address],
                secondary_address: params[:secondary_address],
                description: params[:description],
                city: params[:city],
                state: params[:state],
                zip_code: params[:zip_code],
                address_string: params[:address_string],
                latitude: params[:latitude],
                longitude: params[:longitude])
  end
end
