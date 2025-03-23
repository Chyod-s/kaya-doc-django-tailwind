import os
from django.shortcuts import render

def medicos(request, id):
    template_path = os.path.join('medicos', str(id), 'perfil.html')
    return render(request, template_path, {'id': id})
