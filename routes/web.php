<?php

use App\Http\Controllers\AdminCategoryController;
use App\Http\Controllers\AdminOrderController;
use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::resource('products', ProductController::class);

Route::get('privacy-policy', function () {
    return Inertia::render('global/privacy-policy');
})->name('privacy-policy');

Route::get('terms', function () {
    return Inertia::render('global/terms');
})->name('terms');

Route::get('checkout', function () {
    return Inertia::render('checkout');
})->name('checkout');

Route::middleware(['auth', 'verified'])
    ->prefix('dashboard')
    ->name('dashboard.')
    ->group(function () {
        Route::get('/', function () {
            return Inertia::render('dashboard');
        })->name('dashboard');

        Route::resource('products', AdminProductController::class);
        Route::resource('users', AdminUserController::class);
        Route::resource('categories', AdminCategoryController::class);
        Route::resource('orders', AdminOrderController::class);
    });

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
