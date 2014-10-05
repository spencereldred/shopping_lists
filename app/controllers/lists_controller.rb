class ListsController < ApplicationController

  def index
    items = List.all
    respond_to do |format|
      format.html
      format.json { render :json => items }
    end
  end

  private

    def list
      params.require(:list).permit(:list_name, :description, :done)
    end

end
