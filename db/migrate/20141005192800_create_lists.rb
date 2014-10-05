class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :list_name
      t.string :description
      t.boolean :done

      t.timestamps
    end
  end
end
