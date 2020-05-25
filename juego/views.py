

# Create your views here.
from django.shortcuts import render, redirect 
from django.http import HttpResponse
from django.views import View
from django.contrib.auth.decorators import login_required


@login_required(login_url='users:login')
def space(request):
    template = "juego/index.html"
    return render(request, template)
@login_required(login_url='users:login')
def tesoro(request):
	template = "juego/tesoro.html"
	return render(request, template)
@login_required(login_url='users:login')
def levels(request):
	template = "juego/levels.html"
	return render(request, template)

@login_required(login_url='users:login')
def rompecabezas(request):
	template = "juego/index2.html"
	return render(request, template)
@login_required(login_url='users:login')
def memorama(request):
	template = "juego/memorama.html"
	return render(request, template)

@login_required(login_url='users:login')
def tictactoe(request):
	template = "juego/gato.html"
	return render(request, template)

@login_required(login_url='users:login')
def simon(request):
	template = "juego/simondice.html"
	return render(request, template)
@login_required(login_url='users:login')
def encuentraCura(request):
	template = "juego/encuentraCura.html"
	return render(request, template)
@login_required(login_url='users:login')
def sopaLetras(request):
	template = "juego/sopaLetras.html"
	return render(request, template)
@login_required(login_url='users:login')
def inst(request):
	template = "juego/escrito.html"
	return render(request, template)

def home(request):
	template = "juego/home.html"
	return render(request, template)

def pres1(request):
	template = "juego/Mensaje1.html"
	return render(request, template)
def acept(request):
	template = "juego/aceptar.html"
	return render(request, template)

def reject(request):
	template = "juego/reject.html"
	return render(request, template)
def histMemo(request):
	template = "juego/HistoriaMemorama.html"
	return render (request, template)

def hisGato(request):
	template = "juego/insGato.html"
	return render (request, template)

def hisCasa(request):
	template = "juego/hisCasa.html"
	return render(request, template)

def casa(request):
	template = "juego/casa.html"
	return render (request, template)

def boti(request):
	template = "juego/botiquin.html"
	return render(request, template)

def hisBoti(request):
	template = "juego/hisBoti.html"
	return render(request, template)

def hisBusca(request):
	template = "juego/histBusca.html"
	return render (request, template)

def simonhist(request):
	template = "juego/historiaSimon.html"
	return render(request, template)

def hisNave(request): 
	template = "juego/hisNaves.html"
	return render(request, template)
def despedida(request):
	template = "juego/despedida.html"
	return render(request, template)

def hisSopa(request):
	template = "juego/hisWa.html"
	return render(request, template)

