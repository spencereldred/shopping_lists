class ListsController < ApplicationController

  def index
    items = List.all
    respond_to do |format|
      format.html
      format.json { render :json => items }
    end
  end

  def create
    List.create(params_list)
    redirect_to :index
  end

  def update
    item = List.find(params[:id])
    item.update_attributes(params_list)
    respond_to do |format|
      format.json {render :json => item}
      format.html
    end
  end

  def destroy
    List.destroy(params[:id])
    redirect_to :index
  end

  private

    def params_list
      params.require(:list).permit(:list_name, :description, :done)
    end

end
