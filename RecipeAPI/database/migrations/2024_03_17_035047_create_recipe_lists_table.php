<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipeListsTable extends Migration
{
    public function up()
    {
        Schema::create('recipe_lists', function (Blueprint $table) {
            $table->id('list_id');
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('restrict')->onUpdate('restrict');
            $table->string('title');
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('recipe_lists');
    }
}
