class ParcelsController < ApplicationController
  before_action :authenticate_user!, except: [:show, :index]

  def index
    @trip = Trip.find(params[:trip_id])
    @parcels = @trip.parcels
    if request.xhr?
      render 'index', layout: false
    else
      render 'index'
    end
  end

  def new
    if params[:origin_address] && params[:destination_address] && params[:parcel]
      origin = params[:origin_address]
      @origin_address = Address.new_from_params(params[:origin_address])
      @destination_address = Address.new_from_params(params[:destination_address])
      @parcel = Parcel.new_from_params(params[:parcel])
    end

    @url = parcels_path
    @submit_btn = "Create Parcel"
    @address = Address.new
    @trip_id = params[:trip_id]
  end

  def show
    @parcel = Parcel.find(params[:id])
    bounce_guest(@parcel)
    if request.xhr?
      render 'show', layout: false
    else
      render 'show'
    end
  end

  def create
    parcel = Parcel.build(origin_address_params, destination_address_params, parcel_params)
    if parcel && parcel.persisted?
      if !parcel.trip_id.nil?
        parcel.notify_sender
        parcel.trip.notify_driver(parcel)
      end
      flash[:notice] = "Parcel Booked for Shipping"
      redirect_to profile_path
    else
      flash[:error] = parcel.errors.full_messages.join(", ")
      render :new
    end
  end

  def edit
    @parcel = Parcel.find(params[:id])
    @origin_address = @parcel.origin_address
    @destination_address = @parcel.destination_address
    @url = parcel_path(@parcel)
    @submit_btn = "Update Parcel"
  end

  def update
    @parcel = Parcel.find(params[:id])
    @origin_address = @parcel.origin_address
    @destination_address = @parcel.destination_address
    if @parcel.update(parcel_params) && @origin_address.update(origin_address_params) && @destination_address.update(destination_address_params)
      @parcel.trip.update_attributes(completed: true) if @parcel.delivered
      redirect_to profile_path
    else
      render :edit
    end
  end

  def destroy
    parcel = Parcel.find(params[:id])
    parcel.destroy
    redirect_to profile_path
  end

  private

  def origin_address_params
    params.require(:origin_address).permit(:user_id, :description, :street_address, :secondary_address, :city, :state, :zip_code, :address_string, :latitude).merge(user_id: current_user.id)
  end

  def destination_address_params
    params.require(:destination_address).permit(:user_id, :description, :street_address, :secondary_address, :city, :state, :zip_code, :address_string, :longitude).merge(user_id: current_user.id)
  end

  def parcel_params
    params.require(:parcel).permit(:origin_address_id, :destination_address_id, :sender_id, :trip_id, :pickup_by, :deliver_by, :weight, :volume, :delivery_notes, :description, :delivered, :avatar)
  end

end
