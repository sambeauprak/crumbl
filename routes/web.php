<?php

use App\Http\Controllers\AdminCategoryController;
use App\Http\Controllers\AdminOrderController;
use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::resource('produits', ProductController::class);

Route::get('politique-confidentialite', function () {
    return Inertia::render('global/politique-confidentialite');
})->name('politique-confidentialite');

Route::get('mentions-legales', function () {
    return Inertia::render('global/mentions-legales');
})->name('mentions-legales');

Route::get('paiement', function () {
    return Inertia::render('paiement');
})->name('paiement');

Route::middleware(['auth', 'verified'])
    ->prefix('dashboard')
    ->name('dashboard.')
    ->group(function () {
        Route::get('/', function () {
            return Inertia::render('dashboard');
        })->name('index');

        Route::resource('produits', AdminProductController::class);
        Route::resource('utilisateurs', AdminUserController::class);
        Route::resource('categories', AdminCategoryController::class);
        Route::resource('commandes', AdminOrderController::class);
    });

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
