class ItemsController < ApplicationController

  def index
    items = Item.all
    respond_to do |format|
      format.html
      format.json { render :json => items }
    end
  end

  def create
    Item.create(params_list)
    redirect_to :index
  end

  def update
    item = Item.find(params[:id])
    item.update_attributes(params_list)
    respond_to do |format|
      format.json {render :json => item}
      format.html
    end
  end

  def destroy
    Item.destroy(params[:id])
    items = Item.all
    respond_to do |format|
      format.html
      format.json { render :json => items }
    end
  end

  private

    def params_list
      params.require(:item).permit(:list_name, :description, :done)
    end

end
