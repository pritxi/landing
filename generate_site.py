import os
import shutil
from jinja2 import Environment, FileSystemLoader

# Configuración de Jinja2
env = Environment(loader=FileSystemLoader('templates'))

# URL base para archivos estáticos
static_url = 'static/'

# Lista de páginas a generar
pages = [
    {'template': 'index.html', 'output': 'index.html', 'title': 'Inicio'},
    {'template': 'contactanos.html', 'output': 'contactanos.html', 'title': 'Contáctanos'},
    {'template': 'nosotros.html', 'output': 'nosotros.html', 'title': 'Nosotros'},
    {'template': 'servicios.html', 'output': 'servicios.html', 'title': 'Servicios'},
]

# Copia los archivos estáticos al directorio de salida
if os.path.exists('output/static'):
    shutil.rmtree('output/static')
shutil.copytree('static', 'output/static')

# Genera cada página
for page in pages:
    template = env.get_template(page['template'])
    output_from_parsed_template = template.render(title=page['title'], static_url=static_url)

    # Guarda el resultado en el archivo de salida
    output_path = os.path.join('output', page['output'])
    with open(output_path, 'w', encoding='utf-8') as fh:
        fh.write(output_from_parsed_template)
