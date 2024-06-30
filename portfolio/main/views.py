from django.shortcuts import render, get_object_or_404
from .models import CodingProject, Tag

# Create your views here.
def home(request):
    return render(request, "home.html")

def codingprojects(request):
    projects = CodingProject.objects.all()
    print(projects)
    tags = Tag.objects.all()
    return render(request, "projects.html", {"projects": projects, "tags": tags})

def project(request, id):
    project = get_object_or_404(CodingProject, pk=id)
    return render(request, "project.html", {"project": project})

def custom_404(request, exception):
    return render(request, '404.html', status=404)

def custom_500(request):
    return render(request, '500.html', status=500)
