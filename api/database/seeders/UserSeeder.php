<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'S A',
            'username' => 'superadmin',
            'email' => 'su@su.com',
            'user_role' => 1,
            'created_by' => 1,
            'updated_by' => 1,
            'password' => Hash::make('123'),
        ]);
    }
}
