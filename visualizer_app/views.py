from django.shortcuts import render

def index(request):
  return render(request, "visualizer_app/index.html", {})
