<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(TagSeeder::class);
        $this->call(VenueSeeder::class);
        $this->call(BlogPostSeeder::class);
        $this->call(BandSeeder::class);
        $this->call(ConcertSeeder::class);
        $this->call(UserSeeder::class);

    
    }
}
