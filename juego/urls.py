from django.contrib import admin
from django.urls import include, path

# Views
from juego import views

app_name = "juego"
urlpatterns = [
path('space/', views.space, name = "space"),
path('tesoro/', views.tesoro, name = "tesoro"),
path('levels/', views.levels, name = "levels"),
path('rompecabezas/', views.rompecabezas, name = "rompecabezas"),
path('memorama/', views.memorama, name = "memorama"),
path('gato/', views.tictactoe, name = "gato"),
path('simon/', views.simon, name = "simon"),
path('encuentraCura/', views.encuentraCura, name = "encuentraCura"),
path('sopaDeLetras/', views.sopaLetras, name = "sopaDeLetras"),
path('gato/', views.tictactoe, name = "gato"),
path('simon/', views.simon, name = "simon"),
path('instruction/', views.inst, name = 'instruction'),
path('', views.home, name = 'index'),
path('mensaje1/', views.pres1, name = 'mensaje1'),
path('acept/', views.acept, name = 'acept'),
path('reject/', views.reject, name = 'reject'),
path('mesMemo/', views.histMemo, name = 'mesMemo'),
path('mesGato/', views.hisGato, name = 'mesGato'),
path('mesCasa/', views.hisCasa, name = 'mesCasa'),
path('casa/', views.casa, name = 'casa'),
path('boti/', views.boti, name = 'boti'),
path('hisBoti/', views.hisBoti, name = 'hisBoti'),
path('hisBusca/', views.hisBusca, name = 'hisBusca'),
path('simonhist/', views.simonhist, name = 'simonhist'),
path('hisNave/', views.hisNave, name = 'hisNave'),
path('win/', views.despedida, name = "win"),
path('hisSopa/', views.hisSopa, name = "hisSopa")
]

