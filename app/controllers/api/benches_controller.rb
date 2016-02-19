class Api::BenchesController < ApplicationController
  def index
    @bench = Bench.all

  end

  def create
    @bench = Bench.find(params[:id])

    if @bench.save
      render :index
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
