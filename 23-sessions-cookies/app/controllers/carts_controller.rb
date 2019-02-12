class CartsController < ApplicationController

  def update
    # byebug

    # do some logic ?? add to a cart
    flash[:message] = "You added #{params[:nacho_name]} to the cart"
    add_nacho_to_cart(params[:nacho_id])

    # show the cart
    redirect_to nachos_path
  end

end
