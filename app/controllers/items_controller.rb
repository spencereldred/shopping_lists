class ItemsController < ApplicationController

  def index
    items = Item.all
    respond_to do |format|
      format.html
      format.json { render :json => items }
    end
  end

  def create
    item = Item.create(params_list)
    respond_to do |format|
      format.json {render :json => item}
      format.html
    end
  end

  def update
    # TODO: add try catch block
    # try to trigger the error block in the AngularJS promise
    # need to throw an error back!
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
